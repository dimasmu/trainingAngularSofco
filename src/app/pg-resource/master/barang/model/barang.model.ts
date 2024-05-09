export class Barang {
  constructor(
    public aktif: boolean,
    public kodeBarang: string,
    public konversiUnit1ToUnit2: number,
    public konversiUnit2ToUnitStok: number,
    public namaBarang: string,
    public unit1: string,
    public unit2: string,
    public unitStok: string,

    // harus ada di setiap model
    public id: number,
    public version: number,

    initial?: Partial<Barang>
  ) {
    Object.assign(this, initial);
  }
}
