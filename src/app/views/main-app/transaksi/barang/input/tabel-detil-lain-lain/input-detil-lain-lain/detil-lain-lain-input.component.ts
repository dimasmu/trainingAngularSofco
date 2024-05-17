import { Component, OnInit, OnDestroy, ViewEncapsulation } from "@angular/core";
import { Subject } from "rxjs";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { takeUntil } from "rxjs/operators";
import { ActivatedRoute, Router } from "@angular/router";
import { TranslateService, LangChangeEvent } from "@ngx-translate/core";
import { DynamicDialogRef, DynamicDialogConfig } from "primeng/dynamicdialog";
import { Location } from "@angular/common";

import { ConfirmationService } from "primeng/api";
import { UiBlockService } from "src/app/common/common-services/ui-block.service";
import { AppAlertService } from "src/app/common/common-components/alert/app-alert.service";
import { StdResponse } from "src/app/common/common-model/standar-api-response.model";
import { DefaultLanguageState } from "src/app/base/default-language/default-language.state";
import { BarangDetail } from "src/app/pg-resource/transaksi/barang/model/barang-detail.model";
import { Barang } from "src/app/pg-resource/master/barang/model/barang.model";
import { StdPagingRequest } from "src/app/common/common-model/standar-api-request.model";
import { BarangService } from "src/app/pg-resource/master/barang/barang.service";
import { BarangManualService } from "src/app/pg-resource/transaksi/barang/barang-manual.service";

@Component({
  selector: "app-input-detil-lain-lain",
  templateUrl: "./detil-lain-lain-input.component.html",
  encapsulation: ViewEncapsulation.None,
})
export class DetilLainLainInputComponent implements OnInit, OnDestroy {
  private ngUnsubscribe: Subject<boolean> = new Subject();

  public title = "DetilLainLain";

  public inputForm: FormGroup;

  public selectedData: BarangDetail;
  public mode: string;

  public filteredTraining: any[];

  public isLoadingDropDown: boolean;
  // public selectedBarang: string;
  public comboUnit: any[] = [];
  public selectedUnit: string = "";
  public dropDownBarang: Barang[];

  public pagingSearch: StdPagingRequest = null;
  public firstSearch = 0;
  public searchBarangParam: any;
  public sortSearch: any;

  public numberOfRowsDataTables = 5;

  // terkait autocomplete
  public filteredBarang: any[];

  constructor(
    private fb: FormBuilder,
    private appAlertService: AppAlertService,
    private confirmationService: ConfirmationService,
    private uiBlockService: UiBlockService,
    private translateService: TranslateService,
    public defaultLanguageState: DefaultLanguageState,
    private bsModalRef: DynamicDialogRef,
    private config: DynamicDialogConfig,
    private barangService: BarangService,
    private barangManualService: BarangManualService
  ) {
    this.pagingSearch = {
      page: 1,
      perPage: this.numberOfRowsDataTables,
    };
    this.sortSearch = {
      namaBarang: "asc",
      kodeBarang: "asc",
    };
    this.searchBarangParam = {
      namaBarang: null,
      kodeBarang: null,
      barangAktif: false,
    };
    this.translateService.get(this.title).subscribe((translation) => {
      this.title = translation;
      this.config.header = this.title;
    });
  }

  public ngOnInit() {
    this.selectedData = this.config.data.selectedData;
    this.mode = this.config.data.mode;
    this.initInputForm();
    this.initComboBarang();
    this.patchValue();
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next(true);
    this.ngUnsubscribe.complete();
  }

  private initInputForm() {
    this.inputForm = this.fb.group({
      jumlahDiminta: [{ value: 0, disabled: false }],
      barang: [{ value: new Barang(), disabled: false }],
      namaBarang: [{ value: "", disabled: false }],
      unit: [{ value: "", disabled: false }],
      jumlahDalamUnitStok: [{ value: 0, disabled: true }, Validators.required],
      unitStok: [{ value: "", disabled: true }],
    });
  }

  public isValidSaveButton() {
    if (this.inputForm.controls.jumlahDalamUnitStok.value == 0) {
      return true;
    }
    return false;
  }

  private patchValue() {
    if (this.selectedData) {
      this.inputForm.patchValue({
        barang: this.selectedData.mstBarang == null ? new Barang() : this.selectedData.mstBarang,
        namaBarang: this.selectedData.mstBarang.namaBarang == null ? "" : this.selectedData.mstBarang.namaBarang,
        unit: this.selectedData.unit == null ? "" : this.selectedData.unit,
        jumlahDiminta: this.selectedData.jumlahDiminta == null ? "" : this.selectedData.jumlahDiminta,
        jumlahDalamUnitStok: this.selectedData.jumlahDalamUnitStok == null ? 0 : this.selectedData.jumlahDalamUnitStok,
        unitStok: this.selectedData.unitStok == null ? 0 : this.selectedData.unitStok,
      });
      this.selectedBarang();
    }
  }

  private fillModel() {
    this.selectedData.unit = this.inputForm.controls.unit.value;
    this.selectedData.unitStok = this.inputForm.controls.barang.value.unitStok;
    this.selectedData.jumlahDiminta = this.inputForm.controls.jumlahDiminta.value;
    this.selectedData.jumlahDalamUnitStok = this.inputForm.controls.jumlahDalamUnitStok.value;
    this.selectedData.mstBarang = this.inputForm.controls.barang.value;
  }

  public doSave() {
    this.uiBlockService.showUiBlock();

    this.fillModel();

    this.uiBlockService.hideUiBlock();

    this.bsModalRef.close({ selectedData: this.selectedData, mode: this.mode });
  }

