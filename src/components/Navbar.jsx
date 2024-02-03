import { useRef } from "react";
import { Html } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";

const Navbar = () => {
  return (
    <>
      <div className="z-10 w-full flex align-center justify-between px-10 py-4 fixed ">
        {/* fixed */}
        {/* <Link to="/" className="flex items-center gap-2"></Link> */}
        <h2 className="animate-bounce text-white text-center font-bold text-3xl w-[70px] h-[70px] py-4 bg-violet-300 rounded-full p-1.5">
          3D
        </h2>

        <ul className="list-none sm:flex flex-row gap-10 text-sky-200 font-medium py-5 ">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Navbar;
