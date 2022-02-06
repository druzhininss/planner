import { call, put, takeEvery } from 'redux-saga/effects';

const fetchData = async ({ url, method, headers, body }) => {
  const response = await fetch(url, { method, headers, body });
  const data = await response.json();
  return data;
}

function* getDogImg() {
  const dog = yield call(fetchData, { url: 'https://random.dog/woof.json' });
  yield put({type: 'INIT_DOG_IMG', payload: dog});
}

function* getCatImg() {
  const cat = yield call(fetchData, { url: 'https://api.thecatapi.com/v1/images/search?size=full' });
  yield put({type: 'INIT_CAT_IMG', payload: cat});
}

export function* myWatcher() {
  yield takeEvery('GET_DOG_IMG', getDogImg);
  yield takeEvery('GET_CAT_IMG', getCatImg);
}
