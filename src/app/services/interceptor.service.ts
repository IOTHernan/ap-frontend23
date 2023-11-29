import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AutenticacionService } from './autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  constructor(private autenticacionService: AutenticacionService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  
    // Aquí puedes modificar la petición antes de enviarla al servidor
    // Por ejemplo, agregar una cabecera de autorización con un token
    const token = this.autenticacionService.token();
    /* localStorage.getItem('token'); */ // Obtén el token desde localStorage
    /* if (token) { */
      // Clona la petición y agrega la cabecera de autorización

      console.log("Archivo Interceptor Service, el token no es nulo: ", token);
      
 /*      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
  */   // Continúa con la petición modificada
 /*    return next.handle(request); */
    const headers = req.clone({headers: req.headers.set('Authorization', 'Bearer ' + token )});
    return next.handle(headers);
  }
}