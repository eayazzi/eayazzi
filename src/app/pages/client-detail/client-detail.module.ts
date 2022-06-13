import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ClientDetailRoutingModule } from "./client-detail-routing.module";
import { ClientDetailComponent } from "./client-detail.component";
import { SharedModule } from "src/app/shared/shared/shared.module";

@NgModule({
  declarations: [ClientDetailComponent],
  imports: [CommonModule, ClientDetailRoutingModule, SharedModule],
})
export class ClientDetailModule {}
