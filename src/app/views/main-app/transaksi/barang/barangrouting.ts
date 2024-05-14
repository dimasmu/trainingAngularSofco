import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BarangManualBrowseComponent } from "./browse/barang-manual-browse.component";
import { BarangManualInputComponent } from "./input/barang-manual-input.component";

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
        component: BarangManualBrowseComponent,
      },
      {
        path: "input",
        data: {
          breadcrumb: "Input",
        },
        children: [
          {
            path: "",
            data: {
              breadcrumb: null,
            },
            component: BarangManualInputComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BarangManualRoutingModule {}
