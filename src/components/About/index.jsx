import { useMediaQuery } from "react-responsive";
import image from "../../utils/images/Cimes-About-1.jpg"

const About = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 424px)' })
  const isMobileXL = useMediaQuery({ query: '(max-width: 670px)' })

  return (
    <div className="grid lg:grid-cols-12 md:grid-cols-6 grid-cols-8 lg:gap-8 md:gap-6 gap-2 items-center bg-whiteBackground">
      <div></div>
      <div className={isMobile ? "h-full text-navText font-humanist777 lg:col-span-10 md:col-span-4 col-span-6" : "lg:col-span-10 md:col-span-4 col-span-6 flex flex-col items-center text-navText font-humanist777"}>
        <div className={`mb-16 w-full max-w-[910px] overflow-hidden lg:h-[540px] md:h-[340px] ${!isMobileXL ? "h-[280px]" : isMobile ? "h-[160px]" : "h-[240px]"}`}>
          <img src={image} alt="about" className="w-full h-full " />
        </div>
        <div className="max-w-[910px] lg:mb-16 md:mb-12 mb-8 flex flex-col">
          <h1 className="mb-1 lg:text-bold lg:text-2xl md:text-xl text-lg" >Sobre Nosotros</h1>
          <p className="lg:text-base md:text-sm text-xs">Somos una empresa familiar con una trayectoria que abarca tres generaciones. La vasta experiencia en el sector sodero nos permitió encarar el desarrollo de otros productos, modernizar los tratamientos de elaboración y continuar con el contacto domiciliario.</p>
          <p className="lg:text-base md:text-sm text-xs">A través de estos años, nuestra actividad principal se fue modificando, dado que inicialmente era solamente la elaboración de soda, y en la actualidad producimos y comercializamos aguas, gaseosas, jugos en polvo y aguas saborizadas.
          </p>
        </div>
        <div className="max-w-[910px] lg:mb-16 md:mb-12 mb-8 flex flex-col">
          <h1 className="mb-1 lg:text-bold lg:text-2xl md:text-xl text-lg" >
            Calidad y Posicionamiento en el Mercado
          </h1>
          <p className="lg:text-base md:text-sm text-xs">Nuestro compromiso principal es brindar la mejor atención y servicio al cliente, respaldados por productos que cumplen con estrictos estándares de higiene y calidad, avalados por las normas ISO 9001 e ISO 14001.</p>
          <p className="lg:text-base md:text-sm text-xs">Además, mantenemos una firme posición en el mercado, ofreciendo la mejor relación precio-calidad a nuestros clientes.
          </p>
        </div>
        <div className="max-w-[910px] lg:mb-16 md:mb-12 mb-8 flex flex-col">
          <h1 className="mb-1 lg:text-bold lg:text-2xl md:text-xl text-lg" >Nuestros Valores</h1>
          <p className="lg:text-base md:text-sm text-xs">Priorizamos el Servicio al Cliente, actuamos con Responsabilidad en cada paso y mantenemos un firme Compromiso con la Excelencia en todos nuestros productos.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
