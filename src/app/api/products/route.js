import db from "@/products.json";

import { NextResponse } from "next/server";

export const GET = () => {
  const products = db.products;
  return NextResponse.json(products);
};
