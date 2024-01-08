import mongoose from "mongoose";

const bitmapSchema = new mongoose.Schema({
  inscriptionId: {
    type: String,
    required: false,
    validate: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/
  },
  inscriptionNumber: {
    type: Number,
    required: false,
    validate: /^[0-9]+$/
  }
});

const Bitmap = mongoose.model("Bitmap", bitmapSchema);

export default Bitmap;
