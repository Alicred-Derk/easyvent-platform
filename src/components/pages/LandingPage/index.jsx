import FooterSection from "../../custom-ui/Footer";
import NavigationMenu from "../../custom-ui/NavigationMenu";
import Banner from "./components/Banner";
import Events from "./components/Events";

const LandingPage = () => {
  return (
    <div className="w-[100vw] h-[100vh] overflow-y-auto overflow-x-hidden relative">
      <NavigationMenu />

      <Banner />

      <Events />

      <FooterSection />
    </div>
  )
};

export default LandingPage;