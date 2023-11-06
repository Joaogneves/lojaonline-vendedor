import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoadingService } from './loading.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  private req = 0;

  constructor(private loadingService: LoadingService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(this.req === 0) {
      this.loadingService.show();
    }
    this.req++;
    return next.handle(request).pipe(
      finalize(() => {
        this.req--;
        if(this.req === 0) {
          this.loadingService.hide();
        }
      })
    )
  }
}
