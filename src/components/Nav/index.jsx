import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useLocation, useNavigate } from "react-router-dom";

import logo from "../../utils/images/cimesvg.svg";

const Nav = () => {
  const [isButtonFocused, setIsButtonFocused] = useState({
    home: false,
    about: false,
  });
  const location = useLocation();
  const navigate = useNavigate();
  const isPc = useMediaQuery({ query: "(max-width: 1023px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 767px)" });

  const calculateColor = (route, type = "background") => {
    if (
      location.pathname === route ||
      (location.pathname === "/" && route === "/home")
    )
      return type === "text" ? "text-navUnderline" : "bg-navUnderline";
    else
      return type === "text"
        ? "text-navUnderlineUnselected"
        : "bg-navUnderlineUnselected";
  };

  return (
    <div className="grid lg:grid-cols-12 md:grid-cols-6 grid-cols-8 lg:gap-8 md:gap-6 gap-2 items-center h-[128px] bg-whiteBackground">
      <div></div>
      <img src={logo} alt="logo cimes" className="lg:h-full md:h-4/5 h-3/5" />
      {!isTablet ? (
        <h1 className="lg:col-span-3 md:col-span-2 text-navUnderline lg:text-2xl md:text-xl text-lg  font-montserrat">
          CIMES SILVA
        </h1>
      ) : (
        <div className="col-span-4"></div>
      )}
      {!isPc && <div className="lg:col-span-2"></div>}
      <div className="grid grid-cols-2 lg:col-span-4">
        <div className="flex justify-center">
          {isPc ? (
            <i
              className={`mr-4 fa-solid fa-house hover:text-navUnderlineHover ${calculateColor(
                "/home",
                "text"
              )}`}
              onClick={() =>
                location.pathname !== "/" &&
                location.pathname !== "/home" &&
                navigate("/home")
              }
            />
          ) : (
            <div
              className="w-fit group flex flex-col items-center"
              onClick={() =>
                location.pathname !== "/" &&
                location.pathname !== "/home" &&
                navigate("/home")
              }
            >
              <button
                className="text-navText lg:text-md md:text-sm font-bold font-humanist777 focus:outline-none"
                onFocus={() =>
                  setIsButtonFocused({ ...isButtonFocused, home: true })
                }
                onBlur={() =>
                  setIsButtonFocused({ ...isButtonFocused, home: false })
                }
              >
                Home
              </button>
              <div
                className={`w-4/5 h-1 cursor-pointer rounded ${
                  isButtonFocused.home
                    ? "bg-navUnderlineHover"
                    : calculateColor("/home")
                } group-hover:bg-navUnderlineHover`}
              >
                ㅤ
              </div>
            </div>
          )}
        </div>
        <div className="flex justify-center">
          {isPc ? (
            <i
              className={`fa-solid fa-users hover:text-navUnderlineHover ${calculateColor(
                "/about",
                "text"
              )}`}
              onClick={() =>
                location.pathname !== "/about" && navigate("/about")
              }
            />
          ) : (
            <div
              className="w-fit group flex flex-col items-center"
              onClick={() =>
                location.pathname !== "/about" && navigate("/about")
              }
            >
              <button
                className="text-navText lg:text-md md:text-sm font-bold font-humanist777 focus:outline-none"
                onFocus={() =>
                  setIsButtonFocused({ ...isButtonFocused, about: true })
                }
                onBlur={() =>
                  setIsButtonFocused({ ...isButtonFocused, about: false })
                }
              >
                Sobre Nosotros
              </button>
              <div
                className={`w-4/5 h-1 cursor-pointer rounded ${
                  isButtonFocused.about
                    ? "bg-navUnderlineHover"
                    : calculateColor("/about")
                } group-hover:bg-navUnderlineHover`}
              >
                ㅤ
              </div>
            </div>
          )}
        </div>
        {/* <div className="flex justify-center">
          <div className="w-fit group flex flex-col items-center"
              onClick={() => location.pathname !== "/contact" && navigate("/contact")}>
            <button className="text-navText text-lg font-bold font-humanist777">
              Contactanos
            </button>
            <div className={`w-4/5 h-1 cursor-pointer rounded ${calculateColor("/contact")} group-hover:bg-navUnderlineHover`}>ㅤ</div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Nav;
