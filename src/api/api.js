const APP_ID = 'Uoe86KSh3N3v3tgAocCz';
const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

/* eslint-disable-next-line import/prefer-default-export */
export const fetchAllBooks = async () => {
  const url = `${BASE_URL}/apps/${APP_ID}/books`;
  const resp = await fetch(url, {
    headers: {},
  });
  const data = JSON.parse(await resp.text() || '[]');
  return data;
};

export const createBook = async ({ itemId, title, category }) => {
  const url = `${BASE_URL}/apps/${APP_ID}/books`;
  const body = JSON.stringify({
    item_id: itemId,
    title,
    category,
  });
  const resp = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  });
  return resp.text();
};

export const deleteBook = async (itemId) => {
  const url = `${BASE_URL}/apps/${APP_ID}/books/${itemId}`;
  const body = JSON.stringify({
    item_id: itemId,
  });
  const resp = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  });
  return resp.text();
};
