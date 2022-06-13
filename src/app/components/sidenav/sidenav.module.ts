import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SidenavComponent } from "./sidenav.component";
import { RouterModule } from "@angular/router";

import { SharedModule } from "src/app/shared/shared/shared.module";

@NgModule({
  declarations: [SidenavComponent],
  imports: [CommonModule, RouterModule, SharedModule],
})
export class SidenavModule {}
