"use client";
import React, { useEffect, useState } from "react";

function RefreshTable({ onRefresh }) {
    const [time, setTime] = useState(20);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        if (!refresh || time <= 0) return;
        const interval = setInterval(() => {
            onRefresh();
        }, time * 1000);

        return () => clearInterval(interval);
    }, [refresh, time, onRefresh]);

    return (
        <div className="flex justify-end gap-1 bg-white p-2">
            <div>
                <input
                    type="checkbox"
                    checked={refresh}
                    onChange={(e) => setRefresh(e.target.checked)}
                />
            </div>

            <label>Refresh:</label>

            <div className="border-b-2 border-black px-1">
                <input
                    type="number"
                    value={time}
                    min={1}
                    className="text-sm w-[40px] border-none focus:outline-none"
                    onChange={(e) => setTime(Number(e.target.value))}
                />
            </div>

            <span>sec.</span>
        </div>
    );
}

export default RefreshTable;