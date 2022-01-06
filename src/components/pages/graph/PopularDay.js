import React from 'react';
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const PopularDay = () => {

    const data = [
        {
          name: 'M',
          Scan: 1,
          amt: 1400,
        },
        {
          name: 'T',
          Scan: 20,
          amt: 1506,
        },
        {
          name: 'W',
          Scan: 11,
          amt: 989,
        },
        {
          name: 'TH',
          Scan: 15,
          amt: 1228,
        },
        {
          name: 'F',
          Scan: 40,
          amt: 1100,
        },
        {
          name: 'S',
          Scan: 30,
          amt: 1700,
        },
        {
          name: 'SU',
          Scan: 10,
          amt: 1700,
        },
    ];

    return (
        <>
            <ResponsiveContainer width="98%" height={400}>
                <ComposedChart
                    layout="vertical"
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 30,
                        right: 20,
                        bottom: 20,
                        left: 20
                    }}
                    >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" scale="band" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Scan" barSize={20} fill="#413ea0" />
                    </ComposedChart>
            </ResponsiveContainer>
        </>
    );

}
export default PopularDay;