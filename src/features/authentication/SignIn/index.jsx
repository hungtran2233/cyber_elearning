import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { signInAction } from "../authAction";
import * as yup from "yup";
import { Button, Checkbox, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import bgSignIn from "assets/background/bg-signin.jpg";
import "./_signIn.scss";

const schema = yup.object({
	taiKhoan: yup.string().required("*Trường này bắt buộc nhập ! "),
	matKhau: yup.string().required("*Trường này bắt buộc nhập ! "),
});

function SignIn() {
	const history = useHistory();

	const dispatch = useDispatch();

	const formik = useFormik({
		initialValues: {
			taiKhoan: "",
			matKhau: "",
		},
		onSubmit: (values) => {
			signIn(values);
		},
		validationSchema: schema,
	});

	const signIn = async (user) => {
		const data = await dispatch(signInAction(user));
	};

	return (
		<div className="SignIn" style={{ backgroundImage: `url(${bgSignIn})` }}>
			<div className="content-signin">
				<h2 className="title">Đăng Nhập</h2>
				<UserOutlined className="icon-user" />

				<form onSubmit={formik.handleSubmit} className="form">
					<Input
						name="taiKhoan"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						className="input"
						type="text"
						placeholder="Tài khoản"
						prefix={<UserOutlined style={{ marginRight: 8 }} />}
					/>

					{formik.touched.taiKhoan && formik.errors.taiKhoan && (
						<p className="errorText">{formik.errors.taiKhoan}</p>
					)}

					<Input
						name="matKhau"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						className="input"
						type="password"
						placeholder="Mật khẩu"
						prefix={<LockOutlined style={{ marginRight: 8 }} />}
					/>
					{formik.touched.matKhau && formik.errors.matKhau && (
						<p className="errorText">{formik.errors.matKhau}</p>
					)}

					<div className="remember">
						<Checkbox>Lưu đăng nhập</Checkbox>
						<span className="forgot-password">Quên mật khẩu ?</span>
					</div>

					<Button className="btn-signin" htmlType="submit" type="primary">
						Đăng nhập
					</Button>
				</form>

				<div className="signup-tips">
					<p>Chưa có tài khoản ?</p>
					<div className="btn-signup">Tạo tài khoản mới</div>
				</div>
			</div>
		</div>
	);
}

export default SignIn;
