import React, { useEffect, useState } from "react";

const LoadInfinite = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disabledButton,setDisabledButton] = useState(false);

  const fetchProducts = async () => {
    
    try {
      const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${count == 0 ? 0 : count * 20}`);
      const data = await response.json();
      console.log(data);
      // check if data is empty or data contains more elements or not
      if (data && data.products && data.products.length) {
        setProducts(prev => [...prev,...data.products]);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchProducts();
    console.log(products);
  }, [count]);

  const handleClick = () => {
    setCount(prev => prev + 1);
  }

  useEffect(() => {
    if(products && products.length === 100 ) setDisabledButton(true);
  },[products])


  if (loading) return <div>Loading ....</div>;

  return (
    <>
      <div className="grid grid-cols-4 h-full w-full">
        {products && products.length
          ? products.map((product,index) => (
              <div key={index} className="h-80 w-96 border">
                <img className="h-[90%] w-[90%] border-gray-400" src={product.images[0]} alt="product" />
                <p className="ml-28">{product.title}</p>
              </div>
            ))
          : null}
      </div>
      <button  disabled={disabledButton} onClick={() => {handleClick()}} className={`border p-3 w-44 rounded-md ml-[50%] mt-5 ${disabledButton ? 'bg-red-700': 'bg-blue-700'}`}>Load More</button> 
      {disabledButton ? <p className="ml-[50%]">You have reached 100 products</p>: null}
    </>
  );
};

export default LoadInfinite;
