export interface IUser {
  email: string;
  firstname: string;
  lastname: string;
  image?: string;
}

export interface IReward {
  id: number;
  from: IUser;
  to: IUser;
  reward: string;
  datetime: string;
  message: string;
}
