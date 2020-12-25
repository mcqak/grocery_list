import GroceryAdd from "./GroceryAdd.jsx";
import { connect } from "react-redux";
import mapDispatchToProps from "../../../../../../store/mapDispatchToProps";

const GroceryAddWrap = connect(
  null,
  mapDispatchToProps("GROCERY_ADD")
)(GroceryAdd);

export default GroceryAddWrap;
