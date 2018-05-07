import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    return next.handle(request).do((event: HttpEvent<any>) => {}, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          this.router.navigate(['/login']);
        }
      }
    });
  }
}