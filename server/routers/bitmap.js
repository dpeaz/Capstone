import { Router } from "express";
import Bitmap from "../models/Bitmap.js";

const router = Router();

// Create bitmap route
router.post("/", async (request, response) => {
  try {
    const newBitmapCheck = new BitmapCheck(request.body);

    const data = await newBitmapCheck.save();

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});

export default router;
