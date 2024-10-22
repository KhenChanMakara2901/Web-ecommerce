import { NextApiRequest, NextApiResponse } from "next";
import products from "@/public/Data/ProductGrid/products.json"; // Assuming this is the path to your JSON file

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(products);
}
