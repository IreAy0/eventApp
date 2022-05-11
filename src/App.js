import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Home from './components/Pages/Home';
import Register from "./components/Pages/Register";

function App() {
  return (
    <BrowserRouter>
         
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register/:slug" element={<Register />} />

  </Routes>
  
  </BrowserRouter>
   
   
  );
}

export default App;
