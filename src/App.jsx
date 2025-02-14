import Accordian from "./components/Accordian/Accordian";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import Random from "./components/RandomColorGenerator/Random";
import StarRating from "./components/StarRating/StarRating";
function App() {
  return (
    <div>
      <ImageSlider url={'https://picsum.photos/v2/list?'} page={2} limit={10}/>
    </div>
  );
}

export default App;
