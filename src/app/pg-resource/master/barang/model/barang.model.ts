export class Barang {
  constructor(
    public id: number,
    public aktif: boolean,
    public kode_barang: string,
    public konversi_unit1_to_unit2: number,
    public konversi_unit2_to_unit_stok: number,
    public nama_barang: string,
    public unit1: string,
    public unit2: string,
    public unit_stok: string,
    initial?: Partial<Barang>
  ) {
    Object.assign(this, initial);
  }
}
