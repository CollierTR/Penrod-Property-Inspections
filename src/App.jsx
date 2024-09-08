import Home from "./pages/Home"
import Nav from "./componets/Nav"
import NotFound from "./pages/NotFound"
import { Route, Routes } from "react-router-dom"
import Contact from "./pages/Contact"
import Services from "./pages/Services"
import ServiceOverlay from "./componets/ServiceOverlay"
import About from "./pages/About"

function App() {

  return (
    <main className="  my-0 mx-auto">
      <Nav></Nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} >
          <Route path=":service" element={<ServiceOverlay />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  )
}

export default App
