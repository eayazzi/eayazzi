import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth/";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;
  constructor(private afauth: AngularFireAuth) {
    this.user = afauth.authState;

    this.user.subscribe((user) => {
      if (user) {
        this.userDetails = user;
      } else {
        this.userDetails = null;
      }
    });
  }

  async login(email: string, password: string) {
    try {
      return await this.afauth.auth.signInWithEmailAndPassword(email, password);
    } catch (err) {
     
      return null;
    }
  }
  getUserLogged() {
    return this.afauth.authState;
  }

  logout() {
    this.afauth.auth.signOut();
  }
  isLoggedIn() {
    if (this.userDetails == null) {
      return false;
    } else {
      return true;
    }
  }
}
