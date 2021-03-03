import { Component, OnInit } from '@angular/core';     
import { ApiUsersService } from '../../services/api-users.service'; 
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
 
   }

  ngOnInit(): void { 
  
  }
}
