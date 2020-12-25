import GroceryProduct from "./GroceryProduct.jsx";
import { connect } from "react-redux";
import mapStateToProps from '../../../../../store/mapStateToProps'
import mapDispatchToProps from "../../../../../store/mapDispatchToProps";

const GroceryProductWrap = connect(
  mapStateToProps("GROCERY_PRODUCT"),
  mapDispatchToProps("GROCERY_PRODUCT")
)(GroceryProduct);

export default GroceryProductWrap;
