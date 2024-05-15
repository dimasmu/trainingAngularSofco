import { StdFieldMappingHint } from "src/app/common/common-class/standar-api-mapper";
import { BarangDetail } from "./barang-detail.model";
import { Bagian } from "../../../master/bagian/model/bagian.model";

export class BarangHeader {
  public static readonly fieldMappingHints: StdFieldMappingHint[] = [
    { model: "tglcrt", dataType: "date" },
    { model: "tglupd", dataType: "date" },
    { model: "tgjtemp", dataType: "date" },
  ];

  public nomorBon: string = null;
  public tanggalBon: string = null;
  public keterangan: string = null;

  public bagianPeminta: Bagian = new Bagian();
  public barangDetail: BarangDetail[] = [];

  // harus ada di setiap model
  public id: string = null;
  public version: number = null;
  public usrcrt: string = null;
  public tglcrt: Date = null;
  public jamcrt: string = null;
  public usrupd: string = null;
  public tglupd: Date = null;
  public jamupd: string = null;

  constructor(initial?: Partial<BarangHeader>) {
    Object.assign(this, initial);
  }
}
