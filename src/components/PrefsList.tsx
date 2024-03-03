import React from "react";
import { useGetPrefs } from "../hooks/useGetPrefs";

export const PrefsList: React.FC = () => {
    const { result, error, isLoading } = useGetPrefs();
    if (error) return <div>Error loading preferences</div>;
    if (isLoading) return <div>Loading preferences</div>;
    return (
        <div>
            {result.map((pref, index) => (
                <label key={index}>
                    <input type="checkbox" value={pref.prefCode} />
                    {pref.prefName}
                </label>
            ))}
        </div>
    );
};

