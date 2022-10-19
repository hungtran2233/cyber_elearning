import { Button, Col, Input, Row } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import "./_profile.scss";

function Profile() {
	const userProfile = useSelector((state) => state.auth.profile);

	console.log(userProfile);

	return (
		<div className="Profile">
			<div className="container">
				<div className="content-info">
					<Row>
						<Col xs={24} sm={24} md={24} lg={24} xl={24}>
							profile
						</Col>
						<Col xs={24} sm={24} md={24} lg={24} xl={24}></Col>
					</Row>
				</div>
			</div>
		</div>
	);
}

export default Profile;
