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

const Connections = () => {

    const dataLine = [
        {
          "name": "12:00am",
          "Aug 16, 2021": 4000,
          "Aug 15, 2021": 2400,
          "amt": 2400
        },
        {
          "name": "01:00pm",
          "Aug 16, 2021": 3000,
          "Aug 15, 2021": 1398,
          "amt": 2210
        },
        {
          "name": "02:00pm",
          "Aug 16, 2021": 2000,
          "Aug 15, 2021": 9800,
          "amt": 2290
        },
        {
          "name": "03:00pm",
          "Aug 16, 2021": 2780,
          "Aug 15, 2021": 3908,
          "amt": 2000
        },
        {
          "name": "04:00pm",
          "Aug 16, 2021": 1890,
          "Aug 15, 2021": 4800,
          "amt": 2181
        },
        {
          "name": "05:00pm",
          "Aug 16, 2021": 2390,
          "Aug 15, 2021": 3800,
          "amt": 2500
        },
        {
          "name": "06:00pm",
          "Aug 16, 2021": 3490,
          "Aug 15, 2021": 4300,
          "amt": 2100
        }
    ];

    return (
        <>
            <ResponsiveContainer width="98%" height={400}>
                <LineChart width={730} height={250} data={dataLine}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Aug 15, 2021" stroke="#8884d8" />
                    <Line type="monotone" dataKey="Aug 16, 2021" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </>
    );

}
export default Connections;