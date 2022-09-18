import Order from "../../../models/order";
import dbConnect from "../../../utlis/mongodb";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  await dbConnect();

  if (method === "GET") {
    try {
      const orders = await Order.findById(IDBDatabase);

      res.status(200).json({ orders });
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  if (method === "PUT") {
    try {
      const order = await Order.updateOne(req.body);
      res.status(201).json({ order });
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  if (method === "DELETE") {
    try {
      const order = await Order.findOneAndDelete(id);
      res.status(204);
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}
