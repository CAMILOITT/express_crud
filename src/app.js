import express from 'express';
import charactersRoutes from './routers/characters.routers.js';
import classCharactersRoutes from './routers/classCharacters.routers.js';

const app = express();
//! middles
app.use(express.json());

//! rutas
app.use(charactersRoutes);
app.use(classCharactersRoutes);

export default app;
