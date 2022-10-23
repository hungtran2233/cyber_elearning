import { Route, Redirect } from "react-router-dom";

const checkAuth = () => {
	const token = localStorage.getItem("token");
	if (!token) {
		return true;
	}
	return false;
};

export const AuthRoute = (props) => {
	//component guard
	const { path, component, redirectPath } = props;
	if (checkAuth()) {
		return <Route path={path} component={component} />;
	}
	return <Redirect to={redirectPath} />;
};

const checkLogin = () => {
	const token = localStorage.getItem("token");
	if (token) {
		return true;
	}
	return false;
};

export const PrivateRoute = (props) => {
	//component guard
	const { path, component, redirectPath } = props;
	if (checkLogin()) {
		return <Route path={path} component={component} />;
	}
	return <Redirect to={redirectPath} />;
};
