import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxLength: 60,
    },

    description: {
      type: String,
      required: true,
      maxLength: 60,
    },

    prices: {
      type: [Number], //[10,20,30]
      required: true,
    },

    img: {
      type: String,
      required: true,
    },

    extraOptions: {
      type: [
        {
          text: { type: String, required: true },
          price: { type: Number, required: true },
        },
      ],
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
