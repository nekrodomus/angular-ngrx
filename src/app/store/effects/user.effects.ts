import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { switchMap, map, catchError, withLatestFrom } from "rxjs/operators";

import { IAppState } from '../state/app.state';
import * as UserActions from '../actions/user.actions';
import { UserService } from '../../services/user.service';
import { IUserHttp } from '../../models/http-models/user-http.interface';
import { selectUserList } from '../selectors/user.selector';
import { IUser } from 'src/app/models/user.interface';
import { select } from '@ngrx/store';

@Injectable()
export class UserEffects {

  getUser$ = createEffect(() => 
    this._actions$.pipe(
      ofType(UserActions.getUser),
      map(action => action),
      withLatestFrom(this._store.pipe(select(selectUserList))),
      switchMap(([data, users]) =>{
        let selectedUser = null;
        if ( users ) {
          selectedUser = users.filter( (user) => {
            return user.id === +data.id;
          })[0];
        }
        


        return of(UserActions.getUserSuccess( { user: selectedUser }));
      })
    )  
  );

  getUsers$ = createEffect(() =>
    this._actions$.pipe(
      ofType(UserActions.getUsers),
      switchMap((action) =>
        this._userService.getUsers().pipe(
          map((users: IUserHttp) => UserActions.getUsersSuccess({ users: users.users })),
          catchError((error) => of(UserActions.getUsersFailure({ error })))
        )
      )
    )
  );

  constructor(
    private _userService: UserService,
    private _actions$: Actions,
    private _store: Store<IAppState>
  ) {}
}
