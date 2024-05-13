import { StdFieldMappingHint } from "src/app/common/common-class/standar-api-mapper";

export class Bagian {
  public static readonly fieldMappingHints: StdFieldMappingHint[] = [
    { model: "tglcrt", dataType: "date" },
    { model: "tglupd", dataType: "date" },
  ];

  public kode: string = null;
  public nama: string = null;

  // harus ada di setiap model
  public id: string = null;
  public version: number = null;
  public usrcrt: string = null;
  public tglcrt: Date = null;
  public jamcrt: string = null;
  public usrupd: string = null;
  public tglupd: Date = null;
  public jamupd: string = null;

  constructor(initial?: Partial<Bagian>) {
    Object.assign(this, initial);
  }
}
