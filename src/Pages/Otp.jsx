import {
  Box,
  Button,
  HStack,
  PinInput,
  PinInputField,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import axios from 'axios'

const Otp = () => {
  const [pin1, setPin1] = useState("");
  const [pin2, setPin2] = useState("");
  const [pin3, setPin3] = useState("");
  const [pin4, setPin4] = useState("");
  const [pin5, setPin5] = useState("");
  const [pin6, setPin6] = useState("");

  const toast = useToast();
  const navigate = useNavigate();
  

  const [response,setResponse] = useState([])
  const handleVerify = async () => {
    if (pin1 + pin2 + pin3 + pin4 + pin5 + pin6 !== "123456") {
      toast({
        title: 'Invalid OTP',
        description: "Please Enter Correct OTP",
        status: 'error',
        duration: 4000,
        isClosable: true,
      });
    } else {
      navigate('/dashboard');
    }
    navigate("/dashboard")
    const payload = {
      phone: "9818979450",
      otp: pin1 + pin2 + pin3 + pin4 + pin5 + pin6,
      dial_code: "+91"
    };
  
    try {
      const response = await axios.post('https://staging.fastor.in/v1/pwa/user/login', payload);
      setResponse(response.data);
      console.log(response.data.data.token)
      localStorage.setItem("FastorToken", response.data.data.token || null);
    } catch (error) {
      console.error(error);
    }
  };

 

  return (
    <Box padding={"30px"} display="flex" flexDirection="column" alignItems="center">
  <Box paddingTop={"10%"} textAlign="center" marginBottom="30px">
    <Text fontSize="2xl" as="b">
      OTP Verification
    </Text>
    <Text color="grey" marginTop="10px">
      Enter the verification code we just sent to your Mobile Number.
    </Text>
  </Box>

  <Box textAlign="center">
    <HStack spacing="10px">
      <PinInput>
        <PinInputField onChange={(e) => setPin1(e.target.value)} />
        <PinInputField onChange={(e) => setPin2(e.target.value)} />
        <PinInputField onChange={(e) => setPin3(e.target.value)} />
        <PinInputField onChange={(e) => setPin4(e.target.value)} />
        <PinInputField onChange={(e) => setPin5(e.target.value)} />
        <PinInputField onChange={(e) => setPin6(e.target.value)} />
      </PinInput>
    </HStack>
  </Box>

  <Box textAlign="center" marginTop={"30px"}>
    <Button
      size="lg"
      width={"70%"}
      background={"blue"}
      color="white"
      onClick={handleVerify}
    >
      Verify
    </Button>
  </Box>
  
  <Box textAlign="center" marginTop={"20px"}>
    <Text>Didn't receive the code?</Text>
    <Text color={"blue"} marginTop={"5px"}>
      <Link to="/">Resend</Link>
    </Text>
  </Box>
</Box>

  );
};

export default Otp;
