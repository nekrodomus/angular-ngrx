import { Component, OnInit, Input } from '@angular/core';

import { IUser } from '../../models/user.interface';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import * as UserActions from '../../store/actions/user.actions';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  @Input()
  user: IUser;

  constructor(private _store: Store<IAppState>,) {}

  ngOnInit() {
    if ( !this.user ) {
      this._store.dispatch(UserActions.getUserFailure({ error: "ERROR" }));
    }
  }
}
