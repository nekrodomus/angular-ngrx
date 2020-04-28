
import { createAction, props } from "@ngrx/store";
import { IUser } from '../../models/user.interface';

export const getUsers = createAction('[User] Get Users');
export const getUsersSuccess = createAction(
  '[User] Get Users Success',
  props<{ users: IUser[] }>());
export const getUsersFailure = createAction(
  '[User] Get Users Failure',
  props<{ error: string }>());
export const getUser = createAction(
  '[User] Get User',
  props<{ id: number }>() );
export const getUserSuccess = createAction(
  '[User] Get User Success',
  props<{ user: IUser }>());
export const getUserFailure = createAction(
  '[User] Get User Failure',
  props<{ error: string }>());