import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  OnChanges,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";
import { Subject } from "rxjs";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { takeUntil } from "rxjs/operators";
import { ActivatedRoute, Router } from "@angular/router";
import { TranslateService, LangChangeEvent } from "@ngx-translate/core";
import { v4 as uuidv4 } from "uuid";

import { ConfirmationService } from "primeng/api";
import { UiBlockService } from "src/app/common/common-services/ui-block.service";
import { AppAlertService } from "src/app/common/common-components/alert/app-alert.service";
import { StdResponse } from "src/app/common/common-model/standar-api-response.model";

import { DialogService, DynamicDialogRef, SplitButton } from "primeng";
import { ResizedEvent } from "angular-resize-event";
import { SessionHelper } from "src/app/helper/session-helper";
import { LZStringService } from "ng-lz-string";
import { DomSanitizer } from "@angular/platform-browser";
import { BreadCrumbService } from "src/app/common/common-components/breadcrumb/breadcrumb.service";
import { DefaultLanguageState } from "src/app/base/default-language/default-language.state";
import { TranslateMessageService } from "src/app/common/common-services/translate.message.service";
import { FEComboConstantService } from "src/app/common/common-services/fe.combo.constants.service";
import { ComboConstants } from "src/app/pg-resource/master/common/combo-constants/model/combo.constants.model";
import { ComboConstantsService } from "src/app/pg-resource/master/common/combo-constants/combo.constants.service";
import { BarangHeader } from "src/app/pg-resource/transaksi/barang/model/barang-header.model";
import { BarangDetail } from "src/app/pg-resource/transaksi/barang/model/barang-detail.model";
import { BarangManualService } from "src/app/pg-resource/transaksi/barang/barang-manual.service";
import { BarangManual } from "src/app/pg-resource/transaksi/barang/model/barang-manual.model";
import { BagianService } from "src/app/pg-resource/master/bagian/bagian.service";
import { Customer } from "src/app/pg-resource/master/customer/model/customer.model";
import { InfoCustomerComponent } from "../../../info/customer/info.customer.component";
import { Bagian } from "src/app/pg-resource/master/bagian/model/bagian.model";
import * as moment from "moment";
import { StdPagingRequest } from "src/app/common/common-model/standar-api-request.model";

@Component({
  selector: "app-barang-manual-input",
  templateUrl: "./barang-manual-input.component.html",
  styleUrls: ["./barang-manual-input.component.scss"],
  providers: [DialogService],
  encapsulation: ViewEncapsulation.None,
})
export class BarangManualInputComponent implements OnInit, OnDestroy, AfterViewChecked {
  bsModalInfoCustomer: DynamicDialogRef;

  public tab1Index = 0;

  private ngUnsubscribe: Subject<boolean> = new Subject();

  public title = "BarangManual";

  public inputForm: FormGroup;

  public mode: string;

  public selectedData: BarangHeader = new BarangHeader();

  public isLoadingDropDown = false;

  // datatables untuk detil lain-lain
  public dataTablesDetail: BarangDetail[] = [];
  public isLoadingResultsdataTablesDetail = false;
  public totalRecordsdataTablesDetail = 0;

  // width dari dataTables (untuk kemudian di set di bawah (di onDivDataTableResized) secara dinamis)
  public dataTablesWidth = "0px";

  // untuk data tables yang punya error message per row
  public expandedRowsdataTablesDetail: {} = {};

  // untuk enable/disable button-button
  public isViewOnly = false;

  // url asal yang membuka layar ini
  public previousUrl = "";

  public radioButtonDeposit: any[];
  comboStatus: object[];

  // tabbed
  public tabIndex = 0;
  public tab2Title = "TransaksiDetail";

  // dropdown bagian
  public comboBagian: any[];
  public dropDownBagian: Bagian[];
  public selectedBagian: string;

  public searchBagianParam: any;

  public numberOfRowsDataTables = 5;

  public pagingSearch: StdPagingRequest = null;
  public firstSearch = 0;
  public searchParamsSearch: any;
  public sortSearch: any;

  // DATATABLE DETAIL
  // datatables untuk detil lain-lain
  // public datatableDetail: BarangDetail[] = [];
  public isLoadingResultsDataTablesDetail = false;
  public totalRecordsDataTablesDetail = 0;

