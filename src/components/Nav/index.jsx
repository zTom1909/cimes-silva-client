import { useLocation, useNavigate } from "react-router-dom";

import logo from "../../utils/images/cimesvg.svg";

const Nav = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const calculateColor = (route) => {
    if (location.pathname === route || (location.pathname === "/" && route === "/home")) return "bg-navUnderline"
    else return "bg-navUnderlineUnselected"
  }

  return (
    <div className="grid grid-cols-12 gap-8 items-center h-[128px] bg-whiteBackground">
      <div></div>
      <img src={logo} alt="logo cimes" className="h-full" />
      <h1 className="col-span-2 text-navText text-[1.7rem] font-bold font-humanist777">
        Cimes Silva
      </h1>
      <div></div>
      <div className="grid grid-cols-3 col-span-6">
        <div className="flex justify-center">
          <div className="w-fit group flex flex-col items-center"
              onClick={() => (location.pathname !== "/" && location.pathname !== "/home") && navigate("/home")}>
            <button className="text-navText text-lg font-bold font-humanist777">
              Home
            </button>
            <div className={`w-4/5 h-1 cursor-pointer rounded ${calculateColor("/home")} group-hover:bg-navUnderlineHover`}>ㅤ</div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-fit group flex flex-col items-center" 
              onClick={() => location.pathname !== "/about" && navigate("/about")}>
            <button className="text-navText text-lg font-bold font-humanist777">
              Sobre Nosotros
            </button>
            <div className={`w-4/5 h-1 cursor-pointer rounded ${calculateColor("/about")} group-hover:bg-navUnderlineHover`}>ㅤ</div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-fit group flex flex-col items-center"
              onClick={() => location.pathname !== "/contact" && navigate("/contact")}>
            <button className="text-navText text-lg font-bold font-humanist777">
              Contactanos
            </button>
            <div className={`w-4/5 h-1 cursor-pointer rounded ${calculateColor("/contact")} group-hover:bg-navUnderlineHover`}>ㅤ</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
