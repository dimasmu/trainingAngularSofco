import { Injectable } from "@angular/core";
import { map, debounceTime, distinctUntilChanged, switchMap, catchError } from "rxjs/operators";
import { Observable, BehaviorSubject } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";

import { BaseService } from "src/app/common/common-class/base-service";
import { SortMode, StdPagingRequest } from "src/app/common/common-model/standar-api-request.model";
import { StdResponse } from "src/app/common/common-model/standar-api-response.model";
import { StdConstants } from "src/app/common/common-class/standar-api.constants";
import { StdModelMapper } from "src/app/common/common-class/standar-api-mapper";
import { StdMessageTranslator } from "src/app/common/common-services/standar-api-message-translator";
import { AppAlertService } from "src/app/common/common-components/alert/app-alert.service";
import { DefaultLanguageState } from "src/app/base/default-language/default-language.state";
import { LanguageTypes } from "src/app/base/default-language/language";
import { IndonesiaMessageDictionary } from "src/app/base/internationalization/i18n/indonesia-message.translation";
import { EnglishMessageDictionary } from "src/app/base/internationalization/i18n/english-message.translation";
import { Router } from "@angular/router";

import { v4 as uuidv4 } from "uuid";
import { BarangHeader } from "./model/barang-header.model";
import { BarangManual } from "./model/barang-manual.model";
import { BarangDetail } from "./model/barang-detail.model";

@Injectable()
export class BarangManualService extends BaseService {
  private apiUrl = StdConstants.API_ADDRESS + "/transaksibarang";

  private singleKey = "item";
  private multiKey = "items";
  private apiMessages = "";

  private mapperBarangHeader: StdModelMapper<BarangHeader> = new StdModelMapper<BarangHeader>(BarangHeader);

  private mapperBarangManual: StdModelMapper<BarangManual> = new StdModelMapper<BarangManual>(BarangManual);

