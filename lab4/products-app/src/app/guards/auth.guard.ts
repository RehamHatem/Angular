import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };
@Injectable({
  providedIn: 'root'
})
export class authGuard implements CanActivate{
  constructor(private authService:AuthService){
    
  }
  
canActivate ():boolean{
  return this.authService.isloggedIn();
}
}