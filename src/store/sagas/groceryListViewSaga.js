import { put, takeEvery, takeLatest } from "redux-saga/effects";
import initialState from "../initialState";
import loadingAction from "../actionCreators/loadingAction";
import errorAction from "../actionCreators/errorAction";
import dataAction from "../actionCreators/dataAction";
import taskDetailAction from '../actionCreators/taskDetailAction'

export function* workerGroceryListViewAdd(action) {
  const date = new Date();
  yield put(loadingAction(false));
  yield put(errorAction(false));
  try {
    yield initialState.data.push({
      status: action.status,
      text: action.text,
      time: date.getSeconds(),
      id: initialState.data.length,
      history: [date.getSeconds()],
    });
  } catch {
    yield put(errorAction(true));
  }
  yield put(loadingAction(true));
}

export function* watchGroceryListViewAdd() {
  yield takeEvery("ADD_NEW", workerGroceryListViewAdd);
}

export function* workerGroceryListViewChangeActiveStatus(action) {
  yield put(loadingAction(false));
  yield put(errorAction(false));
  const date = new Date();
  yield (initialState.data[action.id].status = false);
  yield initialState.data[action.id].history.push(date.getSeconds());
  yield put(loadingAction(true));
}

export function* watchGroceryListViewChangeActiveStatus() {
  yield takeLatest(
    "CHANGE_ACTIVE_STATUS",
    workerGroceryListViewChangeActiveStatus
  );
}

export function* workerGroceryListViewRemove(action) {
  yield put(loadingAction(false));
  yield put(errorAction(false));
  const task = initialState.data.findIndex((item) => item.id === action.id);
  yield dataAction(initialState.data.splice(task, 1));
  yield put(loadingAction(true));
}

export function* watchGroceryListViewRemove() {
  yield takeEvery("REMOVE", workerGroceryListViewRemove);
}

export function* workerGroceryListViewSortByAlphabet() {
  yield put(loadingAction(false));
  yield put(errorAction(false));
  const newData = initialState.data.sort((a, b) => {
    if (a.text < b.text) return -1;
    if (a.text > b.text) return 1;
    return 0;
  });
  yield put(dataAction(newData));
  yield put(loadingAction(true));
}

export function* watchGroceryListViewSortByAlphabet() {
  yield takeLatest("SORT_BY_ALPHABET", workerGroceryListViewSortByAlphabet);
}

export function* workerGroceryListViewSortByStatus() {
  yield put(loadingAction(false));
  yield put(errorAction(false));
  const newData = initialState.data.sort((a, b) => {
    if (a.status > b.status) return -1;
    if (a.status < b.status) return 1;
    return 0;
  });
  yield put(dataAction(newData));
  yield put(loadingAction(true));
}

export function* watchGroceryListViewSortByStatus() {
  yield takeLatest("SORT_BY_STATUS", workerGroceryListViewSortByStatus);
}

export function* workerGroceryListViewSortByDate() {
  yield put(loadingAction(false));
  yield put(errorAction(false));
  const newData = initialState.data.sort((a, b) => {
    if (a.time < b.time) return -1;
    if (a.time > b.time) return 1;
    return 0;
  });
  yield put(dataAction(newData));
  yield put(loadingAction(true));
}

export function* watchGroceryListViewSortByDate() {
  yield takeLatest("SORT_BY_DATE", workerGroceryListViewSortByDate);
}

export function* workerGroceryListViewTaskDetail(action) {
  yield put(loadingAction(false));
  yield put(errorAction(false));
  yield put(taskDetailAction(initialState.data[action.id]))
  yield put(loadingAction(true));
}

export function* watchGroceryListViewTaskDetail() {
  yield takeLatest("TASK_DETAIL_LOAD", workerGroceryListViewTaskDetail);
}

