
import { Injectable } from '@angular/core';  
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { throwError, Observable } from 'rxjs'; 
import { NotificationsService } from 'angular2-notifications';
import { map, catchError } from 'rxjs/operators';  

@Injectable()
export class AuthService {

  url_api    = 'http://localhost:5003/api/'; 
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient,
              private _notifications: NotificationsService
  ) { } 
 
   /* API CORE */
   get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${this.url_api}${path}`, { params })
      .pipe(catchError(err => this.formatErrors(err, this._notifications)));
  }

  put(path: string, body: Object = {}): Observable<any> {

    return this.http.put( `${this.url_api}${path}`, JSON.stringify(body), { headers: { 'Content-Type': 'application/json' } })
      .pipe(catchError(err => this.formatErrors(err, this._notifications)));
  }

  post(path: string, body: Object = {}): Observable<any> {

    return this.http.post(
      `${this.url_api}${path}`, JSON.stringify(body),
      { headers: { 'Content-Type': 'application/json'} })
      .pipe(catchError(err => this.formatErrors(err, this._notifications)));
  }

  post_api(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      `${this.url_api}${path}`, body, { headers: { 'Content-Type': 'application/json' } })
      .pipe(catchError(err => this.formatErrors(err, this._notifications)));
  }
 
  delete(path): Observable<any> {
    return this.http.delete(
      `${this.url_api}${path}`, { headers: { 'Content-Type': 'application/json' } })
      .pipe(catchError(err => this.formatErrors(err, this._notifications)));
  }

  private formatErrors(error: any, _notifications: NotificationsService): any {
    this.showErrors(error, _notifications);
    return throwError(error.error);
  }

  private showErrors(error: any, _notifications: NotificationsService): any {

    let errorMsg = '';
    switch (error.status) {
      case 401:
        errorMsg = '401 - Unauthorized';
        break;
      case 403:
        errorMsg = '403 - Forbidden';
        break;
      case 504:
        errorMsg = '504 - Timeout';
        break;
      default:

        if (error.error && error.error.errors && error.error.errors.length > 0) {
          error.error.errors.forEach(element => {
            errorMsg += element + '; ';
          });

        }
        break;
    }

    if (errorMsg) {
    }

  }
 

}
