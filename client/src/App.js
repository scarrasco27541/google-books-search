import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import GoogleBookList from "./components/GoogleBookList";


function App() {
    return (
		<Router>
		  <div>
			<Switch>
			  <Route exact path="/googlebooks/search/:query" component={GoogleBookList} />
			  <Route exact path="*" component={Home} />
			</Switch>
		  </div>
		</Router>
    );
}

export default App;
