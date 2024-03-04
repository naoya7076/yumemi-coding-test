import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
import {useGetPrefsPopulation}  from "../hooks/useGetPrefsPopulation";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

export const PrefsPopulationChart: React.FC<{prefCodes: number[]}> = ({prefCodes}) => {
    const { results, error, isLoading } = useGetPrefsPopulation(prefCodes);
    if (error) return <div>Error loading preferences</div>;
    if (isLoading) return <div>Loading preferences</div>;
    const labels = results[0].result.data[0].data.map((d) => d.year);
    const graphData = results.map(({result},index) => {
        return {
            label: prefCodes[index].toString(),
            data: result.data[0].data.map((d) => d.value),
        };
    });
    const data = {
        labels,
        datasets: graphData
    };
    // TODO: 色が真っ黒なので後で直す
    return (
        <div>
            <Line data={data} />
        </div>
    );
}

