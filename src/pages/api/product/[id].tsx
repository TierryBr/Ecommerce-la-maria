import type { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '@/utils/connectionDB';
import Product from '../../../models/product';

connectDB();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      await getProduct(req, res);
      break;
  }
};

const getProduct = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query;
    const product = await Product.findById(id);
    if (!product)
      return res.status(400).json({ error: 'Este produto não existe' });

    res.json({ product });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
