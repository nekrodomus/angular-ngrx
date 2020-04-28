import { ActionReducerMap } from '@ngrx/store';

import { routerReducer } from '@ngrx/router-store';
import { IAppState } from '../state/app.state';
import { getConfigReducer } from './config.reducers';
import { getUserReducer } from './user.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  users: getUserReducer,
  config: getConfigReducer
};
