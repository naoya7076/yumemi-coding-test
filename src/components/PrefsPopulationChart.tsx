import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import {useGetPrefsPopulation}  from "../hooks/useGetPrefsPopulation";

export const PrefsPopulationChart: React.FC<{prefCode: number}> = ({prefCode}) => {
    const { result, error, isLoading } = useGetPrefsPopulation(prefCode);
    if (error) return <div>Error loading preferences</div>;
    if (isLoading) return <div>Loading preferences</div>;
    const totalPopulationList = result.data[0].data; // Retrieve data using label name instead of array index
    return (
        <ResponsiveContainer width="100%" height="100%" minHeight={300} minWidth={100}>
            <LineChart
                data={totalPopulationList}
                width={500}
                height={300}
                margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
            >
                <XAxis dataKey="year" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                />
            </LineChart>
        </ResponsiveContainer>
    );
};

