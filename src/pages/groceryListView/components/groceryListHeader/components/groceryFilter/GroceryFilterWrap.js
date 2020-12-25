import GroceryFilter from "./GroceryFilter.jsx";
import { connect } from "react-redux";
import mapDispatchToProps from "../../../../../../store/mapDispatchToProps";

const GroceryFilterWrap = connect(
  null,
  mapDispatchToProps("GROCERY_FILTER")
)(GroceryFilter);

export default GroceryFilterWrap;
