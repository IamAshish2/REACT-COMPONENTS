import { useEffect, useState } from "react";

const ScrollIndicator = ({ url }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [data, setData] = useState();
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function fetchProducts(url) {
    try {
      setLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      if (data && data.products && data.products.length > 0) {
        setData(data.products);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
    }
  }

  function handleScroll() {
    // console.log(
    //   document.body.scrollTop, // height from the top
    //   document.documentElement.scrollTop, // moved height from the top
    //   document.documentElement.scrollHeight, // total height
    //   document.documentElement.clientHeight // total client height
    // );
    const scrolledLength =
      document.body.scrollTop || document.documentElement.scrollTop;

    const totalHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((scrolledLength / totalHeight) * 100);
  }

  useEffect(() => {
    url !== "" && fetchProducts(url);
  }, [url]);

  // adding scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  if (loading) return <div>Loading please wait</div>;
  if (error) return <div>An error occured!</div>;

  return (
    <div className="">
      <div className="fixed top-0 left-0 right-0 border w-full bg-black text-center">
        <h1c className="text-white font-bold">Custom scroll indicator</h1c>
        <div className="h-10 w-full border bg-green-500">
          <div style={{ width: `${scrollPercentage}%` }} className="bg-red-500 h-4 w-0 border"></div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center pt-20">
        {data &&
          data.length > 0 &&
          data.map((data, index) => <h1 key={index}>{data.title}</h1>)}
      </div>
    </div>
  );
};

export default ScrollIndicator;
