import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import Fastorimage from "../Images/Fastor Logo.png"
const Single = () => {
  const data = JSON.parse(localStorage.getItem("fastor-single"));
  console.log(data);
  return (
    // <Box backgroundImage={`${data.images[0].url}`}>

    // </Box>
    <Box padding={"20px"} position="relative">
    <Text fontSize='2xl' as='b'>{data.restaurant_name}</Text>
    <Box position="relative">
      <Image src={data.images[0].url} alt="Image" />
      <img
        src="https://cdn4.avada.io/media/shopify/xDd1vpk.jpg"
        alt="Fastor"
        style={{
          position: 'absolute',
          top: '50%',
          left: '30%',
          width : "200px",
          height:"200px",
          transform: 'translate(-50%, -50%)',
          zIndex: 1, // Ensures the image is on top of the other content
        }}
      />
    </Box>
  </Box>
  );
};

export default Single;
