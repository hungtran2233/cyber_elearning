import React from "react";
import bgBanner from "assets/img/background/bg-2.jpg";
import Typewriter from "typewriter-effect";
import SearchBar from "./components/SearchBar";

function Banner(props) {
	// console.log(props.allCourseList);
	const allCourseList = props.allCourseList;

	return (
		<div className="Banner" style={{ backgroundImage: `url(${bgBanner})` }}>
			<div className="container">
				<div className="content">
					<h1 className="title">
						Bắt đầu tìm khóa học yêu thích tại <strong>Bee-ELearning</strong>
					</h1>
					<p className="description">
						<i className="fas fa-quote-left"></i>Học tập được ví như hạt giống
						của kiến thức, <br /> còn kiến thức được ví như hạt giống của hạnh
						phúc<i className="fas fa-quote-right"></i>
					</p>
					<Typewriter
						options={{
							strings: ["I'm a Website Developer !", "Let'go !"],
							autoStart: true,
							loop: true,
						}}
					/>

					<div className="search-area">
						<SearchBar allCourseList={allCourseList} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Banner;
