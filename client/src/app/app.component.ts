import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { AccountService } from './_services/account.service';
import { User } from './_models/user';
import { HomeComponent } from './home/home.component';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ NavComponent, HomeComponent, RouterOutlet, RouterLink, CommonModule, NgxSpinnerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title = 'Dating App';

  constructor(private accountService: AccountService,   
    @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    this.setCurrentUser();
  }

  setCurrentUser() {
    if (isPlatformBrowser(this.platformId)) {
      const userString = window.localStorage.getItem('user');
      if (!userString) return;
  
      const user: User = JSON.parse(userString);
      this.accountService.setCurrentUser(user);
    }
  };
}
