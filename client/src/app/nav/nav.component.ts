import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [FormsModule, BsDropdownModule, CommonModule, RouterLink, RouterOutlet],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})

export class NavComponent{
  model: any = {};

  constructor(public accountService: AccountService, private router: Router, private toastr: ToastrService) { }

  login(): void{
    this.accountService.login(this.model).subscribe( {
      next: () => this.router.navigateByUrl('/members'),
      error: (err) => this.toastr.error(err.error.message)
    });
  }

  logout(): void{
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }
}
