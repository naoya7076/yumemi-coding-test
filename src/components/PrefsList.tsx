import React, { Dispatch, SetStateAction } from "react";
import { useGetPrefs } from "../hooks/useGetPrefs";

export const PrefsList: React.FC<{setPrefCodes: Dispatch<SetStateAction<number[]>>}> = ({setPrefCodes}) => {
    const { result, error, isLoading } = useGetPrefs();
    if (error) return <div>Error loading preferences</div>;
    if (isLoading) return <div>Loading preferences</div>;
    return (
        <div>
            {result.map((pref, index) => (
                <label key={index}>
                    <input type="checkbox" value={pref.prefCode}
                     onClick={() => setPrefCodes((prev) => {
                         if (prev.includes(pref.prefCode)) {
                             return prev.filter((p) => p !== pref.prefCode);
                         } else {
                             return [...prev, pref.prefCode];
                         }
                     })}
                     />
                    {pref.prefName}
                </label>
            ))}
        </div>
    );
};

