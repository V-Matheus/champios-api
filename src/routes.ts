import { Router } from 'express';
import {
  getPlayer,
  getPlayerById,
  postPlayer,
  deletePlayer,
} from './controllers/players-controller';

const routes = Router();

routes.get('/players', getPlayer);
routes.get('/players/:id', getPlayerById);
routes.post('/players/', postPlayer);
routes.delete('/players/:id', deletePlayer);

export default routes;
