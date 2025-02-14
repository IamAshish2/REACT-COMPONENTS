import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const ImageSlider = ({ url, page = 1, limit }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  async function loadImages(url) {
    const response = await fetch(`${url}page=${page}&limit=${limit}`);
    const imageData = await response.json();
    setImages(imageData);
    console.log(imageData);
  }

  function handleLeftClick() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleRightClick() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  function handleIconClicked(index) {
    setCurrentSlide(index);
  }

  console.log(currentSlide);

  useEffect(() => {
    if (url !== "") loadImages(url);
  }, [url]);
  return (
    <div className="flex flex-col justify-center items-center p-2">
      <div className="flex justify-center items-center">
        <div
          onClick={() => {
            handleLeftClick();
          }}
        >
          <BsArrowLeftCircleFill
            className="text-white drop-shadow-md absolute left-3 z-50"
            size={44}
          />
        </div>
        <div className="h-80 border relative z-0">
          {images &&
            images.map((image, currentIndex) => (
              <img
                key={currentIndex}
                src={image.download_url}
                alt="Slider Image"
                className={`h-full w-full object-cover inset-0 ${
                  currentSlide !== currentIndex ? "hidden" : "visible"
                }`}
              />
            ))}
        </div>
        <div
          onClick={() => {
            handleRightClick();
          }}
        >
          <BsArrowRightCircleFill
            className="text-white drop-shadow-md absolute right-3 z-30"
            size={44}
          />
        </div>
      </div>

      <span className="flex -mt-10 z-50">
        {images &&
          images.length > 0 &&
          images.map((_, index) => (
            <button
              onClick={() => {
                handleIconClicked(index);
              }}
              className={`border h-4 w-4 m-2 rounded-full ${
                currentSlide === index ? "bg-red-400" : "bg-gray-400"
              }`}
            ></button>
          ))}
      </span>
    </div>
  );
};

export default ImageSlider;
