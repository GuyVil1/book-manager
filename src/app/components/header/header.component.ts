import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //Va me permettre de ne pas afficher les bouton si user non connecté
  isAuth: boolean;

  profilUrl: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.isAuth = this.authService.isAuth;

    this.profilUrl = '/profil/' + this.authService.userIdAuth;
  }

  /**
   * Method called when the user click on the signout button
   */
  onClickSignOut() {
    this.authService.signOut();
    this.router.navigate(['auth']);
  }
}
