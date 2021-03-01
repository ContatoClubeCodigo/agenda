
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NotificationsService } from 'angular2-notifications';


@Injectable()
export class AuthService {

  public URL_API  = 'http://localhost:5003/api/'; 

  constructor(private http: HttpClient,
             private _notifications: NotificationsService) { }

    /* API CORE */
    get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
      return this.http.get(`${this.URL_API}${path}`, { params })
        .pipe(catchError(err => this.formatErrors(err, this._notifications)));
    }

    post(path: string, body: Object = {}): Observable<any> {

      return this.http.post(
        `${this.URL_API}${path}`, JSON.stringify(body),
        { headers: { 'Content-Type': 'application/json'} })
        .pipe(catchError(err => this.formatErrors(err, this._notifications)));
    }
 
    delete(path): Observable<any> {
      return this.http.delete(
        `${this.URL_API}${path}`, { headers: { 'Content-Type': 'application/json' } })
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
