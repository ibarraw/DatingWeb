import { HttpInterceptorFn, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { finalize, delay } from 'rxjs/operators';
import { Injectable, Inject, inject } from '@angular/core';
import { BusyService } from '../_services/busy.service';

export const loadingInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  const busyService = inject(BusyService);

  busyService.busy();
  return next(req).pipe(
    delay(2000), // Add delay here for testing the spinner visibility
    finalize(() => busyService.idle())
  );
};
