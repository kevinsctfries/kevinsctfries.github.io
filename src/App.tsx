import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import { useEffect, useState } from "react";

function App() {
  const [animate, setAnimate] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setAnimate(false);
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 10);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      <div>
        <header>
          <NavBar />
        </header>
        <main className={animate ? "animate" : ""}>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
