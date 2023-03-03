import type { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '@/utils/connectionDB';
import Users from '../../../models/user';
import validation from '@/utils/validation';
import bcrypt from 'bcrypt';

connectDB();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'POST':
      await register(req, res);
      break;
  }
};

const register = async (req: NextApiRequest, res: NextApiResponse) => {
  {
    try {
      const { name, email, password, cf_password } = req.body;

      const errMsg = await validation({ name, email, password, cf_password });
      if (errMsg) return res.status(400).json({ error: errMsg });

      const user = await Users.findOne({ email });
      if (user)
        return res
          .status(400)
          .json({ error: 'Este email já está cadastrado.' });

      const passwordHash = await bcrypt.hash(password, 10);

      const newUser = new Users({
        name,
        email,
        password: passwordHash,
        cf_password,
      });
      await newUser.save();
      res.json({ msg: 'Usuário cadastrado!' });
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
};
