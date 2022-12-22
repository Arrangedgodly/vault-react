const baseUrl = 'http://localhost:3001';

function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error ${res.status}`);
}

export const getStoreCount = (store) => {
  return fetch(`${baseUrl}/:store`, {
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      store: store
    },
  })
    .then(checkResponse);
}