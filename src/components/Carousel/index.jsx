import { useMediaQuery } from "react-responsive";
import { useEffect } from "react";

const Carousel = ({ currentSlide, setCurrentSlide, slides, autoSlide = false, autoSlideInterval = 10000 }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 424px)' })
  const isMobileXL = useMediaQuery({ query: '(max-width: 670px)' })

  const previous = () =>
    setCurrentSlide((currentSlide) =>
      currentSlide === 0 ? slides.length - 1 : currentSlide - 1
    );

  const next = () =>
    setCurrentSlide((currentSlide) =>
      currentSlide === slides.length - 1 ? 0 : currentSlide + 1
    );

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="overflow-hidden relative">
      <div
        className={`w-full lg:h-[540px] md:h-[340px] flex items-center transition-transform ease-out duration-500 ${!isMobileXL ? "h-[280px]" : isMobile ? "h-[160px]" : "h-[240px]"}`}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <img src={slide} alt={`home ${index}`} className="h-full" />
        ))}
      </div>
      <div className="absolute inset-0 flex justify-between items-center p-4">
        <button
          onClick={previous}
          className="flex justify-center items-center lg:w-[40px] md:w-[30px] w-[20px] lg:h-[40px] md:h-[30px] h-[20px] p-2 rounded-full shadow opacity-60 text-gray-800 bg-white/80 hover:bg-white"
        >
          <i className="lg:text-base md:text-sm text-xs fa-solid fa-chevron-left" />
        </button>
        <button
          onClick={next}
          className="flex justify-center items-center lg:w-[40px] md:w-[30px] w-[20px] lg:h-[40px] md:h-[30px] h-[20px] p-2 rounded-full shadow opacity-60 text-gray-800 bg-white/80 hover:bg-white"
        >
          <i className="lg:text-base md:text-sm text-xs fa-solid fa-chevron-right" />
        </button>
      </div>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              className={`
              transition-all lg:w-3 w-2 lg:h-3 h-2 bg-white rounded-full
              ${currentSlide === i ? "lg:p-2 p-1" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
