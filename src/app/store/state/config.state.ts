import { IConfig } from "../../models/config.interface";

export interface IConfigState {
  config: IConfig;
  loading: boolean;
}

export const initialConfigState: IConfigState = {
  config: null,
  loading: false,
};
