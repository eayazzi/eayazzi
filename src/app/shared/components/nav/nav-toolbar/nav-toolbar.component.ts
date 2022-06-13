import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/auth/auth.service";

@Component({
  selector: "app-nav-toolbar",
  templateUrl: "./nav-toolbar.component.html",
  styleUrls: ["./nav-toolbar.component.scss"],
})
export class NavToolbarComponent implements OnInit {
  constructor(private _authService: AuthService) {}

  ngOnInit() {}

  logout() {
    this._authService.logout();
  }
}
