import React from "react";
import { Row, Col, Card, Button } from "antd";
import "./details.scss";
const { Meta } = Card;
const Detail = () => {
  return (
    <div className="details">
      <div className="header__details">
        Details
        {/* <div className="container">
          Details
        </div> */}
      </div>
      <div className="body__details">
        <div className="container">
          <Row className="info__course">
            <Col span={16} className="left__course">
              <h1>Lợi ích từ khoá học</h1>
              <ul>
                <li>Nghề lãnh đạo là gì? Ở đâu thì cần lãnh đạo?</li>
                <li>Nguyên nhân thất bại của một người lãnh đạo</li>
                <li>Giải pháp biến nguồn lực thành mục tiêu</li>
                <li>Tố chất lãnh đạo cần có và cách cải thiện</li>
                <li>Kỹ năng sử dụng quyền lực của một người lãnh đạo tài ba</li>
                <li>Nghề lãnh đạo là gì? Ở đâu thì cần lãnh đạo?</li>
                <li>Nguyên nhân thất bại của một người lãnh đạo</li>
                <li>Giải pháp biến nguồn lực thành mục tiêu</li>
                <li>Tố chất lãnh đạo cần có và cách cải thiện</li>
                <li>Kỹ năng sử dụng quyền lực của một người lãnh đạo tài ba</li>
                <li>Nghề lãnh đạo là gì? Ở đâu thì cần lãnh đạo?</li>
                <li>Nguyên nhân thất bại của một người lãnh đạo</li>
                <li>Giải pháp biến nguồn lực thành mục tiêu</li>
                <li>Tố chất lãnh đạo cần có và cách cải thiện</li>
                <li>Kỹ năng sử dụng quyền lực của một người lãnh đạo tài ba</li>
                <li>Nghề lãnh đạo là gì? Ở đâu thì cần lãnh đạo?</li>
                <li>Nguyên nhân thất bại của một người lãnh đạo</li>
                <li>Giải pháp biến nguồn lực thành mục tiêu</li>
                <li>Tố chất lãnh đạo cần có và cách cải thiện</li>
                <li>Kỹ năng sử dụng quyền lực của một người lãnh đạo tài ba</li>
                <li>Nghề lãnh đạo là gì? Ở đâu thì cần lãnh đạo?</li>
                <li>Nguyên nhân thất bại của một người lãnh đạo</li>
                <li>Giải pháp biến nguồn lực thành mục tiêu</li>
                <li>Tố chất lãnh đạo cần có và cách cải thiện</li>
                <li>Kỹ năng sử dụng quyền lực của một người lãnh đạo tài ba</li>
              </ul>
            </Col>
            <Col
              span={6}
              style={{ marginTop: "-350px" }}
              className="right__course"
            >
              <Card
                className="card__payment"
                hoverable
                cover={
                  <img
                    style={{ borderRadius: "20px 20px 0 0" }}
                    alt="example"
                    src="https://d1nzpkv5wwh1xf.cloudfront.net/640/k-57b67d6e60af25054a055b20/20170817-tungnt9image1708/duonglt03.png"
                  />
                }
              >
                <Meta
                  title="999.999"
                  description="Ưu Đãi !!!"
                />
                <div style={{textAlign:'center'}}>
                  <Button className="btn__add">Thêm Vào Giỏ Hàng</Button>
                </div>
                <div style={{textAlign:'center', margin:'10px 0'}}>
                  <Button className="btn__payment">Thanh Toán Ngay</Button>
                </div>
                <hr/>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Detail;
