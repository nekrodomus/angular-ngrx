import { Action, on, createReducer } from "@ngrx/store";
import * as UserActions from '../actions/user.actions';
import { initialUserState, IUserState } from '../state/user.state';

const userReducers = createReducer(
  initialUserState,
  on(UserActions.getUsers, (state) => ({ 
    ...state, 
    loading: true, 
  })),
  on(UserActions.getUsersSuccess, (state, { users }) => ({ 
    ...state,
    users, 
    loading: false, 
  })),
  on(UserActions.getUsersFailure, (state, { error }) => ({ 
    ...state,
    users: [], 
    loading: false, 
    error
  })),
  on(UserActions.getUser, (state) => ({ 
    ...state, 
    loading: true, 
  })),
  on(UserActions.getUserSuccess, (state, { user }) => ({ 
    ...state, 
    selectedUser: user,
    loading: false, })),
  on(UserActions.getUserFailure, (state, { error }) => ({ 
    ...state, 
    selectedUser: null,
    loading: false, 
    error
  })),
);

export function getUserReducer(state: IUserState | undefined, action: Action) {
  return userReducers(state, action);
}
