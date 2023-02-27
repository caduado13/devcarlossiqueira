import React from "react";
import "./progress.css";

export default function ProgressBar({progress}){

    return(<div className="progress-bar">
        <div className="progress" style={{width: progress}}><p>{progress}</p></div>
    </div>)
}