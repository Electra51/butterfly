import BreadCrumb from "@/components/shared/BreadCrumb";
import ServicePageUI from "@/components/ui/ServicePageUI/ServicePageUI";
import getServices from "@/utils/getServices";

const ServicesPage = async () => {
  const allService = await getServices();
  return (
    <div>
      <div
        className="hero h-[460px] bg-fixed"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/n73Jybn/istockphoto-171379163-612x612.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg backdrop-blur-sm bg-white bg-opacity-30 px-20 py-5">
            <h1 className="mb-5 text-5xl font-bold text-[#242424]">
              Our Services
            </h1>
            <BreadCrumb bread={"Services"} link={"/services"} />
          </div>
        </div>
      </div>
      <ServicePageUI allService={allService} />
    </div>
  );
};

export default ServicesPage;
