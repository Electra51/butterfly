import getSingleService from "@/utils/getSingleService";

const ServiceDetailsPage = async ({ params: { id } }) => {
  const singleService = await getSingleService(id);
  return <div>{singleService.price}</div>;
};

export default ServiceDetailsPage;
