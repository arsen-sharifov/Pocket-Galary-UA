import { useState, useEffect } from "react";

export default function Carousel({ images = [] }) {
  const [idx, setIdx] = useState(0);

  const prev = () =>
    setIdx((i) => (i + images.length - 1 + images.length) % images.length);
  const next = () => setIdx((i) => (i + 1) % images.length);

  useEffect(() => {
    if (idx >= images.length) {
      setIdx(0);
    }
  }, [images, idx]);

  if (images.length === 0) {
    return <p>Немає зображень</p>;
  }

  return (
    <div className="carousel">
      <button onClick={prev} className="nav left" aria-label="Попереднє">
        ‹
      </button>

      <img
        src={images[idx]}
        alt={`Slide ${idx + 1}`}
        loading="lazy"
        className="carousel-image"
      />

      <button onClick={next} className="nav right" aria-label="Наступне">
        ›
      </button>

      <p className="counter">
        {idx + 1} / {images.length}
      </p>
    </div>
  );
}
