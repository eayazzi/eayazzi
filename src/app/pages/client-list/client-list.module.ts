import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ClientListRoutingModule } from "./client-list-routing.module";
import { ClientListComponent } from "./client-list.component";
import { SharedModule } from "src/app/shared/shared/shared.module";

@NgModule({
  declarations: [ClientListComponent],
  imports: [CommonModule, ClientListRoutingModule, SharedModule],
})
export class ClientListModule {}
