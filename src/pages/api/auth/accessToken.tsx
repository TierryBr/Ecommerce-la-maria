import type { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '@/utils/connectionDB';
import Users from '../../../models/user';
import { createAccessToken } from '@/utils/generateToken';
import jwt from 'jsonwebtoken';

connectDB();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const rf_token = req.cookies.refreshtoken;
    if (!rf_token)
      return res.status(400).json({ error: 'Por favor faça o login agora!' });

    const result = await jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET);
    if (!result)
      return res
        .status(401)
        .json({ error: 'Login expirado, faça login novamente.' });

    const user = await Users.findById(result.id);
    if (!user) return res.status(400).json({ error: 'Usuário não existe.' });

    const access_token = createAccessToken({ id: user._id });

    res.json({
      access_token,
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
        avatar: user.avatar,
        root: user.root,
      },
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
