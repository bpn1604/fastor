import React from "react";
import { Card , CardHeader, CardBody, CardFooter, Image,Stack,Heading,Text,Button ,Flex,Box} from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";

const Cardd = (props) => {
  console.log(props.images)
    const navigate = useNavigate();

    // console.log(props)
    const handleClick = () => {
        localStorage.setItem("fastor-single",JSON.stringify(props))
        navigate('/single')
        
    }
  return (
    <Flex
    direction={{ base: "row", sm: "row" }}
    overflow="hidden"
    variant="outline"
    padding={"20px"}
    margin="10px"
    onClick={handleClick}
    _hover={{ boxShadow: "xl", transform: "scale(1.02)" }} 
  >
    <Box
      padding={"20px"}
      boxShadow="md" 
      borderRadius="md" 
      onClick={handleClick}
      _hover={{ boxShadow: "xl" }} 
      transition="box-shadow 0.3s ease-in-out" 
      flex="1" 
      marginRight={{ base: 0, sm: "10px" }} 
    >
      <Image
        objectFit="cover"
        maxW="100%"
        h="200px" // Height of the image
        src={props.images[0].url}
        alt={props.restaurant_name}
        borderRadius="md" // Rounded corners for the image
        mb={3} // Margin bottom for spacing
      />

      <Stack spacing={2}>
        <Heading size="md">{props.restaurant_name}</Heading>

        <Text fontSize="md" color="gray.600">
          {`Rating: ${props.rating.restaurant_avg_rating}`}
        </Text>
        <Text fontSize="md" color="gray.600">
          {`Cost for Two: $${props.avg_cost_for_two}`}
        </Text>
        <Text fontSize="md" color="gray.600">
          {`Opens at: ${props.opens_at}, Closes at: ${props.closes_at}`}
        </Text>
      </Stack>
    </Box>
  </Flex>
  );
};

export default Cardd;
