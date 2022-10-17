import { Col, Row, Avatar, Image, Descriptions } from "antd";
import React from "react";
import './_lecturersInfo.scss'
const LecturersInfo = ({ infoCourse }) => {
  const { tenKhoaHoc, nguoiTao, ngayTao, luotXem } = infoCourse;
  return (
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
      <Row style={{alignItems:'center'}}>
        <Col span={6}>
          <div className="avatar">
            <Image
              src="https://api.lorem.space/image/face?w=150&h=150"
              style={{ borderRadius: "50%" }}
            />
          </div>
        </Col>
        <Col span={18}>
          <div className="infoLectures">
            <Descriptions>
              <Descriptions.Item span={3} label="Giảng Viên">
                {nguoiTao.hoTen}
              </Descriptions.Item>
              <Descriptions.Item span={3} label="Khóa Học">
                {tenKhoaHoc}
              </Descriptions.Item>
              <Descriptions.Item span={3} label="Ngày Xuất Bản">
                {ngayTao}
              </Descriptions.Item>
              <Descriptions.Item span={3} label="Học Viên">
                {luotXem}
              </Descriptions.Item>
            </Descriptions>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default LecturersInfo;
