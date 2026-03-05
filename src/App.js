import About from "./pages/Aboutme";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import RootLayout from "./layouts/RootLayout";
import "./App.css"

function App() {
  return (
    <div>
      <RootLayout>
        <Home />
        <Work />
        <About />
        <Contact />
      </RootLayout>
    </div>
  );
}

export default App;
