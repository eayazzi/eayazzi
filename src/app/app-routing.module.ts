import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { SidenavModule } from "./components/sidenav/sidenav.module";
import { SwaggerUiComponent } from "./swagger-ui/swagger-ui.component";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./pages/login/login.module").then((m) => m.LoginModule),
  },
  {
    path: "swagger",
    component: SwaggerUiComponent,
  },
  {
    path: "clientes",
    component: SidenavComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./pages/client-list/client-list.module").then(
            (m) => m.ClientListModule
          ),
      },
      {
        path: "nuevo",
        loadChildren: () =>
          import("./pages/client-create/client-create.module").then(
            (m) => m.ClientCreateModule
          ),
      },
    ],
  },
  {
    path: "cliente/:id",
    component: SidenavComponent,
    loadChildren: () =>
      import("./pages/client-detail/client-detail.module").then(
        (m) => m.ClientDetailModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), SidenavModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
