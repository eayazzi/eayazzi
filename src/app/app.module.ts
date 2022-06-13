import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AngularFireModule } from "@angular/fire";
import { environment } from "../environments/environment";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { ToastrModule } from "ngx-toastr";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { SwaggerUiComponent } from "./swagger-ui/swagger-ui.component";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { HttpRequestInterceptor } from "./interceptors/loading-interceptor";
@NgModule({
  declarations: [AppComponent, SwaggerUiComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    AngularFireAuthModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
