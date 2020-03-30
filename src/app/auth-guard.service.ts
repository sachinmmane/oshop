import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthGuardService  implements CanActivate {

  constructor(private auth: AuthService, private router:Router) { }

  canActivate(){
    // TODO :- Need to revise the code and improve knowledge about the map operator.
    return this.auth.user$.map(user=> {
      if (user) return true;

      this.router.navigate(['/login']);
      return false;

    });
  }
}
