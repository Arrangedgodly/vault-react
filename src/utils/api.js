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

export const postStoreCount = (store, count) => {
  return fetch(`${baseUrl}/`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      store: store,
      count: count
    })
  })
    .then(checkResponse);
}

export const deleteCount = (id) => {
  return fetch(`${baseUrl}/:id`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'Access-Control-Allow-Origin': true
    },
    body: JSON.stringify({
      _id: id
    })
  })
    .then(checkResponse);
}