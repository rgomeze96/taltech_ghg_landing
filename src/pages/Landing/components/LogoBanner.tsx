import EUCofounding from "@/assets/eu-cofounding.svg?react";
import Kliimam from "@/assets/kliimaministeerium.svg?react";
import TaltechPink from "@/assets/taltech-pink.svg?react";

const LogoBanner = () => {
  return (
    <>
      <div className="bg-light min-h-[245px] w-full ">
        <div className="w-full max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-around px-20 py-10">
          <TaltechPink className="w-[178px] h-[141px]" />
          <Kliimam className="w-[178px] h-[141px]" />
          <EUCofounding className="w-[178px] h-[141px] pr-7" />
        </div>
      </div>
    </>
  );
};

export default LogoBanner;
