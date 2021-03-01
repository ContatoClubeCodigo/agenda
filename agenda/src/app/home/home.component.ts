import { Component, OnInit } from '@angular/core'; 
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {

    this.GetContatos();


  }


    GetContatos(): any {

      let _input = {

        id_Usuario:  0,
        Rota:  'Users/Get'
      }
      
      return this.apiService.Send(_input).subscribe(data => {  

          console.log(data);
      
      }, error => {            
            
      }); 

  }

}
