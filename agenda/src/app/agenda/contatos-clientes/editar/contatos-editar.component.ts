import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'; 

@Component({
  selector: 'app-contatos-editar',
  templateUrl: './contatos-editar.component.html',
  styleUrls: ['./../contatos-clientes.component.css']
})
export class ContatosEditarComponent implements OnInit {

  form: FormGroup;
  user: any;

  teams: any[] = [
    { name: 'Liverpool' },
    { name: 'Manchester City' },
    { name: 'Manchester United' },
    { name: 'Arsenal' },
    { name: 'Leicester City' },
    { name: 'Chelsea' },
    { name: 'Tottenham Hotspur' },
];

  constructor(public dialogRef: MatDialogRef<ContatosEditarComponent>, public dialog: MatDialog, 
             @Inject(MAT_DIALOG_DATA) public _data: any,
             private _formBuilder: FormBuilder)
  {
    console.log('Editar', _data);


    this.form = this.ComponentForm();
    this.user = _data;

   
   }

  ngOnInit(): void {
  }

  ComponentForm(): FormGroup {

      return this._formBuilder.group({
          name: ['', Validators.required],
          office: ['', Validators.required],
          select_office: ['', Validators.required],
      });  

  }


  Save(): void { 

    this.dialogRef.close();

  } 

  Cancel(): void { 
    this.dialogRef.close();
  } 

}
