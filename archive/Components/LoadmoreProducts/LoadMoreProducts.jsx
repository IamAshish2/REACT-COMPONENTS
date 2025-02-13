import React,{useEffect,useState} from 'react'

const LoadMoreProducts = () => {
    const [products,setProducts] = useState([]);
    const [count,setCount] = useState(0);
    const [loading,setLoading] = useState(false);
    const [disabled,setDisabledButton] = useState(false);

    
    async function fetchProducts(){
        try{
            setLoading(true);
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`);
            const data = await response.json();

            if(data  && data.products &&  data.products.length){
                // setProducts(data.products);
                // setProducts((p) => [...p,...data.products])
                setProducts((prevData) => [...prevData,...data.products] )
                setLoading(false);
                // console.log(data.products);
            }
          
        } catch(e){
            setLoading(false);
            console.log(e);
        }
    }

    function handleNextLoad(){
        console.log(count)
        setCount(count => count + 1);
    }


    useEffect(() => {
        fetchProducts();
    },[count]);


    loading ? <div>Loading...</div> : <div>Could not found products!</div>;

    return (
        <>
        
    <div className='grid grid-cols-4 m-2 '>
        {products && products.length ?
            products.map((items) => (
                <div  className='h-36 relative m-1 border border-gray-600'
                    style={{
                        backgroundImage:`url(${items.images[0]})`,
                        backgroundSize:"cover",
                        backgroundPosition:"center",
                        backgroundRepeat:"no-repeat"
                    }}>
                       <p className='text-[10px] truncate -mt-7'>{items.title}</p> 
                </div>
            ))
        :null} 
    </div>
    <button onClick={() => {handleNextLoad()}} className='border border-gray-600 p-1 ml-[50%]'>Load more..</button>
    </>
  )
}

export default LoadMoreProducts
