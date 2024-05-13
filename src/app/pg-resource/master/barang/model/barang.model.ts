import { StdFieldMappingHint } from "src/app/common/common-class/standar-api-mapper";

export class Barang {
  public static readonly fieldMappingHints: StdFieldMappingHint[] = [
    { model: "tglcrt", dataType: "date" },
    { model: "tglupd", dataType: "date" },
  ];

  public aktif: boolean = null;
  public kodeBarang: string = null;
  public konversiUnit1ToUnit2: number = null;
  public konversiUnit2ToUnitStok: number = null;
  public namaBarang: string = null;
  public unit1: string = null;
  public unit2: string = null;
  public unitStok: string = null;

  // harus ada di setiap model
  public id: string = null;
  public version: number = null;

  constructor(initial?: Partial<Barang>) {
    Object.assign(this, initial);
  }
}