  public expandedRowsDataTablesDetail: {} = {};

  constructor(
    private fb: FormBuilder,
    private appAlertService: AppAlertService,
    private confirmationService: ConfirmationService,
    private uiBlockService: UiBlockService,
    private translateService: TranslateService,
    private barangManualService: BarangManualService,
    private route: ActivatedRoute,
    private router: Router,
    private dialogService: DialogService,
    private lzStringService: LZStringService,
    private domSanitizer: DomSanitizer,
    private breadCrumbService: BreadCrumbService,
    public defaultLanguageState: DefaultLanguageState,
    private cdRef: ChangeDetectorRef,
    private translateMessageService: TranslateMessageService,
    private feComboConstantService: FEComboConstantService,
    private comboConstantsService: ComboConstantsService,
    private bagianService: BagianService
  ) {
    this.pagingSearch = {
      page: 1,
      perPage: this.numberOfRowsDataTables,
    };
    this.sortSearch = {
      namaBagian: "asc",
      kodeBagian: "asc",
    };
    this.searchParamsSearch = {
      namaBagian: null,
      kodeBagian: null,
    };
  }

  public ngOnInit() {
    this.breadCrumbService.sendReloadInfo("reload");
    this.initInputForm();
    this.initRadioButtonDeposit();
    this.initDdlBagian();
    // this.initComboStatus();
    this.dataBridging();
    // console.log("selected", this.selectedData);
    this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      const tempTgtrn = this.inputForm.controls.tgtrn.value;
      this.inputForm.controls.tgtrn.patchValue(null);
      this.cdRef.detectChanges();
      this.inputForm.controls.tgtrn.patchValue(new Date(tempTgtrn));
    });
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
      nomorBon: [{ value: "", disabled: this.isViewOnly }],
      tanggalBon: [{ value: new Date(), disabled: this.isViewOnly }, Validators.required],
      bagianPeminta: [{ value: "", disabled: this.isViewOnly }],
      keterangan: [{ value: "", disabled: this.isViewOnly }],
    });
  }

  public initRadioButtonDeposit() {
    this.uiBlockService.showUiBlock();
    this.feComboConstantService
      .getYaTidak()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        (result) => {
          this.uiBlockService.hideUiBlock();

          this.radioButtonDeposit = result.data.map((item) => new Object({ name: item.deskripsi, key: item.kode }));

          this.inputForm.controls.fltodep.patchValue(this.radioButtonDeposit[0].key);
        },
        (error) => {
          this.uiBlockService.hideUiBlock();
        },
        () => {
          this.uiBlockService.hideUiBlock();
        }
      );
  }

  public datatableDetailChanged() {
    console.log("datatable detail berubah");
  }

  private initComboStatus() {
    this.uiBlockService.showUiBlock();

    const searchParams = {
      rectyp: "INVSTAT",
    };
    const sort: any = {
      rectxt: "asc",
    };

    this.comboConstantsService
      .search(searchParams, sort)
      .pipe(takeUntil(this.ngUnsubscribe))
      .toPromise()
      .then(
        (result: StdResponse<ComboConstants[]>) => {
          this.uiBlockService.hideUiBlock();

          this.comboStatus = result.data.map((item) => new Object({ label: item.rectxt, value: item.reccode }));
        },
        (error) => {
          this.uiBlockService.hideUiBlock();
        }
      );
  }

  private patchValue() {
    if (this.selectedData) {
      this.inputForm.patchValue({
        nomorBon: this.selectedData.nomorBon === null ? "" : this.selectedData.nomorBon,
        tanggalBon: this.selectedData.tanggalBon === null ? "" : new Date(this.selectedData.tanggalBon),
        keterangan: this.selectedData.keterangan === null ? "" : this.selectedData.keterangan,
      });
    }
  }

  public doGet(data: BarangHeader) {
    this.uiBlockService.showUiBlock();

    this.barangManualService
      .get(data)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        (result) => {
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
          SessionHelper.setItem("TBARANGMANUAL-H", sessionData, this.lzStringService);

          this.selectedData = sessionData.data.headerBarang;

          this.dataTablesDetail = [];
          this.dataTablesDetail = result.data.detailBarang;
          this.isLoadingResultsdataTablesDetail = false;
          this.totalRecordsdataTablesDetail = this.dataTablesDetail.length;

          // memberi keyIn untuk keperluan input di grid DAN untuk expandable rows error message pada data tables
          this.dataTablesDetail.map((item) => {
            item.keyIn = uuidv4();
          });

          // ambil untuk tampilan unit pengali deposit beserta satuan siklus nya
          // this.inputForm.controls.nomorBon.patchValue(this.selectedData.nomorBon);

          this.patchValue();
        },
        (error) => {
          this.uiBlockService.hideUiBlock();
          this.appAlertService.error(error.errors);
        },
        () => {
          this.uiBlockService.hideUiBlock();
        }
      );
  }

  private fillModel() {
    this.selectedData.nomorBon = this.inputForm.controls.nomorBon.value;
    this.selectedData.tanggalBon = moment(this.inputForm.controls.tanggalBon.value).format("YYYY-MM-DD");
    this.selectedData.keterangan = this.inputForm.controls.keterangan.value;

    if (this.inputForm.controls.bagianPeminta.value) {
      this.selectedData.bagianPeminta = this.dropDownBagian.find((item) => item.kode == this.selectedBagian);
    }
  }

  private bentukDataUntukDisimpan(): BarangManual {
    this.fillModel();
    // bersihkan data yang baru diinput tapi dihapus oleh user (isDeleted = true dan id nya kosong)
    // detail jurnal
    for (let i = this.dataTablesDetail.length - 1; i >= 0; i--) {
      if (this.dataTablesDetail[i].isSelect && this.dataTablesDetail[i].id === null) {
        this.dataTablesDetail.splice(i, 1);
      }
    }

    const transaksiKomplit = new BarangManual();
    transaksiKomplit.headerBarang = this.selectedData;
    transaksiKomplit.detailBarang = this.dataTablesDetail;

    return transaksiKomplit;
  }

  public doSaveSave() {
    // this.uiBlockService.showUiBlock();

    const transaksiKomplit = this.bentukDataUntukDisimpan();

    this.barangManualService
      .add(transaksiKomplit)
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

          // tambahan
          const result = this.barangManualService.convertResponseBarangManual(error);

          if (result.data) {
            this.barangManualService.translateInGridError(result.data);

            this.dataTablesDetail = result.data.detailLainLain;
            if (this.dataTablesDetail === undefined) {
              this.dataTablesDetail = [];
            }
            this.dataTablesDetail.slice();

            const transaksi = new BarangManual();
            transaksi.headerBarang = this.selectedData;
            transaksi.detailBarang = this.dataTablesDetail;

            const sessionDataHeader = SessionHelper.getItem("TBARANGMANUAL-H", this.lzStringService);
            sessionDataHeader.data = transaksi;
            SessionHelper.setItem("TBARANGMANUAL-H", sessionDataHeader, this.lzStringService);

            // agar secara default semua expandable row terbuka
            const thisRef = this;

            this.dataTablesDetail.forEach((item) => {
              thisRef.expandedRowsdataTablesDetail[item.keyIn] = true;
            });
            this.expandedRowsdataTablesDetail = Object.assign({}, this.expandedRowsdataTablesDetail);
          }
        },
        () => {
          this.uiBlockService.hideUiBlock();
        }
      );
  }

  public doEditSave() {
    this.uiBlockService.showUiBlock();

    const transaksiKomplit = this.bentukDataUntukDisimpan();

    this.barangManualService
      .edit(transaksiKomplit)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        (result) => {
          // this.uiBlockService.hideUiBlock();

          this.translateService.get("EditBerhasil").subscribe((translation) => {
            this.appAlertService.instantInfo(translation);
          });

          this.doGet(result.headerBarang);
        },
        (error) => {
          this.uiBlockService.hideUiBlock();
          this.appAlertService.error(error.errors);

          // tambahan
          const result = this.barangManualService.convertResponseBarangManual(error);

          if (result.data) {
            this.barangManualService.translateInGridError(result.data);

            this.dataTablesDetail = result.data.detailLainLain;
            if (this.dataTablesDetail === undefined) {
              this.dataTablesDetail = [];
            }
            this.dataTablesDetail.slice();

            const transaksi = new BarangManual();
            transaksi.headerBarang = this.selectedData;
            transaksi.detailBarang = this.dataTablesDetail;

            const sessionDataHeader = SessionHelper.getItem("TBARANGMANUAL-H", this.lzStringService);
            sessionDataHeader.data = transaksi;
            SessionHelper.setItem("TBARANGMANUAL-H", sessionDataHeader, this.lzStringService);

            // agar secara default semua expandable row terbuka
            const thisRef = this;
            this.dataTablesDetail.forEach((item) => {
              thisRef.expandedRowsdataTablesDetail[item.keyIn] = true;
            });
            this.expandedRowsdataTablesDetail = Object.assign({}, this.expandedRowsdataTablesDetail);
          }
        },
        () => {
          this.uiBlockService.hideUiBlock();
        }
      );
  }

  public Save() {
    if (this.mode === "add") {
      this.doSaveSave();
    } else {
      this.doEditSave();
    }
  }

  private doDeleteDelete() {
    this.uiBlockService.showUiBlock();
    this.barangManualService
      .delete(this.selectedData)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        (result) => {
          this.inputForm.reset();

          // this.uiBlockService.hideUiBlock();
          this.translateService.get("HapusBerhasil").subscribe((translation) => {
            this.appAlertService.instantInfo(translation);
          });

          // Bersihkan session storage dan ubah ke mode add
          const dataKomplit = new BarangManual();
          dataKomplit.headerBarang.tglupd = new Date();
          dataKomplit.headerBarang.tglcrt = new Date();

          // harus nya ambil dulu data dari session lalu di edit yg perlu supaya url asalnya ga ilang
          const sessionData = SessionHelper.getItem("TBARANGMANUAL-H", this.lzStringService);
          sessionData.data = dataKomplit;
          sessionData.mode = "add";

          // const sessionData = { data: dataKomplit, mode: 'add', prevTabName: '', prevTab: 0, tableFirst: 0, tableNumberOfRows: 0 };
          SessionHelper.setItem("TBARANGMANUAL-H", sessionData, this.lzStringService);

          this.mode = "add";

          this.inputForm.controls.nomor.enable();
          // this.inputForm.controls.tgtrn.patchValue(new Date());

          this.selectedData = dataKomplit.headerBarang;
          this.dataTablesDetail = [];
          this.dataTablesDetail.slice();

          this.isLoadingResultsdataTablesDetail = false;

          this.totalRecordsdataTablesDetail = this.dataTablesDetail.length;

          this.patchValue();
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
        message: translation + " " + this.inputForm.controls.nomor.value + " ?",
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
    const width = event.newWidth - 90;
    this.dataTablesWidth = width + "px";
  }

  public back() {
    console.log(this.previousUrl);
    if (this.previousUrl === "/transaksi/barang") {
      const sessionData = SessionHelper.getItem("TBARANGMANUAL-BROWSE-SCR", this.lzStringService);

      // agar layar sebelumnya tahu bahwa ada aksi kembali dari detail
      // ini untuk membedakan antara layar sebelumnya dibuka via menu dan dibuka via back dari detail
      sessionData.fromDetail = true;
      SessionHelper.setItem("TBARANGMANUAL-BROWSE-SCR", sessionData, this.lzStringService);

      // this.router.navigate(['../../../'], { relativeTo: this.route });
      this.router.navigate([this.previousUrl]);
    } else {
      this.router.navigate([this.previousUrl]);
    }
  }

  private dataBridging() {
    const sessionData = SessionHelper.getItem("TBARANGMANUAL-H", this.lzStringService);

    this.previousUrl = sessionData.urlAsal;
    console.log("data bridging", sessionData);
    if (sessionData.mode === "edit") {
      this.selectedData = sessionData.data.headerBarang;
      this.dataTablesDetail = sessionData.data.detailBarang;

      this.isLoadingResultsdataTablesDetail = false;

      this.mode = "edit";
      this.patchValue();
    } else {
      this.selectedData = sessionData.data.headerBarang;
      this.dataTablesDetail = sessionData.data.detailBarang;

      this.isLoadingResultsdataTablesDetail = false;

      this.mode = "add";
    }

    this.totalRecordsdataTablesDetail = this?.dataTablesDetail?.length == null ? 0 : this?.dataTablesDetail?.length;

    // memberi keyIn untuk keperluan input di grid DAN untuk expandable rows error message pada data tables
    this.dataTablesDetail.map((item) => {
      item.keyIn = uuidv4();
    });

    // ambil untuk tampilan unit pengali deposit beserta satuan siklus nya
    let nildep = 0;
    let jumbul = 1;
    let jumsiklus = 1;
    let satsiklus = "";

    // this.dataTablesDetail.map((item) => {
    //   if (!item.isSelect) {
    //     // karena isi detil initial pasti cuma satu yang aktif, maka bisa langsung diambil
    //     nildep = nildep + item.id;
    //     jumbul = 1;
    //   }
    // });

    this.inputForm.controls.nildep.patchValue(nildep);
    this.inputForm.controls.jumbul.patchValue(jumbul);
    this.inputForm.controls.jumsiklus.patchValue(jumsiklus);
    this.inputForm.controls.satsiklus.patchValue(satsiklus);

    this.patchValue();

    if (sessionData.prevTabName === "tab1Index") {
      if (sessionData.prevTab !== undefined && sessionData.prevTab > 0) {
        this.tab1Index = sessionData.prevTab - 1;
      }
    }
  }

  // Untuk verifikasi inputan di autocomplete customer
  public initDdlBagian() {
    this.isLoadingDropDown = false;
    // this.uiBlockService.showUiBlock();

    let namaBagianFilter = null;
    let kodeBagianFilter = null;

    if (this.inputForm.value.namaBagian) {
      namaBagianFilter = this.inputForm.value.namaBagian;
    }

    if (this.inputForm.value.kodeBagian) {
      kodeBagianFilter = this.inputForm.value.kodeBagian;
    }

    this.searchParamsSearch = {
      namaBagian: namaBagianFilter,
      kodeBagian: kodeBagianFilter,
    };

    this.bagianService
      .search(this.searchBagianParam, this.sortSearch, this.pagingSearch)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        (result: StdResponse<Bagian[]>) => {
          if (result.data.length > 0) {
            this.isLoadingDropDown = false;
            // this.uiBlockService.hideUiBlock();
            this.dropDownBagian = result.data;
            this.comboBagian = result.data.map((item) => new Object({ label: item.nama, value: item.kode }));
            let getFirstObject: any = result.data[0];
            this.selectedBagian = getFirstObject.kode;
          }
        },
        (error) => {
          this.isLoadingDropDown = false;
          // this.uiBlockService.hideUiBlock();
          this.appAlertService.error(error.errors);
        },
        () => {
          this.isLoadingDropDown = false;
          // this.uiBlockService.hideUiBlock();
        }
      );
  }

  public selectedCustomer() {
    this.inputForm.controls.nmcust.patchValue(this.inputForm.controls.customer.value.billcust2);
    this.inputForm.controls.nama.patchValue(this.inputForm.controls.customer.value.billnama2);
    this.inputForm.controls.alamat.patchValue(this.inputForm.controls.customer.value.billalamat2);
    this.inputForm.controls.email.patchValue(this.inputForm.controls.customer.value.billemail2);

    this.clearDetilInitial();
  }

  public getBillCustomerIni() {
    this.inputForm.controls.nmcust.patchValue(this.inputForm.controls.customer.value.nama);
    this.inputForm.controls.nama.patchValue(this.inputForm.controls.customer.value.billnama);
    this.inputForm.controls.alamat.patchValue(this.inputForm.controls.customer.value.billalamat);
    this.inputForm.controls.email.patchValue(this.inputForm.controls.customer.value.billemail);
  }

  public selectedProduk() {
    this.clearDetilInitial();
  }

  // private totalNilaiBruto() {
  //   let totalBruto = 0;
  //   let totalDiscount = 0;
  //   let totalNetto = 0;

  //   let nildep = 0;
  //   let jumbul = 1;
  //   let jumsiklus = 1;
  //   let satsiklus = "";

  //   this.dataTablesDetail.map((item) => {
  //     if (!item.isSelect) {
  //       totalBruto = totalBruto + item.harga;
  //       totalDiscount = totalDiscount + item.nilpctdisc;
  //       totalDiscount = totalDiscount + item.nildisc;
  //       totalNetto = totalNetto + item.netto;

  //       nildep = nildep + item.netto;
  //     }
  //   });

  //   this.inputForm.controls.nildep.patchValue(nildep);
  //   this.inputForm.controls.jumbul.patchValue(jumbul);
  //   this.inputForm.controls.jumsiklus.patchValue(jumsiklus);
  //   this.inputForm.controls.satsiklus.patchValue(satsiklus);

  //   //const ppn = Math.floor(totalNetto * (10/100));
  //   this.inputForm.controls.bruto.patchValue(totalBruto);
  //   this.inputForm.controls.totdisc.patchValue(totalDiscount);
  //   let dpp = totalBruto - totalDiscount - this.inputForm.controls.nildis.value - this.inputForm.controls.depused.value;
  //   const ppn = Math.floor(dpp * (10 / 100));

  //   //this.inputForm.controls.dpp.patchValue(totalNetto);
  //   this.inputForm.controls.dpp.patchValue(dpp);
  //   this.inputForm.controls.ppn.patchValue(ppn);
  //   //this.inputForm.controls.netto.patchValue(totalNetto + ppn);
  //   this.inputForm.controls.netto.patchValue(dpp + ppn);
  // }

  // public detilLainLainChanged() {
  //   this.totalNilaiBruto();
  // }

  // public detilTrainingChanged() {
  //   this.totalNilaiBruto();
  // }

  // public detilImplementasiChanged() {
  //   this.totalNilaiBruto();
  // }

  // public detilInitialChanged() {
  //   this.totalNilaiBruto();
  // }

  // public detilLainLainMasterChanged() {
  //   this.totalNilaiBruto();
  // }

  public depusedChanged() {
    let dpp =
      this.inputForm.controls.bruto.value -
      this.inputForm.controls.totdisc.value -
      this.inputForm.controls.nildis.value -
      this.inputForm.controls.depused.value;

    const ppn = Math.floor(dpp * (10 / 100));
    this.inputForm.controls.dpp.patchValue(dpp);
    this.inputForm.controls.ppn.patchValue(ppn);
    this.inputForm.controls.netto.patchValue(dpp + ppn);
  }

  public radioButtonDepositChanged() {
    if (this.inputForm.controls.fltodep.value === "Y") {
      this.inputForm.controls.depused.patchValue(0);
      this.inputForm.controls.depused.disable();
    } else {
      this.inputForm.controls.depused.enable();
    }
  }

  private clearDetilInitial() {
    this.inputForm.controls.nildep.patchValue(0);
  }

  public hitungNilaiDiskonDariProsen() {
    this.inputForm.controls.nildis.patchValue(0);
    const total = this.inputForm.controls.bruto.value - this.inputForm.controls.totdisc.value;
    const prosen = this.inputForm.controls.pctdis.value;

    this.inputForm.controls.nildis.patchValue(Math.floor((prosen * total) / 100));

    this.depusedChanged();
  }

  public hitungProsenDariNilai() {
    this.inputForm.controls.pctdis.patchValue(0);
    const total = this.inputForm.controls.bruto.value - this.inputForm.controls.totdisc.value;
    const nildis = this.inputForm.controls.nildis.value;

    this.inputForm.controls.pctdis.patchValue((nildis * 100) / total);

    this.depusedChanged();
  }

  public showInfoCustomer() {
    const pass = new Customer();
    pass.nama = this.inputForm.controls.nama.value;

    this.bsModalInfoCustomer = this.dialogService.open(InfoCustomerComponent, {
      width: "70%",
      contentStyle: { "max-height": "auto", overflow: "auto" },
      baseZIndex: 10000,
      data: {
        mode: "add",
        passedData: pass,
      },
    });

    this.bsModalInfoCustomer.onClose.subscribe(
      (data: any) => {
        const returnedData = data.selectedData;
        const mode = data.mode;

        if (returnedData) {
          this.inputForm.controls.customer.patchValue(returnedData);
          this.selectedCustomer();
        }
      },
      () => {}
    );
  }
}

class BagianDDL {
  label: string;
  value: string;

  constructor(label: string, value: string) {
    this.label = label;
    this.value = value;
  }
}
