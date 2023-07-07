import React, { useState } from "react";

//include images into your bundle

//create your first component
export function TrafficLight() {
    const [selectedColor, setSelectedColor] = useState("");
	return (
        <>
        <div className="TrafficPole"></div>
        <div className="container-fluid">
        <div className="TrafficBg">
            <div  onClick={() => setSelectedColor("red")}className= {"light red" + (selectedColor === "red" ? "glow" : "")}></div>
            <div onClick={() => setSelectedColor("yellow")}className={"light yellow" + (selectedColor === "yellow" ? "glow" : "")}></div>
            <div onClick={() => setSelectedColor("green")}className={"light green" + (selectedColor === "green" ? "glow" : "")}></div>
        </div>
        </div>
        </>
	);
};

export default TrafficLight;