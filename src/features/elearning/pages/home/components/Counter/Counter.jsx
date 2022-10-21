import { Row, Col } from "antd";
import React from "react";
import CountUp from "react-countup";
import { ref } from "yup";
import VisibilitySensor from "react-visibility-sensor";
import "./counter.scss";
const Counter = () => {
  return (
    <div className="counter">
      <div className="container">
        <Row className="row-cover">
          <Col lg={6} span={6} className="item">
            <div className="item-cover">
              <div className="course counter-mini">
                <div className="icon">
                  <i class="fa fa-book"></i>
                </div>
                <div className="title">Khóa Học</div>
                <CountUp start={0} end={1000} delay={0}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor >
                      <span className="number" ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </div>
            </div>
          </Col>
          <Col lg={6} span={6} className="item">
            <div className="item-cover">
              <div className="user counter-mini">
                <div className="icon ">
                  <i class="fa fa-user-graduate"></i>
                </div>
                <div className="title">Học Viên</div>
                <CountUp decimal={1}  start={0} end={13000} duration={3} delay={0}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor  >
                      <span className="number" ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </div>
            </div>
          </Col>
          <Col lg={6} span={6} className="item">
            <div className="item-cover">
              <div className="work counter-mini">
                <div className="icon">
                  <i class="fa-solid fa-building"></i>
                </div>
                <div className="title">Việc Làm</div>
                <CountUp start={0} end={10000} delay={0}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor >
                      <span className="number" ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </div>
            </div>
          </Col>
          <Col lg={6} span={6} className="item">
            <div className="item-cover">
              <div className="teacher counter-mini">
                <div className="icon">
                  <i class="fa fa-chalkboard-teacher"></i>
                </div>
                <div className="title">Giảng Viên</div>
                <CountUp start={0} end={500} delay={0}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor >
                      <span className="number" ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Counter;
