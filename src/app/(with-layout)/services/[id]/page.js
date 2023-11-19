import BreadCrumb4 from "@/components/shared/BreadCrumb4";
import Star from "@/components/shared/Star";
import HowWorks from "@/components/ui/ServicePageUI/HowWorks";
import ImageCarousel from "@/components/ui/ServicePageUI/ImageCarousel";
import getSingleService from "@/utils/getSingleService";
import Image from "next/image";

const ServiceDetailsPage = async ({ params: { id } }) => {
  const singleService = await getSingleService(id);
  console.log("object", singleService);

  return (
    <div>
      <div
        className="hero h-[460px] bg-fixed"
        style={{
          backgroundImage: `url(${singleService?.img})`,
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg backdrop-blur-sm bg-white bg-opacity-30 px-20 py-5">
            <h1 className="mb-5 text-5xl font-bold text-[#242424]">
              Our Services
            </h1>
            <BreadCrumb4 bread={singleService?.name} link={"/services"} />
          </div>
        </div>
      </div>
      <div className="mt-28 max-w-6xl mx-auto">
        <div className="grid grid-cols-3 gap-14">
          <div className="col-span-2 pr-8">
            {singleService?.detail?.map((oneDetail, index) => {
              return (
                <div key={index}>
                  <h3 className="text-xl font-bold tracking-[0.02rem]">
                    {oneDetail?.question1}
                  </h3>
                  <p className="text-black font-medium mt-3 text-justify tracking-[0.02rem] mb-8">
                    {oneDetail?.ans1}
                  </p>
                  <div className="mb-6 w-full">
                    {oneDetail?.img ? (
                      <Image
                        src={oneDetail?.img}
                        alt=""
                        width={500}
                        height={300}
                        className="w-full"
                      />
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              );
            })}
            <HowWorks />
          </div>
          <div>
            <p className="text-xl font-bold tracking-[0.02rem] mb-2">
              {singleService?.name}
            </p>
            <div className="flex items-center justify-start gap-4 text-black font-medium">
              <Star ratingPoint={singleService?.rating} /> (
              {singleService?.review} reviews)
            </div>
            <div className="flex justify-start gap-14 items-center">
              <p className="text-black font-medium mt-1">
                Price: $ {singleService?.price}
              </p>
            </div>
            <hr className="my-5" />
            <div className="bg-[#C2A74E] p-5 flex flex-col justify-center items-center">
              <h3 className="text-center font-bold tracking-[0.02rem] mb-2">
                Price Per Time
              </h3>
              <p className="text-center text-[14px] font-medium">
                {singleService?.detail[1].ans1.slice(0, 70)}
              </p>
              <div className="text-center text-[14px] font-medium mt-4">
                <p>20min ~~ $ 58.05</p>
                <p>40min ~~ $ 91.05</p>
                <p>55min ~~ $ 120.05</p>
              </div>

              <button className="bg-black px-4 py-1 my-3 text-[14px] text-white">
                Book an Appointment
              </button>
            </div>
            <p className="text-black font-medium mt-6">
              <span className="font-semibold">Material: </span>
              {singleService?.material}
            </p>
            <p className="text-black font-semibold mt-6">Tags:</p>{" "}
            <hr className="mb-5" />
            <div className="flex flex-wrap justify-normal gap-2 items-center max-w-md my-2 text-white">
              {singleService?.tag?.map((e, i) => (
                <div
                  className="bg-[#c2a74e] px-3 py-0 rounded-full text-[14px]"
                  key={i}
                >
                  {e}
                </div>
              ))}
            </div>
            <div>
              <p className="text-black font-semibold mt-8">Working Time:</p>{" "}
              <hr className="mb-3" />
              <p className="text-black font-medium text-[15px] text-justify">
                Butterfly is guarantee that you will appreciate the atmosphere
                of our place. Sapien gravida donec pretium ipsum porta justo
                integer.
              </p>
              <div className="flex justify-between items-center mt-4 text-black font-medium text-[15px] mr-8">
                <p>Mon - Fri</p> - <p>9.00 AM - 7.00 PM</p>
              </div>
              <div className="flex justify-between items-center mt-2 text-black font-medium text-[15px] mr-8">
                <p>Saturday</p> - <p>9.00 AM - 5.00 PM</p>
              </div>
              <div className="flex justify-between items-center mt-2 text-black font-medium text-[15px] mr-8 mb-6">
                <p>Sundays</p> - <p>9.30 AM - 3.00 PM</p>
              </div>
            </div>
            <ImageCarousel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsPage;
