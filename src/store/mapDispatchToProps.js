import { bindActionCreators } from "redux";
import addNewAction from "./actionCreators/addNewAction";
import changeActiveStatusAction from "./actionCreators/changeActiveStatusAction";
import removeAction from "./actionCreators/removeAction";
import sortByAlphabetAction from "./actionCreators/sortByAlphabetAction";
import sortByStatusAction from "./actionCreators/sortByStatusAction";
import sortByDateAction from "./actionCreators/sortByDateAction";
import taskDetailLoadAction from "./actionCreators/taskDetailLoadAction";

function mapDispatchToProps(component) {
  switch (component) {
    case "GROCERY_ADD":
      return function (dispatch) {
        return {
          addNew: bindActionCreators(addNewAction, dispatch),
        };
      };
    case "GROCERY_PRODUCT":
      return function (dispatch) {
        return {
          changeActiveStatus: bindActionCreators(
            changeActiveStatusAction,
            dispatch
          ),
          removeSelf: bindActionCreators(removeAction, dispatch),
          openTaskDetail: bindActionCreators(taskDetailLoadAction, dispatch),
        };
      };
    case "GROCERY_FILTER":
      return function (dispatch) {
        return {
          sortByAlphabet: bindActionCreators(sortByAlphabetAction, dispatch),
          sortByStatus: bindActionCreators(sortByStatusAction, dispatch),
          sortByDate: bindActionCreators(sortByDateAction, dispatch),
        };
      };
    default:
      return undefined;
  }
}

export default mapDispatchToProps;
