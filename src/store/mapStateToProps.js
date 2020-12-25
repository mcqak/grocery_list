function mapStateToProps(component) {
  switch (component) {
    case "GROCERY_LIST_VIEW":
      return function (state) {
        return {
          data: state.dataReducer,
          loading: state.loadingReducer,
          error: state.errorReducer
        };
      };
      case "GROCERY_PRODUCT":
      return function (state) {
        return {
          taskDetail: state.taskDetailReducer
        };
      };
    default:
      return undefined;
  }
}

export default mapStateToProps;
