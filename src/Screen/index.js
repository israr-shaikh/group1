import React, { Component } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./header"
import ProductList from "./productList"
import ProductDetails from "./productDetail"

class home extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Header />
        <Router>
          <Switch>
            <Route component={ProductList} exact path="/" />
            <Route
              component={ProductDetails}
              exact
              path="/productDetail/:productId"
            />
            <Route component={ProductList} exact path="/productDetail/" />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default home
