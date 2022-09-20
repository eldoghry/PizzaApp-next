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
      const order = await Order.findById(id);

      res.status(200).json({ order });
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  if (method === "PUT") {
    try {
      const order = await Order.findByIdAndUpdate(id, req.body, { new: true });
      res.status(200).json({ order });
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  if (method === "DELETE") {
    try {
      await Order.findOneAndDelete(id);
      res.status(200).json("order has been deleted");
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}
