import React from "react";
import "./_payment.scss";
import { Col, Row, Spin } from "antd";
import CourseDetail from "./components/CourseDetail";
import UserDetail from "./components/UserDetail";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { fetchProfileAction } from "features/authentication/authAction";
import BackToTop from "common/components/BackToTop";

function Payment() {
	const cart = useSelector((state) => state.eLearningCart);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchProfileAction());
	}, []);

	const userDetail = useSelector((state) => state.auth.profile);

	if (!cart) {
		return (
			<div style={{ textAlign: "center" }}>
				<Spin size="large" />
			</div>
		);
	}

	if (!userDetail) {
		return (
			<div style={{ textAlign: "center" }}>
				<Spin size="large" />
			</div>
		);
	}

	return (
		<div className="Payment">
			<div className="container">
				<BackToTop />
				<Row>
					<Col xs={24} sm={24} md={16} lg={16} xl={16}>
						<CourseDetail cart={cart} />
					</Col>

					<Col xs={24} sm={24} md={8} lg={8} xl={8}>
						<UserDetail userDetail={userDetail} cart={cart} />
					</Col>
				</Row>
			</div>
		</div>
	);
}

export default Payment;
