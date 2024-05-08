import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BarangBrowseComponent } from "./browse/barang-browse.component";

const routes: Routes = [
  {
    path: "",
    data: {
      breadcrumb: null,
    },
    children: [
      {
        path: "",
        data: {
          breadcrumb: null,
        },
        component: BarangBrowseComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BarangRoutingModule {}
