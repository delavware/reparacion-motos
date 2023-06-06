import express from 'express';
import cors from 'cors';
import usersRoutes from './routes/users.routes.js';
import repairsRoutes from './routes/repairs.routes.js';

const app = express();

app.use(cors());
app.use(express.json());

//creando ruta raiz para 'users'
app.use('/api/v1/users', usersRoutes);
//creando ruta raiz para 'repairs'
app.use('/api/v1/repairs', repairsRoutes);

export default app;
