import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const PopularDevice = () => {

    const datePopularDevice = [
        { name: 'IOs', value: 400 },
        { name: 'Windows', value: 300 },
        { name: 'Android', value: 300 },
        { name: 'Others', value: 200 },
    ];

    const COLORS = ['#000', '#717671', '#454745', '#9ca09c'];
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <>
            <ResponsiveContainer width="98%" height={400}>
                <PieChart width={400} height={400}>
                <Pie
                    data={datePopularDevice}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {datePopularDevice.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                </PieChart>
            </ResponsiveContainer>
        </>
    );

}
export default PopularDevice;