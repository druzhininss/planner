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
      yield put({ type: "NEW_USER", payload: newUser });
    };

    if (!newUser.login) {
      yield put({ type: "REGISTRATION_FAILED", payload: newUser });
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

function* sendUserPlans(action) {
  try {
    const newPlanFetch = yield call(fetchData, {
      url: `http://localhost:5000/plans/sendPlan`,
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: action.payload.userId,
        title: action.payload.title,
        description: action.payload.description,
        date: action.payload.date,
      }),
    });

    if (newPlanFetch.message) {
      yield put({ type: "PLANS_SEND_ERROR", payload: newPlanFetch.message });
    } else {
      yield put({ type: "PLANS_SEND", payload: newPlanFetch });
    }
  } catch (e) { 
    yield put({ type: "SEND_PLANS_FAILED", payload: "Plans are not send" });
  };
}


function* updateUserPlans(action) {
  try {
    const updatePlanFetch = yield call(fetchData, {
      url: `http://localhost:5000/plans/updatePlan`,
      method: "PUT",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        planId: action.payload.planId,
        title: action.payload.title,
        description: action.payload.description,
        date: action.payload.date,
      }),
    });

    if (updatePlanFetch.message) {
      yield put({ type: "PLANS_UPDATE_ERROR", payload: updatePlanFetch.message });
    } else {
      yield put({ type: "PLANS_UPDATED", payload: action.payload });
    }
  } catch (e) { 
    yield put({ type: "UPDATE_PLANS_FAILED", payload: "Plans are not updated" });
  };
}

function* deleteUserPlan(action) {
  try {
    const deletePlanFetch = yield call(fetchData, {
      url: `http://localhost:5000/plans/deletePlan`,
      method: "DELETE",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        planId: action.payload,
      }),
    });

    if (deletePlanFetch.message) {
      yield put({ type: "PLAN_DELETE_ERROR", payload: deletePlanFetch.message });
    } else {
      yield put({ type: "PLAN_DELETED", payload: deletePlanFetch });
    }
  } catch (e) { 
    yield put({ type: "DELETE_PLAN_FAILED", payload: "Plan is not deleted" });
  };
}

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
  yield takeEvery("SEND_USER_PLANS", sendUserPlans);
  yield takeEvery("GET_USER_PLANS", getUserPlans);
  yield takeEvery("CHECK_AUTH", checkAuth);
  yield takeEvery("UPDATE_USER_PLANS", updateUserPlans);
  yield takeEvery("DELETE_USER_PLAN", deleteUserPlan);
};
