import React from "react";
import {useGetPrefsPopulation}  from "../hooks/useGetPrefsPopulation";

export const PrefsPopulationChart: React.FC<{prefCode: number}> = ({prefCode}) => {
    const { result, error } = useGetPrefsPopulation(prefCode);
    if (error) return <div>Error loading preferences</div>;
    console.log(result.data)
};

