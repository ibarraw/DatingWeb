//This code is commented out because it's not being used in the application, but it's a good example of how to handle errors in Angular

// import { HttpClient } from '@angular/common/http';
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-test-error',
//   standalone: true,
//   imports: [],
//   templateUrl: './test-error.component.html',
//   styleUrl: './test-error.component.css'
// })
// export class TestErrorComponent {
//   baseUrl = 'https://localhost:5001/api/';

//   constructor(private http: HttpClient) {}

//   get404Error() {
//     this.http.get(this.baseUrl + 'buggy/not-found').subscribe({
//       next: ressponse => console.log(ressponse),
//       error: error => console.log(error)
//     });
//   }

//   get400Error() {
//     this.http.get(this.baseUrl + 'buggy/bad-request').subscribe({
//       next: ressponse => console.log(ressponse),
//       error: error => console.log(error)
//     });
//   }

//   get500Error() {
//     this.http.get(this.baseUrl + 'buggy/server-error').subscribe({
//       next: ressponse => console.log(ressponse),
//       error: error => console.log(error)
//     });
//   }

//   get401Error() {
//     this.http.get(this.baseUrl + 'buggy/auth').subscribe({
//       next: ressponse => console.log(ressponse),
//       error: error => console.log(error)
//     });
//   }

//   get400ValidationError() {
//     this.http.get(this.baseUrl + 'account/register').subscribe({
//       next: ressponse => console.log(ressponse),
//       error: error => console.log(error)
//     });
//   }
// }
