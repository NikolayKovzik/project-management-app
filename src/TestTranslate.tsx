import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

function TestTranslate(): ReactElement {
  const { t } = useTranslation();
  function changeLang(lang: string): void {
    i18n.changeLanguage(lang);
  }
  return (
    <>
      <h1>Translate Page</h1>
      <h2>{t('welcome')}</h2>
      <h3>{t('obj.name')}</h3>
      <button
        type="button"
        style={{ margin: '10px' }}
        className="m-1"
        onClick={(): void => changeLang('ru')}
      >
        _ru_
      </button>
      <button type="button" style={{ margin: '10px' }} onClick={(): void => changeLang('en')}>
        _en_
      </button>
    </>
  );
}

export default TestTranslate;
