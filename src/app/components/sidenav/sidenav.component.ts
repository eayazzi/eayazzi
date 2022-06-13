import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import {
  BreakpointObserver,
  BreakpointState,
  Breakpoints,
} from "@angular/cdk/layout";
import { Observable } from "rxjs";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.scss"],
})
export class SidenavComponent implements OnInit {
  isOpen = true;
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(
    Breakpoints.Handset
  );
  isTablet: Observable<BreakpointState> = this.breakpointObserver.observe(
    Breakpoints.Web
  );

  constructor(
    private _router: Router,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit() {}

  public onToggleSideNav() {
    this.isOpen = !this.isOpen;
  }

  public logout() {
    // this.authService.logout();
    this._router.navigate(["/"], { replaceUrl: true });
  }
}
