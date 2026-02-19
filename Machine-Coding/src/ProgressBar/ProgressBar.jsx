import React, { useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const handleChange = (e) => {
    let value = Number(e.target.value);

    if (value < 0) value = 0;
    if (value > 100) value = 100;
    setProgress(value);
  };
  return (
    <div>
      <h1>Progress Bar</h1>
      <input
        type="number"
        placeholder="Enter %"
        value={progress}
        onChange={handleChange}
      />
      <div
        style={{
          width: "300px",
          height: "30px",
          border: "1px solid black",
          margin: "20px auto",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            backgroundColor: "green",
            transition: "width 0.3s",
          }}
        />
      </div>
      <p> {progress}%</p>
    </div>
  );
};

export default ProgressBar;
