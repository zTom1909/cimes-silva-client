import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import axios from "axios";

import Carousel from "../Carousel";
import Product from "../Product";

import image1 from "../../utils/images/Cimes-Home-1B.jpg";
import image2 from "../../utils/images/Cimes-Home-2B.jpg";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const baseUrl = process.env.REACT_APP_HOST;

  const isHighRes = useMediaQuery({ query: "(max-width: 1090px)" });
  const isPc = useMediaQuery({ query: "(max-width: 1023px)" });
  const isMobileSmall = useMediaQuery({ query: '(max-width: 350px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 424px)' })
  const isMobileXL = useMediaQuery({ query: '(max-width: 670px)' })

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(baseUrl + "/product");
        setProducts(data);
      } catch (error) {
        console.error(error);
        alert(error.message)
      }
    })();
  }, [baseUrl]);

  const slides = [image1, image2];

  return (
    <div className="flex flex-col items-center text-navText font-humanist777 bg-whiteBackground">
      <div className={isHighRes ? "w-full h-fit mb-8 overflow-hidden grid lg:grid-cols-12 md:grid-cols-6 grid-cols-8 lg:gap-8 md:gap-6 gap-2" : "flex flex-col items-center mb-8"}>
        <div></div>
        <div className={`w-full max-w-[910px] lg:h-[540px] md:h-[340px] relative lg:col-span-10 md:col-span-4 col-span-6 overflow-hidden ${!isMobileXL ? "h-[280px]" : isMobile ? "h-[160px]" : "h-[240px]"}`}>
          <Carousel
            currentSlide={currentSlide}
            setCurrentSlide={setCurrentSlide}
            slides={slides}
            autoSlide={true}
          />
          {!isPc && (
            <div className="w-72 left-20 p-4 bottom-24 absolute rounded-lg overflow-hidden text-whiteBackground font-humanist777 backdrop-brightness-75 backdrop-blur-sm">
              <h1 className="mb-2 lg:text-2xl text-lg">
                {currentSlide === 0 ? "Quienes Somos?" : "Nuestros Valores"}
              </h1>
              <p className="mb-8 lg:text-sm text-xs">
                {currentSlide === 0
                  ? "Somos una empresa familiar con una trayectoria que abarca tres generaciones."
                  : "Nuestro principal objetivo es brindarle la mejor atención y servicio al cliente."}
              </p>
              <button
                onClick={() => navigate("/about")}
                className="rounded-lg px-[16px] py-[8px] text-white text-xl text-bold font-feltTipRoman bg-[#D93D33] hover:bg-[#DF5D55] drop-shadow-md"
              >
                Mas Información
              </button>
            </div>
          )}
        </div>
      </div>
      {isPc && (
        <div className="grid lg:grid-cols-12 md:grid-cols-6 grid-cols-6 lg:gap-8 md:gap-6 gap-4">
          <div></div>
          <div className="flex flex-col items-center lg:col-span-10 md:col-span-4 col-span-4 mb-8">
            <h1 className="mb-1 lg:text-2xl text-xl text-bold">
              {currentSlide === 0 ? "Quienes Somos?" : "Nuestros Valores"}
            </h1>
            <p className="mb-8 lg:text-sm text-xs">
              {currentSlide === 0
                ? "Somos una empresa familiar con una trayectoria que abarca tres generaciones."
                : "Nuestro principal objetivo es brindarle la mejor atención y servicio al cliente."}
            </p>
            <button
              onClick={() => navigate("/about")}
              className="rounded-lg px-[16px] py-[8px] text-white text-xl text-bold font-feltTipRoman bg-[#D93D33] hover:bg-[#DF5D55] drop-shadow-md"
            >
              Mas Información
            </button>
          </div>
        </div>
      )}
      {products.length > 0 && (
        <h1 className="mb-1 lg:text-2xl text-xl text-bold">Nuestros Productos</h1>
      )}
      {products.length > 0 && (
        <p className="mb-8 lg:text-sm text-xs">Mira un listado de nuestros productos</p>
      )}
      {products.length > 0 && (
        <div className={isHighRes ? "w-full mb-16 grid lg:grid-cols-12 md:grid-cols-6 grid-cols-6 lg:gap-8 md:gap-6 gap-2 items-center" : "max-w-[910px] mb-16 flex flex-warp justify-center items-center"}>
          <div></div>
          <div className={`grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 lg:gap-8 md:gap-6 gap-2 justify-center lg:col-span-10 md:col-span-4 col-span-4 ${isMobileSmall ? "grid-cols-1" : "grid-cols-2"}`}>
            {products?.map((product) => (
              <Product name={product.name} image={product.image} />
            ))}
          </div>
        </div>
      )}
      <button
        onClick={() => navigate("/contact")}
        className="mb-16 rounded-lg px-[16px] py-[8px] text-white lg:text-xl md:text-xl text-lg text-bold font-feltTipRoman bg-[#D93D33] hover:bg-[#DF5D55] drop-shadow-md"
      >
        Quiero registrarme
      </button>
    </div>
  );
};

export default Home;
