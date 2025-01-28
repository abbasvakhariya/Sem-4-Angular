import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgFor, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Curd by using array of objects';

  users = [
    { name: 'John Doe', age: 28, email: 'john.doe@example.com' },
    { name: 'Jane Smith', age: 34, email: 'jane.smith@example.com' }
  ];

  userForm = { name: '', age: 0, email: '' };  // Initialize age as a number
  isEditing = false;  // Flag to determine whether we're editing
  editIndex: number | null = null;  // Index to track the user being edited
  searchTerm: string = '';  // Declare and initialize the search term
  filteredUsers = [...this.users];  // Filtered users based on search


  saveUser() {
    if (this.userForm.name && this.userForm.age && this.userForm.email) {
      // Convert age to a number before adding it to the users array
      const age = Number(this.userForm.age);

      if (this.isEditing && this.editIndex !== null) {
        this.users[this.editIndex] = { name: this.userForm.name, age, email: this.userForm.email };
        this.isEditing = false;  
        this.editIndex = null;  
      } else {
        this.users.push({ name: this.userForm.name, age, email: this.userForm.email });
      }

      this.userForm = { name: '', age: 0, email: '' };
    } else {
      alert('Please fill in all fields!');
    }
  }

  // Method to start editing a user
  editUser(index: number) {
    this.isEditing = true;
    this.editIndex = index;
    this.userForm = { ...this.users[index] };  // Copy user data to form
  }

  // Method to delete a user
  deleteUser(index: number) {
    this.users.splice(index, 1);  // Remove the user from the array
  }
  // Method to filter users based on the search term
  onSearch() {
    const searchTermLower = this.searchTerm.toLowerCase();

    // Filter users by name or email (case insensitive)
    this.filteredUsers = this.users.filter(user =>
      user.name.toLowerCase().includes(searchTermLower) || 
      user.email.toLowerCase().includes(searchTermLower)
    );
  }
 
}
