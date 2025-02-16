import { useEffect, useRef, useState } from "react";

const ScrollTopBottom = () => {
  const [products, setProducts] = useState([]);
  const ref = useRef();

  async function getProducts() {
    const response = await fetch("https://dummyjson.com/products?limit=100");
    const data = await response.json();
    setProducts(data.products);
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  function scrollToBottom() {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    getProducts();
  }, [products]);

  return (
    <div className="flex flex-col items-center justify-center">
      <button onClick={scrollToBottom} className="border mt-2 mb-2 p-4">
        Scroll to bottom
      </button>
      <div className="flex flex-col items-center justify-center">
        {products && products.map((product) => <div>{product.title}</div>)}
      </div>
      <div ref={ref}>This is the bottom of the page.</div>
      <button
        id="bottom"
        onClick={scrollToTop}
        className="border mt-2 mb-2 p-4"
      >
        Scroll to top
      </button>
    </div>
  );
};

export default ScrollTopBottom;
