import SectionTitle from "@/components/shared/SectionTitle";
import getServices from "@/utils/getServices";
import ServiceCard from "../../ServicePageUI/ServiceCard";

const FeatureService = async () => {
  const allService = await getServices();
  const featuredServices = allService?.filter(
    (item) => item?.featured === "featured"
  );

  return (
    <div className="mt-32 flex flex-col justify-center max-w-6xl mx-auto">
      <SectionTitle heading={"Featured Services"}></SectionTitle>
      <div className="grid grid-cols-4 gap-8 mt-10">
        {featuredServices?.map((e, i) => (
          <ServiceCard item={e} key={i} />
        ))}
      </div>
    </div>
  );
};

export default FeatureService;
