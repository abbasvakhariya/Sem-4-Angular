import {  JsonPipe, NgIf } from '@angular/common';
import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgIf,FormsModule,JsonPipe,MatSlideToggleModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'validation';
  data:any={
    names:'',
    email:'',
    spi:'',
    contactNumber:'',
    age:'',

  }
  darkMode: boolean = false;

  // Method to toggle dark mode
  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    if (this.darkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }
}
