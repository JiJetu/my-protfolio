import Image from "next/image";
import { bannerImg } from "../../../public/assets";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <div
        className="relative w-[300px] h-[400px] lg:w-[500px] lg:h-[600px] z-10"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="500"
        data-aos-offset="0"
      >
        <Image
          src={bannerImg}
          alt="Banner Image"
          layout="fill"
          objectFit="cover"
          priority={true}
        />
      </div>

      <div className="absolute bottom-0 w-[350px] h-[300px] lg:w-[500px] lg:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
};

export default RightBanner;
