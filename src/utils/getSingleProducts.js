import {
  getProductByIdFromDb,
  getProductsFromDb,
} from "@/services/productSalon.service";
import { cache } from "react";
import "server-only";
const getSingleProducts = cache(getProductByIdFromDb);

export default getSingleProducts;
