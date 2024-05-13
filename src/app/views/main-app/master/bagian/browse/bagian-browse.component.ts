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
import { Bagian } from "src/app/pg-resource/master/bagian/model/bagian.model";
import { BagianService } from "src/app/pg-resource/master/bagian/bagian.service";

@Component({
  selector: "app-bagian-browse",
  templateUrl: "./bagian-browse.component.html",
  providers: [DialogService],
  encapsulation: ViewEncapsulation.None,
})
export class BagianBrowseComponent implements OnInit, OnDestroy, AfterViewChecked {
  private ngUnsubscribe: Subject<boolean> = new Subject();

  public title = "MasterBagian";

  public userForm: FormGroup;

  bsModalSelectTemplate: DynamicDialogRef;

  public radioButtonStatusKonfirmasi: any[];

  public dataTables: Bagian[] = [];
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
    private bagianService: BagianService,
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
      namaBagian: "asc",
      kodeBagian: "asc",
    };
    this.searchParamsSearch = {
      namaBagian: null,
      kodeBagian: null,
      // bagianAktif: false,
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
      namaBagian: [""],
      kodeBagian: [""],
      // bagianAktif: [""],
    });

    // console.log(this.userForm.controls.namaBagian.value);
    this.searchParamsSearch = {
      namaBagian: this.userForm.controls.namaBagian.value,
      kodeBagian: this.userForm.controls.kodeBagian.value,
      // bagianAktif: this.userForm.controls.bagianAktif.value,
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
    this.isLoadingResultsDataTables = false;
    this.uiBlockService.showUiBlock();

    let namaBagianFilter = null;
    let kodeBagianFilter = null;

    if (this.userForm.value.namaBagian) {
      namaBagianFilter = this.userForm.value.namaBagian;
    }

    if (this.userForm.value.kodeBagian) {
      kodeBagianFilter = this.userForm.value.kodeBagian;
    }

    this.searchParamsSearch = {
      namaBagian: namaBagianFilter,
      kodeBagian: kodeBagianFilter,
    };

    this.bagianService
      .search(this.searchParamsSearch, this.sortSearch, this.pagingSearch)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        (result: StdResponse<Bagian[]>) => {
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
      this.bagianService
        .search(pagination.searchParams, pagination.sorts, pagination.paging)
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe(
          (result: StdResponse<Bagian[]>) => {
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
        field: "kodeBagian",
        header: "Kode bagian",
        rtl: false,
        type: "string",
        width: "350px",
      },
      {
        field: "namaBagian",
        header: "Nama bagian",
        rtl: false,
        type: "string",
        width: "250px",
      },
      {
        field: "tglcrt",
        header: "Tanggal create",
        rtl: false,
        type: "string",
        width: "100%",
      },
    ];
  }

  public editDataTables(data: Bagian) {
    this.uiBlockService.showUiBlock();

    this.bagianService
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
            urlAsal: this.router.url, // ini berisi : '/master/bagian'
          };
          SessionHelper.setItem("Mbagian-H", trxScreenData, this.lzStringService);

          // simpan data layar browse saat ini agar nanti sewaktu kembali ke layar browse,
          // layar browse dapat menampilkan data yang sama sebelum ke layar transaksi
          const browseScreenData = {
            kodeBagian: this.userForm.controls.kodeBagian.value,
            namaBagian: this.userForm.controls.namaBagian.value,
            unit1: this.userForm.controls.unit1.value,
            konversiUnit1ToUnit2: this.userForm.controls.konversiUnit1ToUnit2.value,
            unit2: this.userForm.controls.unit2.value,
            konversiUnit2ToUnitStok: this.userForm.controls.konversiUnit2ToUnitStok.value,
            unitStok: this.userForm.controls.unitStok.value,
            aktif: this.userForm.controls.aktif.value,

            firstSearch: this.firstSearch,
            fromDetail: false,
          };

          SessionHelper.setItem("Mbagian-BROWSE-SCR", browseScreenData, this.lzStringService);
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
    const transaksiJurnalComplete = new Bagian();
    console.log("tambah bagian");
    const sessionData = {
      data: transaksiJurnalComplete,
      mode: "add",
      prevTabName: "",
      prevTab: 0,
      tableFirst: 0,
      tableNumberOfRows: 0,
      urlAsal: this.router.url, // ini berisi : '/transaksi/transaksi-jurnal'
    };

    SessionHelper.setItem("Mbagian-H", sessionData, this.lzStringService);

    // simpan data layar browse saat ini agar nanti sewaktu kembali ke layar browse,
    // layar browse dapat menampilkan data yang sama sebelum ke layar transaksi

    const browseScreenData = {
      // kodeBagian: this.userForm.controls.kodeBagian.value,
      // namaBagian: this.userForm.controls.namaBagian.value,
      // unit1: this.userForm.controls.unit1.value,
      // konversiUnit1ToUnit2: this.userForm.controls.konversiUnit1ToUnit2.value,
      // unit2: this.userForm.controls.unit2.value,
      // konversiUnit2ToUnitStok: this.userForm.controls.konversiUnit2ToUnitStok.value,
      // unitStok: this.userForm.controls.unitStok.value,
      // aktif: this.userForm.controls.aktif.value,
    };

    console.log(browseScreenData);

    SessionHelper.setItem("Mbagian-BROWSE-SCR", browseScreenData, this.lzStringService);

    this.router.navigate(["./input"], { relativeTo: this.route });
  }

  onDivDataTableResized(event: ResizedEvent) {
    const width = event.newWidth - 52; // 14 ini padding kiri kanan dari area content
    this.dataTablesWidth = width + "px";
  }

  private dataBridging() {
    const browseScreenData = SessionHelper.getItem("Mbagian-BROWSE-SCR", this.lzStringService);

    if (!ObjectHelper.isEmpty(browseScreenData)) {
      if (browseScreenData.fromDetail) {
        // karena layar ini dapat dipanggil dari program lain, maka harus diperiksa
        // bila ini dari program lain, maka isi filter diisi default semua

        // this.userForm.patchValue({
        //   nama: browseScreenData.nama ? browseScreenData.nama : "",
        //   picnama: browseScreenData.picnama ? browseScreenData.picnama : "",
        //   picalamat: browseScreenData.picalamat ? browseScreenData.picalamat : "",
        //   picemail: browseScreenData.picemail ? browseScreenData.picemail : "",
        //   billnama: browseScreenData.billnama ? browseScreenData.billnama : "",
        //   billalamat: browseScreenData.billalamat ? browseScreenData.billalamat : "",
        //   billemail: browseScreenData.billemail ? browseScreenData.billemail : "",
        //   flakt: browseScreenData.flakt ? browseScreenData.flakt : "",
        // });

        // if (browseScreenData.firstSearch) {
        //   this.firstSearch = browseScreenData.firstSearch;
        // }

        this.searchParamsSearch = {
          kodeBagian: this.userForm.controls.kodeBagian.value,
          namaBagian: this.userForm.controls.namaBagian.value,
        };
      }

      SessionHelper.destroy("Mbagian-BROWSE-SCR");
    }
  }

  private doDeleteDelete(data: Bagian) {
    this.uiBlockService.showUiBlock();
    this.bagianService
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

  public delete(data: Bagian) {
    this.translateService.get("HapusTransaksiNomor").subscribe((translation) => {
      this.confirmationService.confirm({
        message: translation + " " + data.kode + " ?",
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
