import React, { useState } from "react";

const images = [
  "https://picsum.photos/id/1015/600/300",
  "https://picsum.photos/id/1016/600/300",
  "https://picsum.photos/id/1018/600/300",
  "https://picsum.photos/id/1020/600/300",
];
const Carousel = () => {
  const [index, setIndex] = useState(0);

  function nextImage() {
    setIndex((prev) => (prev + 1) % images.length);
  }
  function prevImage() {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }
  return (
    <div style={{ textAlign: "center" }}>
      <img
        src={images[index]}
        style={{ width: "600px", borderRadius: "10px" }}
      />
      <div style={{ marginTop: "10px" }}>
        <button onClick={prevImage}>⬅ Prev</button>
        <button onClick={nextImage}>Next ➡</button>
      </div>
    </div>
  );
};

export default Carousel;
