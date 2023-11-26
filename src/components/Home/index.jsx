import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Carousel from "../Carousel";

import image1 from "../../utils/images/Cimes-Home-1B.jpg";
import image2 from "../../utils/images/Cimes-Home-2B.jpg";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const products = [
    { name: "Nombre Producto 1" },
    { name: "Nombre Producto 2" },
    { name: "Nombre Producto 3" },
    { name: "Nombre Producto 4" },
    { name: "Nombre Producto 5" },
  ];

  const slides = [image1, image2];

  return (
    <div className="flex flex-col items-center text-navText font-humanist777 bg-whiteBackground">
      <div className="w-full h-fit mb-8 overflow-hidden grid grid-cols-12 gap-8">
        <div></div>
        <div className="w-full h-[540px] relative col-span-10">
          {/* <img
            src={image1}
            alt="about"
            className="w-full mt-[-120px]"
          /> */}
          <Carousel currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} slides={slides} autoSlide={true} />
          <div className="w-72 left-20 p-4 bottom-24 absolute rounded-lg overflow-hidden text-whiteBackground font-humanist777 backdrop-brightness-75 backdrop-blur-sm">
            <h1 className="mb-2 text-2xl">{currentSlide === 0 ? "Quienes Somos?" : "Nuestros Valores"}</h1>
            <p className="mb-8 text-sm">
              {currentSlide === 0 ? "Somos una empresa familiar con una trayectoria que abarca tres generaciones." : "Nuestro principal objetivo es brindarle la mejor atención y servicio al cliente."}
            </p>
            <button
              onClick={() => navigate("/about")}
              className="rounded-lg px-[16px] py-[8px] text-white text-xl text-bold font-feltTipRoman bg-[#D93D33] hover:bg-[#DF5D55] drop-shadow-md"
            >
              Mas Información
            </button>
          </div>
        </div>
      </div>
      <h1 className="mb-1 text-3xl text-bold">Nuestros Productos</h1>
      <p className="mb-8 text-sm">Mira un listado de nuestros productos</p>
      <div className="w-full mb-16 grid grid-cols-12 gap-8 items-center">
        <div></div>
        {products.map((product) => (
          <div className="rounded-lg flex flex-col justify-end overflow-hidden bg-productBackground drop-shadow-md col-span-2">
            <div className="h-[176px]">ㅤ</div>
            <p className="flex justify-center items-center h-[48px] text-white bg-productName">
              {product.name}
            </p>
          </div>
        ))}
      </div>
      <button
        onClick={() => navigate("/contact")}
        className="mb-16 rounded-lg px-[16px] py-[8px] text-white text-xl text-bold font-feltTipRoman bg-[#D93D33] hover:bg-[#DF5D55] drop-shadow-md"
      >
        Quiero registrarme
      </button>
    </div>
  );
};

export default Home;
