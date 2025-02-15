import Accordian from "./components/Accordian/Accordian";
import ParentModelPopper from "./components/CustomModalPopup/ParentModelPopper";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import LoadMore from "./components/InfiniteScroll/InfiniteScroll";
import QrGenerator from "./components/QrCodeGenerator/QrGenerator";
import Random from "./components/RandomColorGenerator/Random";
import ScrollIndicator from "./components/ScrollIndicator/ScrollIndicator";
import StarRating from "./components/StarRating/StarRating";
import ThemeSwitcher from "./components/SwitchTheme/ThemeSwitcher";
import TabsParent from "./components/Tabs/TabsParent";
import menus from "./components/TreeView/data";
import TreeView from "./components/TreeView/TreeView";
import GithubProfileLookup from "./components/GithubProfileFinder/GithubProfileLookup";
function App() {
  return (
    <div>
      <GithubProfileLookup />
    </div>
  );
}

export default App;
