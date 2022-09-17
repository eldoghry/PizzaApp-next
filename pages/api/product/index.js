import dbConnect from "../../../utlis/mongodb";
import Product from "./../../../models/product";

export default async function handler(req, res) {
  const { method } = req;

  if (method === "POST") {
    try {
      dbConnect();
      const product = await Product.create(req.body);
      res.status(201).json({ product });
    } catch (err) {
      res.status(500).json({ err });
    }
  }

  if (method === "GET") {
    try {
      dbConnect();
      const products = await Product.find();
      res.status(200).json({ products });
    } catch (err) {
      res.status(500).json({ err });
    }
  }
}
