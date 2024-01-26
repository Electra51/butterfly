import SectionTitle from "@/components/shared/SectionTitle";
import getServices from "@/utils/getServices";
import ServiceCard from "../../ServicePageUI/ServiceCard";
import Link from "next/link";

const FeatureService = async () => {
  const allService = await getServices();
  const featuredServices = allService?.filter(
    (item) => item?.featured === "featured"
  );

  return (
    <div className="mt-32 flex flex-col justify-center max-w-[18rem] lg:max-w-6xl mx-auto">
      <SectionTitle heading={"Featured Services"} />
      <Link href="/services">
        {" "}
        <p className="text-center text-[#C2A74E] hover:underline hover:text-blue-500 font-medium cursor-pointer text-[16px] mt-2 w-52 mx-auto">
          See All Services
        </p>
      </Link>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-10">
        {featuredServices?.map((e, i) => (
          <ServiceCard item={e} key={i} />
        ))}
      </div>
    </div>
  );
};

export default FeatureService;
