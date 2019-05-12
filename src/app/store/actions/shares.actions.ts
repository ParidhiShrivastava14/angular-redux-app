import { Action } from '@ngrx/store';


export enum ActionTypes {
  GET_SHARES = 'Get Shares'  
}

export class GetShares implements Action {
  type = ActionTypes.GET_SHARES;
  constructor(public payload: any) {}
}

export type Shares =
  | GetShares;