import { Box } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cardd from '../Components/Card';

const Dashboard = () => {
    const nav = useNavigate();
    const token = localStorage.getItem("FastorToken");
    console.log(token,'token')
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!token || token === null || token === undefined) {
            nav('/');
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
    }, [nav, token]);

    return (
        <Box padding={"20px"}>
            {error && <div>Failed to fetch restaurant data: {error.message}</div>}
            {data.map((item) => (
                <div key={item.restaurant_id}>
                    <Cardd {...item} />
                </div>
            ))}
        </Box>
    );
}

export default Dashboard;
