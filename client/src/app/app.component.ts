import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface User {
  id: number;
  userName: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title = 'Your Angular App';
  users: any;

  constructor(private http: HttpClient) {}

ngOnInit(): void {
    const apiUrl = 'https://localhost:5001/api/users';

    this.http.get<User[]>(apiUrl).subscribe({
      next: (response) => this.users = response,
      error: (error) => console.log("Error:", error), // Improved error logging
      complete: () => console.log("Fetch complete")
    });
  }

  // fetchUsers() {      
  //   console.log("found");

  //   // const apiUrl = 'https://localhost:5001/api/users';

  //   // this.http.get(apiUrl).subscribe({
  //   //   next: response => this.users = response,
  //   //   error: console.log("error"),
  //   //   complete: () => console.log("complete")
  //   // })
  // }
}
