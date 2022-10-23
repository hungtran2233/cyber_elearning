import "../App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "common/components/Header";
import Footer from "common/components/Footer";
import { useDispatch } from "react-redux";
import { lazy, Suspense, useEffect } from "react";
import { fetchProfileAction } from "features/authentication/authAction";
import ScrollToTop from "common/utils/scrollToTop";

const Home = lazy(() => import("features/elearning/pages/home"));
const Detail = lazy(() => import("features/elearning/pages/detail"));
const SignIn = lazy(() => import("features/authentication/SignIn"));
const SignUp = lazy(() => import("features/authentication/SignUp"));
const Cart = lazy(() => import("features/elearning/components/Cart"));
const Profile = lazy(() => import("features/authentication/Profile"));
const Payment = lazy(() => import("features/elearning/pages/payment"));

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
				<Suspense fallback={<div>Đang tải...</div>}>
					<Switch>
						<Route path="/" component={Home} exact />
						<Route path="/details/:id/:slug" component={Detail} exact />
						<Route path="/cart" component={Cart} exact />
						<Route path="/signin" component={SignIn} />
						<Route path="/signup" component={SignUp} />
						<Route path="/payment/:id" component={Payment} exact />
						<Route path="/profile" component={Profile} />
					</Switch>
				</Suspense>

				<Footer />
			</Router>
		</div>
	);
}

export default App;
