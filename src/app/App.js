import "../App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "common/components/Header";
import Home from "features/elearning/pages/home";
import Detail from "features/elearning/pages/details";


function App() {
	return (
		<div>
			<Router>
				<Header />
				<Switch>
					<Route path="/" component={Home} exact />
					<Route path="/details" component={Detail} exact />
					{/* <Route path='/detail' component={Detail} />
         <Route path='/booking' component={Booking} />
         <Route path='/payment' component={Payment} /> */}
				</Switch>
			</Router>
		</div>
	);
}

export default App;
