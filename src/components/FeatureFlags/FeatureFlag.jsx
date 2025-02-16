import React, { useContext } from "react";
import { FeatureFlagContext } from "./context/FeatureFlagContext";
import ImageSlider from "../ImageSlider/ImageSlider";
import ScrollIndicator from "../ScrollIndicator/ScrollIndicator";
import StarRating from "../StarRating/StarRating";
import Tabs from "../Tabs/Tabs";
import TabsParent from "../Tabs/TabsParent";
import TreeView from "../TreeView/TreeView";
import data from "../TreeView/data";

{
  /* <FeatureFlagGlobalState>
        <FeatureFlag />
      </FeatureFlagGlobalState> */
}

const FeatureFlag = () => {
  const componentsToLoad = [
    {
      key: "showImageSlider",
      component: <ImageSlider />,
    },
    {
      key: "showScrollIndicator",
      component: <ScrollIndicator url={"https://dummyjson.com/products"} />,
    },
    {
      key: "showStarRating",
      component: <StarRating />,
    },
    {
      key: "showTabs",
      component: <TabsParent />,
    },
    {
      key: "showTreeView",
      component: <TreeView menu={data} />,
    },
  ];

  const { loading, elements } = useContext(FeatureFlagContext);

  function getComponentsToRender(key) {
    return elements[key];
  }

  console.log(elements);

  if (loading) return <div>Loading..</div>;

  return (
    <div className="">
      {componentsToLoad.map((componentItem) => (
        <div className="flex flex-col items-center justify-center min-h-96 ">
          {getComponentsToRender(componentItem.key)
            ? componentItem.component
            : null}
        </div>
      ))}
    </div>
  );
};

export default FeatureFlag;
