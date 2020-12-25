import GroceryListView from "./GroceryListView.jsx";
import { connect } from "react-redux";
import mapStateToProps from "../../store/mapStateToProps";

const GroceryListViewWrap = connect(
  mapStateToProps("GROCERY_LIST_VIEW"),
  null
)(GroceryListView);

export default GroceryListViewWrap;
