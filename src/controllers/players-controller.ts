import { Request, Response, json } from 'express';
import {
  getPlayerByIdService,
  getPlayerService,
  postPlayerService,
  deletePlayerService
} from '../services/players-service';

export const getPlayer = async (req: Request, res: Response) => {
  const response = await getPlayerService();
  res.status(response.status).json(response.data);
};

export const getPlayerById = async (req: Request, res: Response) => {
  const id = req.params.id;
  const response = await getPlayerByIdService(Number(id));
  res.status(response.status).json(response.data);
};

export const postPlayer = async (req: Request, res: Response) => {
  const bodyValue = req.body;
  const response = await postPlayerService(bodyValue);
  res.status(response.status).json(response.data);
};

export const deletePlayer = async (req: Request, res: Response) => {
  const id = req.params.id;
  const response = await deletePlayerService(id);
  res.status(response.status).json(response.data);
}