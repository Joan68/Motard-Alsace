import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Balade } from './balade';

@Injectable({
  providedIn: 'root'
})
export class BaladeService {
  baseUrl = './htdocs/api';
  balades: Balade[] = [];

constructor(private http: HttpClient) { }

  getAll(): Observable<Balade[]> {
    return this.http.get(`${this.baseUrl}/list.php`).pipe(
      map((res) => {
        this.balades = res['data'];
        return this.balades;
    }),
    catchError(this.handleError));
  }

  store(balade: Balade): Observable<Balade[]> {
    return this.http.post(`${this.baseUrl}/store.php`, { data: balade })
      .pipe(map((res) => {
        this.balades = this.balades || [];
        this.balades.push(res['data']);
        return this.balades;
      }),
      catchError(this.handleError));
  }

  update(balade: Balade): Observable<Balade[]> {
    return this.http.put(`${this.baseUrl}/update.php`, { data: balade })
      .pipe(map((res) => {
        const theBalade = this.balades.find((item) => {
          return +item['id'] === +balade['id'];
        });
        if (theBalade) {
          theBalade['NOM_BALADE'] = balade['NOM_BALADE'];
          theBalade['DATE_DEPART'] = balade['DATE_DEPART'];
          theBalade['LIEU_RDV'] = balade['LIEU_RDV'];
        }
        return this.balades;
      }),
      catchError(this.handleError));
  }

  delete(id: number): Observable<Balade[]> {
    const params = new HttpParams()
      .set('id', id.toString());

    return this.http.delete(`${this.baseUrl}/delete.php`, { params: params })
      .pipe(map(res => {
        const filteredBalades = this.balades.filter((balade) => {
          return +balade['id'] !== +id;
        });
        return this.balades = filteredBalades;
      }),
      catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);

    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }
}
