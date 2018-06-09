import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ErrorService} from '../services/error.service';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';

import {Router} from '@angular/router';
declare var toastr;

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private errorService: ErrorService
  ) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).do((event: HttpEvent<any>) => {}, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          toastr.error('Authorization error');
          this.router.navigate(['/login']);
          return;
        }
        this.errorService.showErrMsg(err);
      }
    });
  }
}