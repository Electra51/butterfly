import BreadCrumb from "@/components/shared/BreadCrumb";
import AboutUs from "@/components/ui/AboutUsPageUI/AboutUs";
import OurProduct from "@/components/ui/AboutUsPageUI/OurProduct";
import OurTeam from "@/components/ui/AboutUsPageUI/OurTeam";
const aboutPage = () => {
  return (
    <div>
      <div
        className="hero h-[460px] bg-fixed"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/CQj0JQq/istockphoto-952772504-612x612.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg backdrop-blur-sm bg-white bg-opacity-30 px-24 py-5">
            <h1 className="mb-5 text-5xl font-bold text-[#242424]">About Us</h1>
            <BreadCrumb bread={"about"} link={"/about"} />
          </div>
        </div>
      </div>
      <AboutUs />
      <OurTeam />
      <OurProduct />
    </div>
  );
};

export default aboutPage;
