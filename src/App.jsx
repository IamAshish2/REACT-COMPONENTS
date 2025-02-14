import Accordian from "./components/Accordian/Accordian";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import LoadMore from "./components/InfiniteScroll/InfiniteScroll";
import QrGenerator from "./components/QrCodeGenerator/QrGenerator";
import Random from "./components/RandomColorGenerator/Random";
import ScrollIndicator from "./components/ScrollIndicator/ScrollIndicator";
import StarRating from "./components/StarRating/StarRating";
import ThemeSwitcher from "./components/SwitchTheme/ThemeSwitcher";
import menus from "./components/TreeView/data";
import TreeView from "./components/TreeView/TreeView";
function App() {
  return (
    <div>
      <ScrollIndicator  url={'https://dummyjson.com/products?limit=100'}/>
    </div>
  );
}

export default App;
