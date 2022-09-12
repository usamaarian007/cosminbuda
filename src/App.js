import "./App.css";
import Home from "./Home";

function App() {
  exports.getPageName = () => {
    return window.location.href.split("/")[3];
  };

  return (
    <>
      <Home />
    </>
  );
}

export default App;
