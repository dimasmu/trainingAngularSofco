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
import { BagianService } from "src/app/pg-resource/master/bagian/bagian.service";
import { BagianRoutingModule } from "./bagian.routing";
import { BagianInputComponent } from "./input/bagian-input.component";
import { BagianBrowseComponent } from "./browse/bagian-browse.component";

@NgModule({
  declarations: [BagianBrowseComponent, BagianInputComponent],
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
    BagianRoutingModule,
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
  exports: [BagianInputComponent],
  providers: [
    // TranslateMessageService,
    GlComboConstantService,
    FEComboConstantService,
    BagianService,
    ComboConstantsService,
    DialogService,
  ],
})
export class BagianModule {}
