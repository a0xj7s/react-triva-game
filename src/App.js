import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./bootstrap.min.css";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Results from "./pages/Results";
import "./App.css";

function App() {
	return (
		<HashRouter>
			<div id="app-outer" className="text-center">

				<Switch>
						<Route path="/quiz" component={Quiz} exact />
						<Route path="/results" component={Results} exact />
						<Route path="/" component={Home} />
				</Switch>
		
			</div>
		</HashRouter>
	);
}

export default App;
