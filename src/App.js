import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Home from "./pages/Home";
import { useEffect } from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "assets/js/main.js";
    script.async = true;
    document.body.appendChild(script);
  return () => {
      document.body.removeChild(script);
    }
  }, []);
  return (
    <div className="">
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
  
     <Footer></Footer>
  </div>
  );
}

export default App;
