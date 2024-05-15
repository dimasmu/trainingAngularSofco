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
import { BarangHeader } from "src/app/pg-resource/transaksi/barang/model/barang-header.model";
import { BarangManualService } from "src/app/pg-resource/transaksi/barang/barang-manual.service";
import { BarangManual } from "src/app/pg-resource/transaksi/barang/model/barang-manual.model";

@Component({
  selector: "app-barang-manual-browse",
  templateUrl: "./barang-manual-browse.component.html",
  providers: [DialogService],
  encapsulation: ViewEncapsulation.None,
})
export class BarangManualBrowseComponent implements OnInit, OnDestroy, AfterViewChecked {
  private ngUnsubscribe: Subject<boolean> = new Subject();

  public title = "BarangManual";

  public userForm: FormGroup;

  public dataTables: BarangHeader[] = [];
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

  public radioButtonDeposit: any[];
  comboStatus: object[];

  constructor(
    private fb: FormBuilder,
    private appAlertService: AppAlertService,
    private confirmationService: ConfirmationService,
    private uiBlockService: UiBlockService,
    private translateService: TranslateService,
    private barangManualService: BarangManualService,
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
      nomorBon: "asc",
      tanggalBon: "asc",
      // nama: "asc",
      // status: "asc",
      // dpp: "asc",
      // ppn: "asc",
    };
    this.searchParamsSearch = {
      nomorBon: null,
      tanggalBon: null,
      // status: null,
      // fltodep: null,
    };
  }

  public ngOnInit() {
    this.breadCrumbService.sendReloadInfo("reload");
    this.initUserForm();
    this.initRadioButtonDeposit();
    // this.initComboStatus();
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
      nomorBon: [""],
      tanggalBon: [""],
      bagianPeminta: [""],
    });

    this.searchParamsSearch = {
      nomorBon: this.userForm.controls.nomorBon.value,
      tanggalBon: this.userForm.controls.tanggalBon.value,
    };
  }

  public initRadioButtonDeposit() {
    this.uiBlockService.showUiBlock();
    this.feComboConstantService
      .getFilterAktif()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        (result) => {
          this.uiBlockService.hideUiBlock();

          this.radioButtonDeposit = result.data.map((item) => new Object({ name: item.deskripsi, key: item.kode }));
        },
        (error) => {
          this.uiBlockService.hideUiBlock();
        },
        () => {
          this.uiBlockService.hideUiBlock();
        }
      );
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
          this.comboStatus.push(new Object({ label: "", value: "" }));
        },
        (error) => {
          this.uiBlockService.hideUiBlock();
        }
      );
  }

  public search() {
    this.isLoadingResultsDataTables = false;
    this.uiBlockService.showUiBlock();

    let nomorBonFilter = null;
    let tanggalBonFilter = null;

    if (this.userForm.value.nomorBon) {
      nomorBonFilter = this.userForm.value.nomorBon;
    }

    if (this.userForm.value.tanggalBon) {
      tanggalBonFilter = this.userForm.value.tanggalBon;
    }

    this.searchParamsSearch = {
      nomorBon: nomorBonFilter,
      tanggalBon: moment(tanggalBonFilter).format("YYYY-MM-DD"),
    };

    this.barangManualService
      .search(this.searchParamsSearch, this.sortSearch, this.pagingSearch)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        (result: StdResponse<BarangHeader[]>) => {
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
      this.barangManualService
        .search(pagination.searchParams, pagination.sorts, pagination.paging)
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe(
          (result: StdResponse<BarangHeader[]>) => {
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
      { field: "delete", header: "Delete", rtl: false, type: "string", width: "5%" },
      { field: "nomorBon", header: "Nomor Bon", rtl: false, type: "string", width: "15%" },
      { field: "bagianPeminta", header: "Bagian Peminta", rtl: false, type: "string", width: "30%" },
      { field: "tanggalBon", header: "Tanggal Bon", rtl: false, type: "string", width: "20%" },
      { field: "keterangan", header: "Keterangan", rtl: false, type: "string", width: "30%" },
    ];
  }

  public editDataTables(data: BarangHeader) {
    this.uiBlockService.showUiBlock();

    this.barangManualService
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
            urlAsal: this.router.url, // ini berisi : '/transaksi/invoice-manual'
          };
          SessionHelper.setItem("TBARANGMANUAL-H", trxScreenData, this.lzStringService);

          // simpan data layar browse saat ini agar nanti sewaktu kembali ke layar browse,
          // layar browse dapat menampilkan data yang sama sebelum ke layar transaksi
          const browseScreenData = {
            nomorBon: this.userForm.controls.nomorBon.value,
            tanggalBon: this.userForm.controls.tanggalBon.value,

            firstSearch: this.firstSearch,
            fromDetail: false,
          };

          SessionHelper.setItem("TBARANGMANUAL-BROWSE-SCR", browseScreenData, this.lzStringService);
        },
        (error) => {
          this.uiBlockService.hideUiBlock();
          this.appAlertService.error(error.errors);
        }
      );
  }

  public addDataTables() {
    const transaksiJurnalComplete = new BarangManual();
    transaksiJurnalComplete.headerBarang.tglcrt = new Date();
    transaksiJurnalComplete.headerBarang.tglupd = new Date();

    const sessionData = {
      data: transaksiJurnalComplete,
      mode: "add",
      prevTabName: "",
      prevTab: 0,
      tableFirst: 0,
      tableNumberOfRows: 0,
      urlAsal: this.router.url, // ini berisi : '/transaksi/invoice-manual'
    };
    SessionHelper.setItem("TBARANGMANUAL-H", sessionData, this.lzStringService);
    console.log(transaksiJurnalComplete);
    // simpan data layar browse saat ini agar nanti sewaktu kembali ke layar browse,
    // layar browse dapat menampilkan data yang sama sebelum ke layar transaksi
    const browseScreenData = {
      nomorBon: this.userForm.controls.nomorBon.value,
      tanggalBon: this.userForm.controls.tanggalBon.value,
    };

    SessionHelper.setItem("TBARANGMANUAL-BROWSE-SCR", browseScreenData, this.lzStringService);

    this.router.navigate(["./input"], { relativeTo: this.route });
  }

  onDivDataTableResized(event: ResizedEvent) {
    const width = event.newWidth - 52; // 14 ini padding kiri kanan dari area content
    this.dataTablesWidth = width + "px";
  }

  private dataBridging() {
    const browseScreenData = SessionHelper.getItem("TBARANGMANUAL-BROWSE-SCR", this.lzStringService);

    if (!ObjectHelper.isEmpty(browseScreenData)) {
      if (browseScreenData.fromDetail) {
        // karena layar ini dapat dipanggil dari master jadwal perulangan, maka harus diperiksa
        // bila ini dari master jadwal perulangan, maka isi filter diisi default semua

        this.userForm.patchValue({
          nomor: browseScreenData.nomor ? browseScreenData.nomor : "",
          nama: browseScreenData.nama ? browseScreenData.nama : "",
          status: browseScreenData.status ? browseScreenData.status : "",
          fltodep: browseScreenData.fltodep ? browseScreenData.fltodep : "",
        });

        if (browseScreenData.firstSearch) {
          this.firstSearch = browseScreenData.firstSearch;
        }

        this.searchParamsSearch = {
          nomorBon: this.userForm.controls.nomorBon.value,
          tanggalBon: this.userForm.controls.tanggalBon.value,
        };
      }

      SessionHelper.destroy("TBARANGMANUAL-BROWSE-SCR");
    }
  }

  private doDeleteDelete(data: BarangHeader) {
    this.uiBlockService.showUiBlock();
    this.barangManualService
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

  public delete(data: BarangHeader) {
    this.translateService.get("HapusData").subscribe((translation) => {
      this.confirmationService.confirm({
        message: translation + " " + data.nomorBon + " ?",
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
