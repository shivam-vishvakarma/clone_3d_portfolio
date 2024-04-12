import { useRef } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const activeClass = ({ isActive }) =>
    isActive
      ? "text-blue-500 sm:bg-slate-300 dark:bg-slate-700 sm:px-1 rounded-lg"
      : "text-black dark:text-white";
  let navRef = useRef();
  return (
    <header className="header">
      <NavLink
        to="/"
        className={
          "w-10 h-10 rounded-lg bg-white border dark:border-zinc-500 border-black-500 dark:bg-slate-900 items-center justify-center flex font-[900] shadow-md"
        }
      >
        <p className="blue-gradient_text">SV</p>
      </NavLink>
      <button
        onClick={() => {
          //navRef.current.classList.toggle("max-sm:hidden");
          navRef.current.classList.toggle("-right-28");
          navRef.current.classList.toggle("right-10");
        }}
        className="sm:hidden z-20 w-10 h-10 border dark:border-zinc-500 border-black-500 rounded-lg bg-white dark:bg-slate-900 items-center justify-center flex font-[900] shadow-md"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            stroke="currentColor"
            d="M4 6h16M4 12h16m-7 6h7"
            className="stroke-black dark:stroke-white"
          />
        </svg>
      </button>
      <nav
        ref={navRef}
        className="max-sm:flex-col max-sm:z-10 -right-28 top-10 max-sm:p-5 transition-all duration-100 max-sm:rounded-lg max-sm:shadow-sm shadow-black max-sm:fixed max-sm:bg-white dark:max-sm:bg-slate-700 flex-row flex text-lg gap-7 font-medium"
      >
        <NavLink to="/" className={activeClass}>
          Home
        </NavLink>
        <NavLink to="/about" className={activeClass}>
          About
        </NavLink>
        <NavLink to="/projects" className={activeClass}>
          Projects
        </NavLink>
        <NavLink to="/contact" className={activeClass}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
}
