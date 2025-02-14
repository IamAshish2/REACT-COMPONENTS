import { useEffect, useRef, useState } from "react";
import { Audio } from "react-loader-spinner";

const LoadMore = () => {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);
  const [disableButton, setDisableButton] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const observer = useRef(null);
  const loadMoreButtonRef = useRef(null);

  async function fetchProducts() {
    setIsLoading(true);
    const response = await fetch(
      `https://dummyjson.com/products?limit=20&skip=${
        count === 0 ? 0 : count * 20
      }`
    );
    const data = await response.json();
    setItems((prevItems) => [...prevItems, ...data.products]);
    if (data.products.length < 20) setDisableButton(true);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    const handleIntersection = (entries) => {
      const target = entries[0];
      if (target.isIntersecting && !isLoading && !disableButton) {
        setCount((prevCount) => prevCount + 1);
      }
    };

    observer.current = new IntersectionObserver(handleIntersection);

    if (loadMoreButtonRef.current) {
      observer.current.observe(loadMoreButtonRef.current);
    }

    return () => {
      if (loadMoreButtonRef.current) {
        observer.current.unobserve(loadMoreButtonRef.current);
      }
    };
  }, [isLoading, disableButton]);

  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      {items && items.length > 0 ? (
        <div className=" p-4 flex flex-wrap justify-center  w-full ">
          {items.map((item, index) => (
            <div key={index} className="border  ">
              <img
                src={item.thumbnail}
                className="object-fill bg-cover m-2 h-44"
                alt={item.title}
                loading="lazy"
              />
            </div>
          ))}
          {!disableButton && (
            <div ref={loadMoreButtonRef}>
              <button
                onClick={() => setCount(count + 1)}
                disabled={disableButton || isLoading}
                className="flex border p-2 mb-3 mt-4"
              >
                {isLoading ? "Loading..." : "Load More"}
              </button>
            </div>
          )}
          {disableButton && <p>No more items to load.</p>}
        </div>
      ) : (
        !isLoading && (
          <div className="mt-auto mb-auto">
            {" "}
            <Audio
              height="80"
              width="80"
              radius="9"
              color="green"
              ariaLabel="loading"
            />
          </div>
        )
      )}
    </div>
  );
};

export default LoadMore;
