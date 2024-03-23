import React, { useEffect, useState } from "react";
import "../../styles/home.css";
import myData from "../../Data/myData.json";
import { Button, Col, Input, Row, Skeleton } from "antd";
import { Link } from "react-router-dom";

const Home = ({
  setData,
  myData,
  data,
  setInputValue,
  inputValue,
  handleLogout,
}) => {
  useEffect(() => {
    setData(myData);
    // inputValue("")
  }, []);
  return (
    <div className="main-container">
      
      <div className="hotel-list">
        <Row
          gutter={10}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {data ? (
            <>
              {data
                .filter((item) => {
                  return inputValue.toLowerCase() === ""
                    ? item
                    : item.location.toLowerCase().includes(inputValue);
                })
                .map((item) => (
                  <Col
                    span={5}
                    style={{
                      backgroundColor: "#D0E7D2",
                      // padding:"1px"
                      margin: "10px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                    key={item.id}
                  >
                    <Link to={`/restaurant/${item.id}`}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          // padding:"1px"
                          // margin:"1px"
                        }}
                      >
                        <img src={item.image} width="80%" />
                        {item.hotelName}
                      </div>
                    </Link>
                  </Col>
                ))}
            </>
          ) : (
            <Col span={5}>
              <Skeleton />
            </Col>
          )}
        </Row>
      </div>
      <div className="hotel-card">
        <span className="locationSpanL">Location:</span>
        {data.map((item) => (
          <span key={item.id} className="locationSpan">
            {item.location}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Home;
