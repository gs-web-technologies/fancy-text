import React from 'react';
import Svgs from "@/components/svg-componet/Svgs";

function MapKey() {
    return (
        <div className="flex gap-5 text-black align-center justify-center pt-3 w-full">
            <div className="flex gap-1">
                <Svgs type="location" /> <span>Server Location</span>
            </div>
            <div className="flex gap-1">
                <Svgs type="tick" /> <span>Resolved</span>
            </div>
            <div className="flex gap-1">
                <Svgs type="cross" /> <span>Not Resolved</span>
            </div>
        </div>
    )
}

export default MapKey