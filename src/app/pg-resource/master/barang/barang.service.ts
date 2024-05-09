import { Injectable } from "@angular/core";
import { StdConstants } from "src/app/common/common-class/standar-api.constants";
import { BaseService } from "src/app/common/common-class/base-service";
import { HttpClient, HttpParams } from "@angular/common/http";
import { StdMessageTranslator } from "src/app/common/common-services/standar-api-message-translator";
import { DefaultLanguageState } from "src/app/base/default-language/default-language.state";
import { Router } from "@angular/router";
import { AppAlertService } from "src/app/common/common-components/alert/app-alert.service";
import { Barang } from "./model/barang.model";
import { StdResponse } from "src/app/common/common-model/standar-api-response.model";
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { StdModelMapper } from "src/app/common/common-class/standar-api-mapper";

@Injectable()
export class BarangService extends BaseService {
  private apiUrl = StdConstants.API_ADDRESS + "/mstbarang";

  private singleKey = "item";
  private multiKey = "items";
  private apiMessages = "";

  constructor(
    private http: HttpClient,
    private messageTranslator: StdMessageTranslator,
    private defaultLanguageState: DefaultLanguageState,
    private router: Router,
    private appAlertService: AppAlertService
  ) {
    super();
  }

  private mapperBarang: StdModelMapper<Barang> = new StdModelMapper<Barang>(Barang);

  private requestUrl(extraUri?: string): string {
    return this.apiUrl + (extraUri ? "/" + extraUri : "");
  }

  private convertResponse(responseBody: StdResponse<any>, mapper: any, isMulti: boolean = false): StdResponse<any> {
    responseBody.data = isMulti
      ? mapper.toModelArray(responseBody.data[this.multiKey])
      : mapper.toModel(responseBody.data[this.singleKey]);

    this.messageTranslator.translateApiResponse(responseBody, this.apiMessages);

    return responseBody;
  }

  public get(model: Barang): Observable<StdResponse<Barang>> {
    return this.http
      .get<StdResponse<Barang>>(this.apiUrl, {
        params: new HttpParams().set("nama_barang", model.namaBarang),
      })
      .pipe(
        map((res: StdResponse<Barang>) => {
          let tmp = this.convertResponse(res, this.mapperBarang);
          return tmp;
        }),
        catchError((res) =>
          this.handleError(res, this.appAlertService, this.defaultLanguageState, this.router, this.messageTranslator)
        )
      );
  }

  public search(): Observable<StdResponse<Barang[]>> {
    return this.http
      .get<StdResponse<Barang[]>>(this.requestUrl("all"), {
        params: this.mapperBarang.toSearchParams(),
      })
      .pipe(
        map((res) => {
          this.convertResponse(res, this.mapperBarang, true);
        }),
        catchError((res) =>
          this.handleError(res, this.appAlertService, this.defaultLanguageState, this.router, this.messageTranslator)
        )
      );
  }
}
