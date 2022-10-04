import React from "react";
import * as yup from "yup";

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
	return <div className="SignUp"></div>;
}

export default SignUp;
