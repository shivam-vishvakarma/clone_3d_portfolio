import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./App.css";
import DarkModeBTN from "./Components/DarkModeBTN";
import { useEffect } from "react";
import { useDarkMode } from "./context/contexts";

function App() {
    const {isDarkMode, setIsDarkMode} = useDarkMode();
    useEffect(()=>{
        setIsDarkMode(JSON.parse(localStorage.getItem("dark-mode")) || false);
        if(isDarkMode){
            document.documentElement.classList.add("dark");
        }
        else{
            document.documentElement.classList.add("light");
        }
    },[])
    useEffect(()=>{
        localStorage.setItem("dark-mode", isDarkMode);
        if(isDarkMode){
            document.documentElement.classList.remove("dark", "light");
            document.documentElement.classList.add("dark");
        }else{
            document.documentElement.classList.remove("dark", "light");
            document.documentElement.classList.add("light");
        }
        // console.log(isDarkMode, document.documentElement.classList);
    },[isDarkMode])
  return (
    <main className="relative bg-slate-300/20 dark:bg-zinc-600 dark:text-black-500 min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
      <DarkModeBTN/>
    </main>
  );
}

export default App;
