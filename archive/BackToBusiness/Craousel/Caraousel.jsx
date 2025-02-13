import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const Caraousel = ({ url, limit = 5 }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchImages = async (getUrl) => {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=1&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (err) {
      setErrorMsg(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  const handlePrevious = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  const handleNext = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  // this is for the circles
  const handleClick = (getCurrentIndex) => {
    setCurrentSlide(getCurrentIndex);
  };

  if (loading) return <div>Loading data ! please wait a few seconds </div>;
  if (errorMsg !== null) return <div>Error Occured! Please try again</div>;

  return (
    <div className=" ml-auto mr-auto mt-5 relative flex center justify-center items-center w-[600px] h-[450px]">
      <BsArrowLeftCircleFill
        onClick={() => {
          handlePrevious();
        }}
        className="text-white left-1 absolute w-[2rem] h-[2rem] drop-shadow-md"
      />
      {images && images.length
        ? images.map((imageItem, index) => (
            <img
              className={
                currentSlide !== index
                  ? `hidden`
                  : `visible h-[100%] w-[100%] rounded-sm shadow-sm`
              }
              key={imageItem.id}
              alt={imageItem.url}
              src={imageItem.download_url}
            />
          ))
        : null}
      <BsArrowRightCircleFill
        onClick={() => {
          handleNext();
        }}
        className="text-white right-1 absolute w-[2rem] h-[2rem] drop-shadow-md"
      />
      <span className="rounded-full flex absolute bottom-1">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  handleClick(index);
                }}
                className={` h-8 w-8 rounded-full m-1 cursor-pointer ${
                  currentSlide === index ? "bg-white" : "bg-red-400"
                }`}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
};

export default Caraousel;
