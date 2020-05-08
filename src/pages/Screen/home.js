import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route ,NavLink} from "react-router-dom";
import Header from "./header";
import ProductList from "./productList";
import ProductDetails from "./productDetail";


 class home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
    <div>
         <nav>
          <ul>
            <li>
              <NavLink activeStyle={{ color: "white" }} to="/productList">
                ProductList
              </NavLink>
            </li>
            <li>
              <NavLink activeStyle={{ color: "red" }} to="/productDetail">
                ProductDetail
              </NavLink>
            </li>
        </ul>
        </nav>

        <Router>
          <Switch>
            <Route component={ProductList} exact path="/productList" />
            <Route component={ProductDetails} exact path="/productDetail" />
            </Switch>
        </Router>
                
            </div>
        )
    }
}

export default home;