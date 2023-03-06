import mongoose from 'mongoose';

const bannerSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    product: {
      type: String,
      required: true,
    },
    discount: {
      type: Number,
      trim: true,
    },
    description: {
      type: String,
    },
    midText: {
      type: String,
      required: true,
    },
    textButton: {
      type: String,
      required: true,
    },
    time: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

let Dataset = mongoose.models.banner || mongoose.model('banner', bannerSchema);
export default Dataset;
