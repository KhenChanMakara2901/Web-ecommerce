import { NextApiRequest, NextApiResponse } from "next";
import products from "@/public/Data/ProductGrid/products.json";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(products);
}
