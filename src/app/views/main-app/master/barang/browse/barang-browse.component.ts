import { AfterViewChecked, Component, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { TableModule } from "primeng/table";
import { Barang } from "src/app/pg-resource/master/barang/model/barang.model";
import { BarangService } from "src/app/pg-resource/master/barang/barang.service";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { StdResponse } from "src/app/common/common-model/standar-api-response.model";
@Component({
  selector: "app-barang-browse",
  templateUrl: "./barang-browse.component.html",
  providers: [],
  encapsulation: ViewEncapsulation.None,
})
export class BarangBrowseComponent implements OnInit, OnDestroy, AfterViewChecked {
  public dataTables: Barang[] = [];
  public isLoadingResultsDataTables = false;
  private ngUnsubscribe: Subject<boolean> = new Subject();

  constructor(private barangService: BarangService) {}

  public initUserForm() {
    this.search();
  }

  public search() {
    this.barangService
      .search()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        (result: StdResponse<Barang[]>) => {
          // this.isLoadingResultsDataTables = false;
          // this.uiBlockService.hideUiBlock();
          this.dataTables = result.data;
          // this.totalRecordsDataTables = result.meta.pagination.dataCount;
        },
        (error) => {
          this.isLoadingResultsDataTables = false;
          // this.uiBlockService.hideUiBlock();

          // this.appAlertService.error(error.errors);
        },
        () => {
          this.isLoadingResultsDataTables = false;
          // this.uiBlockService.hideUiBlock();
        }
      );
  }

  public ngOnInit() {
    this.initUserForm();
  }

  ngOnDestroy() {}

  ngAfterViewChecked() {}
}
