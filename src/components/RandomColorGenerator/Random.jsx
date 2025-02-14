import React, { useState } from "react";

const Random = () => {
  const [colorType, setColorType] = useState("RGB");
  const [color, setColor] = useState("rgb(255,255,255)");
  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

  function generateRandomNumber(length) {
    return Math.round(Math.random() * length);
  }

  function randomColorGenerator() {
    if (colorType === "RGB") {
      const r = generateRandomNumber(255);
      const g = generateRandomNumber(255);
      const b = generateRandomNumber(255);
      setColor(`rgb(${r},${g},${b})`);
    } else {
      let hexColor = "#";
      for (let i = 0; i < 6; i++) {
        hexColor += hex[generateRandomNumber(hex.length - 1)];
      }
      setColor(hexColor);
    }
  }
  return (
    <div
      className={`p-2 h-screen `}
      style={{
        backgroundColor: color,
      }}
    >
      <div className="flex justify-between">
        <button
          onClick={() => {
            setColorType("HEX");
            setColor("");
          }}
          className="border p-2 rounded-lg bg-blue-500"
        >
          Create Hex Color
        </button>

        <button
          onClick={() => {
            setColorType("RGB");
            setColor("");
          }}
          className="border p-2 rounded-lg bg-blue-500"
        >
          Create Rgb color
        </button>

        <button
          onClick={randomColorGenerator}
          className="border p-2 rounded-lg bg-blue-500"
        >
          Generate Random color
        </button>
      </div>
      <div className="flex justify-center items-center">
        {" "}
        {colorType === "RGB" ? "Rgb color: " : "Hex Color"}: {color}
      </div>
    </div>
  );
};

export default Random;
