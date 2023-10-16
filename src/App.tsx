import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default App;