  private mapperBarangDetail: StdModelMapper<BarangDetail> = new StdModelMapper<BarangDetail>(BarangDetail);

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
    searchParams?: BarangHeaderSearchParams,
    sorts?: BarangHeaderSorts,
    paging?: StdPagingRequest
  ): Observable<StdResponse<BarangHeader[]>> {
    return this.http
      .get<StdResponse<BarangHeader[]>>(this.requestUrl("search"), {
        params: this.mapperBarangHeader.toSearchParams(searchParams, sorts, paging),
      })
      .pipe(
        map((res) => this.convertResponse(res, this.mapperBarangHeader, true)),
        catchError((res) =>
          this.handleError(res, this.appAlertService, this.defaultLanguageState, this.router, this.messageTranslator)
        )
      );
  }

  private requestUrl(extraUri?: string): string {
    return this.apiUrl + (extraUri ? "/" + extraUri : "");
  }

  public invoiceBelumLunas(idMi010: string): Observable<StdResponse<BarangHeader[]>> {
    return this.http
      .get<StdResponse<BarangHeader[]>>(this.requestUrl("belum-lunas"), {
        params: new HttpParams().set("idMi010", idMi010),
      })
      .pipe(
        map((res) => this.convertResponse(res, this.mapperBarangHeader, true)),
        catchError((res) =>
          this.handleError(res, this.appAlertService, this.defaultLanguageState, this.router, this.messageTranslator)
        )
      );
  }

  public invoiceBelumLunasByNomor(idMi010: string, nomor: string): Observable<StdResponse<BarangHeader[]>> {
    return this.http
      .get<StdResponse<BarangHeader[]>>(this.requestUrl("belum-lunas-nomor"), {
        params: new HttpParams().set("idMi010", idMi010).set("nomor", nomor),
      })
      .pipe(
        map((res) => this.convertResponse(res, this.mapperBarangHeader, true)),
        catchError((res) =>
          this.handleError(res, this.appAlertService, this.defaultLanguageState, this.router, this.messageTranslator)
        )
      );
  }

  public delete(model: BarangHeader): Observable<boolean> {
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

  public get(model: BarangHeader): Observable<StdResponse<BarangManual>> {
    return this.http
      .get<StdResponse<BarangManual>>(this.apiUrl, {
        params: new HttpParams().set("nomor", model.nomorBon),
      })
      .pipe(
        map((res: StdResponse<BarangManual>) => {
          let tmp = this.convertResponse(res, this.mapperBarangManual);

          if (tmp.data.detailLainLain !== undefined) {
            tmp.data.detailLainLain = this.mapperBarangDetail.toModelArray(tmp.data.detailLainLain);

            for (let item of tmp.data.detailLainLain) {
              item.keyIn = uuidv4();
            }
          }

          return tmp;
        }),
        catchError((res) =>
          this.handleError(res, this.appAlertService, this.defaultLanguageState, this.router, this.messageTranslator)
        )
      );
  }

  public calculate(model: BarangDetail): Observable<BarangDetail> {
    return this.http
      .post<StdResponse<BarangDetail>>(this.requestUrl("calculate"), this.mapperBarangDetail.toJson(model, 0))
      .pipe(
        map((res: StdResponse<BarangDetail>) => {
          return this.convertResponse(res, this.mapperBarangDetail).data;
        }),
        catchError((res: StdResponse<BarangDetail>) => {
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

  public add(model: BarangManual): Observable<BarangHeader> {
    return this.http.post<StdResponse<BarangHeader>>(this.apiUrl, this.mapperBarangManual.toJson(model, 2)).pipe(
      map((res: StdResponse<BarangHeader>) => {
        return this.convertResponse(res, this.mapperBarangHeader).data;
      }),
      catchError((res: StdResponse<BarangHeader>) => {
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

  public edit(model: BarangManual): Observable<BarangHeader> {
    return this.http.put<StdResponse<BarangHeader>>(this.apiUrl, this.mapperBarangManual.toJson(model, 2)).pipe(
      map((res: StdResponse<BarangHeader>) => {
        return this.convertResponse(res, this.mapperBarangHeader).data;
      }),
      catchError((res: StdResponse<BarangHeader>) => {
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

  public convertResponseBarangManual(responseBody: StdResponse<any>): StdResponse<any> {
    responseBody.data = this.mapperBarangManual.toModel(responseBody.data[this.singleKey]);

    if (responseBody.data) {
      if (responseBody.data.detailLainLain !== undefined) {
        responseBody.data.detailLainLain = this.mapperBarangDetail.toModelArray(responseBody.data.detailLainLain);
      }
    }

    return responseBody;
  }

  public translateInGridError(data: any) {
    if (data) {
      for (const itemdetails of data.detailLainLain) {
        if (itemdetails.errorMsg) {
          for (const errorMsg of itemdetails.errorMsg) {
            this.errorGridMessageTranslation(errorMsg);
          }
        }
      }
    }
  }

  private errorGridMessageTranslation(errorMsg: any) {
    if (this.defaultLanguageState.getDefaultLanguage().value === LanguageTypes.indonesia.value) {
      errorMsg.desc = this.messageTranslator.translateLooseMessage(errorMsg, IndonesiaMessageDictionary.getValues());
    } else if (this.defaultLanguageState.getDefaultLanguage().value === LanguageTypes.english.value) {
      errorMsg.desc = this.messageTranslator.translateLooseMessage(errorMsg, EnglishMessageDictionary.getValues());
    }
  }
}

export interface BarangHeaderSearchParams {
  nomor?: string;
  nama?: string;
  alamat?: string;
  email?: string;
  customer?: string;
  status?: string;
  fltodep?: string;
  idMi010?: string;
}

export interface BarangHeaderSorts {
  nomor?: SortMode;
  nama?: SortMode;
  alamat?: SortMode;
  email?: SortMode;
  customer?: SortMode;
  status?: SortMode;
  fltodep?: SortMode;
  tgtrn?: SortMode;
}
