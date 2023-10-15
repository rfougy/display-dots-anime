import { Test } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Test />} />
    </Routes>
  </BrowserRouter>
);

export default App;
