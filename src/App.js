import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./telas/Home";
import Perfil from "./telas/Perfil";
import Sidebar from "./componentes/Sidebar";

export default function App() {
	return (
		<Router>
			<div>
				<Sidebar />
				<div style={{ paddingLeft: 250 }}>
					<Switch>
						<Route path="/perfil">
							<Perfil />
						</Route>
						<Route path="/">
							<Home />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}
