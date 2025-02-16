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
import SearchAutoComplete from "./components/SearchAutoComplete/SearchAutoComplete";
import TicTacToe from "./components/TicTacToe/TicTacToe";
import FeatureFlagGlobalState, {
  FeatureFlagContext,
} from "./components/FeatureFlags/context/FeatureFlagContext";
import UseFetchHookTest from "./components/useFetchHook/UseFetchHookTest";

import FeatureFlag from "./components/FeatureFlags/FeatureFlag";
import Modal from "./components/CloseOnOutsideClick/Modal";
import WindowResizeTest from "./components/useWindowResize/WindowResizeTest";

function App() {
  return (
    <div>
      <WindowResizeTest />
    </div>
  );
}

export default App;
