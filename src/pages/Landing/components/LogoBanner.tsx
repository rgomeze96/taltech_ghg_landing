import EUCofounding from "@/assets/eu-cofounding.svg?react";
import Kliimam from "@/assets/kliimaministeerium.svg?react";
import TaltechPink from "@/assets/taltech-pink.svg?react";

const LogoBanner = () => {
  return (
    <>
      <div className="bg-light min-h-[245px] flex items-center">
        <div className="container max-w-[1440px] flex flex-col md:flex-row justify-between items-center w-full">
          <TaltechPink className="w-[178px] h-[141px]" />
          <Kliimam className="w-[178px] h-[141px]" />
          <EUCofounding className="w-[178px] h-[141px] pr-7" />
        </div>
      </div>
    </>
  );
};

export default LogoBanner;
