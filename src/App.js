import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./telas/Home";
import Sidebar from "./componentes/Sidebar";

export default function App() {
	return (
		<Router>
			<div>
				<Sidebar />
				<Switch>
					{/* <Route path="/about">
						<About />
					</Route>
					<Route path="/users">
						<Users />
					</Route> */}
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}
