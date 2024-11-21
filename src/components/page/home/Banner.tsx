import LeftBanner from "@/components/ui/LeftBanner";
import RightBanner from "@/components/ui/RightBanner";

const Banner = () => {
  return (
    <div className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lg:flex-row items-center border-b-[1px] border-b-black">
      <LeftBanner />
      <RightBanner />
    </div>
  );
};

export default Banner;
