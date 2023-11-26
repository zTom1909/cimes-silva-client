import image from "../../utils/images/Cimes-About-1.jpg"

const About = () => {
  return (
    <div className="bg-whiteBackground">
      <div className="grid grid-cols-12 gap-8 items-center">
        <div></div>
        <div className="h-full text-navText font-humanist777 col-span-10">
          <div className="mb-16 overflow-hidden h-[540px]">
            <img src={image} alt="about" className="w-full mt-[-80px]" />
          </div>
          <div className="mb-16 flex flex-col">
            <h1 className="mb-1 text-bold text-2xl" >Sobre Nosotros</h1>
            <p className="text-base">Somos una empresa familiar con una trayectoria que abarca tres generaciones. La vasta experiencia en el sector sodero nos permitió encarar el desarrollo de otros productos, modernizar los tratamientos de elaboración y continuar con el contacto domiciliario.</p>
            <p className="text-base">A través de estos años, nuestra actividad principal se fue modificando, dado que inicialmente era solamente la elaboración de soda, y en la actualidad producimos y comercializamos aguas, gaseosas, jugos en polvo y aguas saborizadas.
            </p>
          </div>
          <div className="mb-16 flex flex-col">
            <h1 className="mb-1 text-bold text-2xl" >
              Calidad y Posicionamiento en el Mercado
            </h1>
            <p className="text-base">Nuestro compromiso principal es brindar la mejor atención y servicio al cliente, respaldados por productos que cumplen con estrictos estándares de higiene y calidad, avalados por las normas ISO 9001 e ISO 14001.</p>
            <p className="text-base">Además, mantenemos una firme posición en el mercado, ofreciendo la mejor relación precio-calidad a nuestros clientes.
            </p>
          </div>
          <div className="mb-16 flex flex-col">
            <h1 className="mb-1 text-bold text-2xl" >Nuestros Valores</h1>
            <p className="text-base">Priorizamos el Servicio al Cliente, actuamos con Responsabilidad en cada paso y mantenemos un firme Compromiso con la Excelencia en todos nuestros productos.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
