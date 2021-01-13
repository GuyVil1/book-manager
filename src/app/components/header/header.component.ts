import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //Va me permettre de ne pas afficher le bouton si user non connecté
  isAuth: boolean;

  constructor(private authService: AuthService, private router : Router) {
    this.isAuth = true;
   }

  ngOnInit(): void {
    this.isAuth = this.authService.isAuth;

  }

  /**
   * Se déconnecter de l'app
   */
  onClickSignOut(){
    this.authService.signOut();
    this.router.navigate(['auth']);
  }
}
