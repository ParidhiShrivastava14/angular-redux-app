import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { tap, map, switchMap } from 'rxjs/operators';

import {
    ActionTypes,
    GetShares
  } from '../actions/shares.actions';
import { ShareMarket } from '../../share-market.model';
import { SharesService } from '../../services/shares.service';

@Injectable()
export class ShareEffects {

  constructor(
    private actions: Actions,
    private router: Router,
    private sharesService: SharesService
  ) {}

  // effects go here
  
@Effect({ dispatch: false })
GetShares: Observable<any> = this.actions.pipe(
  ofType(ActionTypes.GET_SHARES),
  map((action: GetShares) => action.payload),
  switchMap((payload) => {
    return this.sharesService.getShares().pipe(
      map((share) => {
      console.log(share);
    }))
  })
);
}