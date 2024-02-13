import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';
import { take } from 'rxjs';

//This directive will be used to check if the user has a specific role
//It will be used in the admin panel component
//While I could use a built-in directive like *ngIf, I want to create a custom directive to check if the user has a specific role for learning purposes
@Directive({
  selector: '[appHasRole]', //appHasRole='["Admin", "Moderator"]'
  standalone: true,
})
export class HasRoleDirective implements OnInit {
  @Input() appHasRole: string[] = [];
  user: User = {} as User;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    private accountService: AccountService
  ) {
    this.accountService.currentUser$.pipe(take(1)).subscribe({
      next: (user) => {
        if (user) this.user = user;
      },
    });
  }

  //This directive will be used to check if the user has a specific role
  //This is pretty much the same as *ngIf, but I'm using a custom directive for learning purposes
  ngOnInit(): void {
    if (this.user.roles.some((r) => this.appHasRole.includes(r))) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }
}
