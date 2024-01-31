import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { Observable, of } from 'rxjs';
import { User } from '../_models/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [FormsModule, BsDropdownModule, CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})

export class NavComponent implements OnInit{
  model: any = {};

  constructor(public accountService: AccountService) { }

  ngOnInit(): void{

  }


  login(): void{
    this.accountService.login(this.model).subscribe( {
      next: response => {
        console.log(response);
    },
      error: error => {
      console.log(error);
      }
    })
  }

  logout(): void{
    this.accountService.logout();
  }
}
