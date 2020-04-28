import { createAction, props } from "@ngrx/store";
import { IConfig } from "../../models/config.interface";

export const getConfig = createAction("[Config] Get Config");
export const getConfigSuccess = createAction(
  "[Config API] Get Config Success",
  props<{ config: IConfig }>()
);
export const getConfigFailure = createAction(
  "[Config API] Get Config Failure",
  props<{ error: string }>()
);
