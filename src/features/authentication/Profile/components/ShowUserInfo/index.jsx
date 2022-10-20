import React from "react";
import {
	FileTextOutlined,
	LockOutlined,
	MailOutlined,
	UserOutlined,
} from "@ant-design/icons";
import { formatFullName } from "common/utils/formatFullName";
import { Button, Col, Input, Row, Spin } from "antd";
import { useState } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { updateUserAction } from "features/authentication/authAction";
import Swal from "sweetalert2";
import { useEffect } from "react";
import "./_showInfo.scss";

function ShowUserInfo() {
	const user = useSelector((state) => state.auth.profile);
	const dispatch = useDispatch();

	const [userProfile, setUserProfile] = useState(user);
	const [changeOption, setChangeOption] = useState(1);

	useEffect(() => {}, [userProfile]);

	const updateUser = (user) => {
		dispatch(updateUserAction(user));
	};

	// setting formik
	// Validation Form
	const formik = useFormik({
		enableReinitialize: true,
		initialValues: {
			taiKhoan: userProfile.taiKhoan,
			matKhau: userProfile.matKhau,
			hoTen: userProfile.hoTen,
			email: userProfile.email,
			soDT: userProfile.soDT,
			maLoaiNguoiDung: userProfile.maLoaiNguoiDung,
		},
		onSubmit: (user) => {
			const newUser = {
				...user,
				maNhom: "GP01",
				maLoaiNguoiDung: "HV",
			};
			// console.log(newUser);
			updateAlert(newUser);
		},
	});

	// Setting alert
	const updateAlert = (user) => {
		Swal.fire({
			title: "Bạn có muốn cập nhật không ?",
			text: "Nếu cập nhật, thông tin cũ sẽ thay đổi !",
			icon: "info",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			cancelButtonText: "Hủy",
			confirmButtonText: "Cập nhật!",
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire({
					position: "center",
					icon: "success",
					title: "Cập nhật thành công !",
					text: "Hãy xem lại thông tin cá nhân của bạn!",
					showConfirmButton: false,
					timer: 1500,
				});
				// history.push("/");
				// change option
				updateUser(user);
				setUserProfile(user);
			}
		});
	};

	/////////////////////////////////////////
	// RENDER FORM
	const renderForm = () => {
		if (changeOption === 1) {
			return (
				<div className="show-content">
					<h2>Thông tin tài khoản học viên</h2>
					<form className="form">
						<div className="form-group">
							<label htmlFor="">Tài khoản:</label>
							<Input
								name="taiKhoan"
								className="input"
								type="text"
								placeholder="Username"
								prefix={<UserOutlined style={{ marginRight: 8 }} />}
								value={userProfile.taiKhoan}
								disabled
							/>
						</div>

						<div className="form-group">
							<label htmlFor="">Mật khẩu:</label>
							<Input
								name="matKhau"
								className="input"
								type="password"
								placeholder="Password"
								prefix={<LockOutlined style={{ marginRight: 8 }} />}
								value={userProfile.matKhau}
								disabled
							/>
						</div>

						<div className="form-group">
							<label htmlFor="">Họ tên:</label>
							<Input
								name="hoTen"
								className="input"
								type="text"
								placeholder="FullName"
								prefix={<FileTextOutlined style={{ marginRight: 8 }} />}
								value={userProfile.hoTen}
								disabled
							/>
						</div>

						<div className="form-group">
							<label htmlFor="">Email:</label>
							<Input
								name="email"
								className="input"
								type="text"
								placeholder="Email"
								prefix={<MailOutlined style={{ marginRight: 8 }} />}
								value={userProfile.email}
								disabled
							/>
						</div>

						<div className="form-group">
							<label htmlFor="">Số điện thoại:</label>
							<Input
								name="soDT"
								className="input"
								type="text"
								placeholder="Phone"
								prefix={<UserOutlined style={{ marginRight: 8 }} />}
								value={userProfile.soDT}
								disabled
							/>
						</div>

						<div className="form-group">
							<label htmlFor="">Loại người dùng:</label>
							<Input
								name="soDT"
								className="input"
								type="text"
								placeholder="Phone"
								value={userProfile.maLoaiNguoiDung}
								disabled
							/>
						</div>
					</form>
					<div className="btn-handle">
						<Button
							type="primary"
							onClick={() => {
								setChangeOption(2);
							}}
						>
							Thay đổi thông tin
						</Button>
					</div>
				</div>
			);
		}

		if (changeOption === 2) {
			return (
				<div>
					<div className="update-content">
						<h2>Cập nhật thông tin</h2>

						<form onSubmit={formik.handleSubmit} className="form">
							<div className="form-group">
								<label htmlFor="">Tài khoản:</label>
								<Input
									name="taiKhoan"
									className="input"
									type="text"
									placeholder="Username"
									prefix={<UserOutlined style={{ marginRight: 8 }} />}
									value={formik.values.taiKhoan}
									disabled
								/>
								{formik.touched.taiKhoan && formik.errors.taiKhoan && (
									<p className="errorText">{formik.errors.taiKhoan}</p>
								)}
							</div>

							<div className="form-group">
								<label htmlFor="">Mật khẩu:</label>
								<Input
									name="matKhau"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									className="input"
									type="text"
									placeholder="Password"
									prefix={<LockOutlined style={{ marginRight: 8 }} />}
									value={formik.values.matKhau}
								/>
								{formik.touched.matKhau && formik.errors.matKhau && (
									<p className="errorText">{formik.errors.matKhau}</p>
								)}
							</div>

							<div className="form-group">
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
									value={formik.values.hoTen}
								/>
								{formik.touched.hoTen && formik.errors.hoTen && (
									<p className="errorText">{formik.errors.hoTen}</p>
								)}
							</div>

							<div className="form-group">
								<label htmlFor="">Email:</label>
								<Input
									name="email"
									className="input"
									type="text"
									placeholder="Email"
									prefix={<MailOutlined style={{ marginRight: 8 }} />}
									value={formik.values.email}
									disabled
								/>
								{formik.touched.email && formik.errors.email && (
									<p className="errorText">{formik.errors.email}</p>
								)}
							</div>

							<div className="form-group">
								<label htmlFor="">Số điện thoại:</label>
								<Input
									name="soDT"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									className="input"
									type="text"
									placeholder="Phone"
									prefix={<UserOutlined style={{ marginRight: 8 }} />}
									value={formik.values.soDT}
								/>

								{formik.touched.soDT && formik.errors.soDT && (
									<p className="errorText">{formik.errors.soDT}</p>
								)}
							</div>

							<div className="form-group">
								<label htmlFor="">Loại người dùng:</label>
								<Input
									name="soDT"
									className="input"
									type="text"
									placeholder="Phone"
									value={userProfile.maLoaiNguoiDung}
									disabled
								/>
							</div>

							<div className="btn-handle">
								<Button
									htmlType="submit"
									type="primary"
									className="btn-submit"
								>
									Cập nhật
								</Button>

								<Button
									onClick={() => {
										setChangeOption(1);
									}}
								>
									Trở về
								</Button>
							</div>
						</form>
					</div>
				</div>
			);
		}
	};

	return <div className="ShowUserInfo">{renderForm()}</div>;
}

export default ShowUserInfo;
