import React, { useEffect, useState } from "react";
// <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/>
const ScrollIndicator = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errMessage, setErrMessage] = useState(" ");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        if (data && data.products.length > 0 && Array.isArray(data.products)) {
          setData(data.products);
        }
      } catch (err) {
        setErrMessage(err.message);
        console.log();
      }
    };
    fetchData();
  }, [url]);

  const handleScrollPercentage = () => {
    // console.log(
    //   document.body.scrollTop,
    //   document.documentElement.scrollTop,
    //   document.documentElement.scrollHeight,
    //   document.documentElement.clientHeight
    // );

    // how much length we have scrolled
    const lengthScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      // actual height of the page/document, even the unseen part of the page
      document.documentElement.scrollHeight -
      // the height of the visible part of the page
      document.documentElement.clientHeight;
    // setting the state variable
    setScrollPercentage((lengthScrolled / height) * 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  });

  return (
    <div className="h-full flex flex-col justify-center items-center">
      {/* Scroll Indicator */}
      <div className="fixed top-0 w-full h-2 bg-gray-200 z-10">
        <div
          className="h-full bg-purple-600 transition-all duration-300 ease-out"
          style={{ width: `${scrollPercentage}%` }}
        ></div>
      </div>

      <h1 className="text-4xl text-purple-700">Custom Scroll Indicator</h1>
      <div className="border mt-3 mb-5">
        {data && data.length
          ? data.map((product) => (
              <p key={product.id} className="m-5">
                {product.title}
              </p>
            ))
          : null}
      </div>
    </div>
  );
};

export default ScrollIndicator;
