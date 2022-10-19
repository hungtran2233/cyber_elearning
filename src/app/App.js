import "../App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "common/components/Header";
import Home from "features/elearning/pages/home";
//  import Detail from "features/elearning/pages/details";
import Detail from "features/elearning/pages/detail";
import SignIn from "features/authentication/SignIn";
import SignUp from "features/authentication/SignUp";
import Footer from "common/components/Footer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProfileAction } from "features/authentication/authAction";
import ScrollToTop from "common/utils/scrollToTop";
import Cart from "features/elearning/components/Cart";

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchProfileAction());
	}, []);

	return (
		<div>
			<Router>
				<ScrollToTop />
				<Header />
				<Switch>
					<Route path="/" component={Home} exact />
					<Route path="/details/:id/:slug" component={Detail} exact />
					<Route path="/cart" component={Cart} exact />
					<Route path="/signin" component={SignIn} />
					<Route path="/signup" component={SignUp} />
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
