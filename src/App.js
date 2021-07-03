import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./bootstrap.min.css";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Results from "./pages/Results";
import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<div id="app-outer" className="text-center">

				<Switch>
						<Route path="/quiz" component={Quiz} exact />
						<Route path="/results" component={Results} exact />
						<Route path="/" component={Home} />
				</Switch>
		
			</div>
		</BrowserRouter>
	);
}

export default App;
