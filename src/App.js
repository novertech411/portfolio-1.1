import Home from "./pages/Home";
import RootLayout from "./layouts/RootLayout";
import "./App.css"

function App() {
  return (
    <div>
      <RootLayout>
        <Home />
      </RootLayout>
    </div>
  );
}

export default App;
