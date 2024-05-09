export class Bagian {
  constructor(
    public id: number,
    public kode: string,
    public nama: string,
    initial?: Partial<Bagian>
  ) {
    Object.assign(this, initial);
  }
}
