import { NgModule } from "@angular/core";
import { BarangService } from "src/app/pg-resource/master/barang/barang.service";
import { BarangBrowseComponent } from "./browse/barang-browse.component";
import { BarangRoutingModule } from "./barang.routing";
import { TableModule } from "primeng";
import { PipeModule } from "src/app/base/pipe/pipe.module";

@NgModule({
  declarations: [BarangBrowseComponent],
  imports: [BarangRoutingModule, TableModule, PipeModule],
  exports: [],
  providers: [BarangService],
})
export class BarangModule {}
