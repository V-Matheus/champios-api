interface PlayerModel {
  id: number;
  name: string;
  clube: string
  nationality: string;
  position: string;
  statistics: {
    overall: number;
    pace: number;
    shotting: number;
    passing: number;
    dribbling: number;
    defending: number;
    physical: number;
  };
}
