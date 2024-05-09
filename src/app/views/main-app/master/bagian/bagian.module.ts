import { NgModule } from "@angular/core";
import { BagianBrowseComponent } from "./browse/bagian-browse.component";
import { BagianRoutingModule } from "./bagian.routing";
import { BagianService } from "src/app/pg-resource/master/bagian/bagian.service";

@NgModule({
  declarations: [BagianBrowseComponent],
  imports: [BagianRoutingModule],
  exports: [],
  providers: [BagianService],
})
export class BagianModule {}
