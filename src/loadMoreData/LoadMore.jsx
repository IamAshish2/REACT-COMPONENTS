import React, { useState, useEffect } from "react";

const LoadMore = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton,setDisableButton] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );

      const data = await response.json();

      if (data && data.products && data.products.length) {
        // setProducts(data.products);
        setProducts((prevData) => [...prevData,...data.products] )
        // console.log(data.products);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  }

  useEffect(() => {
    if(products && products.length ===100) setDisableButton(true);
  });

  function loadMore(){
    setCount(count => count + 1)
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  loading ? <div>Loading...</div> : <div>Could not found products!</div>;

  return (
    <>
    <div className="grid grid-cols-4 m-3">
      {products && products.length
        ? products.map((item, index) => (
            <div
              key={item.id}
              className="h-40 m-1 border relative border-gray-500"
              style={{backgroundImage:`url(${item.images[0]})`,
                    background:"contain",
                    backgroundSize:"contain",
                    backgroundPosition:"center",
                    backgroundRepeat:'no-repeat'}}
            >
              <p className=" flex justify-center items-center text-[10px] mt-36 font-mono">{item.title}</p>
            </div>
            
          ))
        : null}
        
    </div>
    <button disabled={disableButton}  onClick={loadMore} className="border border-gray-600 ml-[45%] p-1 mb-2">Load more...</button>
    {
      disableButton ? <p>You have reached 100 products.</p> : null
    }
    </>
    
  );
};

export default LoadMore;
