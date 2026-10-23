import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Body from "./body";
import About from "./About ";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Body />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
