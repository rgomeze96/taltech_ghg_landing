import HomeHeader from "./components/HomeHeader";
import HowOkasWorks from "./components/HowOkasWorks";
import HowSarvWorks from "./components/HowSarvWorks";
import LogoBanner from "./components/LogoBanner";
import OkasSarvCards from "./components/OkasSarvCards";
import OurSupportServices from "./components/OurSupportServices";
import VisitDatabaseBanner from "./components/VisitDatabaseBanner";

const Landing = () => {
  return (
    <>
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="container lg:px-36">
          <HomeHeader />
          <OkasSarvCards />
          <VisitDatabaseBanner />
        </div>
      </div>
      <LogoBanner />
      <HowOkasWorks />
      <HowSarvWorks />
      <OurSupportServices />
    </>
  );
};

export default Landing;
