import "server-only";
import DbConnect from "./DbConnect";
import { ObjectId } from "mongodb";

export const getProductsFromDb = async () => {
  const db = await DbConnect();
  const productCollection = db.collection("products");
  return productCollection.find({}).toArray();
};

export const getProductByIdFromDb = async (id) => {
  const db = await DbConnect();
  const productCollection = db.collection("products");
  const query = {
    _id: new ObjectId(id),
  };
  return productCollection.findOne(query);
};
export const getProductsByIdsFromDb = async (ids = []) => {
  const db = await DbConnect();
  const productCollection = db.collection("products");
  const idsWithObjectId = ids.map((id) => new ObjectId(id));
  const query = {
    _id: { $in: idsWithObjectId },
  };
  return productCollection.find(query).toArray();
};
