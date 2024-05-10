import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import {
  AutoCompleteModule,
  CalendarModule,
  CardModule,
  CheckboxModule,
  DialogService,
  DropdownModule,
  FieldsetModule,
  InputNumberModule,
  InputTextareaModule,
  RadioButtonModule,
  TabViewModule,
} from "primeng";
import { AccordionModule } from "primeng/accordion";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { TableModule } from "primeng/table";
import { FEComboConstantService } from "src/app/common/common-services/fe.combo.constants.service";
import { AngularResizedEventModule } from "angular-resize-event";
import { TooltipModule } from "primeng/tooltip";
import { SplitButtonModule } from "primeng/splitbutton";
import { GlComboConstantService } from "src/app/pg-resource/constants/combo.constants.service";
import { CarouselModule } from "primeng/carousel";
import { PipeModule } from "src/app/base/pipe/pipe.module";
import { ComboConstantsService } from "src/app/pg-resource/master/common/combo-constants/combo.constants.service";
import { BarangService } from "src/app/pg-resource/master/barang/barang.service";
import { BarangRoutingModule } from "./barang.routing";
import { BarangInputComponent } from "./input/barang-input.component";
import { BarangBrowseComponent } from "./browse/barang-browse.component";

@NgModule({
  declarations: [BarangBrowseComponent, BarangInputComponent],
  entryComponents: [],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    AccordionModule,
    TableModule,
    TranslateModule,
    ButtonModule,
    InputTextModule,
    CalendarModule,
    BarangRoutingModule,
    RadioButtonModule,
    TabViewModule,
    DropdownModule,
    InputNumberModule,
    CheckboxModule,
    InputTextareaModule,
    CardModule,
    AutoCompleteModule,
    AngularResizedEventModule,
    TooltipModule,
    SplitButtonModule,
    CarouselModule,
    PipeModule,
    FieldsetModule,
  ],
  exports: [BarangInputComponent],
  providers: [
    // TranslateMessageService,
    GlComboConstantService,
    FEComboConstantService,
    BarangService,
    ComboConstantsService,
    DialogService,
  ],
})
export class BarangModule {}
