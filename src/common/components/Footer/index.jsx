import React from "react";
import "./_footer.scss";

function Footer() {
	return (
		<footer id="Footer">
			<div className="container">
				<div
					className="footer-top wow animate__animated animate__fadeInUp"
					style={{ visibility: "visible", animationName: "fadeInUp" }}
				>
					<div className="text">
						<h2>Nhận tin từ trang Bee Academy </h2>
					</div>
					<div className="form-content">
						<input
							className="input-email"
							type="text"
							placeholder="Nhập địa chỉ email của bạn..."
						/>
						<button className="icon btn-gradient">
							<i className="fa-solid fa-paper-plane" />
						</button>
					</div>
				</div>

				{/* Footer bottom   */}
				<div className="footer-bottom">
					<div
						className="footer-item wow animate__animated animate__fadeIn animate__delay-1s"
						style={{ visibility: "visible", animationName: "fadeIn" }}
					>
						<h1 className="logo-title">Bee Academy</h1>
						<ul className="contact">
							<li>
								<i className="fa fa-phone" />
								<span>
									0000-123-4567 <br />
									0123456789
								</span>
							</li>
							<li>
								<i className="fa fa-envelope" />
								<span>
									info@example.com <br />
									services@gmail.com
								</span>
							</li>
							<li>
								<i className="fas fa-map-marker-alt" />
								<span>
									100 Đường Chân Trời <br />
									TP. Hồ Chí Minh
								</span>
							</li>
						</ul>
					</div>
					<div
						className="footer-item link-item wow animate__animated animate__fadeIn animate__delay-1s"
						style={{ visibility: "visible", animationName: "fadeIn" }}
					>
						<h3>Liên kết</h3>
						<ul>
							<li>
								<p>
									<i className="fa fa-angle-right" />
								</p>
								Trang chủ
							</li>
							<li>
								<p>
									<i className="fa fa-angle-right" />
								</p>
								Khóa học
							</li>
							<li>
								<p>
									<i className="fa fa-angle-right" />
								</p>
								Thống kê
							</li>
							<li>
								<p>
									<i className="fa fa-angle-right" />
								</p>
								Góc học viên
							</li>
							<li>
								<p>
									<i className="fa fa-angle-right" />
								</p>
								Liên hệ
							</li>
						</ul>
					</div>
					<div
						className="footer-item link-item wow animate__animated animate__fadeIn animate__delay-1s"
						style={{ visibility: "visible", animationName: "fadeIn" }}
					>
						<h3>Dịch vụ</h3>
						<ul>
							<li>
								<p>
									<i className="fa fa-angle-right" />
								</p>
								Strategy &amp; Research
							</li>
							<li>
								<p>
									<i className="fa fa-angle-right" />
								</p>
								Web Development
							</li>
							<li>
								<p>
									<i className="fa fa-angle-right" />
								</p>
								Web Solution
							</li>
							<li>
								<p>
									<i className="fa fa-angle-right" />
								</p>
								Digital Marketing
							</li>
							<li>
								<p>
									<i className="fa fa-angle-right" />
								</p>
								App Design
							</li>
						</ul>
					</div>
					<div
						className="footer-item link-item wow animate__animated animate__fadeIn animate__delay-1s"
						style={{ visibility: "visible", animationName: "fadeIn" }}
					>
						<h3>Liên kết ngoài</h3>
						<ul>
							<li>
								<p>
									<i className="fa fa-angle-right" />
								</p>
								FAQ
							</li>
							<li>
								<p>
									<i className="fa fa-angle-right" />
								</p>
								Portfolio
							</li>
							<li>
								<p>
									<i className="fa fa-angle-right" />
								</p>
								Privacy Policy
							</li>
							<li>
								<p>
									<i className="fa fa-angle-right" />
								</p>
								Terms &amp; Conditions
							</li>
							<li>
								<p>
									<i className="fa fa-angle-right" />
								</p>
								Support
							</li>
						</ul>
					</div>
				</div>
			</div>

			{/* <!-- Footer Copyright  --> */}
			<div className="footer-copyright">
				<div className="footer-content container">
					<div className="footer-left">
						Copyright © 2022
						<span> MagicKaito.</span>
						All rights reserved.
					</div>
					<div className="footer-right">
						<p>
							<i className="fab fa-facebook-f" />
						</p>
						<p>
							<i className="fab fa-instagram" />
						</p>
						<p>
							<i className="fab fa-twitter" />
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
