import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoaderService } from '../services/loader-service';
import { finalize } from 'rxjs';

export const Interceptor: HttpInterceptorFn = (req, next) => {
  alert(JSON.stringify(req))
  const loader = inject(LoaderService);

  loader.show();

  const token = localStorage.getItem('CONFIG');

  const authReq = token
    ? req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      })
    : req;

  return next(authReq).pipe(finalize(()=> loader.hide()));
 
};
