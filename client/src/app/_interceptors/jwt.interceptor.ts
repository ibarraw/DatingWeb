import { HttpInterceptorFn, HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountService } from '../_services/account.service';
import { inject } from '@angular/core';
import { switchMap, take } from 'rxjs/operators';

export const JwtInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
  // Use Angular's `inject` function to get the instance of `AccountService`
  const accountService = inject(AccountService);

  // Use `switchMap` to handle the asynchronous nature of getting the current user
  return accountService.currentUser$.pipe(
    take(1),
    switchMap(user => {
      if (user) {
        // Clone the request to add the authorization header
        const authReq = req.clone({
          setHeaders: {
            Authorization: `Bearer ${user.token}`
          }
        });
        return next(authReq);
      }
      // If there is no user, forward the original request
      return next(req);
    })
  );
};
