import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Body from "./body";
import About from "./About ";
import Aisolution from "./AiSolution";
import Service from "./Service";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Body />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/Aisolution" element={<Aisolution />}></Route>
          <Route path="/Service" element={<Service />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
