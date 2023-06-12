import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';

const Charts = () => {

    const data = [
        { name: 'English', marks: 71, tutorial: 10 },
        { name: 'Bangla', marks: 82, tutorial: 12 },
        { name: 'Java', marks: 62, tutorial: 14 },
        { name: 'Accounting', marks: 88, tutorial: 15 }
    ]
    return (
        <div>
            {/* <ResponsiveContainer width={'100%'} height={"100%"}> */}
                <LineChart width={600} height={400} data={data}>
                    <Line type='monotone' dataKey='marks' stroke="#8884d8" />
                    <Line type='monotone' dataKey='tutorial' stroke="red" />
                    <XAxis dataKey={'name'} />
                    {/* <YAxis dataKey={'marks'}/> */}
                    <YAxis dataKey='' />
                    <Tooltip />
                    <CartesianGrid />
                    <Legend/>

                </LineChart>
            {/* </ResponsiveContainer> */}
        </div>
    );
};

export default Charts;