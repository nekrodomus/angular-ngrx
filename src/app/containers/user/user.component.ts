import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';

import { IAppState } from '../../store/state/app.state';
import { selectSelectedUser } from '../../store/selectors/user.selector';
import * as UserActions from '../../store/actions/user.actions';

@Component({
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user$ = this._store.pipe(select(selectSelectedUser));

  constructor(
    private _store: Store<IAppState>,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {

    if ( this.user$ ) {
      this._store.dispatch(UserActions.getUser({ id: this._route.snapshot.params.id }));
    } else {
      this._store.dispatch(UserActions.getUserFailure({ error: "ERROR" }));
    }
    
  }
}
