import type { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '@/utils/connectionDB';
import Product from '../../../models/product';

connectDB();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      await getProducts(req, res);
      break;
  }
};

const getProducts = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const products = await Product.find();
    res.json({
      status: 'success',
      result: products.length,
      products,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
