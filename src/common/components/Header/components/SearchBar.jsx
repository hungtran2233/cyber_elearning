import React from "react";
import "./_searchBar.scss";

function SearchBar() {
	return (
		<div className="SearchBar">
			<div className="SearchInputs">
				<input type="text" placeholder="Nhập tên phim..." />
				{filterData.length === 0 ? (
					<SearchOutlined className="icon" />
				) : (
					<CloseOutlined onClick={clearInput} className="icon" />
				)}
			</div>
			{filterData.length !== 0 && (
				<div className="dataResult">
					{filterData?.map((item) => {
						return (
							<Link
								key={item.maPhim}
								to={"/detail/" + item.maPhim + "/" + item.biDanh}
								onClick={clearInput}
							>
								<div className="search-content">
									<img src={item.hinhAnh} alt="" />
									<span>{item.tenPhim}</span>
								</div>
							</Link>
						);
					})}
				</div>
			)}
		</div>
	);
}

export default SearchBar;
