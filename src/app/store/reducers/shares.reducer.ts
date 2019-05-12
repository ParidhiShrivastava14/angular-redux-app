import { ActionTypes, Shares } from '../actions/shares.actions';
import { ShareMarket } from '../../share-market.model';

export interface State {
  shares: ShareMarket[];
}

export const initialState: State = {
    shares: []
  };

  export function reducer(state = initialState, action: Shares): State {
    switch (action.type) {
        case ActionTypes.GET_SHARES: {
          return {
            ...state,
            shares: state.shares
          };
        }
        default:
            return state;
    }
  }