import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { DefaultLanguageState } from "src/app/base/default-language/default-language.state";
import { BaseService } from "src/app/common/common-class/base-service";
import { StdModelMapper } from "src/app/common/common-class/standar-api-mapper";
import { StdConstants } from "src/app/common/common-class/standar-api.constants";
import { AppAlertService } from "src/app/common/common-components/alert/app-alert.service";
import { SortMode, StdPagingRequest } from "src/app/common/common-model/standar-api-request.model";
import { StdResponse } from "src/app/common/common-model/standar-api-response.model";
import { StdMessageTranslator } from "src/app/common/common-services/standar-api-message-translator";
import { Barang } from "./model/barang.model";

@Injectable()
export class BarangService extends BaseService {
  private apiUrl = StdConstants.API_ADDRESS + "/mstbarang";

  private singleKey = "item";
  private multiKey = "items";
  private apiMessages = "";

  private mapperBarang: StdModelMapper<Barang> = new StdModelMapper<Barang>(Barang);

  constructor(
    private http: HttpClient,
    private messageTranslator: StdMessageTranslator,
    private defaultLanguageState: DefaultLanguageState,
    private router: Router,
    private appAlertService: AppAlertService
  ) {
    super();
  }

  private convertResponse(responseBody: StdResponse<any>, mapper: any, isMulti: boolean = false): StdResponse<any> {
    responseBody.data = isMulti
      ? mapper.toModelArray(responseBody.data[this.multiKey])
      : mapper.toModel(responseBody.data[this.singleKey]);

    this.messageTranslator.translateApiResponse(responseBody, this.apiMessages);

    return responseBody;
  }

  public search(
    searchParams?: BarangSearchParams,
    sorts?: BarangSorts,
    paging?: StdPagingRequest
  ): Observable<StdResponse<Barang[]>> {
    return this.http
      .get<StdResponse<Barang[]>>(this.requestUrl("search"), {
        params: this.mapperBarang.toSearchParams(searchParams, sorts, paging),
      })
      .pipe(
        map((res) => {
          return this.convertResponse(res, this.mapperBarang, true);
        }),
        catchError((res) =>
          this.handleError(res, this.appAlertService, this.defaultLanguageState, this.router, this.messageTranslator)
        )
      );
  }

  private requestUrl(extraUri?: string): string {
    return this.apiUrl + (extraUri ? "/" + extraUri : "");
  }

  public add(model: Barang): Observable<Barang> {
    return this.http.post<StdResponse<Barang>>(this.apiUrl, this.mapperBarang.toJson(model, 0)).pipe(
      map((res: StdResponse<Barang>) => {
        return this.convertResponse(res, this.mapperBarang).data;
      }),
      catchError((res: StdResponse<Barang>) => {
        return this.handleError(
          res,
          this.appAlertService,
          this.defaultLanguageState,
          this.router,
          this.messageTranslator
        );
      })
    );
  }

  public edit(model: Barang): Observable<Barang> {
    return this.http.put<StdResponse<Barang>>(this.apiUrl, this.mapperBarang.toJson(model, 0)).pipe(
      map((res: StdResponse<Barang>) => {
        return this.convertResponse(res, this.mapperBarang).data;
      }),
      catchError((res: StdResponse<Barang>) => {
        return this.handleError(
          res,
          this.appAlertService,
          this.defaultLanguageState,
          this.router,
          this.messageTranslator
        );
      })
    );
  }

  public delete(model: Barang): Observable<boolean> {
    return this.http
      .delete<StdResponse<string>>(this.apiUrl, {
        params: new HttpParams().set("id", model.id).set("version", model.version.toString()),
      })
      .pipe(
        map((res) => {
          return true;
        }),
        catchError((res) =>
          this.handleError(res, this.appAlertService, this.defaultLanguageState, this.router, this.messageTranslator)
        )
      );
  }

  public get(model: Barang): Observable<StdResponse<Barang>> {
    return this.http
      .get<StdResponse<Barang>>(this.requestUrl("findbykodebarang"), {
        params: new HttpParams().set("kodeBarang", model.kodeBarang),
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

  public getByNama(nama: string): Observable<StdResponse<Barang>> {
    return this.http
      .get<StdResponse<Barang>>(this.requestUrl("get-by-nama"), {
        params: new HttpParams().set("nama", nama),
      })
      .pipe(
        map((res: StdResponse<Barang>) => {
          const tmp = this.convertResponse(res, this.mapperBarang);

          return tmp;
        }),
        catchError((res) =>
          this.handleError(res, this.appAlertService, this.defaultLanguageState, this.router, this.messageTranslator)
        )
      );
  }
}
export interface BarangSearchParams {
  namaBarang?: string;
  kodeBarang?: string;
}

export interface BarangSorts {
  namaBarang?: SortMode;
  kodeBarang?: SortMode;
}
