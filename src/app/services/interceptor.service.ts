import { ApiService } from 'src/app/services/api.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(public _ApiService:ApiService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this._ApiService.isLoading.next(true)
    return next.handle(req).pipe(
      finalize(
        ()=> {
          this._ApiService.isLoading.next(false)
        }
      )
    )
  }
}
