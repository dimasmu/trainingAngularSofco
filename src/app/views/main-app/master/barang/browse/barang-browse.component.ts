import { AfterViewChecked, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { LangChangeEvent, TranslateService } from "@ngx-translate/core";
import * as moment from "moment";
import { ConfirmationService, MenuItem } from "primeng/api";
import { Subject } from "rxjs";
import { isEmpty, takeUntil } from "rxjs/operators";
import { AppAlertService } from "src/app/common/common-components/alert/app-alert.service";
import { StdPagingRequest } from "src/app/common/common-model/standar-api-request.model";
import { StdResponse } from "src/app/common/common-model/standar-api-response.model";
import { FEComboConstantService } from "src/app/common/common-services/fe.combo.constants.service";
import { UiBlockService } from "src/app/common/common-services/ui-block.service";
import { PagingHelper } from "src/app/helper/paging-helper";
import { SessionHelper } from "src/app/helper/session-helper";
import { LZStringService } from "ng-lz-string";
import { ResizedEvent } from "angular-resize-event";
import { BreadCrumbService } from "src/app/common/common-components/breadcrumb/breadcrumb.service";
import { DefaultLanguageState } from "src/app/base/default-language/default-language.state";
import { ObjectHelper } from "src/app/helper/object-helper";
import { DialogService, DynamicDialogRef } from "primeng";
import { v4 as uuidv4 } from "uuid";
import { ComboConstantsService } from "src/app/pg-resource/master/common/combo-constants/combo.constants.service";
import { ComboConstants } from "src/app/pg-resource/master/common/combo-constants/model/combo.constants.model";
import { Barang } from "src/app/pg-resource/master/barang/model/barang.model";
import { BarangService } from "src/app/pg-resource/master/barang/barang.service";

@Component({
  selector: "app-barang-browse",
  templateUrl: "./barang-browse.component.html",
  providers: [DialogService],
  encapsulation: ViewEncapsulation.None,
})
export class BarangBrowseComponent implements OnInit, OnDestroy, AfterViewChecked {
  private ngUnsubscribe: Subject<boolean> = new Subject();

  public title = "MasterBarang";

  public userForm: FormGroup;

  bsModalSelectTemplate: DynamicDialogRef;

  public radioButtonStatusKonfirmasi: any[];

  public dataTables: Barang[] = [];
  public numberOfRowsDataTables = 5;
  public isLoadingResultsDataTables = false;
  public totalRecordsDataTables = 0;
  public colsUserDataTables: any[];

  public pagingSearch: StdPagingRequest = null;
  public firstSearch = 0;
  public searchParamsSearch: any;
  public sortSearch: any;

  // width dari dataTables (untuk kemudian di set di bawah (di onDivDataTableResized) secara dinamis)
  public dataTablesWidth = "0px";

  public radioButtonAktif: any[];

  constructor(
    private fb: FormBuilder,
    private appAlertService: AppAlertService,
    private confirmationService: ConfirmationService,
    private uiBlockService: UiBlockService,
    private translateService: TranslateService,
    private barangService: BarangService,
    private feComboConstantService: FEComboConstantService,
    private comboConstantsService: ComboConstantsService,
    private route: ActivatedRoute,
    private router: Router,
    private lzStringService: LZStringService,
    private cdRef: ChangeDetectorRef,
    private breadCrumbService: BreadCrumbService,
    public defaultLanguageState: DefaultLanguageState,
    private dialogService: DialogService
  ) {
    this.pagingSearch = {
      page: 1,
      perPage: this.numberOfRowsDataTables,
    };
    this.sortSearch = {
      namaBarang: "asc",
      kodeBarang: "asc",
    };
    this.searchParamsSearch = {
      namaBarang: null,
      kodeBarang: null,
      barangAktif: false,
    };
  }

  public ngOnInit() {
    this.breadCrumbService.sendReloadInfo("reload");
    this.initUserForm();
    this.initRadioButtonAktif();
    this.initColsUserDataTables();
    this.dataBridging();
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next(true);
    this.ngUnsubscribe.complete();
  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }

  private initUserForm() {
    this.userForm = this.fb.group({
      namaBarang: [""],
      kodeBarang: [""],
      barangAktif: [""],
    });

    console.log(this.userForm.controls.namaBarang.value);
    this.searchParamsSearch = {
      namaBarang: this.userForm.controls.namaBarang.value,
      kodeBarang: this.userForm.controls.kodeBarang.value,
      barangAktif: this.userForm.controls.barangAktif.value,
    };
  }

  public initRadioButtonAktif() {
    this.uiBlockService.showUiBlock();
    this.feComboConstantService
      .getFilterAktif()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        (result) => {
          this.uiBlockService.hideUiBlock();

          this.radioButtonAktif = result.data.map((item) => new Object({ name: item.deskripsi, key: item.kode }));
        },
        (error) => {
          this.uiBlockService.hideUiBlock();
        },
        () => {
          this.uiBlockService.hideUiBlock();
        }
      );
  }

  public search() {
    console.log("tes");
    this.isLoadingResultsDataTables = false;
    this.uiBlockService.showUiBlock();

    let namaBarangFilter = null;
    let kodeBarangFilter = null;
    let barangAktifFilter = null;

    if (this.userForm.value.namaBarang) {
      namaBarangFilter = this.userForm.value.namaBarang;
    }

    if (this.userForm.value.kodeBarang) {
      kodeBarangFilter = this.userForm.value.kodeBarang;
    }

    if (this.userForm.value.barangAktif) {
      let isBarangAktif: boolean = this.userForm.value.barangAktif == "T" ? false : true;
      barangAktifFilter = isBarangAktif;
    }

    this.searchParamsSearch = {
      namaBarang: namaBarangFilter,
      kodeBarang: kodeBarangFilter,
      barangAktif: barangAktifFilter,
    };

    this.barangService
      .search(this.searchParamsSearch, this.sortSearch, this.pagingSearch)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        (result: StdResponse<Barang[]>) => {
          this.isLoadingResultsDataTables = false;
          this.uiBlockService.hideUiBlock();
          this.dataTables = result.data;
          this.totalRecordsDataTables = result.meta.pagination.dataCount;
        },
        (error) => {
          this.isLoadingResultsDataTables = false;
          this.uiBlockService.hideUiBlock();

          this.appAlertService.error(error.errors);
        },
        () => {
          this.isLoadingResultsDataTables = false;
          this.uiBlockService.hideUiBlock();
        }
      );
  }

  public doInstantFilterSearch(event?: any) {
    if (event) {
      const pagination = PagingHelper.getPaging(event);

      pagination.searchParams = this.searchParamsSearch;

      if (pagination.sorts === null) {
        pagination.sorts = this.sortSearch;
      } else {
        this.sortSearch = pagination.sorts;
      }

      if (pagination.paging === null) {
        pagination.paging = this.pagingSearch;
      } else {
        this.pagingSearch = pagination.paging;
      }
      this.firstSearch = event.first;

      this.isLoadingResultsDataTables = true;
      this.uiBlockService.showUiBlock();
      this.barangService
        .search(pagination.searchParams, pagination.sorts, pagination.paging)
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe(
          (result: StdResponse<Barang[]>) => {
            this.isLoadingResultsDataTables = false;
            this.uiBlockService.hideUiBlock();
            this.dataTables = result.data;
            this.totalRecordsDataTables = result.meta.pagination.dataCount;
          },
          (error) => {
            this.isLoadingResultsDataTables = false;
            this.uiBlockService.hideUiBlock();

            this.appAlertService.error(error.errors);
          },
          () => {
            this.isLoadingResultsDataTables = false;
            this.uiBlockService.hideUiBlock();
          }
        );
    }
  }

  public refreshDataDataTables() {
    this.search();
  }

  public initColsUserDataTables() {
    this.colsUserDataTables = [
      {
        field: "hapus",
        header: "Delete",
        rtl: false,
        type: "string",
        width: "50px",
      },
      {
        field: "kodeBarang",
        header: "Kode Barang",
        rtl: false,
        type: "string",
        width: "250px",
      },
      {
        field: "namaBarang",
        header: "Nama Barang",
        rtl: false,
        type: "string",
        width: "250px",
      },
      {
        field: "unit1",
        header: "Unit 1",
        rtl: false,
        type: "string",
        width: "250px",
      },
      {
        field: "konversiUnit1ToUnit2",
        header: "Konversi Unit 1 ke 2",
        rtl: false,
        type: "string",
        width: "250px",
      },
      {
        field: "unit2",
        header: "Unit 2",
        rtl: false,
        type: "string",
        width: "250px",
      },
      {
        field: "konversiUnit2ToUnitStok",
        header: "Konversi Unit 2 ke Stok",
        rtl: false,
        type: "string",
        width: "250px",
      },
      {
        field: "unitStok",
        header: "Unit Stok",
        rtl: false,
        type: "string",
        width: "250px",
      },
      {
        field: "aktif",
        header: "Aktif",
        rtl: false,
        type: "string",
        width: "40px",
      },
    ];
  }

  public editDataTables(data: Barang) {
    this.uiBlockService.showUiBlock();

    this.barangService
      .get(data)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        (result) => {
          this.uiBlockService.hideUiBlock();

          this.router.navigate(["./input"], { relativeTo: this.route });

          // simpan data transaksi yang dipilih untuk di edit ini ke session storage
          const trxScreenData = {
            data: result.data,
            mode: "edit",
            prevTabName: "",
            prevTab: 0,
            tableFirst: 0,
            tableNumberOfRows: 0,
            urlAsal: this.router.url, // ini berisi : '/master/barang'
          };
          SessionHelper.setItem("Mbarang-H", trxScreenData, this.lzStringService);

          // simpan data layar browse saat ini agar nanti sewaktu kembali ke layar browse,
          // layar browse dapat menampilkan data yang sama sebelum ke layar transaksi
          const browseScreenData = {
            nama: this.userForm.controls.nama.value,
            picnama: this.userForm.controls.picnama.value,
            picalamat: this.userForm.controls.picalamat.value,
            picemail: this.userForm.controls.picemail.value,
            billnama: this.userForm.controls.billnama.value,
            billalamat: this.userForm.controls.billalamat.value,
            billemail: this.userForm.controls.billemail.value,
            flakt: this.userForm.controls.flakt.value,

            firstSearch: this.firstSearch,
            fromDetail: false,
          };

          SessionHelper.setItem("Mbarang-BROWSE-SCR", browseScreenData, this.lzStringService);
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

  public addDataTables() {
    const transaksiJurnalComplete = new Barang();

    const sessionData = {
      data: transaksiJurnalComplete,
      mode: "add",
      prevTabName: "",
      prevTab: 0,
      tableFirst: 0,
      tableNumberOfRows: 0,
      urlAsal: this.router.url, // ini berisi : '/transaksi/transaksi-jurnal'
    };
    
    SessionHelper.setItem("Mbarang-H", sessionData, this.lzStringService);

    // simpan data layar browse saat ini agar nanti sewaktu kembali ke layar browse,
    // layar browse dapat menampilkan data yang sama sebelum ke layar transaksi

    const browseScreenData = {
      namaBarang: this.userForm.controls.namaBarang.value,
      kodeBarang: this.userForm.controls.kodeBarang.value,
      barangAktif: this.userForm.controls.barangAktif.value,
    };

    console.log(browseScreenData);

    SessionHelper.setItem("Mbarang-BROWSE-SCR", browseScreenData, this.lzStringService);

    this.router.navigate(["./input"], { relativeTo: this.route });
  }

  onDivDataTableResized(event: ResizedEvent) {
    const width = event.newWidth - 52; // 14 ini padding kiri kanan dari area content
    this.dataTablesWidth = width + "px";
  }

  private dataBridging() {
    const browseScreenData = SessionHelper.getItem("Mbarang-BROWSE-SCR", this.lzStringService);

    if (!ObjectHelper.isEmpty(browseScreenData)) {
      if (browseScreenData.fromDetail) {
        // karena layar ini dapat dipanggil dari program lain, maka harus diperiksa
        // bila ini dari program lain, maka isi filter diisi default semua

        this.userForm.patchValue({
          nama: browseScreenData.nama ? browseScreenData.nama : "",
          picnama: browseScreenData.picnama ? browseScreenData.picnama : "",
          picalamat: browseScreenData.picalamat ? browseScreenData.picalamat : "",
          picemail: browseScreenData.picemail ? browseScreenData.picemail : "",
          billnama: browseScreenData.billnama ? browseScreenData.billnama : "",
          billalamat: browseScreenData.billalamat ? browseScreenData.billalamat : "",
          billemail: browseScreenData.billemail ? browseScreenData.billemail : "",
          flakt: browseScreenData.flakt ? browseScreenData.flakt : "",
        });

        if (browseScreenData.firstSearch) {
          this.firstSearch = browseScreenData.firstSearch;
        }

        this.searchParamsSearch = {
          nama: this.userForm.controls.nama.value,
          picnama: this.userForm.controls.picnama.value,
          picalamat: this.userForm.controls.picalamat.value,
          picemail: this.userForm.controls.picemail.value,
          billnama: this.userForm.controls.billnama.value,
          billalamat: this.userForm.controls.billalamat.value,
          billemail: this.userForm.controls.billemail.value,
          flakt: this.userForm.controls.flakt.value,
        };
      }

      SessionHelper.destroy("Mbarang-BROWSE-SCR");
    }
  }

  private doDeleteDelete(data: Barang) {
    this.uiBlockService.showUiBlock();
    this.barangService
      .delete(data)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        (result) => {
          this.uiBlockService.hideUiBlock();
          this.translateService.get("HapusBerhasil").subscribe((translation) => {
            this.appAlertService.instantInfo(translation);
          });

          this.refreshDataDataTables();
        },
        (error: any) => {
          this.appAlertService.error(error.errors);
        },
        () => {
          this.uiBlockService.hideUiBlock();
        }
      );
  }

  public delete(data: Barang) {
    this.translateService.get("HapusTransaksiNomor").subscribe((translation) => {
      this.confirmationService.confirm({
        message: translation + " " + data.kodeBarang + " ?",
        header: "Confirmation",
        icon: "pi pi-exclamation-triangle",
        accept: () => {
          this.doDeleteDelete(data);
        },
        reject: () => {},
      });
    });
  }
}
