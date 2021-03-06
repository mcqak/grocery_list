import React from "react";
import "regenerator-runtime/runtime";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Error404 from "./basic/components/Error404.jsx";
import "normalize.css";
import "./basic/css/fonts_and_colors.css";
import GroceryListViewWrap from './pages/groceryListView/GroceryListViewWrap'

function App() {
  return (
    <div className="App">
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={GroceryListViewWrap} />
              <Route component={Error404} />
            </Switch>
          </BrowserRouter>
        </Provider>
    </div>
  );
}

export default App;
