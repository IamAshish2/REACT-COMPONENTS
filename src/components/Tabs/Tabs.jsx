import { useState } from "react";

const Tabs = ({ tabItems, onChange }) => {
  const [currentTab, setCurrentTab] = useState(0);

  function handleTabClick(index) {
    setCurrentTab(index);
    onChange(currentTab);
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        {tabItems &&
          tabItems.length > 0 &&
          tabItems.map((tab, index) => (
            <button
              key={index}
              className={`border m-2 rounded-md w-16 ${
                currentTab === index ? "bg-green-500" : "bg-violet-600"
              }`}
              onClick={() => {
                handleTabClick(index);
              }}
            >
              {tab.label}
            </button>
          ))}
      </div>
      <div className="">
        {tabItems[currentTab] && tabItems[currentTab].content}
      </div>
    </div>
  );
};

export default Tabs;
