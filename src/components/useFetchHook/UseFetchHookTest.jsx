import useFetch from "./UseFetchCustomHook";

function UseFetchHookTest() {
  const { loading, error, data } = useFetch("https://dummyjson.com/products");
  // console.log(loading, error, data);

  return (
    <div className="flex flex-col items-center justify-center mt-3">
      {error !== "" ? <div>Error {error} occured </div> : ""}
      {loading ? (
        <div>Loading</div>
      ) : (
        data && data.products.map((product) => <div>{product.title}</div>)
      )}
    </div>
  );
}

export default UseFetchHookTest;
