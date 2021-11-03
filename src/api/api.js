const APP_ID = 'Uoe86KSh3N3v3tgAocCz';
const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

/* eslint-disable-next-line import/prefer-default-export */
export const getAllBooks = async () => {
  const url = `${BASE_URL}/apps/${APP_ID}/books`;
  const resp = await fetch(url, {
    headers: {},
  });
  const data = JSON.parse(await resp.text() || '[]');
  return data;
};
