import { AfterViewChecked, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { Subject } from "rxjs";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { takeUntil } from "rxjs/operators";
import { ActivatedRoute, Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";

import { ConfirmationService } from "primeng/api";
import { UiBlockService } from "src/app/common/common-services/ui-block.service";
import { StdPagingRequest } from "src/app/common/common-model/standar-api-request.model";
import { AppAlertService } from "src/app/common/common-components/alert/app-alert.service";

import { DialogService } from "primeng";
import { ResizedEvent } from "angular-resize-event";
import { SessionHelper } from "src/app/helper/session-helper";
import { LZStringService } from "ng-lz-string";
import { DomSanitizer } from "@angular/platform-browser";
import { BreadCrumbService } from "src/app/common/common-components/breadcrumb/breadcrumb.service";
import { DefaultLanguageState } from "src/app/base/default-language/default-language.state";
import { TranslateMessageService } from "src/app/common/common-services/translate.message.service";
import { ComboConstantsService } from "src/app/pg-resource/master/common/combo-constants/combo.constants.service";
import { FEComboConstantService } from "src/app/common/common-services/fe.combo.constants.service";
import { Barang } from "src/app/pg-resource/master/barang/model/barang.model";
import { BarangService } from "src/app/pg-resource/master/barang/barang.service";

@Component({
  selector: "app-barang-input",
  templateUrl: "./barang-input.component.html",
  styleUrls: ["./barang-input.component.scss"],
  providers: [DialogService],
  encapsulation: ViewEncapsulation.None,
})
export class BarangInputComponent implements OnInit, OnDestroy, AfterViewChecked {
  public tab1Index = 0;
  public firstSearch = 0;
  public pagingSearch: StdPagingRequest = null;
  public searchParamsSearch: any;
  public sortSearch: any;

  private ngUnsubscribe: Subject<boolean> = new Subject();

  public title = "MasterBarangInput";

  public inputForm: FormGroup;

  public radioButtonAktif: any[];
  public radioButtonFlmainva: any[];

  public mode: string;

  public selectedData: Barang = null;

  // width dari dataTables (untuk kemudian di set di bawah (di onDivDataTableResized) secara dinamis)
  public dataTablesWidth = "0px";

  // untuk enable/disable button-button
  public isViewOnly = false;

  // url asal yang membuka layar ini
  public previousUrl = "";

  constructor(
    private fb: FormBuilder,
    private appAlertService: AppAlertService,
    private confirmationService: ConfirmationService,
    private uiBlockService: UiBlockService,
    private translateService: TranslateService,
    private BarangService: BarangService,
    private route: ActivatedRoute,
    private router: Router,
    private dialogService: DialogService,
    private lzStringService: LZStringService,
    private domSanitizer: DomSanitizer,
    private breadCrumbService: BreadCrumbService,
    public defaultLanguageState: DefaultLanguageState,
    private cdRef: ChangeDetectorRef,
    private translateMessageService: TranslateMessageService,
    private comboConstantsService: ComboConstantsService,
    private feComboConstantService: FEComboConstantService
  ) {}

  public ngOnInit() {
    this.breadCrumbService.sendReloadInfo("reload");
    this.initInputForm();
    this.initRadioButtonAktif();
    // this.initRadioButtonFlmainva();

    this.dataBridging();
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next(true);
    this.ngUnsubscribe.complete();
  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }

  private initInputForm() {
    this.inputForm = this.fb.group({
      namaBarang: [{ value: "", disabled: this.isViewOnly }, Validators.required],
      kodeBarang: [{ value: "", disabled: this.isViewOnly }, Validators.required],
      unit1: [{ value: "", disabled: this.isViewOnly }, Validators.required],
      konversiUnit1ToUnit2: [{ value: "", disabled: this.isViewOnly }, Validators.required],
      unit2: [{ value: "", disabled: this.isViewOnly }, Validators.required],
      konversiUnit2ToUnitStok: [{ value: "", disabled: this.isViewOnly }, Validators.required],
      unitStok: [{ value: "", disabled: this.isViewOnly }, Validators.required],
      aktif: [{ value: true, disabled: this.isViewOnly }],
    });
  }

  public initRadioButtonAktif() {
    this.uiBlockService.showUiBlock();
    this.feComboConstantService
      .getAktifNonAktif()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        (result) => {
          this.uiBlockService.hideUiBlock();

          this.radioButtonAktif = result.data.map((item) => new Object({ name: item.deskripsi, key: item.kode }));

          this.inputForm.controls.aktif.patchValue(this.radioButtonAktif[1].key);
        },
        (error) => {
          this.uiBlockService.hideUiBlock();
        },
        () => {
          this.uiBlockService.hideUiBlock();
        }
      );
  }

  public initRadioButtonFlmainva() {
    this.uiBlockService.showUiBlock();
    this.feComboConstantService
      .getYaTidak()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        (result) => {
          this.uiBlockService.hideUiBlock();

          this.radioButtonFlmainva = result.data.map((item) => new Object({ name: item.deskripsi, key: item.kode }));

          this.inputForm.controls.flmainva.patchValue(this.radioButtonFlmainva[0].key);
        },
        (error) => {
          this.uiBlockService.hideUiBlock();
        },
        () => {
          this.uiBlockService.hideUiBlock();
        }
      );
  }

  private patchValue() {
    if (this.selectedData) {
      this.inputForm.patchValue({
        namaBarang: this.selectedData.namaBarang == null ? "" : this.selectedData.namaBarang,
        kodeBarang: this.selectedData.kodeBarang == null ? "" : this.selectedData.kodeBarang,
        unit1: this.selectedData.unit1 == null ? "" : this.selectedData.unit1,
        konversiUnit1ToUnit2:
          this.selectedData.konversiUnit1ToUnit2 == null ? "" : this.selectedData.konversiUnit1ToUnit2,
        unit2: this.selectedData.unit2 == null ? "" : this.selectedData.unit2,
        konversiUnit2ToUnitStok:
          this.selectedData.konversiUnit2ToUnitStok == null ? "" : this.selectedData.konversiUnit2ToUnitStok,
        unitStok: this.selectedData.unitStok == null ? "" : this.selectedData.unitStok,
        aktif: this.selectedData.aktif == null ? "" : this.selectedData.aktif,
      });
    }
  }

  public doGet(data: Barang) {
    this.uiBlockService.showUiBlock();

    this.BarangService.get(data)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        (result) => {
          this.uiBlockService.hideUiBlock();

          // set ke mode edit, dan set data dari hasil balikan
          this.mode = "edit";
          const sessionData = {
            data: result.data,
            mode: "edit",
            prevTabName: "",
            prevTab: 0,
            tableFirst: 0,
            tableNumberOfRows: 0,
          };
          SessionHelper.setItem("Mbarang-H", sessionData, this.lzStringService);

          this.selectedData = sessionData.data;

          this.patchValue();

          // this.inputForm.controls.nama.disable();
        },
        (error) => {
          this.uiBlockService.hideUiBlock();
          this.appAlertService.error(error.errors);
        }
      );
  }

  private fillModel() {
    this.selectedData.namaBarang = this.inputForm.controls.namaBarang.value;
    this.selectedData.kodeBarang = this.inputForm.controls.kodeBarang.value;
    this.selectedData.unit1 = this.inputForm.controls.unit1.value;
    this.selectedData.konversiUnit1ToUnit2 = this.inputForm.controls.konversiUnit1ToUnit2.value;
    this.selectedData.unit2 = this.inputForm.controls.unit2.value;
    this.selectedData.konversiUnit2ToUnitStok = this.inputForm.controls.konversiUnit2ToUnitStok.value;
    this.selectedData.unitStok = this.inputForm.controls.unitStok.value;
    this.selectedData.aktif = this.inputForm.controls.aktif.value;
  }

  public doSaveSave() {
    this.uiBlockService.showUiBlock();

    this.fillModel();

    const transaksiKomplit = this.selectedData;

    this.BarangService.add(transaksiKomplit)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        (result) => {
          this.uiBlockService.hideUiBlock();

          this.translateService.get("TambahBerhasil").subscribe((translation) => {
            this.appAlertService.instantInfo(translation);
          });

          this.doGet(result);
        },
        (error) => {
          this.uiBlockService.hideUiBlock();
          this.appAlertService.error(error.errors);
        }
      );
  }

  public doEditSave() {
    this.uiBlockService.showUiBlock();

    this.fillModel();

    const transaksiKomplit = this.selectedData;

    this.BarangService.edit(transaksiKomplit)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        (result) => {
          this.uiBlockService.hideUiBlock();

          this.translateService.get("EditBerhasil").subscribe((translation) => {
            this.appAlertService.instantInfo(translation);
          });

          this.doGet(result);
        },
        (error) => {
          this.uiBlockService.hideUiBlock();
          this.appAlertService.error(error.errors);
        }
      );
  }

  private displayInstantError(errorCode: string) {
    const errorMsg = {
      code: errorCode,
      desc: "",
      // args: [ this.datePipe.transform(param.tglawal,'dd/MM/yyyy'),
      //         this.datePipe.transform(param.tglakhir,'dd/MM/yyyy'),
      //       ],
      args: [],
    };

    errorMsg.desc = this.translateMessageService.translateGeneralMessage(errorMsg);
    this.appAlertService.error(errorMsg);
  }

  public Save() {
    // if (this.valDataBillTerisiSalahSatuSaja()) {
    if (this.mode === "add") {
      this.doSaveSave();
    } else {
      this.doEditSave();
    }
    // }
  }

  private doDeleteDelete() {
    this.uiBlockService.showUiBlock();
    this.BarangService.delete(this.selectedData)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        (result) => {
          this.inputForm.reset();
          this.selectedData = null;

          this.uiBlockService.hideUiBlock();
          this.translateService.get("HapusBerhasil").subscribe((translation) => {
            this.appAlertService.instantInfo(translation);
          });

          // Bersihkan session storage dan ubah ke mode add
          const transaksiJurnalComplete = new Barang();

          const sessionData = {
            data: transaksiJurnalComplete,
            mode: "add",
            prevTabName: "",
            prevTab: 0,
            tableFirst: 0,
            tableNumberOfRows: 0,
          };
          SessionHelper.setItem("Mbarang-H", sessionData, this.lzStringService);

          this.mode = "add";
          // this.initInputForm();
          this.inputForm.controls.nama.enable();

          this.selectedData = sessionData.data;
          // ===============================================
        },
        (error: any) => {
          this.appAlertService.error(error.errors);
        },
        () => {
          this.uiBlockService.hideUiBlock();
        }
      );
  }

  public delete() {
    this.translateService.get("HapusTransaksiNomor").subscribe((translation) => {
      this.confirmationService.confirm({
        message: translation + this.inputForm.controls.nama.value + " ?",
        header: "Confirmation",
        icon: "pi pi-exclamation-triangle",
        accept: () => {
          this.doDeleteDelete();
        },
        reject: () => {},
      });
    });
  }

  // Dipanggil saat terjadi resize terhadap div yang menampung data table, agar width dari data table
  // dapat di set
  onDivDataTableResized(event: ResizedEvent) {
    const width = event.newWidth - 52; // 14 ini padding kiri kanan dari area content
    this.dataTablesWidth = width + "px";
  }

  public back() {
    console.log("back");
    if (this.previousUrl === "/master/Barang") {
      const sessionData = SessionHelper.getItem("MBarang-BROWSE-SCR", this.lzStringService);

      // agar layar sebelumnya tahu bahwa ada aksi kembali dari detail
      // ini untuk membedakan antara layar sebelumnya dibuka via menu dan dibuka via back dari detail
      sessionData.fromDetail = true;
      SessionHelper.setItem("MBarang-BROWSE-SCR", sessionData, this.lzStringService);

      this.router.navigate(["../../../"], { relativeTo: this.route });
    } else {
      this.router.navigate([this.previousUrl]);
    }
  }

  private dataBridging() {
    const sessionData = SessionHelper.getItem("Mbarang-H", this.lzStringService);
    this.previousUrl = sessionData.urlAsal;
    if (sessionData.mode === "edit") {
      this.selectedData = sessionData.data;
      this.mode = "edit";
      this.initInputForm();
    } else {
      this.selectedData = sessionData.data;
      this.mode = "add";
    }

    this.patchValue();

    if (sessionData.prevTabName === "tab1Index") {
      if (sessionData.prevTab !== undefined && sessionData.prevTab > 0) {
        this.tab1Index = sessionData.prevTab - 1;
      }
    }
  }

  public copyToPihak2() {
    this.inputForm.controls.billnama.patchValue(this.inputForm.controls.picnama.value);
    this.inputForm.controls.billrole.patchValue(this.inputForm.controls.picrole.value);
    this.inputForm.controls.billnumber.patchValue(this.inputForm.controls.picnumber.value);
    this.inputForm.controls.billemail.patchValue(this.inputForm.controls.picemail.value);
    this.inputForm.controls.billalamat.patchValue(this.inputForm.controls.picalamat.value);
  }

  public copyToPihak3() {
    this.inputForm.controls.billcust2.patchValue(this.inputForm.controls.nama.value);
    this.inputForm.controls.billnama2.patchValue(this.inputForm.controls.billnama.value);
    this.inputForm.controls.billrole2.patchValue(this.inputForm.controls.billrole.value);
    this.inputForm.controls.billnumber2.patchValue(this.inputForm.controls.billnumber.value);
    this.inputForm.controls.billemail2.patchValue(this.inputForm.controls.billemail.value);
    this.inputForm.controls.billalamat2.patchValue(this.inputForm.controls.billalamat.value);
  }
}
