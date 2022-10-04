import "../App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "common/components/Header";
import Home from "features/elearning/pages/home";
import Detail from "features/elearning/pages/detail";

function App() {
	return (
		<div>
			<Router>
				<Header />
				<Switch>
					<Route path="/" component={Home} exact />
					<Route path="/detail/:id/:slug" component={Detail} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
