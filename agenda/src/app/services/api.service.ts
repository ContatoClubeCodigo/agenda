import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map, catchError } from 'rxjs/operators'; 

import { AuthService } from '../services/auth.service'

@Injectable({ providedIn: 'root' })
export class ApiService {

  constructor(private authService: AuthService) { }


  Send(model: any): Observable<any> { 

    return this.authService.post(model.Rota, model).pipe(map((res: any) => { 
      return res;
    }),
    catchError(error => { 
        return error;
      })
    ); 
  } 

}