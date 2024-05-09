import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BagianBrowseComponent } from "./browse/bagian-browse.component";

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
        component: BagianBrowseComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BagianRoutingModule {}
