import { IUser } from '../../models/user.interface';

export interface IUserState {
  users: IUser[];
  selectedUser: IUser;
  loading: boolean;
}

export const initialUserState: IUserState = {
  users: null,
  selectedUser: null,
  loading: false
};
