import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LoginRoutingModule } from "./login-routing.module";
import { LoginComponent } from "./login.component";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
  ],
})
export class LoginModule {}
