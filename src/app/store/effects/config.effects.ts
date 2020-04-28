import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { switchMap, map, catchError } from "rxjs/operators";

import * as ConfigActions from "../actions/config.actions";
import { IConfig } from "../../models/config.interface";
import { ConfigService } from "./../../services/config.service";

@Injectable()
export class ConfigEffects {
  getConfig$ = createEffect(() =>
    this._actions$.pipe(
      ofType(ConfigActions.getConfig),
      switchMap(() =>
        this._configService.getConfig().pipe(
          map((config: IConfig) => ConfigActions.getConfigSuccess({ config })),
          catchError((error) => of(ConfigActions.getConfigFailure({ error })))
        )
      )
    )
  );

  constructor(
    private _configService: ConfigService,
    private _actions$: Actions
  ) {}
}
