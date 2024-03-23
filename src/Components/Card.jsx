import React from "react";
import { Card , CardHeader, CardBody, CardFooter, Image,Stack,Heading,Text,Button } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";

const Cardd = (props) => {
    const nav = useNavigate();

    // console.log(props)
    const handleClick = () => {
        localStorage.setItem("fastor-single",JSON.stringify(props))
        nav('/single')
        
    }
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      padding={"20px"}
      margin="10px"
      onClick={handleClick}
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={props.images[0].url}
        alt="Caffe Latte"
      />

      <Stack>
        <CardBody>
          <Heading size="md">{props.restaurant_name}</Heading>

          <Text py="2">
            {
                `Rating : ${props.rating.restaurant_avg_rating}`
            }
          </Text>
          <Text py="2">
            {
                `Cost for Two : $ ${props.avg_cost_for_two}`
            }
          </Text>
          <Text py="2">
            {
                `Opens at : ${props.opens_at},Closed at : ${props.closes_at}`
            }
          </Text>
        </CardBody>

        <CardFooter>
          
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default Cardd;
