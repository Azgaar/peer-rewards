export interface IUser {
  email: string;
  firstname: string;
  lastname: string;
  image?: string;
}

export interface IReward {
  from: string;
  to: string;
  reward: string;
  datetime: string;
  message: string;
}
