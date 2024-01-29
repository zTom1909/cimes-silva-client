import { useNavigate } from "react-router-dom";

import logo from "../../utils/images/404-logo.png"

const NoPage = () => {
  const navigate = useNavigate()
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="z-0 absolute w-screen h-screen top-0 bg-cover bg-center bg-no-page blur-sm"></div>
      <img src={logo} alt="water planet" className="z-10 w-[240px]" />
      <h1 className="z-10 mt-[-48px] text-navText text-[8rem] font-bold">404</h1>
      <p className="z-10 lg:max-w-[800px] md:max-w-[600px] max-w-[280px] mb-8 text-navText text-xl">
        Parece que esta página no existe! Presiona el boton para volver al inicio
        </p>
      <button onClick={() => navigate("/home")}
        className="z-10 rounded-md p-[8px] bg-[#C4E7F8] hover:bg-[#D8EFFA] drop-shadow-md">
          Volver al inicio
      </button>
    </div>
  );
};

export default NoPage;
