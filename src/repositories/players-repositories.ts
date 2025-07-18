const database: PlayerModel[] = [
  {
    id: 1,
    name: 'Lionel Messi',
    clube: 'Inter Miami',
    nationality: 'Argentina',
    position: 'Forward',
    statistics: {
      overall: 90,
      pace: 85,
      shotting: 92,
      passing: 91,
      dribbling: 95,
      defending: 38,
      physical: 70,
    },
  },
  {
    id: 2,
    name: 'Cristiano Ronaldo',
    clube: 'Al Nassr',
    nationality: 'Portugal',
    position: 'Forward',
    statistics: {
      overall: 89,
      pace: 82,
      shotting: 93,
      passing: 87,
      dribbling: 90,
      defending: 35,
      physical: 80,
    },
  },
  {
    id: 3,
    name: 'Neymar Jr',
    clube: 'Al Hilal',
    nationality: 'Brazil',
    position: 'Forward',
    statistics: {
      overall: 92,
      pace: 88,
      shotting: 90,
      passing: 89,
      dribbling: 96,
      defending: 37,
      physical: 75,
    },
  },
  {
    id: 4,
    name: 'Kylian Mbappé',
    clube: 'Paris Saint-Germain',
    nationality: 'France',
    position: 'Forward',
    statistics: {
      overall: 91,
      pace: 97,
      shotting: 88,
      passing: 85,
      dribbling: 94,
      defending: 40,
      physical: 78,
    },
  },
];

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
  return database;
};

export const findPlayerById = async (
  id: number,
): Promise<PlayerModel | null> => {
  const player = database.find((p) => p.id === id);
  return player || null;
};

export const postPlayer = async (
  playerData: PlayerModel,
): Promise<PlayerModel> => {
  database.push(playerData);
  return playerData;
};

export const deletePlayer = async (id: number): Promise<boolean> => {
  const index = database.findIndex((p) => p.id === id);
  if (index !== -1) {
    database.splice(index, 1);
    return true;
  }
  return false;
};