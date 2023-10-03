import "./App.css"
import NavBar from "./components/NavBar"
import ItemCount from "./components/ItemCount"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemListContainer from "./views/Home/ItemListContainer"
import Shooters from "./views/Shooters"
import Sandboxs from "./views/SandBoxs"
import Sports from "./views/Sports"
import ItemDetailContainer from "./components/ItemDetailContainer"

function App() {
  return (
    <>
      <NavBar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:id" element={<ItemDetailContainer/>}/>
          <Route path="/shooters" element= {<Shooters/>}/>
          <Route path="/sandbox" element={<Sandboxs/>}/>
          <Route path="/sports" element={<Sports/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
