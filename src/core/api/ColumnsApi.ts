import { AxiosResponse } from 'axios';

import ManagerAppApi from '../rest/RestService';

import { Column, ColumnBody, ColumnPatchBody, ColumnPostBody } from './models';

class ColumnsApi {
  static async getColumn(boardId: string, columnId: string): Promise<AxiosResponse<Column>> {
    // TODO handle 403 & 404
    const res = await ManagerAppApi.get<Column>(`/boards/${boardId}/columns/${columnId}`);
    return res;
  }

  static async getAllColumnsByBoardId(boardId: string): Promise<AxiosResponse<Column[]>> {
    const res = await ManagerAppApi.get<Column[]>(`/boards/${boardId}/columns`);
    return res;
  }

  static async getColumnsByIdsListAndUserId(
    columnIds: string[],
    userId: string
  ): Promise<AxiosResponse<Column[]>> {
    const res = await ManagerAppApi.get<Column[]>(
      `/columnsSet?ids=${columnIds.join(',')}&userId=${userId}`
    );
    return res;
  }

  static async getColumnsByIdsList(columnIds: string[]): Promise<AxiosResponse<Column[]>> {
    const res = await ManagerAppApi.get<Column[]>(`/columnsSet?ids=${columnIds.join(',')}`);
    return res;
  }

  static async getColumnsByUserId(userId: string): Promise<AxiosResponse<Column[]>> {
    const res = await ManagerAppApi.get<Column[]>(`/columnsSet?userId=${userId}`);
    return res;
  }

  static async createColumn(
    boardId: string,
    newColumn: ColumnBody
  ): Promise<AxiosResponse<Column>> {
    // TODO handle 400 bad request
    const res = await ManagerAppApi.post<Column>(`/boards/${boardId}/columns`, newColumn);
    return res;
  }

  static async createSetOfColumns(newColumns: ColumnPostBody[]): Promise<AxiosResponse<Column[]>> {
    const res = await ManagerAppApi.post<Column[]>(`/columnsSet`, newColumns);
    return res;
  }

  static async updateColumn(
    boardId: string,
    columnId: string,
    newColumn: ColumnBody
  ): Promise<AxiosResponse<Column>> {
    // TODO handle 400 bad request
    const res = await ManagerAppApi.put<Column>(
      `/boards/${boardId}/columns/${columnId}`,
      newColumn
    );
    return res;
  }

  static async updateSetOfColumns(newColumns: ColumnPatchBody[]): Promise<AxiosResponse<Column[]>> {
    const res = await ManagerAppApi.patch<Column[]>(`/columnsSet`, newColumns);
    return res;
  }

  static async deleteColumn(boardId: string, columnId: string): Promise<AxiosResponse<Column>> {
    const res = await ManagerAppApi.delete<Column>(`/boards/${boardId}/columns/${columnId}`);
    return res;
  }
}

export default ColumnsApi;
