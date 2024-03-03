import React from "react";
import { useGetPrefs } from "../hooks/useGetPrefs";

export const PrefsList: React.FC = () => {
    const { result, error } = useGetPrefs();
    if (error) return <div>Error loading preferences</div>;
    return (
        <div>
            {result && result.map((pref, index) => (
                <label key={index}>
                    <input type="checkbox" value={pref.prefCode} />
                    {pref.prefName}
                </label>
            ))}
        </div>
    );
};

