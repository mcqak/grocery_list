import {
  watchGroceryListViewAdd,
  watchGroceryListViewChangeActiveStatus,
  watchGroceryListViewRemove,
  watchGroceryListViewSortByAlphabet,
  watchGroceryListViewSortByStatus,
  watchGroceryListViewSortByDate,
  watchGroceryListViewTaskDetail
} from "./groceryListViewSaga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([
    watchGroceryListViewAdd(),
    watchGroceryListViewChangeActiveStatus(),
    watchGroceryListViewRemove(),
    watchGroceryListViewSortByAlphabet(),
    watchGroceryListViewSortByStatus(),
    watchGroceryListViewSortByDate(),
    watchGroceryListViewTaskDetail()
  ]);
}
