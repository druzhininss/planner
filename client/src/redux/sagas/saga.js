import { call, put, takeEvery } from 'redux-saga/effects';

const fetchData = async ({
  url, method, headers, body,
}) => {
  const response = await fetch(url, { method, headers, body, credentials: 'include' });
  const data = await response.json();
  return data;
};

function* createNewUser (action) {
  try {
    const newUser = yield call(fetchData, {
      url: "http://localhost:5000/registration",
      method: "POST",
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(action.payload),
    });
    
    if (newUser.login) {
      yield put ({ type: "NEW_USER", payload: newUser })
    }

    if (!newUser.login) {
      yield put ({ type: "REGISTRATION_FAILED", payload: newUser.message })
    }

  } catch (err) {
    yield put({ type: "REGISTRATION_ERROR", payload: err.message })
  }
}

function* logout(action) {
  try {
    const logoutFetch = yield call(fetchData, {
      url: 'http://localhost:5000/logout',
    });
    yield put({ type: "LOGOUT_SUCCESS", payload: logoutFetch })
  } catch (e) {
    yield put({ type: "LOGOUT_FAILED", payload: "Logout failed" })
  }
}

export function* myWatcher() {
  yield takeEvery("CREATE_USER", createNewUser);
  yield takeEvery("LOGOUT_USER", logout);
}
