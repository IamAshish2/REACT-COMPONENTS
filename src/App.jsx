import Accordian from "./components/Accordian/Accordian";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import LoadMore from "./components/InfiniteScroll/InfiniteScroll";
import Random from "./components/RandomColorGenerator/Random";
import StarRating from "./components/StarRating/StarRating";
import menus from "./components/TreeView/data";
import TreeView from "./components/TreeView/TreeView";
function App() {
  return (
    <div>
      <TreeView menu={menus}/>
    </div>
  );
}

export default App;
