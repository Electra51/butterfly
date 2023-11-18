import { getProductsFromDb } from "@/services/productSalon.service";
import { cache } from "react";
import "server-only";

const getProducts = cache(() => {
  return getProductsFromDb();
});

export default getProducts;
