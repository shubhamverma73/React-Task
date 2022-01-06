import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';

const PopularHour = () => {

    const dataPopularHour = [
        {
          "name": "12:00am",
          "Time of the day": 4000,
          "amt": 2400
        },
        {
          "name": "01:00pm",
          "Time of the day": 3000,
          "amt": 2210
        },
        {
          "name": "02:00pm",
          "Time of the day": 5000,
          "amt": 2290
        },
        {
          "name": "03:00pm",
          "Time of the day": 6000,
          "amt": 2000
        },
        {
          "name": "04:00pm",
          "Time of the day": 7000,
          "amt": 2181
        },
        {
          "name": "05:00pm",
          "Time of the day": 1000,
          "amt": 2500
        },
        {
          "name": "06:00pm",
          "Time of the day": 12000,
          "amt": 2100
        }
    ];

    return (
        <>
            <ResponsiveContainer width="98%" height={400}>
                <LineChart width={730} height={250} data={dataPopularHour}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Time of the day" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </>
    );

}
export default PopularHour;