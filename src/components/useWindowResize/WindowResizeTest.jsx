import useWindowResize from "./UseWindowResize";

const WindowResizeTest = () => {
  const {windowSize} = useWindowResize();
  const { width, height } = windowSize;
  return (
    <div className="flex flex-col items-center justify-center mt-10 ">
      <div>width is {width}</div>
      <div>height is {height}</div>
    </div>
  );
};

export default WindowResizeTest;
