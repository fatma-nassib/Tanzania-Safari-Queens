import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class LoadingState { private n=0; isLoading$=new BehaviorSubject(false); start(){if(++this.n>0)this.isLoading$.next(true);} stop(){if(--this.n<=0){this.n=0;this.isLoading$.next(false);}} }
@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private ls: LoadingState) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.ls.start(); return next.handle(req).pipe(finalize(()=>this.ls.stop()));
  }
}
