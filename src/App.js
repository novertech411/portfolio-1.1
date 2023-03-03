import About from "./pages/Aboutme";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";


function App() {
  return (
    
    <div >

    
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About/>} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
      </div>
    
  );
}

export default App;
