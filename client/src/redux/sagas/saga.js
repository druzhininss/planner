import { call, put, takeEvery } from 'redux-saga/effects';

const fetchData = async ({
  url, method, headers, body,
}) => {
  const response = await fetch(url, { method, headers, body, credentials: 'include' });
  const data = await response.json();
  return data;
};

function* createNewUser(action) {
  try {
    const newUser = yield call(fetchData, {
      url: "http://localhost:5000/registration",
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(action.payload),
    });
    
    if (newUser.login) {
      yield put ({ type: "NEW_USER", payload: newUser });
    };

    if (!newUser.login) {
      yield put ({ type: "REGISTRATION_FAILED", payload: newUser });
    };

  } catch (err) {
    yield put({ type: "REGISTRATION_ERROR", payload: err.message });
  };
};

function* logout() {
  try {
    const logoutFetch = yield call(fetchData, {
      url: 'http://localhost:5000/logout',
    });
    yield put({ type: "LOGOUT_SUCCESS", payload: logoutFetch });
  } catch (e) {
    yield put({ type: "LOGOUT_FAILED", payload: "Logout failed" });
  };
};

function* login(action) {
  try {
    const loginFetch = yield call(fetchData, {
      url: "http://localhost:5000/login",
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: action.payload.email,
        password: action.payload.password,
      }),
    });

    if (loginFetch.login) {
      yield put({ type: "LOGIN_SUCCESS", payload: loginFetch })
    };

    if (loginFetch.message) {
      yield put({ type: "LOGIN_FAILED", payload: loginFetch })
    };

  } catch (e) {
    yield put({ type: "LOGIN_FAILED", payload: "Login failed" });
  };
};

function* getUserPlans(action) {
  try {
    const plansFetch = yield call(fetchData, {
      url: `http://localhost:5000/plans/${action.payload}`,
    });

    if (plansFetch.plans) {
      yield put({ type: "PLANS_UPLOADED", payload: plansFetch });
    }
  } catch (e) {
    yield put({ type: "PLANS_FAILED", payload: "Can't get user's plans" });
  };
};

function* checkAuth(action) {
  try {
    const checkAuthFetch = yield call(fetchData, {
      url: 'http://localhost:5000/api/checkauth'
    });
    yield put({ type: "CHECK_AUTH_RESULT", payload: checkAuthFetch });
  } catch (e) {
    yield put({ type: "CHECK_AUTH_ERR", payload: "Can not check auth" });
  };
};

export function* myWatcher() {
  yield takeEvery("CREATE_USER", createNewUser);
  yield takeEvery("LOGOUT", logout);
  yield takeEvery("LOGIN", login);
  yield takeEvery("GET_USER_PLANS", getUserPlans);
  yield takeEvery("CHECK_AUTH", checkAuth);
};
