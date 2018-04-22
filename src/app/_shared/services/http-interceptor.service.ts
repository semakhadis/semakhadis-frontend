import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

    constructor(private router: Router) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(req)
                   .map((event: HttpEvent<any>): HttpEvent<any> => event)
                   .catch((err: any): Observable<any> => {

                       if (err.status === 404) {
                           this.router.navigate(['/404'])
                       }

                       return Observable.throw(err);
                   });
    }
}
