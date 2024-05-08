import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { barangBrowseComponent } from "./browse/barang-browse.component";

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
        component: barangBrowseComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BarangRoutingModule {}
