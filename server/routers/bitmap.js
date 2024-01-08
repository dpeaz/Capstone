import { Router } from "express";
import Bitmap from "../models/bitmap.js";

const router = Router();

router.post("/", async (request, response) => {
  try {
    const newBitmap = new Bitmap(request.body);

    const data = await newBitmap.save();

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});

async function fetchBitmapTokenInfo() {
  const response = await fetch(
    "https://api-mainnet.magiceden.io/v2/ord/btc/activities?limit=20&offset=0&kind[]=buying_broadcasted&kind[]=mint_broadcasted&kind[]=list&kind[]=delist&kind[]=create&kind[]=transfer&kind[]=offer_placed&kind[]=offer_cancelled&kind[]=offer_accepted_broadcasted&tokenId="
  );
  const data = await response.json();
  return data;
}

export default router;
