import { StdFieldMappingHint } from "src/app/common/common-class/standar-api-mapper";
import { BarangHeader } from "./barang-header.model";
import { Barang } from "../../../master/barang/model/barang.model";

export class BarangDetail {
  public static readonly fieldMappingHints: StdFieldMappingHint[] = [
    { model: "header", dataType: BarangHeader },
    { model: "tglcrt", dataType: "date" },
    { model: "tglupd", dataType: "date" },
  ];

  public nourut: number = 0;
  public jumlahDiminta: number = 0;
  public jumlahDalamUnitStok: number = 0;
  public unit: string = null;
  public unitStok: string = null;

  public mstBarang: Barang = new Barang();

  // untuk input di grid
  public keyIn: string = null;
  public isEdit: string = "N";
  public isError: string = "N";
  public errorMsg: string = null;
  public editMode: string = null;
  public isDeleted: boolean = false;
  public isSelect: boolean = false;

  // harus ada di setiap model
  public id: string = null;
  public version: number = null;
  public usrcrt: string = null;
  public tglcrt: Date = null;
  public jamcrt: string = null;
  public usrupd: string = null;
  public tglupd: Date = null;
  public jamupd: string = null;

  constructor(initial?: Partial<BarangDetail>) {
    Object.assign(this, initial);
  }
}
