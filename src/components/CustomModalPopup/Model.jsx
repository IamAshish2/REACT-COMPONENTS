import { FaSkullCrossbones } from "react-icons/fa6";
const Model = ({ id, header, body, footer, onClose = () => {} }) => {
  return (
    <div id={id || "defalut-id"} className="border w-96 h-96 relative mt-2">
      <span onClick={onClose} className="absolute top-1 right-1">
        <FaSkullCrossbones />
      </span>

      <div className="flex flex-col h-full p-2 text-center justify-between gap-10 mt-8">
        <div className="h-20 font-bold text-white w-full bg-green-500 flex justify-center items-center">
          <h1>{header || "Header"}</h1>
        </div>
        <div className="h-20 font-bold text-white w-full bg-red-500 flex justify-center items-center">
          <h1>{body || "body"}</h1>
        </div>
        <div className="h-20 font-bold text-white w-full bg-yellow-500 flex justify-center items-center">
          <h1>{footer || "footer"}</h1>
        </div>
      </div>
    </div>
  );
};

export default Model;
