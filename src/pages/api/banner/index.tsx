import type { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '@/utils/connectionDB';
import Banner from '../../../models/banner';

connectDB();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      await getBanner(req, res);
      break;
  }
};

const getBanner = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const banner = await Banner.find();
    res.json({
      status: 'success',
      result: banner.length,
      banner,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
