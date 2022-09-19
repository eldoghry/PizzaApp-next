import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    customer: {
      type: String,
      required: true,
      maxLength: 60,
    },

    address: {
      type: String,
      required: true,
      maxLength: 200,
    },

    total: {
      type: Number,
      required: true,
    },

    status: {
      type: Number, //0-> pending 1-> prepartion 2-> shiping 3-> deliverd
      required: true,
      default: 0,
    },

    method: {
      type: Number, //0-> cod 1-> paypal
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
