import {
  findAllPlayers,
  findPlayerById,
  postPlayer,
  deletePlayer
} from '../repositories/players-repositories';

export const getPlayerService = async () => {
  const data = await findAllPlayers();

  if (!data) {
    return {
      status: 404,
      data: null,
    };
  }

  const response = {
    status: 200,
    data,
  };

  return response;
};

export const getPlayerByIdService = async (id: number) => {
  const data = await findPlayerById(id);

  if (!data) {
    return {
      status: 404,
      data: null,
    };
  }
  const response = {
    status: 200,
    data,
  };

  return response;
};

export const postPlayerService = async (playerData: PlayerModel) => {
  const data = await postPlayer(playerData);

  if (!data || !playerData) {
    return {
      status: 400,
      data: null,
    };
  }

  return {
    status: 201,
    data,
  };
};

export const deletePlayerService = async (id: string) => {
  const playerId = parseInt(id);
  const data = await deletePlayer(playerId);

  if (!data) {
    return {
      status: 404,
      data: null,
    };
  }

  return {
    status: 200,
    data: { message: 'Player deleted successfully' },
  };
};