import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { map, catchError } from 'rxjs/operators'; 
import { Observable } from 'rxjs'; 


@Injectable({
  providedIn: 'root'
})
export class ApiUsersService {

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
