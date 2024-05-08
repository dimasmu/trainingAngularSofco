import { NgModule } from "@angular/core";
import { BarangService } from "src/app/pg-resource/master/barang/barang.service";
import { BarangBrowseComponent } from "./browse/barang-browse.component";
import { BarangRoutingModule } from "./barang.routing";

@NgModule({
  declarations: [BarangBrowseComponent],
  imports: [BarangRoutingModule],
  exports: [],
  providers: [BarangService],
})
export class BarangModule {}
