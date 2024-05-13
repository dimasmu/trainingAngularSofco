import { Injectable } from "@angular/core";
import { StdConstants } from "src/app/common/common-class/standar-api.constants";
import { BaseService } from "src/app/common/common-class/base-service";
import { HttpClient, HttpParams } from "@angular/common/http";
import { StdMessageTranslator } from "src/app/common/common-services/standar-api-message-translator";
import { DefaultLanguageState } from "src/app/base/default-language/default-language.state";
import { Router } from "@angular/router";
import { AppAlertService } from "src/app/common/common-components/alert/app-alert.service";
import { StdResponse } from "src/app/common/common-model/standar-api-response.model";
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { StdModelMapper } from "src/app/common/common-class/standar-api-mapper";
import { Bagian } from "./model/bagian.model";
import { SortMode, StdPagingRequest } from "src/app/common/common-model/standar-api-request.model";

@Injectable()
export class BagianService extends BaseService {
  private apiUrl = StdConstants.API_ADDRESS + "/mstbagian";

  private singleKey = "item";
  private multiKey = "items";
  private apiMessages = "";

  private mapperBagian: StdModelMapper<Bagian> = new StdModelMapper<Bagian>(Bagian);

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
    searchParams?: BagianSearchParams,
    sorts?: BagianSorts,
    paging?: StdPagingRequest
  ): Observable<StdResponse<Bagian[]>> {
    return this.http
      .get<StdResponse<Bagian[]>>(this.requestUrl("search"), {
        params: this.mapperBagian.toSearchParams(searchParams, sorts, paging),
      })
      .pipe(
        map((res) => {
          return this.convertResponse(res, this.mapperBagian, true);
        }),
        catchError((res) =>
          this.handleError(res, this.appAlertService, this.defaultLanguageState, this.router, this.messageTranslator)
        )
      );
  }

  private requestUrl(extraUri?: string): string {
    return this.apiUrl + (extraUri ? "/" + extraUri : "");
  }

  public add(model: Bagian): Observable<Bagian> {
    return this.http.post<StdResponse<Bagian>>(this.apiUrl, this.mapperBagian.toJson(model, 0)).pipe(
      map((res: StdResponse<Bagian>) => {
        return this.convertResponse(res, this.mapperBagian).data;
      }),
      catchError((res: StdResponse<Bagian>) => {
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

  public edit(model: Bagian): Observable<Bagian> {
    return this.http.put<StdResponse<Bagian>>(this.apiUrl, this.mapperBagian.toJson(model, 0)).pipe(
      map((res: StdResponse<Bagian>) => {
        return this.convertResponse(res, this.mapperBagian).data;
      }),
      catchError((res: StdResponse<Bagian>) => {
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

  public delete(model: Bagian): Observable<boolean> {
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

  public get(model: Bagian): Observable<StdResponse<Bagian>> {
    return this.http
      .get<StdResponse<Bagian>>(this.apiUrl, {
        params: new HttpParams().set("kodeBagian", model.kode),
      })
      .pipe(
        map((res: StdResponse<Bagian>) => {
          let tmp = this.convertResponse(res, this.mapperBagian);
          return tmp;
        }),
        catchError((res) =>
          this.handleError(res, this.appAlertService, this.defaultLanguageState, this.router, this.messageTranslator)
        )
      );
  }

  public getByNama(nama: string): Observable<StdResponse<Bagian>> {
    return this.http
      .get<StdResponse<Bagian>>(this.requestUrl("get-by-nama"), {
        params: new HttpParams().set("nama", nama),
      })
      .pipe(
        map((res: StdResponse<Bagian>) => {
          const tmp = this.convertResponse(res, this.mapperBagian);

          return tmp;
        }),
        catchError((res) =>
          this.handleError(res, this.appAlertService, this.defaultLanguageState, this.router, this.messageTranslator)
        )
      );
  }
}

export interface BagianSearchParams {
  nama?: string;
  kode?: string;
}

export interface BagianSorts {
  nama?: SortMode;
  kode?: SortMode;
}
