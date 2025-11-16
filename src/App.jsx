import { Route, Routes } from "react-router-dom"
import { MainLayout } from "./layout/main-layout"
import { Home } from "./pages/home"
import { About } from "./pages/about"
import { Shop } from "./pages/shop"
import { ShopSingle } from "./pages/shopSingle"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ShopSingle />} />

        </Route>
      </Routes>
    </>
  )
}

export default App
