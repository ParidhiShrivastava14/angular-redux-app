import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../user';
import { ShareMarket } from '../share-market.model';


@Injectable()
export class SharesService {
  private BASE_URL = 'http://localhost:8081';

  constructor(private http: HttpClient) {}
  getShares(): Observable<any> {
    const url = `${this.BASE_URL}/getShares`;
    return this.http.get(url);
  }

}