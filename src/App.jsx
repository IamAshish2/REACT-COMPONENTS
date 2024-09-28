import LoadInfinite from "./BackToBusiness/LoadInfinite/LoadInfinite"
import TreeView from "./Components/TreeView/TreeView"
import menus from "./Components/TreeView/data"
function App() {

  return (
  
    <div>
     <TreeView menus={menus}/>
    </div>
      


  )
}

export default App
