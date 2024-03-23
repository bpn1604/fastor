import { Button, Skeleton } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Restaurant = ({ data, setInputValue }) => {
  const hotelId = useParams();

  const dataHotel = data.find((item) => item.id == hotelId.id);
  const { address, description, hotelName, id, image, location } = dataHotel;
  useEffect(() => {
    setInputValue("");
  }, [hotelId]);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const firstImageRef = useRef(null);
  const secondImageRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!secondImageRef.current) return; // Check if secondImageRef is null
    if (!isDragging) return;
    const containerRect = secondImageRef.current.getBoundingClientRect();
    const newX = e.clientX - containerRect.left - firstImageRef.current.width / 2;
    const newY = e.clientY - containerRect.top - firstImageRef.current.height / 2;
    setPosition({ x: newX, y: newY });
  };
  

  const handleMouseUp = (e) => {
    setIsDragging(false);
  };
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ width: "10%" }}>
        
      </div>
      {data ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            //   height: "95%",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={"https://media.licdn.com/dms/image/C4D0BAQH2z6guSXdqdA/company-logo_200_200/0/1630530931168/fastor_gie_logo?e=1719446400&v=beta&t=6ToEkwO5kysCHrfX4kyXyhBOTF3SN7K8cppUM7n89rU"}
              
              width="4%"
              style={{ position: "absolute", zIndex: "1",borderRadius:"50%" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        ref={firstImageRef}
            />
            <img
              src={image}
              style={{
                width: "70%",
                border: "1px solid black",
                zIndex: "0",
                position: "relative",
              }}
            />
          </div>
          <span>Hotel Name:{hotelName}</span>
          <span>description:{description}</span>
          <span>Location:{location}</span>
          <span>Address:{address}</span>
        </div>
      ) : (
        <Skeleton />
      )}
      <Link to="/">
          <Button  style={{
                
                backgroundColor: 'blue',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 'bold',
                textTransform: 'uppercase',
            }}>Back</Button>
        </Link>
    </div>
  );
};

export default Restaurant;
