import HomeHeader from "./components/HomeHeader";
import HowOkasWorks from "./components/HowOkasWorks";
import HowSarvWorks from "./components/HowSarvWorks";
import LogoBanner from "./components/LogoBanner";
import OkasSarvCards from "./components/OkasSarvCards";
import VisitDatabaseBanner from "./components/VisitDatabaseBanner";

const Landing = () => {
  return (
    <>
      <div className="container">
        <HomeHeader />
        <OkasSarvCards />
        <VisitDatabaseBanner />
      </div>
      <LogoBanner />
      <HowOkasWorks />
      <HowSarvWorks />
    </>
  );
};

export default Landing;
