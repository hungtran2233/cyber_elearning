import React from "react";
import "./_footer.scss";
const Footer = () => {
	return (
		<footer>
			<div className="row primary">
				<div className="column about">
					<h3 className="title_footer">Về Chúng Tôi</h3>
					<p>
						Công ty Cổ phần Khoa học và Công nghệ Giáo dục, Mã số thuế:
						0106303886 Địa chỉ: 12 ngõ 156 Nguyễn Đổng Chi, Phường Cầu Diễn,
						Quận Nam Từ Liêm, Hà Nội
					</p>
					<div className="social">
						<i className="fa-brands fa-facebook-square" />
						<i className="fa-brands fa-instagram-square" />
						<i className="fa-brands fa-twitter-square" />
						<i className="fa-brands fa-youtube-square" />
						<i className="fa-brands fa-whatsapp-square" />
					</div>
				</div>
				<div className="column links">
					<h3 className="title_footer">Cộng Đồng</h3>
					<ul className="menu_footer">
						<li>
							<a href="#faq">F.A.Q</a>
						</li>
						<li>
							<a href="#cookies-policy">Chăm sóc khách hàng</a>
						</li>
						<li>
							<a href="#terms-of-services">Blog</a>
						</li>
						<li>
							<a href="#support">Hỗ trợ</a>
						</li>
					</ul>
				</div>
				<div className="column links">
					<h3 className="title_footer">Liên Hệ</h3>
					<ul className="menu_footer">
						<li>
							<a href="#faq">156 Nguyễn Đổng Chi, Nam Từ Liêm, Hà Nội.</a>
						</li>
						<li>
							<a href="#cookies-policy">0898987672</a>
						</li>
						<li>
							<a href="#terms-of-services">a@olm.vn</a>
						</li>
						<li>
							<a href="#support">Support</a>
						</li>
					</ul>
				</div>
			</div>
			<div className=" subscribe">
				<h3 className="title_footer">Email</h3>
				<div>
					<input type="email" placeholder="Your email id here" />
					<button className="btn_sub">Subscribe</button>
				</div>
			</div>
			<div className="row copyright">
				<div className="footer-menu">
					<a href="">Home</a>
					<a href="">About</a>
					<a href="">Contact</a>
					<a href="">Blog</a>
					<a href="">Social</a>
				</div>
				<p>Copyright © 2021 Foolish Developer</p>
			</div>
		</footer>
	);
};

export default Footer;
