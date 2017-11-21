import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Coin} from '../model/coin';

@Injectable()
export class CoinMarketService {
    constructor(private _http: Http) {}

    getCoinInfo(): Observable<Coin[]> {
        return this._http.get(`https://api.coinmarketcap.com/v1/ticker/`)
                .map((res: Response) => res.json());
    }
}