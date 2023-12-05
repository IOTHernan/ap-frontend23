import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacionService } from './autenticacion.service';

@Injectable({
	providedIn: 'root'
})

/* export const GuardGuard: CanActivateFn = (route, state) => {
  return true;
};
 */

export class GuardGuard implements CanActivate {
	constructor(private autenticacionService: AutenticacionService, private rutas: Router) {}
	canActivate(
		route: ActivatedRouteSnapshot, 
		state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
			let token = this.autenticacionService.token();
			if(token != null) {
				return true;
			} else {
				this.rutas.navigate(['/login'])
				return false;
			}
	}
	
}