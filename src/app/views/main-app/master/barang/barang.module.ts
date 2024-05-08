import { NgModule } from "@angular/core";
import { BarangService } from "src/app/pg-resource/master/barang/barang.service";
import { barangBrowseComponent } from "./browse/barang-browse.component";

@NgModule({
  declarations: [barangBrowseComponent],
  imports: [],
  exports: [],
  providers: [BarangService],
})
export class BarangModule {}
