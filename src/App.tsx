import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./components/Home"
import { MenuComponent } from "./components/MenuComponent"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/menu" element={<MenuComponent />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
