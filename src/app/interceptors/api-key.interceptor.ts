import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import Airtable from 'airtable';


@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {
  private apiKey = environment.airtable;
  private baseId = environment.base;
  private apiUrl = `https://api.airtable.com/v0/${this.baseId}`;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const finlightUrlPattern = this.apiUrl;
    console.log('test');
    if (req.url.includes(finlightUrlPattern)) {
      const secureReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${this.apiKey}`)
      });
      return next.handle(secureReq);
    }

    // Forward requests to non-secure APIs without modifying
    return next.handle(req);
  }
}
