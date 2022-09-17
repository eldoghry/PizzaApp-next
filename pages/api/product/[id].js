import dbConnect from "../../../utlis/mongodb";
import Product from "./../../../models/product";

export default async function handler(req, res) {
  const { method } = req;

  if (method === "GET") {
    try {
      dbConnect();
      const { id } = req.query;
      const product = await Product.findById(id);
      res.status(200).json({ product });
    } catch (error) {
      res.status(500).json(error);
    }
  } else if (method === "PUT") {
    try {
      dbConnect();
      const { id } = req.query;
      const product = await Product.updateOne({ _id: id }, req.body);

      res.status(200).json({ product });
    } catch (error) {
      res.status(500).json(error);
    }
  } else if (method === "DELETE") {
    try {
      dbConnect();
      const { id } = req.query;
      await Product.findOneAndDelete(id);
      res.status(204).json();
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
