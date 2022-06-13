import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/auth/auth.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  usuario = {
    email: "",
    password: "",
  };
  constructor(
    private authService: AuthService,
    private router: Router,
    private _toastr: ToastrService
  ) {}

  login() {
    const { email, password } = this.usuario;
   
    this.authService
      .login(email, password)
      .then((user) => {
        if (!user) {
          this._toastr.error("Datos incorrectos");
          return;
        }
        this.router.navigate(["/clientes"]);
      })
      .catch((err) => {

      });
  }

  ngOnInit() {}
}
