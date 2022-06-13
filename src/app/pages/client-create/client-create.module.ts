import { NgModule } from "@angular/core";
import { CommonModule, DatePipe } from "@angular/common";

import { ClientCreateRoutingModule } from "./client-create-routing.module";
import { ClientCreateComponent } from "./client-create.component";
import { SharedModule } from "src/app/shared/shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [ClientCreateComponent],
  imports: [CommonModule, ClientCreateRoutingModule, SharedModule],
  providers: [DatePipe],
})
export class ClientCreateModule {}
