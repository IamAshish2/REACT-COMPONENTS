import React from "react";
import Tabs from "./Tabs";

const TabsParent = () => {
  const tabs = [
    {
      id: "1",
      label: "Tab 1",
      content: "This is tab 1",
    },
    {
      id: "2",
      label: "Tab 2",
      content: "This is tab 2",
    },
    {
      id: "3",
      label: "Tab 3",
      content: "This is tab 3",
    },
  ];

  function handleChange(id) {
    console.log(id);
  }

  return <Tabs tabItems={tabs} onChange={handleChange} />;
};

export default TabsParent;
