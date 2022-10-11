import React, { useState } from "react";
import {
  Row,
  Col,
  Card,
  Rate,
  Avatar,
  Comment,
  Form,
  Input,
  Button,
} from "antd";

// import moment from "moment";
import { CopyOutlined, SmileOutlined } from "@ant-design/icons";
import "./comment.scss";

const { TextArea } = Input;
//get list comment
const CommentList = ({ comments }) => {
  return (
    <>
      {comments?.map((comment, index) => {
        return <CardComment comment={comment} index={index} />;
      })}
    </>
  );
};
//component of CommentList
const CardComment = ({ comment, index }) => {
 
  const { author, avatar, content, star } = comment;
  return (
    <Col key={index} span={11}>
      <Card
        className="student"
        size="small"
        title={author}
        extra={<Rate allowHalf disabled value={star} />}
      >
        <p
          style={{
            height: 70,
            overflowY: "scroll",
            scrollbarWidth: "none",
          }}
        >
          {content}
        </p>
      </Card>
    </Col>
  );
};
//comment input
const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <TextArea
        style={{ width: "95%" }}
        rows={4}
        onChange={onChange}
        value={value}
      />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
      >
        Bình Luận
      </Button>
    </Form.Item>
  </>
);

const CommentStudent = () => {
  //get list comment
  const [comments, setComments] = useState([]);
  //loading submit
  const [submitting, setSubmitting] = useState(false);
  //get content of input comment
  const [value, setValue] = useState("");
  //get star comment
  const [countStar, setStar] = useState("");

  const rateStar = (value) => {
    setStar(value);
  };
  
  const handleSubmit = () => {
    if (!value) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setValue("");
      setStar("");
      setComments([
        ...comments,
        {
          author: "Han Solo",
          avatar: "https://joeschmoe.io/api/v1/random",
          content: value,
          // datetime: moment("2022-10-11 10:50:04 GMT+0700").fromNow(),
          star: countStar,
        },
      ]);
    }, 1000);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="comment">
      <h1
        style={{
          color: "#082346",
          fontSize: "25px",
          fontWeight: "800",
        }}
      >
        Đánh Giá Từ Học Viên
      </h1>
      <div className="comment__body">
        <Row style={{ justifyContent: "space-between" }}>
          <Col span={8}>
            <div className="rate_comment">
              <h1 style={{ fontWeight: "800", margin: 0 }}>4/5</h1>
              <Rate disabled defaultValue={4} />

              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  marginTop: "5px",
                }}
              >
                245,123 Đánh Giá
              </p>
            </div>
            <div className="text">
              <p>
                <SmileOutlined /> Giảng Viên Thân Thiện Nhiệt Tình
              </p>
              <p>
                <CopyOutlined /> Tài Liệu Chi Tiết, Dễ Hiểu
              </p>
            </div>
          </Col>
          <Col className=" studentComment" span={16}>
            <Row style={{ alignItems: "center" }} gutter={[20, 16]}>
              <Col span={11}>
                <Card
                  className="student"
                  size="small"
                  title="Trần Huy Phong"
                  extra={<Rate disabled value={4} />}
                >
                  <p
                    style={{
                      height: 70,
                      overflowY: "scroll",
                      scrollbarWidth: "none",
                    }}
                  >
                    Giọng giảng viên hay, trang phục lịch sự và phù hợp.Nội dung
                    có nhiều những tình huống cụ thể để học viên dễ dàng hình
                    dung bài học. Khóa học phù hợp với người mới bắt đầu vì
                    giảng viên dạy từ cơ bản
                  </p>
                </Card>
              </Col>
              <Col span={11}>
                <Card
                  className="student"
                  size="small"
                  title="Trần Hiếu"
                  extra={<Rate disabled value={3} />}
                >
                  <p
                    style={{
                      height: 70,
                      overflowY: "scroll",
                      scrollbarWidth: "none",
                    }}
                  >
                    Giảng viên giảng dạy một cách chi tiết và tỉ mỉ và kết hợp
                    thực hành trực tiếp
                  </p>
                </Card>
              </Col>
              <Col span={11}>
                <Card
                  className="student"
                  size="small"
                  title="Trần Hưng"
                  extra={<Rate disabled value={5} />}
                >
                  <p
                    style={{
                      height: 70,
                      overflowY: "scroll",
                      scrollbarWidth: "none",
                    }}
                  >
                    Hình thức giảng dạy dễ nghe, gần gũi, có sự lôi cuốn. nội
                    dung thực tế hữu dụng. Cảm ơn Giảng viên và đội ngũ
                  </p>
                </Card>
              </Col>
              {comments.length > 0 && <CommentList comments={comments} />}
            </Row>
          </Col>
        </Row>
        <Row>
          <Col span={16}>
            <Comment
              avatar={
                <Avatar
                  src="https://joeschmoe.io/api/v1/random"
                  alt="Han Solo"
                />
              }
              content={
                <Editor
                  onChange={handleChange}
                  onSubmit={handleSubmit}
                  submitting={submitting}
                  value={value}
                />
              }
            />
          </Col>
          <Col
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            span={8}
          >
            <h1
              style={{
                color: "#082346",
                fontSize: "25px",
                fontWeight: "800",
              }}
            >
              Đánh Giá
            </h1>
            <Rate
              style={{ fontSize: "35px" }}
              value={countStar}
              onChange={rateStar}
              allowHalf
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CommentStudent;
