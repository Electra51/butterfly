import { getServiceByIdFromDb } from "@/services/serviceSalon.service";
import { cache } from "react";
import "server-only";
const getSingleService = cache(getServiceByIdFromDb);

export default getSingleService;
