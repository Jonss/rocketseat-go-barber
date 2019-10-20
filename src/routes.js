import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'Hello Go Barber!' }));

routes.post('/user', async (req, res) => {
  const user = await User.create({
    name: 'João Santana',
    email: 'joao.santana@gmail.com',
    password_hash: 'jajajajaja',
  });

  return res.json(user);
});

export default routes;
