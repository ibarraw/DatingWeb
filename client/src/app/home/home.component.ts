import { Component, OnInit } from '@angular/core';
import { RegisterComponent } from '../register/register.component';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models/user';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RegisterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  registerMode = false;
  users: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getUsers();
  }

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  getUsers() {
    const apiUrl = 'https://localhost:5001/api/users';

    this.http.get<User[]>(apiUrl).subscribe({
      next: (response) => this.users = response,
      error: (error) => console.log("Error:", error), 
      complete: () => console.log("Fetch complete")
    });
  }

  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }

}
