import { getServicesFromDb } from "@/services/serviceSalon.service";
import { cache } from "react";
import "server-only";

const getServices = cache(() => {
  return getServicesFromDb();
});

export default getServices;
