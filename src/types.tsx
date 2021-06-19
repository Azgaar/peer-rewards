export interface IUser {
  email: string;
  firstname: string;
  lastname: string;
  image?: string;
}

export interface IReward {
  from: IUser;
  to: IUser;
  reward: string;
  datetime: string;
  message: string;
}
