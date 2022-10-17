import React from "react";
import banner from "assets/background/bg-image-22.jpg";
import "./_banner.scss";
const index = () => {
  return (
    <div className="banner">
      <div className="banner_content">
        <div className="banner_cover">
          <div className="banner_title">
            <h1 className="banner--h1">
              Bắt đầu tìm khóa học yêu thích <br /> từ Bee-Elearning
            </h1>
            <p className="banner--p">
              Học tập được ví như hạt giống của kiến thức, còn kiến thức được ví
              như hạt giống của hạnh phúc.
            </p>
          </div>
          <div className="banner_search">
            <div id="cover">
              <form method="get" action>
                <div className="tb">
                  <div className="td">
                    <input type="text" placeholder="Tìm Kiếm" required />
                  </div>
                  <div className="td" id="s-cover">
                    <button className="btn--search" >
                      <div id="s-circle" />
                      <span />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
