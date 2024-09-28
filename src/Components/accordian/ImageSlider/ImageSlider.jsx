import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./index.css";

const ImageSlider = ({ url, limit = "5", page = "1" }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errMsg, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  }
  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  loading ? <div> {loading} </div> : <div>{errMsg}</div>;

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="arrow arrow-left"
      />
      {images && images.length > 0
        ? images.map((imageItem,index) => {
            return (
              <img
                key={imageItem.id}
                src={imageItem.download_url}
                alt={imageItem.download_url}
                className={
                  currentSlide === index
                    ? "current-image"
                    : "hide-current-image"
                }
              />
            );
          })
        : null}

      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      />
      <span className="circle-indicator">
        {images && images.length
          ? images.map((_, index) => (
              <button onClick={() => setCurrentSlide(index)}
                key={index}
                className={currentSlide === index ? "current-indicator": "current-indicator inactive"}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
};

export default ImageSlider;
