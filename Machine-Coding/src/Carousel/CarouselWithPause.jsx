import React, { useEffect, useRef, useState } from "react";
const images = [
  "https://picsum.photos/id/1015/600/300",
  "https://picsum.photos/id/1016/600/300",
  "https://picsum.photos/id/1018/600/300",
  "https://picsum.photos/id/1020/600/300",
];
const CarouselWithPause = () => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);
  function nextImage() {
    setIndex((prev) => (prev + 1) % images.length);
  }
  function prevImage() {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }

  function startAutoSlide() {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000);
  }
  function stopSlide() {
    clearInterval(intervalRef.current);
  }
  useEffect(() => {
    startAutoSlide();
    return () => stopSlide();
  }, []);

  return (
    <div onMouseEnter={stopSlide} onMouseLeave={startAutoSlide}>
      <img src={images[index]} style={{ width: "600px" }} />
      <button onClick={nextImage}>Next</button>
      <button onClick={prevImage}>Previous</button>
    </div>
  );
};

export default CarouselWithPause;
