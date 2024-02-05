import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AccountService } from '../_services/account.service';
import { map } from 'rxjs/operators';

export const authGuard: CanActivateFn = (route, state) => {

  const accountService = inject(AccountService);
  //const toastr = inject(ToastrService);
  const router = inject(Router); // Inject Router service


  return accountService.currentUser$.pipe(
    map(user => {
      if (user) {
        return true;
      }
      else {
        router.navigate(['/']);    
        return false;
      }
      //toastr.error('You shall not pass!');
      
    })
  );
};
