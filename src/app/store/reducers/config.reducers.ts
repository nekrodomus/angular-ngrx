import { Action, on, createReducer } from "@ngrx/store";
import * as ConfigActions from "../actions/config.actions";
import { initialConfigState, IConfigState } from "./../state/config.state";

const configReducers = createReducer(
  initialConfigState,
  on(ConfigActions.getConfig, (state) => ({
    ...state,
    loading: true,
  })),
  on(ConfigActions.getConfigSuccess, (state, { config }) => ({
    ...state,
    config,
    loading: false,
  })),
  on(ConfigActions.getConfigFailure, (state, { error }) => ({
    ...state,
    loading: false,
  }))
);

export function getConfigReducer(state: IConfigState | undefined, action: Action) {
  return configReducers(state, action);
}
