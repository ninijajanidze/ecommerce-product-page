import Slider from "react-slick";
import SliderType from "react-slick";
import { useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Product1 from "/images/image-product-1.jpg";
import Product2 from "/images/image-product-2.jpg";
import Product3 from "/images/image-product-3.jpg";
import Product4 from "/images/image-product-4.jpg";
import Previous from "/images/icon-previous.svg";
import Next from "/images/icon-next.svg";
import Img1 from "/images/image-product-1-thumbnail.jpg";
import Img2 from "/images/image-product-2-thumbnail.jpg";
import Img3 from "/images/image-product-3-thumbnail.jpg";
import Img4 from "/images/image-product-4-thumbnail.jpg";
import CloseIcon from "/images/icon-close.svg";

type Photo = {
  src: string;
  alt: string;
};

const Slide = () => {
  const sliderRef = useRef<SliderType | null>(
    null
  );
  const [selectedImage, setSelectedImage] =
    useState<number>(0);
  const [isModal, setIsModal] = useState(false);

  const photos: Photo[] = [
    { src: Product1, alt: "Photo 1" },
    { src: Product2, alt: "Photo 2" },
    { src: Product3, alt: "Photo 3" },
    { src: Product4, alt: "Photo 4" },
  ];

  const images: Photo[] = [
    { src: Img1, alt: "Thumbnail 1" },
    { src: Img2, alt: "Thumbnail 2" },
    { src: Img3, alt: "Thumbnail 3" },
    { src: Img4, alt: "Thumbnail 4" },
  ];
  const PreviousArrow: React.FC<{
    onClick?: () => void;
  }> = ({ onClick }) => {
    return (
      <button
        onClick={onClick}
        className={`${
          isModal
            ? "w-[40px] h-[40px] lg:w-[56px] lg:h-[56px] bg-white rounded-full border-none absolute lg:left-[-26px] md:left-[-20px] left-[16px] top-1/2 -translate-y-1/2 cursor-pointer z-20"
            : "absolute top-1/2 -translate-y-1/2 w-[40px] h-[40px] lg:w-[56px] lg:h-[56px] bg-white rounded-[50%] ml-[16px] cursor-pointer z-20"
        }`}
      >
        <img
          className={`${
            isModal
              ? "m-auto w-[9px] h-[13px] md:w-[9px] md:h-[13px] lg:w-[10px] lg:h-[14px]"
              : "m-auto w-[9px] h-[13px] md:w-[9px] md:h-[13px] lg:w-[10px] lg:h-[14px]"
          }`}
          src={Previous}
          alt="Previous"
        />
      </button>
    );
  };

  const NextArrow: React.FC<{
    onClick?: () => void;
  }> = ({ onClick }) => {
    return (
      <button
        onClick={onClick}
        className={`${
          isModal
            ? "w-[40px] h-[40px] lg:w-[56px] lg:h-[56px] bg-white rounded-full border-none absolute lg:right-[-26px] md:right-[-20px] right-[16px] top-1/2 -translate-y-1/2 cursor-pointer z-20"
            : "w-[40px] h-[40px] bg-white rounded-full border-none absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer z-20"
        }`}
      >
        <img
          className={`${
            isModal
              ? "m-auto w-[9px] h-[13px] md:w-[9px] md:h-[13px] lg:w-[10px] lg:h-[14px]"
              : "m-auto w-[9px] h-[13px] md:w-[9px] md:h-[13px] lg:w-[10px] lg:h-[14px]"
          }`}
          src={Next}
          alt="Next"
        />
      </button>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PreviousArrow />,
    nextArrow: <NextArrow />,
    beforeChange: (_: number, next: number) =>
      setSelectedImage(next),
  };

  return (
    <div>
      <div
        className={`${
          isModal
            ? "hidden md:block fixed inset-0 bg-black bg-opacity-75 z-50"
            : ""
        }`}
      ></div>

      {isModal && (
        <img
          className="hidden md:block lg:block absolute z-50 w-[20px] h-[20px] md:mt-[-100px] md:ml-[560px] lg:mt-[-100px] lg:ml-[755px] cursor-pointer"
          onClick={() => setIsModal(false)}
          src={CloseIcon}
          alt="close icon"
        />
      )}

      <div className="md:hidden">
        <Slider
          {...settings}
          ref={(slider) => {
            sliderRef.current = slider;
          }}
        >
          {photos.map((photo, index) => (
            <div key={index}>
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-[375px] h-[300px]"
              />
            </div>
          ))}
        </Slider>
      </div>

      <div
        className={`${
          isModal
            ? "hidden md:block absolute z-50 mt-[-70px]  ml-[230px] md:w-[350px] lg:w-[550px]"
            : "hidden"
        }`}
      >
        <Slider
          {...settings}
          ref={(slider) => {
            sliderRef.current = slider;
          }}
        >
          {photos.map((photo, index) => (
            <div key={index}>
              <img
                src={photo.src}
                alt={photo.alt}
                className="md:w-[350px] md:h-[350px] md:rounded-[15px]
                  lg:w-[550px] lg:h-[550px] lg:rounded-[15px]"
              />
            </div>
          ))}
        </Slider>
      </div>

      <img
        src={photos[selectedImage].src}
        onClick={() => setIsModal(true)}
        className="hidden md:block rounded-[15px]"
        alt={photos[selectedImage].alt}
      />

      <div className="flex lg:space-x-8">
        {images.map((image, index) => (
          <div
            key={index}
            className={`hidden lg:block md:block relative group md:mt-[20px] md:mr-[12px] lg:mt-[32px] lg:mr-0 lg:w-[88px] lg:h-[88px] md:w-[78px] md:h-[78px] cursor-pointer rounded-[10px]
              ${
                selectedImage === index
                  ? "border-[2px] border-[#ff7e1b] rounded-[12px] opacity-50"
                  : ""
              }`}
            onClick={() =>
              setSelectedImage(index)
            }
          >
            <img
              src={image.src}
              alt={image.alt}
              className="hidden md:block lg:block rounded-[10px]"
            />
            <div className="absolute inset-0 bg-[rgba(255,255,255,0.5)] opacity-0 group-hover:opacity-100 rounded-[10px] transition-opacity duration-300"></div>
          </div>
        ))}
      </div>

      <div
        className={`${
          isModal
            ? "absolute z-50 md:mt-[-170px] md:ml-[232px] lg:mt-[-70px] lg:ml-[280px]"
            : "hidden"
        }`}
      >
        <div className="flex lg:space-x-8">
          {images.map((image, index) => (
            <div
              key={index}
              className={`hidden lg:block md:block relative group md:mt-[20px] md:mr-[12px] lg:mt-[32px] lg:mr-0 lg:w-[88px] lg:h-[88px] md:w-[78px] md:h-[78px] cursor-pointer rounded-[10px]
              ${
                selectedImage === index
                  ? "border-[2px] border-[#ff7e1b] rounded-[12px] opacity-50"
                  : ""
              }`}
              onClick={() => {
                setSelectedImage(index);
                sliderRef.current?.slickGoTo(
                  index
                );
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="hidden md:block lg:block rounded-[10px]"
              />
              <div className="absolute inset-0 bg-[rgba(255,255,255,0.5)] opacity-0 group-hover:opacity-100 rounded-[10px] transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slide;
