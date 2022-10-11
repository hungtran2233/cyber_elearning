import React, { useEffect, useState } from "react";
import { Row, Col, Card, Button, Spin, Rate, Breadcrumb } from "antd";
import "./details.scss";
import "assets/fonts/SFProDisplay/SFPRODISPLAYBOLD.OTF";
import { useRouteMatch } from "react-router-dom";
import instance from "api/instance";
import {
  CheckCircleOutlined,
  HeartOutlined,
  ShareAltOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import CommentStudent from "./components/Comment/CommentStudent";
const { Meta } = Card;
const Detail = () => {
  const [infoCourse, setInfoCourse] = useState(null);
  const [loading, setLoading] = useState(false);
  const match = useRouteMatch();

  const fetchInfoCourse = async (idCourse) => {
    try {
      setLoading(true);
      const res = await instance.request({
        url: "/api/QuanLyKhoaHoc/LayThongTinKhoaHoc",
        method: "GET",
        params: {
          maKhoaHoc: idCourse,
        },
      });
      setInfoCourse(await res.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  console.log(infoCourse);
  const fetchInfo = () => {
    fetchInfoCourse(match.params.id);
  };
  useEffect(() => {
    fetchInfo();
  }, []);
  if (loading) return <Spin></Spin>;
  if (!infoCourse) return <Spin></Spin>;
  const { tenKhoaHoc, moTa, danhMucKhoaHoc, hinhAnh } = infoCourse;
  return (
    <div className="details">
      <div className="header__details">
        <div style={{ width: "55%" }} className="title">
          <div>
            <Breadcrumb
              style={{
                margin: "16px 0",
              }}
            >
              <Breadcrumb.Item>Trang Chủ</Breadcrumb.Item>
              <Breadcrumb.Item>
                {danhMucKhoaHoc.maDanhMucKhoahoc}
              </Breadcrumb.Item>
              <Breadcrumb.Item>{tenKhoaHoc}</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <h1 className="courseName">{tenKhoaHoc}</h1>
          <p className="description">{moTa}</p>
          <div className="rate">
            <Rate
              style={{ fontSize: "40px", color: "rgb(255, 192, 67)" }}
              disabled
              defaultValue={4}
            />
            <p style={{ display: "inline" }}>4/5 (245,123 Đánh Giá)</p>
          </div>
        </div>
      </div>
      <div className="body__details">
        <div className="container">
          <Row className="info__course">
            <Col span={16} className="left__course">
              <div className="infoBenefit">
                <h1
                  style={{
                    color: "#082346",
                    fontSize: "25px",
                    fontWeight: "800",
                  }}
                >
                  Lợi ích từ khoá học
                </h1>
                <div className="listBenefit">
                  <ul style={{ listStyleType: "none" }}>
                    <li>
                      <CheckCircleOutlined style={{ marginRight: "15px" }} />{" "}
                      Nắm vững kiến thức căn bản
                    </li>
                    <li>
                      <CheckCircleOutlined style={{ marginRight: "15px" }} /> Áp
                      dụng vào thực tế nhờ thực hành liên tục
                    </li>
                    <li>
                      <CheckCircleOutlined style={{ marginRight: "15px" }} />{" "}
                      Đáp ứng được nhu cầu nhà tuyển dụng
                    </li>
                    <li>
                      <CheckCircleOutlined style={{ marginRight: "15px" }} />{" "}
                      Cập nhật xu hướng công nghệ mới nhất
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lecturers">
                <h1
                  style={{
                    color: "#082346",
                    fontSize: "25px",
                    fontWeight: "800",
                  }}
                >
                  Giảng Viên
                </h1>
                <Row>
                  <Col span={8}></Col>
                  <Col span={16}></Col>
                </Row>
              </div>
              <CommentStudent />
            </Col>
            <Col
              span={6}
              s
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
                    src={hinhAnh}
                  />
                }
              >
                <hr/>
                <div className="meta">
                  <div className="currentPrice">799,000 đ</div>
                  <div className="sellingPrice">399,000 đ</div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <Button icon={<ShoppingCartOutlined />} className="btn__add">
                    Thêm Vào Giỏ Hàng
                  </Button>
                </div>
                <div style={{ textAlign: "center", margin: "10px  0 20px 0" }}>
                  <Button className="btn__payment">Thanh Toán Ngay</Button>
                </div>
                <hr />
                <div className="icon">
                  <HeartOutlined />
                  <ShareAltOutlined />
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Detail;
