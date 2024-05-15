import { StdFieldMappingHint } from "src/app/common/common-class/standar-api-mapper";
import { BarangHeader } from "./barang-header.model";
import { BarangDetail } from "./barang-detail.model";

export class BarangManual {
  public static readonly fieldMappingHints: StdFieldMappingHint[] = [
    { model: "header", dataType: BarangHeader },
    { model: "detailLainLain", dataType: BarangDetail },
    { model: "tgtrn", dataType: "date" },
    { model: "tglcrt", dataType: "date" },
    { model: "tglupd", dataType: "date" },
    { model: "tgjtemp", dataType: "date" },
  ];
  public headerBarang: BarangHeader = new BarangHeader();

  public detailBarang: BarangDetail[] = [];

  // untuk expandable rows
  public keyIn: string = null;

  // untuk checkbox bahwa jurnal ini dipilih untuk dibuatkan jurnal rutin
  public isSelect: boolean = false;

  constructor(initial?: Partial<BarangManual>) {
    Object.assign(this, initial);
  }
}
