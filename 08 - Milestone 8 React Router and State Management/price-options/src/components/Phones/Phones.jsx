import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const Phones = () => {
    const [phones, setPhones] = useState([]);

    // Fetch data when the component mounts
    useEffect(() => {
        axios
            .get("https://openapi.programming-hero.com/api/phones?search=iphone")
            .then((data) => {
                const phoneData = data.data.data;
                const phoneWithFakeData = phoneData.map((phone) => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split("-")[1]),
                    };
                    return obj;
                });
                setPhones(phoneWithFakeData);
            })
            .catch((error) => {
                console.error("Error fetching phone data:", error);
            });
    }, []);

    return (
        <div className="w-11/12 mx-auto mt-10">
            <h1>Phones - {phones.length}</h1>
            <BarChart width={1200} height={400} data={phones}>
                <Bar dataKey="price" fill="#8884d8" />
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default Phones;
