import { Box, Flex } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cardd from '../Components/Card';

const Dashboard = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("FastorToken");
    console.log(token,'token')
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!token || token === null || token === undefined) {
            navigate('/');
        } else {
            const auth = {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            };
            axios.get("https://staging.fastor.in/v1/m/restaurant?city_id=118&&", auth)
                .then((res) => {
                    console.log(res)
                    setData(res.data);
                    setError(null); // Clear any previous errors
                })
                .catch((err) => {
                    console.error("Error fetching restaurant data:", err);
                    setError(err); // Set error state for rendering error message
                });
        }
    }, [navigate, token]);

    return (
        <Box padding={"20px"}>
            {error && <div>Failed to fetch restaurant data: {error.message}</div>}
            <Flex flexWrap="wrap" box-shadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">
            {data.map((item) => (
                <div key={item.restaurant_id} style={{ flex: "1 0 30%", maxWidth: "30%" }}>
                <Cardd {...item} />
                </div>
            ))}
</Flex>

        </Box>
    );
}

export default Dashboard;
