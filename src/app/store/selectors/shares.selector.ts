import { createSelector } from '@ngrx/store';
import {AppState} from '../app.states';
import {ShareMarket} from '../../share-market.model';

export const getAllShares = createSelector(
    (state: AppState) => state.authState.shares,
    (shares: ShareMarket[])  => shares,
  );