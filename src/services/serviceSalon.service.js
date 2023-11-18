import "server-only";
import DbConnect from "./DbConnect";
import { ObjectId } from "mongodb";

export const getServicesFromDb = async () => {
  const db = await DbConnect();
  const serviceCollection = db.collection("services");
  return serviceCollection.find({}).toArray();
};

export const getServiceByIdFromDb = async (id) => {
  const db = await DbConnect();
  const serviceCollection = db.collection("services");
  const query = {
    _id: new ObjectId(id),
  };
  return serviceCollection.findOne(query);
};
