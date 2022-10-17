import {
	FileTextOutlined,
	LockOutlined,
	MailOutlined,
	PhoneOutlined,
	UserOutlined,
} from "@ant-design/icons";
import { Button, Checkbox, Input, Modal } from "antd";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import bgSignUp from "assets/img/background/bg-signup.jpg";
import { signUpAction } from "../authAction";

const schema = yup.object({
	taiKhoan: yup
		.string()
		.required("*Trường này bắt buộc nhập !")
		.min(6, "*Tài khoản tối thiểu 6 kí tự"),
	matKhau: yup
		.string()
		.required("*Trường này bắt buộc nhập !")
		.min(6, "*Mật khẩu phải từ 6 đến 14 kí tự"),
	hoTen: yup
		.string()
		.required("*Trường này bắt buộc nhập !")
		.matches(/^[A-Za-z ]+$/g, "*Họ tên không đúng"),
	email: yup
		.string()
		.required("*Trường này bắt buộc nhập !")
		.email("*Email không đúng định dạng"),
	soDt: yup.string().required("*Trường này bắt buộc nhập !"),
});

function SignUp() {
	const dispatch = useDispatch();
	const history = useHistory();

	const formik = useFormik({
		initialValues: {
			taiKhoan: "",
			matKhau: "",
			hoTen: "",
			email: "",
			soDt: "",
		},

		onSubmit: (user) => {
			const newUser = { ...user, maNhom: "GP01" };
			signUp(newUser);
		},

		validationSchema: schema,
	});

	const signUp = async (user) => {
		const data = await dispatch(signUpAction(user));
		if (!data.payload) {
			return alert("Tài khoản hoặc email đã tồn tại, vui lòng nhập lại !");
		} else {
			alert("Đăng kí thành công !");
			history.push("/signin");
		}
	};

	return (
		<div className="SignUp" style={{ backgroundImage: `url(${bgSignUp})` }}>
			<div className="container">
				<div className="content">
					<h2 className="title">Đăng kí tài khoản</h2>

					<form onSubmit={formik.handleSubmit} className="form">
						<div className="form-group">
							<div className="form-body">
								<label htmlFor="">Tài khoản:</label>
								<Input
									name="taiKhoan"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									className="input"
									type="text"
									placeholder="Username"
									prefix={<UserOutlined style={{ marginRight: 8 }} />}
								/>
							</div>

							{formik.touched.taiKhoan && formik.errors.taiKhoan && (
								<p className="errorText">{formik.errors.taiKhoan}</p>
							)}
						</div>

						<div className="form-group">
							<div className="form-body">
								<label htmlFor="">Mật khẩu:</label>
								<Input
									name="matKhau"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									className="input"
									type="password"
									placeholder="Password"
									prefix={<LockOutlined style={{ marginRight: 8 }} />}
								/>
							</div>
							{formik.touched.matKhau && formik.errors.matKhau && (
								<p className="errorText">{formik.errors.matKhau}</p>
							)}
						</div>

						<div className="form-group">
							<div className="form-body">
								<label htmlFor="">Họ tên:</label>
								<Input
									name="hoTen"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									className="input"
									type="text"
									placeholder="FullName"
									prefix={
										<FileTextOutlined style={{ marginRight: 8 }} />
									}
								/>
							</div>
							{formik.touched.hoTen && formik.errors.hoTen && (
								<p className="errorText">{formik.errors.hoTen}</p>
							)}
						</div>

						<div className="form-group">
							<div className="form-body">
								<label htmlFor="">Email:</label>
								<Input
									name="email"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									className="input"
									type="text"
									placeholder="Email"
									prefix={<MailOutlined style={{ marginRight: 8 }} />}
								/>
							</div>
							{formik.touched.email && formik.errors.email && (
								<p className="errorText">{formik.errors.email}</p>
							)}
						</div>

						<div className="form-group">
							<div className="form-body">
								<label htmlFor="">Số điện thoại:</label>
								<Input
									name="soDt"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									className="input"
									type="text"
									placeholder="Phone"
									prefix={<PhoneOutlined style={{ marginRight: 8 }} />}
								/>
							</div>
							{formik.touched.soDt && formik.errors.soDt && (
								<p className="errorText">{formik.errors.soDt}</p>
							)}
						</div>

						<div className="term">
							<Checkbox>Chấp nhận các điều khoản</Checkbox>
							<span style={{ color: "blue", marginLeft: 20 }}>
								Điều khoản
							</span>
						</div>

						<Button htmlType="submit" type="primary" className="btn-submit">
							Tạo tài khoản
						</Button>
					</form>

					<div className="signin-tips">
						<p>Bạn đã có tài khoản ?</p>
						<Button
							type="primary"
							className="btn-signin"
							onClick={() => history.push("/signin")}
						>
							Đăng nhập
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SignUp;
