import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainAppComponent } from "./main-app.component";

const routes: Routes = [
  {
    path: "",
    component: MainAppComponent,
    children: [
      { path: "", pathMatch: "full", redirectTo: "dashboard" },
      {
        path: "dashboard",
        data: {
          breadcrumb: "Dashboard",
          menucode: "001",
        },
        loadChildren: () => import("./dashboard/dashboard.module").then((m) => m.DashboardModule),
      },

      // domain
      {
        path: "master/customer",
        data: {
          breadcrumb: "Customer",
          menucode: "002008",
        },
        loadChildren: () => import("./master/customer/customer.module").then((m) => m.CustomerModule),
      },
      {
        path: "master/barang",
        data: {
          breadcrumb: "Barang",
          menucode: "002009",
        },
        loadChildren: () => import("./master/barang/barang.module").then((m) => m.BarangModule),
      },
      {
        path: "master/bagian",
        data: {
          breadcrumb: "Bagian",
          menucode: "002010",
        },
        loadChildren: () => import("./master/bagian/bagian.module").then((m) => m.BagianModule),
      },
      {
        path: "transaksi/barang",
        data: {
          breadcrumb: "BarangManual",
          menucode: "003002",
        },
        loadChildren: () => import("./transaksi/barang/barang.module").then((m) => m.TransaksiBarangManualModule),
      },
      // {
      //   path: "transaksi/invoice-manual",
      //   data: {
      //     breadcrumb: "InvoiceManual",
      //     menucode: "003001",
      //   },
      //   loadChildren: () =>
      //     import("./transaksi/invoice-manual/invoice-manual.module").then(
      //       (m) => m.InvoiceManualModule
      //     ),
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainAppRoutingModule {}
