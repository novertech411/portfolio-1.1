import About from "./pages/Aboutme";
import Home from "./pages/Home";
import Work from"./pages/Work";
import Contact from "./pages/Contact";
import { Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import "./App.css"

function App() {
  return (
    
    <div >

    
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About/>} />
          <Route path="work" element={<Work/>} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
      </div>
    
  );
}

export default App;
