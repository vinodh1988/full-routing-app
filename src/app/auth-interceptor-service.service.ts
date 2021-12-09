import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {catchError} from 'rxjs/internal/operators/catchError';


@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private inject:Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clone the request to add the new header.
    return next.handle(req).pipe(catchError(err => {
      if(err instanceof HttpErrorResponse) {
        if(err.status === 400) {
          // Handle unauthorized error
          // console.log("Unauthorized");
          // logout() user
          console.log("400 handler logic")
        }
        if(err.status === 401) {
          // Handle unauthorized error
          // console.log("Unauthorized");
          // logout() user
          console.log("401 handler logic")
        } else if(err.status === 500) {
          // Handler internal server error
          // console.log("Server is not responding.")
          // alert("Try after some time.")
          console.log("500 Handler Logic")
        }
        // ......
      }
      return new Observable<HttpEvent<any>>();
    }));
}
}
