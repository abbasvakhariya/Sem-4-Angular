import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reactive-form';
  studentForm = new FormGroup({
    fullName: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    phone: new FormControl('',[Validators.required, Validators.minLength(10)]),
    address: new FormControl('',[Validators.required]),
    course: new FormControl('',[Validators.required]),


  })
  onSubmit(){
    console.log(this.studentForm.value);
  }
}
