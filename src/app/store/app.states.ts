import * as auth from './reducers/auth.reducers';
import * as share from './reducers/shares.reducer';

export interface AppState {
  authState: auth.State;
  shareState: share.State;
}

export const reducers = {
  auth: auth.reducer,
  share: share.reducer
};