  public doEdit() {
    this.uiBlockService.showUiBlock();

    this.fillModel();

    this.uiBlockService.hideUiBlock();
    this.bsModalRef.close({ selectedData: this.selectedData, mode: this.mode });
  }

  public Save1() {
    if (this.mode === "add") {
      this.doSave();
    } else {
      this.doEdit();
    }
  }

  public backBack1() {
    this.bsModalRef.close({ selectedData: null, mode: this.mode });
  }

  public hitungNetto() {
    this.inputForm.controls.netto.patchValue(
      this.inputForm.controls.harga.value -
        this.inputForm.controls.nilpctdisc.value -
        this.inputForm.controls.nildisc.value
    );
  }

  public onChangeJumlahDiminta() {
    this.calculate();
  }

  public nildiscChanged() {
    this.hitungNetto();
  }

  public onChangeUnit() {
    console.log("Unit input");
  }

  public onChangeDdlUnit() {
    this.calculate();
  }

  public initComboBarang() {
    this.isLoadingDropDown = false;
    // this.uiBlockService.showUiBlock();

    let namaBarangFilter = null;
    let kodeBarangFilter = null;

    if (this.inputForm.value.namaBarang) {
      namaBarangFilter = this.inputForm.value.namaBarang;
    }

    if (this.inputForm.value.kodeBarang) {
      kodeBarangFilter = this.inputForm.value.kodeBarang;
    }

    this.searchBarangParam = {
      namaBarang: namaBarangFilter,
      kodeBarang: kodeBarangFilter,
    };

    this.barangService
      .search(this.searchBarangParam, this.sortSearch, this.pagingSearch)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        (result: StdResponse<Barang[]>) => {
          if (result.data.length > 0) {
            this.isLoadingDropDown = false;
            // this.uiBlockService.hideUiBlock();
            this.dropDownBarang = result.data;
            // this.comboBarang = result.data.map(
            //   (item) => new Object({ label: item.namaBarang, value: item.kodeBarang })
            // );
            // let getFirstObject: any = result.data[0];
            // this.selectedBarang = getFirstObject.kodeBarang;
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

  public calculate() {
    let jumlahDiminta = this.inputForm.controls.jumlahDiminta.value;
    let namaBarang = this.inputForm.controls.namaBarang.value;
    let unit = this.selectedUnit;
    if (jumlahDiminta == 0 || namaBarang == "" || unit == "" || namaBarang == null || unit == null) {
      this.inputForm.controls.jumlahDalamUnitStok.patchValue(0);
      return;
    }

    this.selectedData.jumlahDiminta = jumlahDiminta;
    this.selectedData.mstBarang = this.inputForm.controls.barang.value;
    this.selectedData.unit = unit;

    const selectedData = this.selectedData;
    
    this.barangManualService
      .calculate(selectedData)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        (result) => {
          this.inputForm.controls.jumlahDalamUnitStok.patchValue(result.jumlahDalamUnitStok);
          this.isValidSaveButton();
        },
        (error) => {},
        () => {
          this.uiBlockService.hideUiBlock();
        }
      );
  }

  // AUTOCOMPLETE
  // Untuk autocomplete barang
  public filterBarang(event) {
    this.uiBlockService.showUiBlock();
    const searchParams = {
      namaBarang: event.query,
      barangAktif: true,
    };
    const sort: any = {
      namaBarang: "asc",
    };

    this.barangService
      .search(searchParams, sort)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        (result: StdResponse<Barang[]>) => {
          // this.uiBlockService.hideUiBlock();

          this.filteredBarang = result.data;
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

  // Untuk verifikasi inputan di autocomplete barang
  public verifikasiAutocompleteBarang(data: any) {
    let periksa = false;
    if (typeof data === "string") {
      // ini pasti inputan autocomplete berdasarkan ketikan bukan select dari pilihan
      // oleh sebab itu harus diperiksa
      periksa = true;
    }

    if (periksa) {
      this.uiBlockService.showUiBlock();

      if (data == "") {
        this.clearDetail();
        this.uiBlockService.hideUiBlock();
        return;
      }

      this.barangService
        .getByNama(data)
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe(
          (result: StdResponse<Barang>) => {
            if (result.data) {
              this.inputForm.controls.barang.patchValue(result.data);
            } else {
              this.inputForm.controls.barang.patchValue(new Barang());
            }
            // this.uiBlockService.hideUiBlock();
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
  }

  public selectedBarang() {
    this.clearDetail();
    this.inputForm.controls.namaBarang.patchValue(this.inputForm.controls.barang.value.namaBarang);

    // SET dropdown unit
    this.setDDLUnit(this.inputForm.controls.barang.value);

    // update jumlah diminta
    this.calculate();
  }

  public clearDetail() {
    if (!this.inputForm.controls.barang.value) {
      this.inputForm.controls.jumlahDiminta.patchValue(0);
    }

    this.inputForm.controls.namaBarang.patchValue("");
    this.comboUnit = [];
  }

  public setDDLUnit(barang: Barang) {
    if (barang) {
      let barangObject: Barang = barang;
      this.comboUnit.push(new Object({ label: barangObject.unit1, value: barangObject.unit1 }));
      this.comboUnit.push(new Object({ label: barangObject.unit2, value: barangObject.unit2 }));
      this.comboUnit.push(new Object({ label: barangObject.unitStok, value: barangObject.unitStok }));

      if (this.mode == "edit") {
        this.selectedUnit = this.selectedData.unit;
        return;
      }

      if (this.comboUnit.length > 0) {
        this.selectedUnit = this.comboUnit[0].value;
      }
    }
  }
}
