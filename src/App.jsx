// import Accordian from "./Components/accordian/index"
import { Accordian } from "./accordian/Accordian"
import { RandomColor } from "./RandomColorGenerator/RandomColor"
import { StarRating } from "./StarRating/StarRating"
import ImageSlider from "./ImageSlider/ImageSlider.jsx"
import LoadMore from "./loadMoreData/LoadMore.jsx"
function App() {

  return (
  
    <div>
      {/* <Accordian/> */}
      {/* <RandomColor/>
      <StarRating noOfStars={10}/> */}

      {/* image slider component */}
      {/* page=2&limit=10 */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} 
      page={"2"} limit={"10"}/> */}

      {/* Load more component */}
      <LoadMore/>
    </div>
      


  )
}

export default App
