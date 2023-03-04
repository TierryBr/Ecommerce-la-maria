import type { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '@/utils/connectionDB';
import Users from '../../../models/user';
import bcrypt from 'bcrypt';
import { createAccessToken, createRefreshToken } from '@/utils/generateToken';

connectDB();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'POST':
      await login(req, res);
      break;
  }
};

const login = async (req: NextApiRequest, res: NextApiResponse) => {
  {
    try {
      const { email, password } = req.body;

      const user = await Users.findOne({ email });
      if (!user) {
        return res.status(400).json({ error: 'Este usuário não existe.' });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ error: 'Senha incorreta.' });
      }

      const access_token = createAccessToken({ id: user._id });
      const refresh_token = createRefreshToken({ id: user._id });

      res.json({
        msg: 'Login realizado!',
        access_token,
        refresh_token,
        user: {
          name: user.name,
          email: user.email,
          role: user.role,
          avatar: user.avatar,
          root: user.root,
        },
      });
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
};
