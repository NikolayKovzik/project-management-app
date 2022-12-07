import { AxiosResponse } from 'axios';

import ManagerAppApi from '../rest/RestService';

import { Task, TaskCreateBody, TaskUpdateBody, TaskUpdateSetBody } from './models';

class TasksApi {
  static async getTasksInColumn(boardId: string, columnId: string): Promise<AxiosResponse<Task[]>> {
    const res = await ManagerAppApi.get<Task[]>(`/boards/${boardId}/columns/${columnId}/tasks`);
    return res;
  }

  static async getTaskById(
    boardId: string,
    columnId: string,
    taskId: string
  ): Promise<AxiosResponse<Task>> {
    const res = await ManagerAppApi.get<Task>(
      `/boards/${boardId}/columns/${columnId}/tasks/${taskId}`
    );
    return res;
  }

  static async getTasksByIdsList(idsList: string[]): Promise<AxiosResponse<Task[]>> {
    const res = await ManagerAppApi.get<Task[]>(`/tasksSet?ids=${idsList.join(',')}`);
    return res;
  }

  static async getTasksByBoardId(boardId: string): Promise<AxiosResponse<Task[]>> {
    const res = await ManagerAppApi.get<Task[]>(`/tasksSet/${boardId}`);
    return res;
  }

  static async getTasksByUserId(userId: string): Promise<AxiosResponse<Task[]>> {
    const res = await ManagerAppApi.get<Task[]>(`/tasksSet?userId=${userId}`);
    return res;
  }

  // static async getTasksBySearchRequest(searchRequest: string): Promise<AxiosResponse<Task[]>> {
  //   // TODO why it doesn't work
  //   const res = await ManagerAppApi.get<Task[]>(`/tasksSet?search=${searchRequest}`);
  //   return res;
  // }

  // static async getTasksByIdsListOrByUserIdOrBySearchRequest(
  //   // TODO why it doesn't work
  //   idsList?: string[],
  //   userId?: string,
  //   searchRequest?: string
  // ): Promise<AxiosResponse<Task[]>> {
  //   const res = await ManagerAppApi.get<Task[]>(
  //     `/tasksSet?ids=${idsList?.join(',')}&userId=${userId}&search=${searchRequest}`
  //     // `/tasksSet?ids=${idsList?.join(',')}&userId=${userId}`
  //   );
  //   return res;
  // }

  static async createTask(
    boardId: string,
    columnId: string,
    newTask: TaskCreateBody
  ): Promise<AxiosResponse<Task>> {
    const res = await ManagerAppApi.post<Task>(
      `/boards/${boardId}/columns/${columnId}/tasks`,
      newTask
    );
    return res;
  }

  static async updateTask(
    boardId: string,
    columnId: string,
    taskId: string,
    newTask: TaskUpdateBody
  ): Promise<AxiosResponse<Task>> {
    const res = await ManagerAppApi.put<Task>(
      `/boards/${boardId}/columns/${columnId}/tasks/${taskId}`,
      newTask
    );
    return res;
  }

  static async updateSetOfTasks(newTasks: TaskUpdateSetBody[]): Promise<AxiosResponse<Task[]>> {
    const res = await ManagerAppApi.patch<Task[]>(`/tasksSet`, newTasks);
    return res;
  }

  static async deleteTask(
    boardId: string,
    columnId: string,
    taskId: string
  ): Promise<AxiosResponse<Task>> {
    const res = await ManagerAppApi.delete<Task>(
      `/boards/${boardId}/columns/${columnId}/tasks/${taskId}`
    );
    return res;
  }
}

export default TasksApi;
