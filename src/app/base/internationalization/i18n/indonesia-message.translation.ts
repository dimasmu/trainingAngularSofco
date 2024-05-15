import { LanguageTypes } from "../../../base/default-language/language";

export class IndonesiaMessageDictionary {
  public static readonly language = LanguageTypes.indonesia;
  public static readonly contents = {
    "notification.passed.hours": "{{0}} jam lalu",
    "client.nointernet.title": "Tidak ada koneksi internet",
    "client.nointernet.desc": "Anda tidak terhubung dengan internet. Cobalah sekali lagi.",
    "client.expired.title": "Sesi anda telah berakhir",
    "client.expired.desc": "Mohon login kembali untuk memperbarui sesi Anda",
    "clientLogo.image.max.size": "Ukuran gambar logo melebihi batas {{0}} {{1}} !",
    "company.customer.not.active": "Pelanggan tidak aktif!",
    "company.customer.not.found": "Pelanggan tidak ditemukan!",
    "company.not.active": "Perusahaan tidak aktif!",
    "company.not.found": "Perusahaan tidak ditemukan!",
    "companyLogo.company.not.active": "Logo perusahaan tidak aktif!",
    "companyLogo.company.not.found": "Logo perusahaan tidak ditemukan!",
    "companyLogo.file.required": "Logo perusahaan harus ada!",
    EmailFormatIsNotValid: "Format email tidak benar!",
    "jenisTransaksi.not.found": "Jenis transaksi tidak ditemukan!",
    "Password baru satu sama lain tidak sama": "Password baru tidak sama satu sama lain!",
    "Password salah": "Password salah!",
    "processParam.procesStatus.not.found": "Parameter status proses yang diantrikan tidak ditemukan!",
    "processStatus.process.not.active": "Proses yang dapat diantrikan tidak aktif!",
    "processStatus.process.not.found": "Proses yang dapat diantrikan tidak ditemukan!",
    "processStatus.user.not.active": "User untuk proses yang dapat diantrikan tidak aktif!",
    "processStatus.user.not.found": "User untuk proses yang dapat diantrikan tidak ditemukan!",
    "processStatusDetail.processStatus.not.found": "Detil status proses tidak ditemukan!",
    "sysNotification.company.not.active": "Perusahaan tidak aktif!",
    "sysNotification.company.not.found": "Perusahaan tidak ditemukan!",
    "sysNotification.user.not.active": "User tidak aktif!",
    "sysNotification.user.not.found": "User tidak ditemukan!",
    "token.authentication.not.found": "Username atau password salah!",
    "token.authentication.password.required": "Password tidak boleh kosong!",
    "token.authentication.username.required": "Username tidak boleh kosong!",
    "User sudah ada": "User sudah ada!",
    "userWidget.user.not.active": "User tidak aktif!",
    "userWidget.user.not.found": "User tidak ditemukan!",
    "userWidget.widget.not.active": "Widget tidak aktif!",
    "userWidget.widget.not.found": "Widget tidak ditemukan!",
    VersionError: "Ada masalah dengan version!",

    // error untuk input di grid
    InputBelumLengkap: "Ada inputan yang harus diinput tetapi masih kosong",

    // detil error di notifikasi
    "process.error.unknow": "kesalahan tak dikenali : {{0}}",

    // confirm message
    "confirm.jadwalPerulangan.terminate": "Hentikan jadwal perulangan ({{0}}) ?",

    // INVOICING GAJI.ID
    "admin.bulanan.bk": "Pelanggaran terhadap business key tabel admin bulanan!",
    "admin.diskon.bk": "Pelanggaran terhadap business key tabel admin diskon!",
    "admin.freemonth.bk": "Pelanggaran terhadap business key tabel admin free month!",
    "admin.penggunaan.master.bk": "Pelanggaran terhadap business key tabel penggunaan master!",
    "admin.renewal.bk": "Pelanggaran terhadap business key tabel admin renewal!",
    "admin.renewal.det.adj.sub.det.diskon.detail.bk":
      "Pelanggaran terhadap business key tabel detail adjustment, sub detail diskon milik admin renewal, nomor urut {{0}}!",
    "admin.renewal.det.adj.sub.det.diskon.jenis.max.length":
      "Panjang jenis diskon di sub detail diskon detail adjustment di admin renewal melebihi batas",
    "admin.renewal.det.adj.sub.det.diskon.jenis.required":
      "Jenis diskon di sub detail diskon detail adjustment di admin renewal harus diisi",
    "admin.renewal.det.adj.sub.det.diskon.keterangan.max.length":
      "Keterangan diskon di sub detail diskon detail adjustment di admin renewal melebihi batas",
    "admin.renewal.det.adj.sub.det.diskon.keterangan.required":
      "Keteragnan diskon di sub detail diskon detail adjustment di admin renewal harus diisi",
    "admin.renewal.det.adj.sub.det.diskon.netto.max.length":
      "Netto di sub detail diskon detail adjustment di admin renewal melebihi batas maksimal",
    "admin.renewal.det.adj.sub.det.diskon.netto.min.length":
      "Netto di sub detail diskon detail adjustment di admin renewal melebihi batas minimal",
    "admin.renewal.det.adj.sub.det.diskon.netto.required":
      "Netto di sub detail diskon detail adjustment di admin renewal harus diisi",
    "admin.renewal.det.adj.sub.det.diskon.nildasar.max.length":
      "Nilai dasar di sub detail diskon detail adjustment di admin renewal melebihi batas maksimal",
    "admin.renewal.det.adj.sub.det.diskon.nildasar.min.length":
      "Nilai dasar di sub detail diskon detail adjustment di admin renewal melebihi batas minimal",
    "admin.renewal.det.adj.sub.det.diskon.nildasar.required":
      "Nilai dasar di sub detail diskon detail adjustment di admin renewal harus diisi",
    "admin.renewal.det.adj.sub.det.diskon.nildisc.max.length":
      "Nilai diskon di sub detail diskon detail adjustment di admin renewal melebihi batas maksimal",
    "admin.renewal.det.adj.sub.det.diskon.nildisc.min.length":
      "Nilai diskon di sub detail diskon detail adjustment di admin renewal melebihi batas minimal",
    "admin.renewal.det.adj.sub.det.diskon.nildisc.required":
      "Nilai diskon di sub detail diskon detail adjustment di admin renewal harus diisi",
    "admin.renewal.det.adj.sub.det.diskon.nourut.max.length":
      "Nomor urut di sub detail diskon detail adjustment di admin renewal melebihi batas maksimal",
    "admin.renewal.det.adj.sub.det.diskon.nourut.min.length":
      "Nomor urut di sub detail diskon detail adjustment di admin renewal melebihi batas minimal",
    "admin.renewal.det.adj.sub.det.diskon.nourut.required":
      "Nomor urut di sub detail diskon detail adjustment di admin renewal harus diisi",
    "admin.renewal.det.adj.sub.det.diskon.pctdisc.max.length":
      "Prosen diskon di sub detail diskon detail adjustment di admin renewal melebihi batas maksimal",
    "admin.renewal.det.adj.sub.det.diskon.pctdisc.min.length":
      "Prosen diskon di sub detail diskon detail adjustment di admin renewal melebihi batas minimal",
    "admin.renewal.det.adj.sub.det.diskon.pctdisc.required":
      "Prosen diskon di sub detail diskon detail adjustment di admin renewal harus diisi",
    "admin.renewal.det.tgh.bk":
      "Pelanggaran terhadap business key tabel detail tagih milik admin renewal, nomor urut {{0}}!",
    "admin.renewal.det.tgh.harga.bruto.max.length":
      "Nilai bruto di detail tagih milik admin renewal melebihi batas maksimal",
    "admin.renewal.det.tgh.harga.bruto.min.length":
      "Nilai bruto di detail tagih milik admin renewal melebihi batas minimal",
    "admin.renewal.det.tgh.harga.bruto.required": "Nilai bruto di detail tagih milik admin renewal harus diisi",
    "admin.renewal.det.tgh.harga.harga.max.length": "Harga di detail tagih milik admin renewal melebihi batas maksimal",
    "admin.renewal.det.tgh.harga.harga.min.length": "Harga di detail tagih milik admin renewal melebihi batas minimal",
    "admin.renewal.det.tgh.harga.harga.required": "Harga di detail tagih milik admin renewal harus diisi",
    "admin.renewal.det.tgh.harga.jumkar.max.length":
      "Jumlah karyawan di detail tagih milik admin renewal melebihi batas maksimal",
    "admin.renewal.det.tgh.harga.jumkar.min.length":
      "Jumlah karyawan di detail tagih milik admin renewal melebihi batas minimal",
    "admin.renewal.det.tgh.harga.jumkar.required": "Jumlah karyawan di detail tagih milik admin renewal harus diisi",
    "admin.renewal.det.tgh.harga.jumnkar.max.length":
      "Jumlah non karyawan di detail tagih milik admin renewal melebihi batas maksimal",
    "admin.renewal.det.tgh.harga.jumnkar.min.length":
      "Jumlah non karyawan di detail tagih milik admin renewal melebihi batas minimal",
    "admin.renewal.det.tgh.harga.jumnkar.required":
      "Jumlah non karyawan di detail tagih milik admin renewal harus diisi",
    "admin.renewal.det.tgh.harga.jumsiklus.max.length":
      "Jumlah siklus di detail tagih milik admin renewal melebihi batas maksimal",
    "admin.renewal.det.tgh.harga.jumsiklus.min.length":
      "Jumlah siklus di detail tagih milik admin renewal melebihi batas minimal",
    "admin.renewal.det.tgh.harga.jumsiklus.required": "Jumlah siklus di detail tagih milik admin renewal harus diisi",
    "admin.renewal.det.tgh.harga.keterangan.max.length":
      "Keterangan di detail tagih milik admin renewal melebihi batas maksimal",
    "admin.renewal.det.tgh.harga.keterangan.required": "Keterangan di detail tagih milik admin renewal harus diisi",
    "admin.renewal.det.tgh.harga.netto.max.length":
      "Nilai netto di detail tagih milik admin renewal melebihi batas maksimal",
    "admin.renewal.det.tgh.harga.netto.min.length":
      "Nilai netto di detail tagih milik admin renewal melebihi batas minimal",
    "admin.renewal.det.tgh.harga.netto.required": "Nilai netto di detail tagih milik admin renewal harus diisi",
    "admin.renewal.det.tgh.harga.nildisc.max.length":
      "Nilai diskon di detail tagih milik admin renewal melebihi batas maksimal",
    "admin.renewal.det.tgh.harga.nildisc.min.length":
      "Nilai diskon di detail tagih milik admin renewal melebihi batas minimal",
    "admin.renewal.det.tgh.harga.nildisc.required": "Nilai diskon di detail tagih milik admin renewal harus diisi",
    "admin.renewal.det.tgh.harga.nilpctdisc.max.length":
      "Nilai prosen diskon di detail tagih milik admin renewal melebihi batas maksimal",
    "admin.renewal.det.tgh.harga.nilpctdisc.min.length":
      "Nilai prosen diskon di detail tagih milik admin renewal melebihi batas minimal",
    "admin.renewal.det.tgh.harga.nilpctdisc.required":
      "Nilai prosen diskon di detail tagih milik admin renewal harus diisi",
    "admin.renewal.det.tgh.harga.nourut.max.length":
      "Nomor urut di detail tagih milik admin renewal melebihi batas maksimal",
    "admin.renewal.det.tgh.harga.nourut.min.length":
      "Nomor urut di detail tagih milik admin renewal melebihi batas minimal",
    "admin.renewal.det.tgh.harga.nourut.required": "Nomor urut di detail tagih milik admin renewal harus diisi",
    "admin.renewal.det.tgh.harga.pctdisc.max.length":
      "Prosen diskon di detail tagih milik admin renewal melebihi batas maksimal",
    "admin.renewal.det.tgh.harga.pctdisc.min.length":
      "Prosen diskon di detail tagih milik admin renewal melebihi batas minimal",
    "admin.renewal.det.tgh.harga.pctdisc.required": "Prosen diskon di detail tagih milik admin renewal harus diisi",
    "admin.renewal.det.tgh.harga.pengali.max.length":
      "Nilai pengali di detail tagih milik admin renewal melebihi batas maksimal",
    "admin.renewal.det.tgh.harga.pengali.min.length":
      "Nilai pengali di detail tagih milik admin renewal melebihi batas minimal",
    "admin.renewal.det.tgh.harga.pengali.required": "Nilai pengali di detail tagih milik admin renewal harus diisi",
    "admin.renewal.det.tgh.harga.satsiklus.max.length":
      "Satuan siklus di detail tagih milik admin renewal melebihi batas maksimal",
    "admin.renewal.det.tgh.harga.satsiklus.required": "Satuan siklus di detail tagih milik admin renewal harus diisi",
    "admin.renewal.det.tgh.harga.totjumkar.max.length":
      "Total jumlah karyawan di detail tagih milik admin renewal melebihi batas maksimal",
    "admin.renewal.det.tgh.harga.totjumkar.min.length":
      "Total jumlah karyawan di detail tagih milik admin renewal melebihi batas minimal",
    "admin.renewal.det.tgh.harga.totjumkar.required":
      "Total jumlah karyawan di detail tagih milik admin renewal harus diisi",
    "admin.renewal.det.tgh.sub.det.diskon.detail.bk":
      "Pelanggaran terhadap business key tabel sub detail diskon di detail tagih milik admin renewal, nomor urut {{0}}!",
    "admin.renewal.det.tgh.sub.det.diskon.jenis.max.length":
      "Jenis diskon di sub detail diskon di detail tagih milik admin renewal melebihi batas maksimal",
    "admin.renewal.det.tgh.sub.det.diskon.jenis.required":
      "Jenis diskon di sub detail diskon di detail tagih milik admin renewal harus diisi",
    "admin.renewal.det.tgh.sub.det.diskon.keterangan.max.length":
      "Keterangan di sub detail diskon di detail tagih milik admin renewal melebihi batas maksimal",
    "admin.renewal.det.tgh.sub.det.diskon.keterangan.required":
      "Keterangan di sub detail diskon di detail tagih milik admin renewal harus diisi",
    "admin.renewal.det.tgh.sub.det.diskon.netto.max.length":
      "Nilai netto di sub detail diskon di detail tagih milik admin renewal melebihi batas maksimal",
    "admin.renewal.det.tgh.sub.det.diskon.netto.min.length":
      "Nilai netto di sub detail diskon di detail tagih milik admin renewal melebihi batas minimal",
    "admin.renewal.det.tgh.sub.det.diskon.netto.required":
      "Nilai netto di sub detail diskon di detail tagih milik admin renewal harus diisi",
    "admin.renewal.det.tgh.sub.det.diskon.nildasar.max.length":
      "Nilai dasar di sub detail diskon di detail tagih milik admin renewal melebihi batas maksimal",
    "admin.renewal.det.tgh.sub.det.diskon.nildasar.min.length":
      "Nilai dasar di sub detail diskon di detail tagih milik admin renewal melebihi batas minimal",
    "admin.renewal.det.tgh.sub.det.diskon.nildasar.required":
      "Nilai dasar di sub detail diskon di detail tagih milik admin renewal harus diisi",
    "admin.renewal.det.tgh.sub.det.diskon.nildisc.max.length":
      "Nilai diskon di sub detail diskon di detail tagih milik admin renewal melebihi batas maksimal",
    "admin.renewal.det.tgh.sub.det.diskon.nildisc.min.length":
      "Nilai diskon di sub detail diskon di detail tagih milik admin renewal melebihi batas minimal",
    "admin.renewal.det.tgh.sub.det.diskon.nildisc.required":
      "Nilai diskon di sub detail diskon di detail tagih milik admin renewal harus diisi",
    "admin.renewal.det.tgh.sub.det.diskon.nourut.max.length":
      "Nomor urut di sub detail diskon di detail tagih milik admin renewal melebihi batas maksimal",
    "admin.renewal.det.tgh.sub.det.diskon.nourut.min.length":
      "Nomor urut di sub detail diskon di detail tagih milik admin renewal melebihi batas minimal",
    "admin.renewal.det.tgh.sub.det.diskon.nourut.required":
      "Nomor urut di sub detail diskon di detail tagih milik admin renewal harus diisi",
    "admin.renewal.det.tgh.sub.det.diskon.pctdisc.max.length":
      "Prosen diskon di sub detail diskon di detail tagih milik admin renewal melebihi batas maksimal",
    "admin.renewal.det.tgh.sub.det.diskon.pctdisc.min.length":
      "Prosen diskon di sub detail diskon di detail tagih milik admin renewal melebihi batas minimal",
    "admin.renewal.det.tgh.sub.det.diskon.pctdisc.required":
      "Prosen diskon di sub detail diskon di detail tagih milik admin renewal harus diisi",
    "admin.renewal.det.tgh.sub.det.skema.tarif.bk":
      "Pelanggaran terhadap business key tabel sub detail skema tarif di detail tagih milik admin renewal, nomor urut {{0}}!",
    "admin.renewal.det.tgh.sub.det.skema.tarif.bruto.max.length":
      "Nilai bruto di sub detail skema tarif di detail tagih milik admin renewal melebihi batas maksimal",
    "admin.renewal.det.tgh.sub.det.skema.tarif.bruto.min.length":
      "Nilai bruto di sub detail skema tarif di detail tagih milik admin renewal melebihi batas minimal",
    "admin.renewal.det.tgh.sub.det.skema.tarif.bruto.required":
      "Nilai bruto di sub detail skema tarif di detail tagih milik admin renewal harus diisi",
    "admin.renewal.det.tgh.sub.det.skema.tarif.harga.max.length":
      "Nilai harga di sub detail skema tarif di detail tagih milik admin renewal melebihi batas maksimal",
    "admin.renewal.det.tgh.sub.det.skema.tarif.harga.min.length":
      "Nilai harga di sub detail skema tarif di detail tagih milik admin renewal melebihi batas minimal",
    "admin.renewal.det.tgh.sub.det.skema.tarif.harga.required":
      "Nilai harga di sub detail skema tarif di detail tagih milik admin renewal harus diisi",
    "admin.renewal.det.tgh.sub.det.skema.tarif.jnstrf.max.length":
      "Jenis tarif di sub detail skema tarif di detail tagih milik admin renewal melebihi batas maksimal",
    "admin.renewal.det.tgh.sub.det.skema.tarif.jnstrf.required":
      "Jenis tarif di sub detail skema tarif di detail tagih milik admin renewal harus diisi",
    "admin.renewal.det.tgh.sub.det.skema.tarif.jumlah.max.length":
      "Jumlah di sub detail skema tarif di detail tagih milik admin renewal melebihi batas maksimal",
    "admin.renewal.det.tgh.sub.det.skema.tarif.jumlah.min.length":
      "Jumlah di sub detail skema tarif di detail tagih milik admin renewal melebihi batas minimal",
    "admin.renewal.det.tgh.sub.det.skema.tarif.jumlah.required":
      "Jumlah di sub detail skema tarif di detail tagih milik admin renewal harus diisi",
    "admin.renewal.det.tgh.sub.det.skema.tarif.keterangan.max.length":
      "Keterangan di sub detail skema tarif di detail tagih milik admin renewal melebihi batas maksimal",
    "admin.renewal.det.tgh.sub.det.skema.tarif.keterangan.required":
      "Keterangan di sub detail skema tarif di detail tagih milik admin renewal harus diisi",
    "admin.renewal.det.tgh.sub.det.skema.tarif.netto.max.length":
      "Nilai netto di sub detail skema tarif di detail tagih milik admin renewal melebihi batas maksimal",
    "admin.renewal.det.tgh.sub.det.skema.tarif.netto.min.length":
      "Nilai netto di sub detail skema tarif di detail tagih milik admin renewal melebihi batas minimal",
    "admin.renewal.det.tgh.sub.det.skema.tarif.netto.required":
      "Nilai netto di sub detail skema tarif di detail tagih milik admin renewal harus diisi",
    "admin.renewal.det.tgh.sub.det.skema.tarif.nourut.max.length":
      "Nomor urut di sub detail skema tarif di detail tagih milik admin renewal melebihi batas maksimal",
    "admin.renewal.det.tgh.sub.det.skema.tarif.nourut.min.length":
      "Nomor urut di sub detail skema tarif di detail tagih milik admin renewal melebihi batas minimal",
    "admin.renewal.det.tgh.sub.det.skema.tarif.nourut.required":
      "Nomor urut di sub detail skema tarif di detail tagih milik admin renewal harus diisi",
    "admin.renewal.detail.adjustment.bk":
      "Pelanggaran terhadap business key tabel detail adjustment milik admin renewal, tahun bulan : {{0}} - {{1}} !",
    "admin.renewal.detail.adjustment.bulan.max.length":
      "Bulan di detail adjustment milik admin renewal melebihi batas maksimal",
    "admin.renewal.detail.adjustment.bulan.required": "Bulan di detail adjustment milik admin renewal harus diisi",
    "admin.renewal.detail.adjustment.fltgh.max.length":
      "Flag tagih di detail adjustment milik admin renewal melebihi batas maksimal",
    "admin.renewal.detail.adjustment.fltgh.required": "Flag tagih di detail adjustment milik admin renewal harus diisi",
    "admin.renewal.detail.adjustment.harga.max.length":
      "Nilai harga di detail adjustment milik admin renewal melebihi batas maksimal",
    "admin.renewal.detail.adjustment.harga.min.length":
      "Nilai harga di detail adjustment milik admin renewal melebihi batas minimal",
    "admin.renewal.detail.adjustment.harga.required":
      "Nilai harga di detail adjustment milik admin renewal harus diisi",
    "admin.renewal.detail.adjustment.jkbulini.max.length":
      "Jumlah karyawan di detail adjustment milik admin renewal melebihi batas maksimal",
    "admin.renewal.detail.adjustment.jkbulini.min.length":
      "Jumlah karyawan di detail adjustment milik admin renewal melebihi batas minimal",
    "admin.renewal.detail.adjustment.jkbulini.required":
      "Jumlah karyawan di detail adjustment milik admin renewal harus diisi",
    "admin.renewal.detail.adjustment.jnkbulini.max.length":
      "Jumlah non karyawan di detail adjustment milik admin renewal melebihi batas maksimal",
    "admin.renewal.detail.adjustment.jnkbulini.min.length":
      "Jumlah non karyawan di detail adjustment milik admin renewal melebihi batas minimal",
    "admin.renewal.detail.adjustment.jnkbulini.required":
      "Jumlah non karyawan di detail adjustment milik admin renewal harus diisi",
    "admin.renewal.detail.adjustment.keterangan.max.length":
      "Keterangan di detail adjustment milik admin renewal melebihi batas maksimal",
    "admin.renewal.detail.adjustment.keterangan.required":
      "Keterangan di detail adjustment milik admin renewal harus diisi",
    "admin.renewal.detail.adjustment.netto.max.length":
      "Nilai netto di detail adjustment milik admin renewal melebihi batas maksimal",
    "admin.renewal.detail.adjustment.netto.min.length":
      "Nilai netto di detail adjustment milik admin renewal melebihi batas minimal",
    "admin.renewal.detail.adjustment.netto.required":
      "Nilai netto di detail adjustment milik admin renewal harus diisi",
    "admin.renewal.detail.adjustment.nildisc.max.length":
      "Nilai diskon di detail adjustment milik admin renewal melebihi batas maksimal",
    "admin.renewal.detail.adjustment.nildisc.min.length":
      "Nilai diskon di detail adjustment milik admin renewal melebihi batas minimal",
    "admin.renewal.detail.adjustment.revjkbullalu.max.length":
      "Jumlah revisi karyawan bulan lalu di detail adjustment milik admin renewal melebihi batas maksimal",
    "admin.renewal.detail.adjustment.revjkbullalu.min.length":
      "Jumlah revisi karyawan bulan lalu di detail adjustment milik admin renewal melebihi batas minimal",
    "admin.renewal.detail.adjustment.revjkbullalu.required":
      "Jumlah revisi karyawan bulan lalu di detail adjustment milik admin renewal harus diisi",
    "admin.renewal.detail.adjustment.revjnkbullalu.max.length":
      "Jumlah revisi non karyawan bulan lalu di detail adjustment milik admin renewal melebihi batas maksimal",
    "admin.renewal.detail.adjustment.revjnkbullalu.min.length":
      "Jumlah revisi non karyawan bulan lalu di detail adjustment milik admin renewal melebihi batas minimal",
    "admin.renewal.detail.adjustment.revjnkbullalu.required":
      "Jumlah revisi non karyawan bulan lalu di detail adjustment milik admin renewal harus diisi",
    "admin.renewal.detail.adjustment.seljkbullalu.max.length":
      "Jumlah selisih karyawan bulan lalu di detail adjustment milik admin renewal melebihi batas maksimal",
    "admin.renewal.detail.adjustment.seljkbullalu.min.length":
      "Jumlah selisih karyawan bulan lalu di detail adjustment milik admin renewal melebihi batas minimal",
    "admin.renewal.detail.adjustment.seljkbullalu.required":
      "Jumlah selisih karyawan bulan lalu di detail adjustment milik admin renewal harus diisi",
    "admin.renewal.detail.adjustment.seljnkbullalu.max.length":
      "Jumlah selisih non karyawan bulan lalu di detail adjustment milik admin renewal melebihi batas maksimal",
    "admin.renewal.detail.adjustment.seljnkbullalu.min.length":
      "Jumlah selisih non karyawan bulan lalu di detail adjustment milik admin renewal melebihi batas minimal",
    "admin.renewal.detail.adjustment.seljnkbullalu.required":
      "Jumlah selisih non karyawan bulan lalu di detail adjustment milik admin renewal harus diisi",
    "admin.renewal.detail.adjustment.tahun.max.length":
      "Tahun di detail adjustment milik admin renewal melebihi batas maksimal",
    "admin.renewal.detail.adjustment.tahun.required": "Tahun di detail adjustment milik admin renewal harus diisi",
    "admin.renewal.sub.detail.skema.tarif.bk":
      "Pelanggaran terhadap business key tabel sub detail skema tarif milik admin renewal, nomor urut {{0}}!",
    "admin.renewal.sub.detail.skema.tarif.bruto.max.length":
      "Nilai bruto di sub detail skema tarif milik admin renewal melebihi batas maksimal",
    "admin.renewal.sub.detail.skema.tarif.bruto.min.length":
      "Nilai bruto di sub detail skema tarif milik admin renewal melebihi batas minimal",
    "admin.renewal.sub.detail.skema.tarif.bruto.required":
      "Nilai bruto di sub detail skema tarif milik admin renewal harus diisi",
    "admin.renewal.sub.detail.skema.tarif.harga.max.length":
      "Nilai harga di sub detail skema tarif milik admin renewal melebihi batas maksimal",
    "admin.renewal.sub.detail.skema.tarif.harga.min.length":
      "Nilai harga di sub detail skema tarif milik admin renewal melebihi batas minimal",
    "admin.renewal.sub.detail.skema.tarif.harga.required":
      "Nilai harga di sub detail skema tarif milik admin renewal harus diisi",
    "admin.renewal.sub.detail.skema.tarif.jnstrf.max.length":
      "Jenis tarif di sub detail skema tarif milik admin renewal melebihi batas maksimal",
    "admin.renewal.sub.detail.skema.tarif.jnstrf.required":
      "Jenis tarif di sub detail skema tarif milik admin renewal harus diisi",
    "admin.renewal.sub.detail.skema.tarif.jumlah.max.length":
      "Jumlah di sub detail skema tarif milik admin renewal melebihi batas maksimal",
    "admin.renewal.sub.detail.skema.tarif.jumlah.min.length":
      "Jumlah di sub detail skema tarif milik admin renewal melebihi batas minimal",
    "admin.renewal.sub.detail.skema.tarif.jumlah.required":
      "Jumlah di sub detail skema tarif milik admin renewal harus diisi",
    "admin.renewal.sub.detail.skema.tarif.keterangan.max.length":
      "Keterangann di sub detail skema tarif milik admin renewal melebihi batas maksimal",
    "admin.renewal.sub.detail.skema.tarif.keterangan.required":
      "Keterangann di sub detail skema tarif milik admin renewal harus diisi",
    "admin.renewal.sub.detail.skema.tarif.netto.max.length":
      "Nilai netto di sub detail skema tarif milik admin renewal melebihi batas maksimal",
    "admin.renewal.sub.detail.skema.tarif.netto.min.length":
      "Nilai netto di sub detail skema tarif milik admin renewal melebihi batas minimal",
    "admin.renewal.sub.detail.skema.tarif.netto.required":
      "Nilai netto di sub detail skema tarif milik admin renewal harus diisi",
    "admin.renewal.sub.detail.skema.tarif.nourut.max.length":
      "Nomor urut di sub detail skema tarif milik admin renewal melebihi batas maksimal",
    "admin.renewal.sub.detail.skema.tarif.nourut.min.length":
      "Nomor urut di sub detail skema tarif milik admin renewal melebihi batas minimal",
    "admin.renewal.sub.detail.skema.tarif.nourut.required":
      "Nomor urut di sub detail skema tarif milik admin renewal harus diisi",
    "admin.upload.detail.bk": "Pelanggaran terhadap business key tabel detail admin upload!",
    "admin.upload.header.bk": "Pelanggaran terhadap business key tabel header admin upload!",
    "customer.billalamat.max.length": "Alamat finance melebihi batas maksimal",
    "customer.billalamat2.max.length": "Alamat tagihan melebihi batas maksimal",
    "customer.billcust2.max.length": "Nama PT tujuan tagih melebihi batas maksimal",
    "customer.billemail.max.length": "Alamat email finance melebihi batas maksimal",
    "customer.billemail2.max.length": "Alamat email tujuan tagih melebihi batas maksimal",
    "customer.billnama.max.length": "Nama finance melebihi batas maksimal",
    "customer.billnama2.max.length": "Nama tujuan tagih melebihi batas maksimal",
    "customer.billnumber.max.length": "Telepon finance melebihi batas maksimal",
    "customer.billnumber2.max.length": "Telepon tujuan tagih melebihi batas maksimal",
    "customer.billrole.max.length": "Jabatan finance melebihi batas maksimal",
    "customer.billrole2.max.length": "Jabatan tujuan tagih melebihi batas maksimal",
    "customer.bk": "Pelanggaran terhadap business key master customer, nama : {{0}}!",
    "customer.nama.max.length": "Nama customer melebihi batas maksimal",
    "customer.nama.required": "Nama customer harus diisi",
    "customer.picalamat.max.length": "Alamat PIC melebihi batas maksimal",
    "customer.picalamat.required": "Alamat PIC harus diisi",
    "customer.picemail.max.length": "Alamat email PIC melebihi batas maksimal",
    "customer.picemail.required": "Alamat email PIC harus diisi",
    "customer.picnama.max.length": "Nama PIC melebihi batas maksimal",
    "customer.picnama.required": "Nama PIC harus diisi",
    "customer.picnumber.max.length": "Telepon PIC melebihi batas maksimal",
    "customer.picnumber.required": "Telepon PIC harus diisi",
    "customer.picrole.max.length": "Jabatan PIC melebihi batas maksimal",
    "customer.picrole.required": "Jabatan PIC harus diisi",
    "customer.vabca.max.length": "Virtual Account melebihi batas maksimal",
    "customer.vabca.required": "Virtual Account harus diisi",
    "customerGajiId.not.active": "Customer tidak aktif",
    "customerGajiId.not.found": "Customer tidak ditemukan",
    "customerProdukTarif.detail.bk":
      "Pelanggaran terhadap business key tabel detail master customer tarif, nomor urut {{0}}!",
    "customerProdukTarif.detail.freemo.max.length": "Freemonth melebihi batas maksimal",
    "customerProdukTarif.detail.freemo.min.length": "Freemonth melebihi batas minimal",
    "customerProdukTarif.detail.freemo.required": "Freemonth harus diisi",
    "customerProdukTarif.detail.jnstrf.max.length": "Jenis tarif melebihi batas maksimal",
    "customerProdukTarif.detail.jnstrf.required": "Jenis tarif harus diisi",
    "customerProdukTarif.detail.jumdur.max.length": "Jumlah durasi melebihi batas maksimal",
    "customerProdukTarif.detail.jumdur.min.length": "Jumlah durasi melebihi batas minimal",
    "customerProdukTarif.detail.jumdur.required": "Jumlah durasi harus diisi",
    "customerProdukTarif.detail.nildisc.max.length": "Nilai diskon melebihi batas maksimal",
    "customerProdukTarif.detail.nildisc.min.length": "Nilai diskon melebihi batas minimal",
    "customerProdukTarif.detail.nildisc.required": "Nilai diskon harus diisi",
    "customerProdukTarif.detail.nourut.max.length": "Nomor urut melebihi batas maksimal",
    "customerProdukTarif.detail.nourut.min.length": "Nomor urut melebihi batas minimal",
    "customerProdukTarif.detail.nourut.required": "Nomor urut harus diisi",
    "customerProdukTarif.detail.pctdisc.max.length": "Prosen diskon melebihi batas maksimal",
    "customerProdukTarif.detail.pctdisc.min.length": "Prosen diskon melebihi batas minimal",
    "customerProdukTarif.detail.pctdisc.required": "Prosen diskon harus diisi",
    "customerProdukTarif.detail.satdur.max.length": "Satuan durasi melebihi batas maksimal",
    "customerProdukTarif.detail.satdur.required": "Satuan durasi harus diisi",
    "customerProdukTarif.detail.tglstart.max.length": "Tanggal mulai melebihi batas maksimal",
    "customerProdukTarif.detail.tglstart.required": "Tanggal mulai harus diisi",
    "customerProdukTarif.detail.tglstop.max.length": "Tanggal berhenti melebihi batas maksimal",
    "customerProdukTarif.detail.tglstop.required": "Tanggal berhenti harus diisi",
    "customerProdukTarif.header.bk": "Pelanggaran terhadap business key tabel header master customer tarif!",
    "customerProdukTarif.header.jnstgh.max.length": "Jenis tagih melebihi batas maksimal",
    "customerProdukTarif.header.jnstgh.required": "Jenis tagih harus diisi",
    "customerProdukTarif.header.jthtemp.max.length": "Jatuh tempo melebihi batas maksimal",
    "customerProdukTarif.header.jthtemp.min.length": "Jatuh tempo melebihi batas minimal",
    "customerProdukTarif.header.jthtemp.required": "Jatuh tempo harus diisi",
    "customerProdukTarif.header.jumsiklus.max.length": "Jumlah siklus melebihi batas maksimal",
    "customerProdukTarif.header.jumsiklus.min.length": "Jumlah siklus melebihi batas minimal",
    "customerProdukTarif.header.jumsiklus.required": "Jumlah siklus harus diisi",
    "customerProdukTarif.header.satsiklus.max.length": "Satuan siklus melebihi batas maksimal",
    "customerProdukTarif.header.satsiklus.required": "Satuan siklus harus diisi",
    "customerProdukTarif.header.tglstart.max.length": "Tanggal start melebihi batas maksimal",
    "customerProdukTarif.header.tglstart.required": "Tanggal start harus diisi",
    "customerProdukTarif.header.tglstop.max.length": "Tanggal berhenti melebihi batas maksimal",
    "customerProdukTarif.header.tglstop.required": "Tanggal berhenti harus diisi",
    "customerProdukTarif.header.tipe.max.length": "Tipe melebihi batas maksimal",
    "customerProdukTarif.header.tipe.required": "Tipe harus diisi",
    "customerProdukTarif.komplit.detail.sudah.dipakai": "Detail tarif sudah digunakan",
    "customerProdukTarif.komplit.durasi.diskon.overlap.admin": "Durasi diskon overlap dengan data admin diskon",
    "customerProdukTarif.komplit.error.in.detail": "Ada error di detail",
    "customerProdukTarif.komplit.error.in.subdetail": "Ada error di sub detail",
    "customerProdukTarif.komplit.freemonth.melebihi.admin":
      "Freemonth yang diinput melebihi yang ada di admin freemonth",
    "customerProdukTarif.komplit.freemonth.sudah.digunakan": "Freemonth sudah digunakan!",
    "customerProdukTarif.komplit.no.data": "Tidak ada data",
    "customerProdukTarif.komplit.no.detail": "Tidak memiliki detail",
    "customerProdukTarif.komplit.periode.diskon.overlap.admin": "Periode diskon overlap dengan data admin diskon",
    "customerProdukTarif.komplit.periode.skema.overlap.admin":
      "Periode skema tarif overlap dengan admin penggunaan skema tarif",
    "data.not.found": "Data tidak ditemukan",
    "diskonkhusus.detail.bk": "Pelanggaran terhadap business key tabel detail diskon khusus, nama : {{0}}!",
    "diskonkhusus.header.bk": "Pelanggaran terhadap business key tabel header diskon khusus, nama : {{0}}!",
    "diskonkhusus.header.jumdur.max.length": "Jumlah durasi melebihi batas maksimal",
    "diskonkhusus.header.jumdur.min.length": "Jumlah durasi melebihi batas minimal",
    "diskonkhusus.header.jumdur.required": "Jumlah durasi harus diisi",
    "diskonkhusus.header.keterangan.max.length": "Keterangan melebihi batas maksimal",
    "diskonkhusus.header.keterangan.required": "Keterangan harus diisi",
    "diskonkhusus.header.nama.max.length": "Nama melebihi batas maksimal",
    "diskonkhusus.header.nama.required": "Nama harus diisi",
    "diskonkhusus.header.nilai.max.length": "Nilai melebihi batas maksimal",
    "diskonkhusus.header.nilai.min.length": "Nilai melebihi batas minimal",
    "diskonkhusus.header.nilai.requiered": "Nilai harus diisi",
    "diskonkhusus.header.pctdisc.max.length": "Prosen diskon melebihi batas maksimal",
    "diskonkhusus.header.pctdisc.min.length": "Prosen diskon melebihi batas minimal",
    "diskonkhusus.header.satdur.max.length": "Satuan durasi melebihi batas maksimal",
    "diskonkhusus.header.satdur.required": "Satuan durasi harus diisi",
    "diskonkhusus.komplit.error.in.detail": "Ada error di detail",
    "diskonkhusus.komplit.error.in.subdetail": "Ada error di sub detail",
    "diskonkhusus.komplit.no.data": "Tidak ada data",
    "diskonkhusus.komplit.no.detail": "Tidak memiliki detail",
    "grupdiskon.detail.bk": "Pelanggaran terhadap business key tabel detail grup diskon, nomor urut {{0}}!",
    "grupdiskon.detail.jumdurNil.max.length": "Jumlah durasi nilai diskon melebihi batas maksimal",
    "grupdiskon.detail.jumdurNil.min.length": "Jumlah durasi nilai diskon melebihi batas minimal",
    "grupdiskon.detail.jumdurPct.max.length": "Jumlah durasi prosen diskon melebihi batas maksimal",
    "grupdiskon.detail.jumdurPct.min.length": "Jumlah durasi prosen diskon melebihi batas minimal",
    "grupdiskon.detail.nilai.max.length": "Nilai melebihi batas maksimal",
    "grupdiskon.detail.nilai.min.length": "Nilai melebihi batas minimal",
    "grupdiskon.detail.nourut.max.length": "Nomor urut melebihi batas maksimal",
    "grupdiskon.detail.nourut.min.length": "Nomor urut melebihi batas minimal",
    "grupdiskon.detail.prosen.max.length": "Prosen diskon melebihi batas maksimal",
    "grupdiskon.detail.prosen.min.length": "Prosen diskon melebihi batas minimal",
    "grupdiskon.detail.satdurNil.max.length": "Satuan durasi nilai diskon melebihi batas maksimal",
    "grupdiskon.detail.satdurPct.max.length": "Satuan durasi prosen diskon melebihi batas maksimal",
    "grupdiskon.header.bk": "Pelanggaran terhadap business key tabel header grup diskon, nama:  {{0}}!",
    "grupdiskon.header.keterangan.max.length": "Keterangan melebihi batas maksimal",
    "grupdiskon.header.keterangan.required": "Keterangan harus diisi",
    "grupdiskon.header.nama.max.length": "Nama melebihi batas maksimal",
    "grupdiskon.header.nama.required": "Nama harus diisi",
    "grupdiskon.komplit.error.in.detail": "Ada error di detail",
    "grupdiskon.komplit.error.in.subdetail": "Ada error di sub detail",
    "grupdiskon.komplit.no.data": "Tidak ada data",
    "grupDiskon.not.active": "Grup diskon tidak aktif",
    "grupDiskon.not.found": "Grup diskon tidak ditemukan",
    "implementasi.bk": "Pelanggaran terhadap business key tabel master implementasi!",
    "implementasi.harga.max.length": "Harga melebihi batas maksimal",
    "implementasi.harga.min.length": "Harga melebihi batas minimal",
    "implementasi.harga.required": "Harga harus diisi",
    "implementasi.jumdur.max.length": "Jumlah durasi melebihi batas maksimal",
    "implementasi.jumdur.min.length": "Jumlah durasi melebihi batas minimal",
    "implementasi.jumdur.required": "Jumlah durasi harus diinput",
    "implementasi.keterangan.max.length": "Keterangan melebihi batas maksimal",
    "implementasi.keterangan.required": "Keterangan harus diisi",
    "implementasi.nama.max.length": "Nama melebihi batas maksimal",
    "implementasi.nama.required": "Nama harus diisi",
    "implementasi.not.active": "Implementasi tidak aktif",
    "implementasi.not.found": "Implementasi tidak ditemukan",
    "implementasi.satdur.max.length": "Satuan durasi melebihi batas maksimal",
    "implementasi.satdur.required": "Satuan durasi harus diisi",
    "implementasi.tipe.max.length": "Tipe melebihi batas maksimal",
    "implementasi.tipe.required": "Tipe harus diisi",
    "invoice.adjustment.perincian.failed": "Proses penambahan detail adjustment gagal",
    "invoice.general.belum.kirim": "Invoice belum dikirim",
    "invoice.general.no.data": "Tidak ada data",
    "invoice.general.sudah.bayar": "Invoice sudah dibayar",
    "invoice.hasil.proses.adj.sub.sub.detail.diskon.failed":
      "Proses penambahan sub sub detail diskon pada adjustment gagal",
    "invoice.hasil.proses.adj.sub.sub.detail.skema.tarif.failed":
      "Proses penambahan sub sub detail skema tarif pada adjustment gagal",
    "invoice.hasil.proses.error.in.detail": "Ada error di detail",
    "invoice.hasil.proses.error.in.subdetail": "Ada error di sub detail",
    "invoice.hasil.proses.komplit.no.detail": "Tidak ada detail",
    "invoice.hasil.proses.sub.detail.diskon.failed":
      "Proses penambahan sub detail diskon pada detail hasil proses gagal",
    "invoice.hasil.proses.sub.detail.skema.tarif.failed":
      "Proses penambahan sub detail skema tarif pada detail hasil proses gagal",
    "invoice.not.found": "Invoice tidak ditemukan",
    "invoice.otomatis.adj.perincian.bk":
      "Pelanggaran terhadap business key tabel perincian detail adjustment, nomor urut {{0}}!",
    "invoice.otomatis.adj.perincian.bulan.max.length":
      "Bulan di perincian detail adjustment invoice melebihi batas maksimal",
    "invoice.otomatis.adj.perincian.bulan.required": "Bulan di perincian detail adjustment invoice harus diisi",
    "invoice.otomatis.adj.perincian.harga.max.length":
      "Nilai harga di perincian detail adjustment invoice melebihi batas maksimal",
    "invoice.otomatis.adj.perincian.harga.min.length":
      "Nilai harga di perincian detail adjustment invoice melebihi batas minimal",
    "invoice.otomatis.adj.perincian.harga.required": "Nilai harga di perincian detail adjustment invoice harus diisi",
    "invoice.otomatis.adj.perincian.jkbulini.max.length":
      "Jumlah karyawan bulan ini di perincian detail adjustment invoice melebihi batas maksimal",
    "invoice.otomatis.adj.perincian.jkbulini.min.length":
      "Jumlah karyawan bulan ini di perincian detail adjustment invoice melebihi batas minimal",
    "invoice.otomatis.adj.perincian.jkbulini.required":
      "Jumlah karyawan bulan ini di perincian detail adjustment invoice harus diisi",
    "invoice.otomatis.adj.perincian.jnkbulini.max.length":
      "Jumlah non karyawan bulan ini di perincian detail adjustment invoice melebihi batas maksimal",
    "invoice.otomatis.adj.perincian.jnkbulini.min.length":
      "Jumlah non karyawan bulan ini di perincian detail adjustment invoice melebihi batas minimal",
    "invoice.otomatis.adj.perincian.jnkbulini.required":
      "Jumlah non karyawan bulan ini di perincian detail adjustment invoice harus diisi",
    "invoice.otomatis.adj.perincian.keterangan.max.length":
      "Keterangan di perincian detail adjustment invoice melebihi batas maksimal",
    "invoice.otomatis.adj.perincian.keterangan.required":
      "Keterangan di perincian detail adjustment invoice harus diisi",
    "invoice.otomatis.adj.perincian.netto.required": "Nilai netto di perincian detail adjustment invoice harus diisi",
    "invoice.otomatis.adj.perincian.revjkbullalu.max.length":
      "Jumlah revisi karyawan bulan lalu di perincian detail adjustment invoice melebihi batas maksimal",
    "invoice.otomatis.adj.perincian.revjkbullalu.min.length":
      "Jumlah revisi karyawan bulan lalu di perincian detail adjustment invoice melebihi batas minimal",
    "invoice.otomatis.adj.perincian.revjkbullalu.required":
      "Jumlah revisi karyawan bulan lalu di perincian detail adjustment invoice harus diisi",
    "invoice.otomatis.adj.perincian.revjnkbullalu.max.length":
      "Jumlah revisi non karyawan bulan lalu di perincian detail adjustment invoice melebihi batas maksimal",
    "invoice.otomatis.adj.perincian.revjnkbullalu.min.length":
      "Jumlah revisi non karyawan bulan lalu di perincian detail adjustment invoice melebihi batas minimal",
    "invoice.otomatis.adj.perincian.revjnkbullalu.required":
      "Jumlah revisi non karyawan bulan lalu di perincian detail adjustment invoice harus diisi",
    "invoice.otomatis.adj.perincian.seljkbullalu.max.length":
      "Jumlah selisih karyawan bulan lalu di perincian detail adjustment invoice melebihi batas maksimal",
    "invoice.otomatis.adj.perincian.seljkbullalu.min.length":
      "Jumlah selisih karyawan bulan lalu di perincian detail adjustment invoice melebihi batas minimal",
    "invoice.otomatis.adj.perincian.seljkbullalu.required":
      "Jumlah selisih karyawan bulan lalu di perincian detail adjustment invoice harus diisi",
    "invoice.otomatis.adj.perincian.seljnkbullalu.max.length":
      "Jumlah selisih non karyawan bulan lalu di perincian detail adjustment invoice melebihi batas maksimal",
    "invoice.otomatis.adj.perincian.seljnkbullalu.min.length":
      "Jumlah selisih non karyawan bulan lalu di perincian detail adjustment invoice melebihi batas minimal",
    "invoice.otomatis.adj.perincian.seljnkbullalu.required":
      "Jumlah selisih non karyawan bulan lalu di perincian detail adjustment invoice harus diisi",
    "invoice.otomatis.adj.perincian.tahun.max.length":
      "Tahun di perincian detail adjustment invoice melebihi batas maksimal",
    "invoice.otomatis.adj.perincian.tahun.required": "Tahun di perincian detail adjustment invoice harus diisi",
    "invoice.otomatis.adj.sub.sub.detail.diskon.detail.bk":
      "Pelanggaran terhadap business key tabel perincian detail adjustment invoice, nomor urut {{0}}!",
    "invoice.otomatis.adj.sub.sub.detail.diskon.jenis.max.length":
      "Jenis di sub sub detail diskon di detail adjustment invoice melebihi batas maksimal",
    "invoice.otomatis.adj.sub.sub.detail.diskon.jenis.required":
      "Jenis di sub sub detail diskon di detail adjustment invoice harus diisi",
    "invoice.otomatis.adj.sub.sub.detail.diskon.keterangan.max.length":
      "Keterangan di sub sub detail diskon di detail adjustment invoice melebihi batas maksimal",
    "invoice.otomatis.adj.sub.sub.detail.diskon.keterangan.required":
      "Keterangan di sub sub detail diskon di detail adjustment invoice harus diisi",
    "invoice.otomatis.adj.sub.sub.detail.diskon.netto.max.length":
      "Nilai netto di sub sub detail diskon di detail adjustment invoice melebihi batas maksimal",
    "invoice.otomatis.adj.sub.sub.detail.diskon.netto.min.length":
      "Nilai netto di sub sub detail diskon di detail adjustment invoice melebihi batas minimal",
    "invoice.otomatis.adj.sub.sub.detail.diskon.netto.required":
      "Nilai netto di sub sub detail diskon di detail adjustment invoice harus diisi",
    "invoice.otomatis.adj.sub.sub.detail.diskon.nildasar.max.length":
      "Nilai dasar di sub sub detail diskon di detail adjustment invoice melebihi batas maksimal",
    "invoice.otomatis.adj.sub.sub.detail.diskon.nildasar.min.length":
      "Nilai dasar di sub sub detail diskon di detail adjustment invoice melebihi batas minimal",
    "invoice.otomatis.adj.sub.sub.detail.diskon.nildasar.required":
      "Nilai dasar di sub sub detail diskon di detail adjustment invoice harus diisi",
    "invoice.otomatis.adj.sub.sub.detail.diskon.nildisc.max.length":
      "Nilai diskon di sub sub detail diskon di detail adjustment invoice melebihi batas maksimal",
    "invoice.otomatis.adj.sub.sub.detail.diskon.nildisc.min.length":
      "Nilai diskon di sub sub detail diskon di detail adjustment invoice melebihi batas minimal",
    "invoice.otomatis.adj.sub.sub.detail.diskon.nildisc.required":
      "Nilai diskon di sub sub detail diskon di detail adjustment invoice harus diisi",
    "invoice.otomatis.adj.sub.sub.detail.diskon.nourut.max.length":
      "Nomor urut di sub sub detail diskon di detail adjustment invoice melebihi batas maksimal",
    "invoice.otomatis.adj.sub.sub.detail.diskon.nourut.min.length":
      "Nomor urut di sub sub detail diskon di detail adjustment invoice melebihi batas minimal",
    "invoice.otomatis.adj.sub.sub.detail.diskon.nourut.required":
      "Nomor urut di sub sub detail diskon di detail adjustment invoice harus diisi",
    "invoice.otomatis.adj.sub.sub.detail.diskon.pctdisc.max.length":
      "Prosen diskon di sub sub detail diskon di detail adjustment invoice melebihi batas maksimal",
    "invoice.otomatis.adj.sub.sub.detail.diskon.pctdisc.min.length":
      "Prosen diskon di sub sub detail diskon di detail adjustment invoice melebihi batas minimal",
    "invoice.otomatis.adj.sub.sub.detail.diskon.pctdisc.required":
      "Prosen diskon di sub sub detail diskon di detail adjustment invoice harus diisi",
    "invoice.otomatis.adj.sub.sub.detail.skema.tarif.bk":
      "Pelanggaran terhadap business key tabel sub sub detail skema tarif di detail adjustment invoice, nomor urut {{0}}!",
    "invoice.otomatis.adj.sub.sub.detail.skema.tarif.bruto.max.length":
      "Nilai bruto di sub sub detail skema tarif di detail adjustment invoice melebihi batas maksimal",
    "invoice.otomatis.adj.sub.sub.detail.skema.tarif.bruto.min.length":
      "Nilai bruto di sub sub detail skema tarif di detail adjustment invoice melebihi batas minimal",
    "invoice.otomatis.adj.sub.sub.detail.skema.tarif.bruto.required":
      "Nilai bruto di sub sub detail skema tarif di detail adjustment invoice harus diisi",
    "invoice.otomatis.adj.sub.sub.detail.skema.tarif.harga.max.length":
      "Nilai harga di sub sub detail skema tarif di detail adjustment invoice melebihi batas maksimal",
    "invoice.otomatis.adj.sub.sub.detail.skema.tarif.harga.min.length":
      "Nilai harga di sub sub detail skema tarif di detail adjustment invoice melebihi batas minimal",
    "invoice.otomatis.adj.sub.sub.detail.skema.tarif.harga.required":
      "Nilai harga di sub sub detail skema tarif di detail adjustment invoice harus diisi",
    "invoice.otomatis.adj.sub.sub.detail.skema.tarif.jnstrf.max.length":
      "Jenis tarif di sub sub detail skema tarif di detail adjustment invoice melebihi batas maksimal",
    "invoice.otomatis.adj.sub.sub.detail.skema.tarif.jnstrf.required":
      "Jenis tarif di sub sub detail skema tarif di detail adjustment invoice harus diisi",
    "invoice.otomatis.adj.sub.sub.detail.skema.tarif.jumlah.max.length":
      "Jumlah di sub sub detail skema tarif di detail adjustment invoice melebihi batas maksimal",
    "invoice.otomatis.adj.sub.sub.detail.skema.tarif.jumlah.min.length":
      "Jumlah di sub sub detail skema tarif di detail adjustment invoice melebihi batas minimal",
    "invoice.otomatis.adj.sub.sub.detail.skema.tarif.jumlah.required":
      "Jumlah di sub sub detail skema tarif di detail adjustment invoice harus diisi",
    "invoice.otomatis.adj.sub.sub.detail.skema.tarif.keterangan.max.length":
      "Keterangan di sub sub detail skema tarif di detail adjustment invoice melebihi batas maksimal",
    "invoice.otomatis.adj.sub.sub.detail.skema.tarif.keterangan.required":
      "Keterangan di sub sub detail skema tarif di detail adjustment invoice harus diisi",
    "invoice.otomatis.adj.sub.sub.detail.skema.tarif.netto.max.length":
      "Nilai netto di sub sub detail skema tarif di detail adjustment invoice melebihi batas maksimal",
    "invoice.otomatis.adj.sub.sub.detail.skema.tarif.netto.min.length":
      "Nilai netto di sub sub detail skema tarif di detail adjustment invoice melebihi batas minimal",
    "invoice.otomatis.adj.sub.sub.detail.skema.tarif.netto.required":
      "Nilai netto di sub sub detail skema tarif di detail adjustment invoice harus diisi",
    "invoice.otomatis.adj.sub.sub.detail.skema.tarif.nourut.max.length":
      "Nomor urut di sub sub detail skema tarif di detail adjustment invoice melebihi batas maksimal",
    "invoice.otomatis.adj.sub.sub.detail.skema.tarif.nourut.min.length":
      "Nomor urut di sub sub detail skema tarif di detail adjustment invoice melebihi batas minimal",
    "invoice.otomatis.adj.sub.sub.detail.skema.tarif.nourut.required":
      "Nomor urut di sub sub detail skema tarif di detail adjustment invoice harus diisi",
    "invoice.otomatis.detail.adj.bk":
      "Pelanggaran terhadap business key tabel detail adjustment invoice, nomor urut {{0}}!",
    "invoice.otomatis.detail.adj.bruto.max.length": "Nilai bruto di detail adjustment invoice melebihi batas maksimal",
    "invoice.otomatis.detail.adj.bruto.min.length": "Nilai bruto di detail adjustment invoice melebihi batas minimal",
    "invoice.otomatis.detail.adj.bruto.required": "Nilai bruto di detail adjustment invoice harus diisi",
    "invoice.otomatis.detail.adj.harga.max.length": "Nilai harga di detail adjustment invoice melebihi batas maksimal",
    "invoice.otomatis.detail.adj.harga.min.length": "Nilai harga di detail adjustment invoice melebihi batas minimal",
    "invoice.otomatis.detail.adj.harga.required": "Nilai harga di detail adjustment invoice harus diisi",
    "invoice.otomatis.detail.adj.keterangan.max.length":
      "Keterangan di detail adjustment invoice melebihi batas maksimal",
    "invoice.otomatis.detail.adj.keterangan.required": "Keterangan di detail adjustment invoice harus diisi",
    "invoice.otomatis.detail.adj.netto.max.length": "Nilai netto di detail adjustment invoice melebihi batas maksimal",
    "invoice.otomatis.detail.adj.netto.min.length": "Nilai netto di detail adjustment invoice melebihi batas minimal",
    "invoice.otomatis.detail.adj.netto.required": "Nilai netto di detail adjustment invoice harus diisi",
    "invoice.otomatis.detail.adj.nildisc.max.length":
      "Nilai diskon di detail adjustment invoice melebihi batas maksimal",
    "invoice.otomatis.detail.adj.nildisc.min.length":
      "Nilai diskon di detail adjustment invoice melebihi batas minimal",
    "invoice.otomatis.detail.adj.nildisc.required": "Nilai diskon di detail adjustment invoice harus diisi",
    "invoice.otomatis.detail.adj.nilpctdisc.max.length":
      "Nilai dari prosen diskon di detail adjustment invoice melebihi batas maksimal",
    "invoice.otomatis.detail.adj.nilpctdisc.min.length":
      "Nilai dari prosen diskon di detail adjustment invoice melebihi batas minimal",
    "invoice.otomatis.detail.adj.nilpctdisc.required":
      "Nilai dari prosen diskon di detail adjustment invoice harus diisi",
    "invoice.otomatis.detail.adj.nourut.max.length": "Nomor urut di detail adjustment invoice melebihi batas maksimal",
    "invoice.otomatis.detail.adj.nourut.min.length": "Nomor urut di detail adjustment invoice melebihi batas minimal",
    "invoice.otomatis.detail.adj.nourut.required": "Nomor urut di detail adjustment invoice harus diisi",
    "invoice.otomatis.detail.adj.pctdisc.max.length":
      "Prosen diskon di detail adjustment invoice melebihi batas maksimal",
    "invoice.otomatis.detail.adj.pctdisc.min.length":
      "Prosen diskon di detail adjustment invoice melebihi batas minimal",
    "invoice.otomatis.detail.adj.pctdisc.required": "Prosen diskon di detail adjustment invoice harus diisi",
    "invoice.otomatis.detail.adj.totjumkar.max.length":
      "Total jumlah karyawan di detail adjustment invoice melebihi batas maksimal",
    "invoice.otomatis.detail.adj.totjumkar.min.length":
      "Total jumlah karyawan di detail adjustment invoice melebihi batas minimal",
    "invoice.otomatis.detail.adj.totjumkar.required": "Total jumlah karyawan di detail adjustment invoice harus diisi",
    "invoice.otomatis.sub.detail.diskon.bk":
      "Pelanggaran terhadap business key tabel sub detail diskon di detail invoice hasil proses, nomor urut {{0}}!",
    "invoice.otomatis.sub.detail.diskon.jenis.max.length":
      "Jenis di sub detail diskon di detail invoice hasil proses melebihi batas maksimal",
    "invoice.otomatis.sub.detail.diskon.jenis.required":
      "Jenis di sub detail diskon di detail invoice hasil proses harus diisi",
    "invoice.otomatis.sub.detail.diskon.keterangan.max.length":
      "Keterangan di sub detail diskon di detail invoice hasil proses melebihi batas maksimal",
    "invoice.otomatis.sub.detail.diskon.keterangan.required":
      "Keterangan di sub detail diskon di detail invoice hasil proses harus diisi",
    "invoice.otomatis.sub.detail.diskon.netto.max.length":
      "Nilai netto di sub detail diskon di detail invoice hasil proses melebihi batas maksimal",
    "invoice.otomatis.sub.detail.diskon.netto.min.length":
      "Nilai netto di sub detail diskon di detail invoice hasil proses melebihi batas minimal",
    "invoice.otomatis.sub.detail.diskon.netto.required":
      "Nilai netto di sub detail diskon di detail invoice hasil proses harus diisi",
    "invoice.otomatis.sub.detail.diskon.nildasar.max.length":
      "Nilai dasar di sub detail diskon di detail invoice hasil proses melebihi batas maksimal",
    "invoice.otomatis.sub.detail.diskon.nildasar.min.length":
      "Nilai dasar di sub detail diskon di detail invoice hasil proses melebihi batas minimal",
    "invoice.otomatis.sub.detail.diskon.nildasar.required":
      "Nilai dasar di sub detail diskon di detail invoice hasil proses harus diisi",
    "invoice.otomatis.sub.detail.diskon.nildisc.max.length":
      "Nilai diskon di sub detail diskon di detail invoice hasil proses melebihi batas maksimal",
    "invoice.otomatis.sub.detail.diskon.nildisc.min.length":
      "Nilai diskon di sub detail diskon di detail invoice hasil proses melebihi batas minimal",
    "invoice.otomatis.sub.detail.diskon.nildisc.required":
      "Nilai diskon di sub detail diskon di detail invoice hasil proses harus diisi",
    "invoice.otomatis.sub.detail.diskon.nourut.max.length":
      "Nomor urut di sub detail diskon di detail invoice hasil proses melebihi batas maksimal",
    "invoice.otomatis.sub.detail.diskon.nourut.min.length":
      "Nomor urut di sub detail diskon di detail invoice hasil proses melebihi batas minimal",
    "invoice.otomatis.sub.detail.diskon.nourut.required":
      "Nomor urut di sub detail diskon di detail invoice hasil proses harus diisi",
    "invoice.otomatis.sub.detail.diskon.pctdisc.max.length":
      "Prosen diskon di sub detail diskon di detail invoice hasil proses melebihi batas maksimal",
    "invoice.otomatis.sub.detail.diskon.pctdisc.min.length":
      "Prosen diskon di sub detail diskon di detail invoice hasil proses melebihi batas minimal",
    "invoice.otomatis.sub.detail.diskon.pctdisc.required":
      "Prosen diskon di sub detail diskon di detail invoice hasil proses harus diisi",
    "invoice.otomatis.sub.detail.skema.tarif.bk":
      "Pelanggaran terhadap business key tabel sub detail skema tarif di detail invoice hasil proses, nomor urut {{0}}!",
    "invoice.otomatis.sub.detail.skema.tarif.bruto.max.length":
      "Nilai bruto di sub detail skema tarif di detail invoice hasil proses melebihi batas maksimal",
    "invoice.otomatis.sub.detail.skema.tarif.bruto.min.length":
      "Nilai bruto di sub detail skema tarif di detail invoice hasil proses melebihi batas minimal",
    "invoice.otomatis.sub.detail.skema.tarif.bruto.required":
      "Nilai bruto di sub detail skema tarif di detail invoice hasil proses harus diisi",
    "invoice.otomatis.sub.detail.skema.tarif.harga.max.length":
      "Nilai harga di sub detail skema tarif di detail invoice hasil proses melebihi batas maksimal",
    "invoice.otomatis.sub.detail.skema.tarif.harga.min.length":
      "Nilai harga di sub detail skema tarif di detail invoice hasil proses melebihi batas minimal",
    "invoice.otomatis.sub.detail.skema.tarif.harga.required":
      "Nilai harga di sub detail skema tarif di detail invoice hasil proses harus diisi",
    "invoice.otomatis.sub.detail.skema.tarif.jnstrf.max.length":
      "Jenis tarif di sub detail skema tarif di detail invoice hasil proses melebihi batas maksimal",
    "invoice.otomatis.sub.detail.skema.tarif.jnstrf.required":
      "Jenis tarif di sub detail skema tarif di detail invoice hasil proses harus diisi",
    "invoice.otomatis.sub.detail.skema.tarif.jumlah.max.length":
      "Jumlah di sub detail skema tarif di detail invoice hasil proses melebihi batas maksimal",
    "invoice.otomatis.sub.detail.skema.tarif.jumlah.min.length":
      "Jumlah di sub detail skema tarif di detail invoice hasil proses melebihi batas minimal",
    "invoice.otomatis.sub.detail.skema.tarif.jumlah.required":
      "Jumlah di sub detail skema tarif di detail invoice hasil proses harus diisi",
    "invoice.otomatis.sub.detail.skema.tarif.keterangan.max.length":
      "Keterangan di sub detail skema tarif di detail invoice hasil proses melebihi batas maksimal",
    "invoice.otomatis.sub.detail.skema.tarif.keterangan.required":
      "Keterangan di sub detail skema tarif di detail invoice hasil proses harus diisi",
    "invoice.otomatis.sub.detail.skema.tarif.netto.max.length":
      "Nilai netto di sub detail skema tarif di detail invoice hasil proses melebihi batas maksimal",
    "invoice.otomatis.sub.detail.skema.tarif.netto.min.length":
      "Nilai netto di sub detail skema tarif di detail invoice hasil proses melebihi batas minimal",
    "invoice.otomatis.sub.detail.skema.tarif.netto.required":
      "Nilai netto di sub detail skema tarif di detail invoice hasil proses harus diisi",
    "invoice.otomatis.sub.detail.skema.tarif.nourut.max.length":
      "Nomor urut di sub detail skema tarif di detail invoice hasil proses melebihi batas maksimal",
    "invoice.otomatis.sub.detail.skema.tarif.nourut.min.length":
      "Nomor urut di sub detail skema tarif di detail invoice hasil proses melebihi batas minimal",
    "invoice.otomatis.sub.detail.skema.tarif.nourut.required":
      "Nomor urut di sub detail skema tarif di detail invoice hasil proses harus diisi",
    "invoicemanual.detail.hsl.pro.bk":
      "Pelanggaran terhadap business key tabel detail invoice hasil proses, nomor urut {{0}}!",
    "invoicemanual.detail.hsl.pro.bruto.max.length":
      "Nilai bruto di detail invoice hasil proses melebihi batas maksimal",
    "invoicemanual.detail.hsl.pro.bruto.min.length":
      "Nilai bruto di detail invoice hasil proses melebihi batas minimal",
    "invoicemanual.detail.hsl.pro.bruto.required": "Nilai bruto di detail invoice hasil proses harus diisi",
    "invoicemanual.detail.hsl.pro.harga.max.length":
      "Nilai harga di detail invoice hasil proses melebihi batas maksimal",
    "invoicemanual.detail.hsl.pro.harga.min.length":
      "Nilai harga di detail invoice hasil proses melebihi batas minimal",
    "invoicemanual.detail.hsl.pro.harga.required": "Nilai harga di detail invoice hasil proses harus diisi",
    "invoicemanual.detail.hsl.pro.jumkar.max.length":
      "Jumlah karyawan di detail invoice hasil proses melebihi batas maksimal",
    "invoicemanual.detail.hsl.pro.jumkar.min.length":
      "Jumlah karyawan di detail invoice hasil proses melebihi batas minimal",
    "invoicemanual.detail.hsl.pro.jumkar.required": "Jumlah karyawan di detail invoice hasil proses harus diisi",
    "invoicemanual.detail.hsl.pro.jumnkar.max.length":
      "Jumlah non karyawan di detail invoice hasil proses melebihi batas maksimal",
    "invoicemanual.detail.hsl.pro.jumnkar.min.length":
      "Jumlah non karyawan di detail invoice hasil proses melebihi batas minimal",
    "invoicemanual.detail.hsl.pro.jumnkar.required": "Jumlah non karyawan di detail invoice hasil proses harus diisi",
    "invoicemanual.detail.hsl.pro.keterangan.max.length":
      "Keterangan di detail invoice hasil proses melebihi batas maksimal",
    "invoicemanual.detail.hsl.pro.keterangan.required": "Keterangan di detail invoice hasil proses harus diisi",
    "invoicemanual.detail.hsl.pro.netto.max.length":
      "Nilai netto di detail invoice hasil proses melebihi batas maksimal",
    "invoicemanual.detail.hsl.pro.netto.min.length":
      "Nilai netto di detail invoice hasil proses melebihi batas minimal",
    "invoicemanual.detail.hsl.pro.netto.required": "Nilai netto di detail invoice hasil proses harus diisi",
    "invoicemanual.detail.hsl.pro.nildisc.max.length":
      "Nilai diskon di detail invoice hasil proses melebihi batas maksimal",
    "invoicemanual.detail.hsl.pro.nildisc.min.length":
      "Nilai diskon di detail invoice hasil proses melebihi batas minimal",
    "invoicemanual.detail.hsl.pro.nildisc.required": "Nilai diskon di detail invoice hasil proses harus diisi",
    "invoicemanual.detail.hsl.pro.nilpctdisc.max.length":
      "Nilai diskon prosen di detail invoice hasil proses melebihi batas maksimal",
    "invoicemanual.detail.hsl.pro.nilpctdisc.min.length":
      "Nilai diskon prosen di detail invoice hasil proses melebihi batas minimal",
    "invoicemanual.detail.hsl.pro.nilpctdisc.required":
      "Nilai diskon prosen di detail invoice hasil proses harus diisi",
    "invoicemanual.detail.hsl.pro.nourut.max.length":
      "Nomor urut di detail invoice hasil proses melebihi batas maksimal",
    "invoicemanual.detail.hsl.pro.nourut.min.length":
      "Nomor urut di detail invoice hasil proses melebihi batas minimal",
    "invoicemanual.detail.hsl.pro.nourut.required": "Nomor urut di detail invoice hasil proses harus diisi",
    "invoicemanual.detail.hsl.pro.pctdisc.max.length":
      "Proses diskon di detail invoice hasil proses melebihi batas maksimal",
    "invoicemanual.detail.hsl.pro.pctdisc.min.length":
      "Proses diskon di detail invoice hasil proses melebihi batas minimal",
    "invoicemanual.detail.hsl.pro.pctdisc.required": "Proses diskon di detail invoice hasil proses harus diisi",
    "invoicemanual.detail.hsl.pro.pengali.max.length": "Pengali di detail invoice hasil proses melebihi batas maksimal",
    "invoicemanual.detail.hsl.pro.pengali.min.length": "Pengali di detail invoice hasil proses melebihi batas minimal",
    "invoicemanual.detail.hsl.pro.pengali.required": "Pengali di detail invoice hasil proses harus diisi",
    "invoicemanual.detail.hsl.pro.totjumkar.max.length":
      "Total jumlah karyawan di detail invoice hasil proses melebihi batas maksimal",
    "invoicemanual.detail.hsl.pro.totjumkar.min.length":
      "Total jumlah karyawan di detail invoice hasil proses melebihi batas minimal",
    "invoicemanual.detail.hsl.pro.totjumkar.required":
      "Total jumlah karyawan di detail invoice hasil proses harus diisi",
    "invoicemanual.detail.implementasi.bk":
      "Pelanggaran terhadap business key tabel detail implementasi invoice, nomor urut {{0}}!",
    "invoicemanual.detail.implementasi.bruto.required": "Nilai bruto di detail implementasi invoice harus diisi",
    "invoicemanual.detail.implementasi.harga.max.length":
      "Nilai harga di detail implementasi invoice melebihi batas maksimal",
    "invoicemanual.detail.implementasi.harga.min.length":
      "Nilai harga di detail implementasi invoice melebihi batas minimal",
    "invoicemanual.detail.implementasi.harga.required": "Nilai harga di detail implementasi invoice harus diisi",
    "invoicemanual.detail.implementasi.jumlah.max.length":
      "Jumlah di detail implementasi invoice melebihi batas maksimal",
    "invoicemanual.detail.implementasi.jumlah.min.length":
      "Jumlah di detail implementasi invoice melebihi batas minimal",
    "invoicemanual.detail.implementasi.jumlah.required": "Jumlah di detail implementasi invoice harus diisi",
    "invoicemanual.detail.implementasi.keterangan.max.length":
      "Keterangan di detail implementasi invoice melebihi batas maksimal",
    "invoicemanual.detail.implementasi.keterangan.required": "Keterangan di detail implementasi invoice harus diisi",
    "invoicemanual.detail.implementasi.netto.max.length":
      "Nilai netto di detail implementasi invoice melebihi batas maksimal",
    "invoicemanual.detail.implementasi.netto.min.length":
      "Nilai netto di detail implementasi invoice melebihi batas minimal",
    "invoicemanual.detail.implementasi.netto.required": "Nilai netto di detail implementasi invoice harus diisi",
    "invoicemanual.detail.implementasi.nildisc.max.length":
      "Nilai diskon di detail implementasi invoice melebihi batas maksimal",
    "invoicemanual.detail.implementasi.nildisc.min.length":
      "Nilai diskon di detail implementasi invoice melebihi batas minimal",
    "invoicemanual.detail.implementasi.nildisc.required": "Nilai diskon di detail implementasi invoice harus diisi",
    "invoicemanual.detail.implementasi.nilpctdisc.max.length":
      "Nilai diskon prosen di detail implementasi invoice melebihi batas maksimal",
    "invoicemanual.detail.implementasi.nilpctdisc.min.length":
      "Nilai diskon prosen di detail implementasi invoice melebihi batas minimal",
    "invoicemanual.detail.implementasi.nilpctdisc.required":
      "Nilai diskon prosen di detail implementasi invoice harus diisi",
    "invoicemanual.detail.implementasi.nourut.max.length":
      "Nomor urut di detail implementasi invoice melebihi batas maksimal",
    "invoicemanual.detail.implementasi.nourut.min.length":
      "Nomor urut di detail implementasi invoice melebihi batas minimal",
    "invoicemanual.detail.implementasi.nourut.required": "Nomor urut di detail implementasi invoice harus diisi",
    "invoicemanual.detail.implementasi.pctdisc.max.length":
      "Prosen diskon di detail implementasi invoice melebihi batas maksimal",
    "invoicemanual.detail.implementasi.pctdisc.min.length":
      "Prosen diskon di detail implementasi invoice melebihi batas minimal",
    "invoicemanual.detail.implementasi.pctdisc.required": "Prosen diskon di detail implementasi invoice harus diisi",
    "invoicemanual.detail.implementasi.total.required": "Nilai total di detail implementasi invoice harus diisi",
    "invoicemanual.detail.initial.bk":
      "Pelanggaran terhadap business key tabel detail initial invoice, nomor urut {{0}}!",
    "invoicemanual.detail.initial.bruto.max.length": "Nilai bruto di detail initial invoice melebihi batas maksimal",
    "invoicemanual.detail.initial.bruto.min.length": "Nilai bruto di detail initial invoice melebihi batas minimal",
    "invoicemanual.detail.initial.bruto.required": "Nilai bruto di detail initial invoice harus diisi",
    "invoicemanual.detail.initial.harga.max.length": "Nilai harga di detail initial invoice melebihi batas maksimal",
    "invoicemanual.detail.initial.harga.min.length": "Nilai harga di detail initial invoice melebihi batas minimal",
    "invoicemanual.detail.initial.harga.required": "Nilai harga di detail initial invoice harus diisi",
    "invoicemanual.detail.initial.jumbul.max.length":
      "Jumlah unit deposit di detail initial invoice melebihi batas maksimal",
    "invoicemanual.detail.initial.jumbul.min.length":
      "Jumlah unit deposit di detail initial invoice melebihi batas minimal",
    "invoicemanual.detail.initial.jumbul.required": "Jumlah unit deposit di detail initial invoice harus diisi",
    "invoicemanual.detail.initial.jumkar.max.length":
      "Jumlah karyawan di detail initial invoice melebihi batas maksimal",
    "invoicemanual.detail.initial.jumkar.min.length":
      "Jumlah karyawan di detail initial invoice melebihi batas minimal",
    "invoicemanual.detail.initial.jumkar.required": "Jumlah karyawan di detail initial invoice harus diisi",
    "invoicemanual.detail.initial.jumsiklus.required": "Jumlah siklus di detail initial invoice harus diisi",
    "invoicemanual.detail.initial.keterangan.max.length":
      "Keterangan di detail initial invoice melebihi batas maksimal",
    "invoicemanual.detail.initial.keterangan.required": "Keterangan di detail initial invoice harus diisi",
    "invoicemanual.detail.initial.netto.max.length": "Nilai netto di detail initial invoice melebihi batas maksimal",
    "invoicemanual.detail.initial.netto.min.length": "Nilai netto di detail initial invoice melebihi batas minimal",
    "invoicemanual.detail.initial.netto.required": "Nilai netto di detail initial invoice harus diisi",
    "invoicemanual.detail.initial.nildisc.max.length": "Nilai diskon di detail initial invoice melebihi batas maksimal",
    "invoicemanual.detail.initial.nildisc.min.length": "Nilai diskon di detail initial invoice melebihi batas minimal",
    "invoicemanual.detail.initial.nildisc.required": "Nilai diskon di detail initial invoice harus diisi",
    "invoicemanual.detail.initial.nilpctdisc.max.length":
      "Nilai diskon prosen di detail initial invoice melebihi batas maksimal",
    "invoicemanual.detail.initial.nilpctdisc.min.length":
      "Nilai diskon prosen di detail initial invoice melebihi batas minimal",
    "invoicemanual.detail.initial.nilpctdisc.required": "Nilai diskon prosen di detail initial invoice harus diisi",
    "invoicemanual.detail.initial.nourut.max.length": "Nomor urut di detail initial invoice melebihi batas maksimal",
    "invoicemanual.detail.initial.nourut.min.length": "Nomor urut di detail initial invoice melebihi batas minimal",
    "invoicemanual.detail.initial.nourut.required": "Nomor urut di detail initial invoice harus diisi",
    "invoicemanual.detail.initial.pctdisc.max.length":
      "Prosen diskon di detail initial invoice melebihi batas maksimal",
    "invoicemanual.detail.initial.pctdisc.min.length": "Prosen diskon di detail initial invoice melebihi batas minimal",
    "invoicemanual.detail.initial.pctdisc.required": "Prosen diskon di detail initial invoice harus diisi",
    "invoicemanual.detail.initial.pengali.max.length":
      "Pengali bruto di detail initial invoice melebihi batas maksimal",
    "invoicemanual.detail.initial.pengali.min.length": "Pengali bruto di detail initial invoice melebihi batas minimal",
    "invoicemanual.detail.initial.pengali.required": "Pengali bruto di detail initial invoice harus diisi",
    "invoicemanual.detail.initial.satsiklus.max.length":
      "Satuan siklus di detail initial invoice melebihi batas maksimal",
    "invoicemanual.detail.initial.satsiklus.required": "Satuan siklus di detail initial invoice harus diisi",
    "invoicemanual.detail.lainlain.harga.min.length": "Nilai harga di detail lain-lain invoice melebihi batas minimal",
    "invoicemanual.detail.lainlain.harga.required": "Nilai harga di detail lain-lain invoice harus diisi",
    "invoicemanual.detail.lainlain.jnstrf.required": "Jenis tarif di detail lain-lain invoice harus diisi",
    "invoicemanual.detail.lainlain.keterangan.max.length":
      "Keterangan di detail lain-lain invoice melebihi batas maksimal",
    "invoicemanual.detail.lainlain.netto.min.length": "Nilai netto di detail lain-lain invoice melebihi batas minimal",
    "invoicemanual.detail.lainlain.netto.required": "Nilai netto di detail lain-lain invoice harus diisi",
    "invoicemanual.detail.lainlain.nildisc.min.length":
      "Nilai diskon di detail lain-lain invoice melebihi batas minimal",
    "invoicemanual.detail.lainlain.nildisc.required": "Nilai diskon di detail lain-lain invoice harus diisi",
    "invoicemanual.detail.lainlain.nilpctdisc.min.length":
      "Nilai diskon prosen di detail lain-lain invoice melebihi batas minimal",
    "invoicemanual.detail.lainlain.nilpctdisc.required": "Nilai diskon prosen di detail lain-lain invoice harus diisi",
    "invoicemanual.detail.lainlain.nourut.max.length": "Nomor urut di detail lain-lain invoice melebihi batas maksimal",
    "invoicemanual.detail.lainlain.nourut.min.length": "Nomor urut di detail lain-lain invoice melebihi batas minimal",
    "invoicemanual.detail.lainlain.nourut.required": "Nomor urut di detail lain-lain invoice harus diisi",
    "invoicemanual.detail.lainlain.pctdisc.min.length":
      "Prosen diskon di detail lain-lain invoice melebihi batas minimal",
    "invoicemanual.detail.lainlain.pctdisc.required": "Prosen diskon di detail lain-lain invoice harus diisi",
    "invoicemanual.detail.training.bk":
      "Pelanggaran terhadap business key tabel detail training invoice, nomor urut {{0}}!",
    "invoicemanual.detail.training.bruto.required": "Nilai bruto di detail training invoice harus diisi",
    "invoicemanual.detail.training.harga.max.length": "Nilai harga di detail training invoice melebihi batas maksimal",
    "invoicemanual.detail.training.harga.min.length": "Nilai harga di detail training invoice melebihi batas minimal",
    "invoicemanual.detail.training.harga.required": "Nilai harga di detail training invoice harus diisi",
    "invoicemanual.detail.training.jumlah.max.length": "Jumlah di detail training invoice melebihi batas maksimal",
    "invoicemanual.detail.training.jumlah.min.length": "Jumlah di detail training invoice melebihi batas minimal",
    "invoicemanual.detail.training.jumlah.required": "Jumlah di detail training invoice harus diisi",
    "invoicemanual.detail.training.keterangan.max.length":
      "Keterangan di detail training invoice melebihi batas maksimal",
    "invoicemanual.detail.training.keterangan.required": "Keterangan di detail training invoice harus diisi",
    "invoicemanual.detail.training.netto.max.length": "Netto di detail training invoice melebihi batas maksimal",
    "invoicemanual.detail.training.netto.min.length": "Netto di detail training invoice melebihi batas minimal",
    "invoicemanual.detail.training.netto.required": "Netto di detail training invoice harus diisi",
    "invoicemanual.detail.training.nildisc.max.length":
      "Nilai diskon di detail training invoice melebihi batas maksimal",
    "invoicemanual.detail.training.nildisc.min.length":
      "Nilai diskon di detail training invoice melebihi batas minimal",
    "invoicemanual.detail.training.nildisc.required": "Nilai diskon di detail training invoice harus diisi",
    "invoicemanual.detail.training.nilpctdisc.max.length":
      "Nilai diskon prosen di detail training invoice melebihi batas maksimal",
    "invoicemanual.detail.training.nilpctdisc.min.length":
      "Nilai diskon prosen di detail training invoice melebihi batas minimal",
    "invoicemanual.detail.training.nilpctdisc.required": "Nilai diskon prosen di detail training invoice harus diisi",
    "invoicemanual.detail.training.nourut.max.length": "Nomor urut di detail training invoice melebihi batas maksimal",
    "invoicemanual.detail.training.nourut.min.length": "Nomor urut di detail training invoice melebihi batas minimal",
    "invoicemanual.detail.training.nourut.required": "Nomor urut di detail training invoice harus diisi",
    "invoicemanual.detail.training.pctdisc.max.length":
      "Prosen diskon di detail training invoice melebihi batas maksimal",
    "invoicemanual.detail.training.pctdisc.min.length":
      "Prosen diskon di detail training invoice melebihi batas minimal",
    "invoicemanual.detail.training.pctdisc.required": "Prosen diskon di detail training invoice harus diisi",
    "invoicemanual.detail.training.total.required": "Nilai total di detail training invoice harus diisi",
    "invoicemanual.header.alamat.max.length": "Alamat melebihi batas maksimal",
    "invoicemanual.header.alamat.required": "Alamat harus diisi",
    "invoicemanual.header.bk": "Pelanggaran terhadap business key tabel header invoice!",
    "invoicemanual.header.bruto.max.length": "Nilai bruto melebihi batas maksimal",
    "invoicemanual.header.bruto.min.length": "Nilai bruto melebihi batas minimal",
    "invoicemanual.header.bruto.required": "Nilai bruto harus diisi",
    "invoicemanual.header.depused.max.length": "Nilai deposit digunakan melebihi batas maksimal",
    "invoicemanual.header.depused.min.length": "Nilai deposit digunakan melebihi batas minimal",
    "invoicemanual.header.depused.required": "Nilai deposit digunakan harus diisi",
    "invoicemanual.header.dpp.max.length": "Nilai DPP melebihi batas maksimal",
    "invoicemanual.header.dpp.min.length": "Nilai DPP melebihi batas minimal",
    "invoicemanual.header.dpp.required": "Nilai DPP harus diisi",
    "invoicemanual.header.email.max.length": "Alamat email melebihi batas maksimal",
    "invoicemanual.header.email.required": "Alamat email harus diisi",
    "invoicemanual.header.fltodep.max.length": "Flag deposit melebihi batas maksimal",
    "invoicemanual.header.fltodep.required": "Flag deposit harus diisi",
    "invoicemanual.header.nama.max.length": "Nama ditagih melebihi batas maksimal",
    "invoicemanual.header.nama.required": "Nama ditagih harus diisi",
    "invoicemanual.header.netto.max.length": "Nilai netto melebihi batas maksimal",
    "invoicemanual.header.netto.min.length": "Nilai netto melebihi batas minimal",
    "invoicemanual.header.netto.required": "Nilai netto harus diisi",
    "invoicemanual.header.nildep.max.length": "Nilai deposit melebihi batas maksimal",
    "invoicemanual.header.nildep.min.length": "Nilai deposit melebihi batas minimal",
    "invoicemanual.header.nildis.max.length": "Nilai diskon melebihi batas maksimal",
    "invoicemanual.header.nildis.min.length": "Nilai diskon melebihi batas minimal",
    "invoicemanual.header.nmcust.max.length": "Nama customer melebihi batas maksimal",
    "invoicemanual.header.nmcust.required": "Nama customer harus diisi",
    "invoicemanual.header.nomor.max.length": "Nomor invoice melebihi batas maksimal",
    "invoicemanual.header.nomor.required": "Nomor invoice harus diisi",
    "invoicemanual.header.pctdis.max.length": "Prosen diskon melebihi batas maksimal",
    "invoicemanual.header.pctdis.min.length": "Prosen diskon melebihi batas minimal",
    "invoicemanual.header.ppn.max.length": "Nilai PPN melebihi batas maksimal",
    "invoicemanual.header.ppn.min.length": "Nilai PPN melebihi batas minimal",
    "invoicemanual.header.ppn.required": "Nilai PPN harus diisi",
    "invoicemanual.header.status.max.length": "Status invoice melebihi batas maksimal",
    "invoicemanual.header.status.required": "Status invoice harus diisi",
    "invoicemanual.header.tgjtemp.max.length": "Tanggal jatuh tempo melebihi batas maksimal",
    "invoicemanual.header.tgjtemp.required": "Tanggal jatuh tempo harus diisi",
    "invoicemanual.header.tgtrn.max.length": "Tanggal transaksi melebihi batas maksimal",
    "invoicemanual.header.tgtrn.required": "Tanggal transaksi harus diisi",
    "invoicemanual.header.total.max.length": "Nilai total melebihi batas maksimal",
    "invoicemanual.header.total.min.length": "Nilai total melebihi batas minimal",
    "invoicemanual.header.total.required": "Nilai total harus diisi",
    "invoicemanual.header.totbefdisc.max.length": "Nilai total sebelum diskon melebihi batas maksimal",
    "invoicemanual.header.totbefdisc.min.length": "Nilai total sebelum diskon melebihi batas minimal",
    "invoicemanual.header.totbefdisc.required": "Nilai total sebelum diskon harus diisi",
    "invoicemanual.header.totdisc.max.length": "Nilai total diskon melebihi batas maksimal",
    "invoicemanual.header.totdisc.min.length": "Nilai total diskon melebihi batas minimal",
    "invoicemanual.header.totdisc.required": "Nilai total diskon harus diisi",
    "invoicemanual.komplit.no.data": "Tidak ada data",
    "invoicemanual.komplit.no.detail": "Tidak ada detail",
    "invoicemanual.komplit.saldodeposit.not.exists": "Saldo deposit tidak ditemukan",
    "invoicemanual.komplit.saldodeposit.tidak.cukup": "Saldo deposit tidak mencukupi",
    "invoicemanual.lainlain.detail.bk":
      "Pelanggaran terhadap business key tabel detail lain-lain invoice, nomor urut {{0}}!",
    "invoicemanual.lainlain.harga.max.length": "Nilai harga di detail lain-lain invoice melebihi batas maksimal",
    "invoicemanual.lainlain.netto.max.length": "Nilai netto di detail lain-lain invoice melebihi batas maksimal",
    "invoicemanual.lainlain.nildisc.max.length": "Nilai diskon di detail lain-lain invoice melebihi batas maksimal",
    "invoicemanual.lainlain.nilpctdisc.max.length":
      "Nilai diskon prosen di detail lain-lain invoice melebihi batas maksimal",
    "invoicemanual.lainlain.pctdisc.max.length": "Prosen diskon di detail lain-lain invoice melebihi batas maksimal",
    "invoicemanual.sub.detail.diskon.failed": "Penambahan sub detail diskon di detail initial gagal dilakukan",
    "invoicemanual.sub.detail.diskon.jenis.max.length":
      "Jenis di sub detail diskon di detail initial melebihi batas maksimal",
    "invoicemanual.sub.detail.diskon.jenis.required": "Jenis di sub detail diskon di detail initial harus diisi",
    "invoicemanual.sub.detail.diskon.keterangan.max.length":
      "Keterangan di sub detail diskon di detail initial melebihi batas maksimal",
    "invoicemanual.sub.detail.diskon.keterangan.required":
      "Keterangan di sub detail diskon di detail initial harus diisi",
    "invoicemanual.sub.detail.diskon.netto.max.length":
      "Nilai netto di sub detail diskon di detail initial melebihi batas maksimal",
    "invoicemanual.sub.detail.diskon.netto.min.length":
      "Nilai netto di sub detail diskon di detail initial melebihi batas minimal",
    "invoicemanual.sub.detail.diskon.netto.required": "Nilai netto di sub detail diskon di detail initial harus diisi",
    "invoicemanual.sub.detail.diskon.nildasar.max.length":
      "Nilai dasar di sub detail diskon di detail initial melebihi batas maksimal",
    "invoicemanual.sub.detail.diskon.nildasar.min.length":
      "Nilai dasar di sub detail diskon di detail initial melebihi batas minimal",
    "invoicemanual.sub.detail.diskon.nildasar.required":
      "Nilai dasar di sub detail diskon di detail initial harus diisi",
    "invoicemanual.sub.detail.diskon.nildisc.max.length":
      "Nilai diskon di sub detail diskon di detail initial melebihi batas maksimal",
    "invoicemanual.sub.detail.diskon.nildisc.min.length":
      "Nilai diskon di sub detail diskon di detail initial melebihi batas minimal",
    "invoicemanual.sub.detail.diskon.nildisc.required":
      "Nilai diskon di sub detail diskon di detail initial harus diisi",
    "invoicemanual.sub.detail.diskon.nourut.max.length":
      "Nomor urut di sub detail diskon di detail initial melebihi batas maksimal",
    "invoicemanual.sub.detail.diskon.nourut.min.length":
      "Nomor urut di sub detail diskon di detail initial melebihi batas minimal",
    "invoicemanual.sub.detail.diskon.nourut.required": "Nomor urut di sub detail diskon di detail initial harus diisi",
    "invoicemanual.sub.detail.diskon.pctdisc.max.length":
      "Prosen diskon di sub detail diskon di detail initial melebihi batas maksimal",
    "invoicemanual.sub.detail.diskon.pctdisc.min.length":
      "Prosen diskon di sub detail diskon di detail initial melebihi batas minimal",
    "invoicemanual.sub.detail.diskon.pctdisc.required":
      "Prosen diskon di sub detail diskon di detail initial harus diisi",
    "invoicemanual.sub.detail.skema.tarif.bk":
      "Pelanggaran terhadap business key tabel sub detail skema tarif di detail initial, nomor urut {{0}}!",
    "invoicemanual.sub.detail.skema.tarif.bruto.max.length":
      "Nilai bruto di sub detail skema tarif di detail initial melebihi batas maksimal",
    "invoicemanual.sub.detail.skema.tarif.bruto.min.length":
      "Nilai bruto di sub detail skema tarif di detail initial melebihi batas minimal",
    "invoicemanual.sub.detail.skema.tarif.bruto.required":
      "Nilai bruto di sub detail skema tarif di detail initial harus diisi",
    "invoicemanual.sub.detail.skema.tarif.failed":
      "Penambahan sub detail skema tarif di detail initial gagal dilakukan",
    "invoicemanual.sub.detail.skema.tarif.harga.max.length":
      "Nilai harga di sub detail skema tarif di detail initial melebihi batas maksimal",
    "invoicemanual.sub.detail.skema.tarif.harga.min.length":
      "Nilai harga di sub detail skema tarif di detail initial melebihi batas minimal",
    "invoicemanual.sub.detail.skema.tarif.harga.required":
      "Nilai harga di sub detail skema tarif di detail initial harus diisi",
    "invoicemanual.sub.detail.skema.tarif.jnstrf.max.length":
      "Jenis tarif di sub detail skema tarif di detail initial melebihi batas maksimal",
    "invoicemanual.sub.detail.skema.tarif.jnstrf.required":
      "Jenis tarif di sub detail skema tarif di detail initial harus diisi",
    "invoicemanual.sub.detail.skema.tarif.jumlah.max.length":
      "Jumlah di sub detail skema tarif di detail initial melebihi batas maksimal",
    "invoicemanual.sub.detail.skema.tarif.jumlah.min.length":
      "Jumlah di sub detail skema tarif di detail initial melebihi batas minimal",
    "invoicemanual.sub.detail.skema.tarif.jumlah.required":
      "Jumlah di sub detail skema tarif di detail initial harus diisi",
    "invoicemanual.sub.detail.skema.tarif.keterangan.max.length":
      "Keterangan di sub detail skema tarif di detail initial melebihi batas maksimal",
    "invoicemanual.sub.detail.skema.tarif.keterangan.required":
      "Keterangan di sub detail skema tarif di detail initial harus diisi",
    "invoicemanual.sub.detail.skema.tarif.netto.max.length":
      "Nilai netto di sub detail skema tarif di detail initial melebihi batas maksimal",
    "invoicemanual.sub.detail.skema.tarif.netto.min.length":
      "Nilai netto di sub detail skema tarif di detail initial melebihi batas minimal",
    "invoicemanual.sub.detail.skema.tarif.netto.required":
      "Nilai netto di sub detail skema tarif di detail initial harus diisi",
    "invoicemanual.sub.detail.skema.tarif.nourut.max.length":
      "Nomor urut di sub detail skema tarif di detail initial melebihi batas maksimal",
    "invoicemanual.sub.detail.skema.tarif.nourut.min.length":
      "Nomor urut di sub detail skema tarif di detail initial melebihi batas minimal",
    "invoicemanual.sub.detail.skema.tarif.nourut.required":
      "Nomor urut di sub detail skema tarif di detail initial harus diisi",
    "mapping.customer.npwp.account.max.length": "NPWP di mapping customer tarif melebihi batas maksimal",
    "mapping.customer.produk.account.max.length": "Kode PT di mapping customer tarif melebihi batas maksimal",
    "mapping.customer.produk.account.required": "Kode PT di mapping customer tarif harus diisi",
    "mapping.customer.produk.bk":
      "Pelanggaran terhadap business key tabel mapping customer tarif, Kode PT {{0}}, NPWP {{1}}",
    "mapping.customer.produk.kodekp.max.length":
      "Kode Kelompok Payroll di mapping customer tarif melebihi batas maksimal",
    "mapping.customer.produk.kodekp.required": "Kode Kelompok Payroll di mapping customer tarif harus diisi",
    "mapping.customer.produk.kodept.max.length": "Kode PT di mapping customer tarif melebihi batas maksimal",
    "mapping.customer.produk.kodept.required": "Kode PT di mapping customer tarif harus diisi",
    "mapping.customer.produk.namakp.max.length":
      "Nama Kelompok Payroll di mapping customer tarif melebihi batas maksimal",
    "mapping.customer.produk.namakp.required": "Nama Kelompok Payroll di mapping customer tarif harus diisi",
    "mapping.customer.produk.namapt.max.length": "Nama PT di mapping customer tarif melebihi batas maksimal",
    "mapping.customer.produk.namapt.required": "Nama PT di mapping customer tarif harus diisi",
    "mapping.customer.produk.not.found": "Mapping customer tarif tidak ditemukan",
    "mapping.customer.produk.npwp.required": "NPWP di mapping customer tarif harus diisi",
    "produk.bk": "Pelanggaran terhadap business key tabel master produk, nama : {{0}}!",
    "produk.nama.harusAda": "Nama harus ada",
    "produk.nama.harusDiisi": "Nama harus diisi",
    "produk.nama.max.length": "Nama melebihi batas maksimal",
    "produk.nama.required": "Nama harus diisi",
    "produk.not.active": "Produk tidak aktif",
    "produk.not.found": "Produk tidak ditemukan",
    "produk.tidakAda": "Produk tidak ada",
    "proses.batal.invoice.otomatis.tidak.boleh.nyisip":
      "Proses batal proses invoice tidak dapat menyisip diantara bulan sudah proses",
    "proses.invoice.otomatis.adjustment.bulan.diproses.sudah.hitung": "Proses di bulan yang dimaksud sudah dilakukan",
    "proses.invoice.otomatis.bukan.bulan.terakhir.proses": "Bulan yang dimaksud bukan bulan terakhir proses",
    "proses.invoice.otomatis.bulan.lalu.belum.proses.invoice":
      "Bulan sebelum bulan ini belum dilakukan proses invoice - {{0}}",
    "proses.invoice.otomatis.tahun.bulan.aplikasi.back.dated":
      "Proses tidak boleh dilakukan untuk bulan dimana aplikasi belum digunakan, aplikasi mulai digunakan di Juli 2021",
    "proses.invoice.otomatis.upload.bulan.ini.belum.lengkap": "Data untuk bulan ini belum lengkap diupload",
    "saldo.live.header.bk": "Pelanggaran terhadap business key tabel saldo live customer",
    "saldo.live.header.flproi.max.length": "Flag sudah proses invoice di saldo live customer melebihi batas maksimal",
    "saldo.live.header.tglive.max.length": "Tanggal live di saldo live customer melebihi batas maksimal",
    "saldo.live.header.tgstop.max.length": "Tanggal berhenti di saldo live customer melebihi batas maksimal",
    "saldo.live.header.uplo.max.length": "Flag upload di saldo live customer melebihi batas maksima;",
    "saldodeposit.detail.kurang.bk": "Pelanggaran terhadap business key tabel saldo pengurangan deposit",
    "saldodeposit.detail.kurang.nildepused.max.length":
      "Nilai deposit digunakan di detail pengurangan deposit melebihi batas maksimal",
    "saldodeposit.detail.kurang.nildepused.min.length":
      "Nilai deposit digunakan di detail pengurangan deposit melebihi batas minimal",
    "saldodeposit.detail.kurang.nildepused.required":
      "Nilai deposit digunakan di detail pengurangan deposit harus diisi",
    "saldodeposit.detail.tambah.bk": "Pelanggaran terhadap business key tabel saldo penambahan deposit",
    "saldodeposit.detail.tambah.nildep.max.length":
      "Nilai deposit digunakan di detail penambahan deposit melebihi batas maksimal",
    "saldodeposit.detail.tambah.nildep.min.length":
      "Nilai deposit digunakan di detail penambahan deposit melebihi batas minimal",
    "saldodeposit.detail.tambah.nildep.required": "Nilai deposit digunakan di detail penambahan deposit harus diisi",
    "saldodeposit.header.bk": "Pelanggaran terhadap business key tabel header deposit",
    "saldodeposit.header.nildep.max.length": "Nilai deposit di header deposit melebihi batas maksimal",
    "saldodeposit.header.nildep.min.length": "Nilai deposit di header deposit melebihi batas minimal",
    "saldodeposit.header.nildepused.max.length":
      "Nilai deposit yang digunakan di header deposit melebihi batas maksimal",
    "saldodeposit.header.nildepused.min.length":
      "Nilai deposit yang digunakan di header deposit melebihi batas minimal",
    "skemaharga.detail.bk": "Pelanggaran terhadap business key tabel detail skema harga, nomor urut {{0}}!",
    "skemaharga.detail.harga.max.length": "Nilai harga di detail skema harga melebihi batas maksimal",
    "skemaharga.detail.harga.min.length": "Nilai harga di detail skema harga melebihi batas minimal",
    "skemaharga.detail.max.max.length": "Jumlah batas atas di detail skema harga melebihi batas maksimal",
    "skemaharga.detail.max.min.length": "Jumlah batas atas di detail skema harga melebihi batas minimal",
    "skemaharga.detail.min.max.length": "Jumlah batas bawah di detail skema harga melebihi batas maksimal",
    "skemaharga.detail.min.min.length": "Jumlah batas bawah di detail skema harga melebihi batas minimal",
    "skemaharga.detail.nourut.max.length": "Nomor urut di detail skema harga melebihi batas maksimal",
    "skemaharga.detail.nourut.min.length": "Nomor urut di detail skema harga melebihi batas minimal",
    "skemaharga.header.bk": "Pelanggaran terhadap business key tabel header skema harga, nama : {{0}}!",
    "skemaharga.header.keterangan.max.length": "Keterangan melebihi batas maksimal",
    "skemaharga.header.keterangan.required": "Keterangan harus diisi",
    "skemaharga.header.nama.max.length": "Nama melebihi batas maksimal",
    "skemaharga.header.nama.required": "Nama harus diisi",
    "skemaharga.header.tipe.max.length": "Tipe melebihi batas maksimal",
    "skemaharga.header.tipe.required": "Tipe harus diisi",
    "skemaharga.komplit.error.in.detail": "Ada error di detail",
    "skemaharga.komplit.error.in.subdetail": "Ada error di sub detail",
    "skemaharga.komplit.no.data": "Tidak ada data",
    "skemaharga.komplit.no.detail": "Tidak ada detail",
    "training.harga.max.length": "Nilai harga melebihi batas maksimal",
    "training.harga.min.length": "Nilai harga melebihi batas minimal",
    "training.harga.required": "Nilai harga harus diisi",
    "training.jumdur.max.length": "Jumlah durasi melebihi batas maksimal",
    "training.jumdur.min.length": "Jumlah durasi melebihi batas minimal",
    "training.jumdur.required": "Jumlah durasi harus diisi",
    "training.keterangan.max.length": "Keterangan melebihi batas maksimal",
    "training.keterangan.required": "Keterangan harus diisi",
    "training.nama.max.length": "Nama melebihi batas maksimal",
    "training.nama.required": "Nama harus diisi",
    "training.not.active": "Training tidak aktif",
    "training.not.found": "Training tidak ditemukan",
    "training.tipe.required": "Tipe harus diisi",
    "trx.berhenti.ada.yg.live": "Customer - {{0}}, Produk - {{1}}, belum live",
    "trx.berhenti.belum.live": "Customer - {{0}}, Produk - {{1}}, belum live",
    "trx.berhenti.bk": "Pelanggaran terhadap business key tabel transaksi berhenti",
    "trx.berhenti.keterangan.max.length": "Keterangan melebihi batas maksimal",
    "trx.berhenti.no.data": "Tidak ada data",
    "trx.berhenti.nomor.max.length": "Nomor transaksi melebihi batas maksimal",
    "trx.berhenti.nomor.required": "Nomor transaksi harus diisi",
    "trx.berhenti.not.found": "Data tidak ditemukan",
    "trx.berhenti.sudah.dihentikan": "Customer - {{0}}, Produk - {{1}}, sudah dihentikan",
    "trx.berhenti.tglive.max.length": "Tanggal live melebihi batas maksimal",
    "trx.berhenti.tglive.required": "Tanggal live harus diisi",
    "trx.berhenti.tgtrn.max.length": "Tanggal transaksi melebihi batas maksimal",
    "trx.berhenti.tgtrn.required": "Tanggal transaksi harus diisi",
    "trx.live.bk": "Pelanggaran terhadap business key tabel transaksi live",
    "trx.live.fldata.max.length": "Flag data melebihi batas maksimal",
    "trx.live.fldata.required": "Flag data harus diisi",
    "trx.live.no.data": "Tidak ada data",
    "trx.live.nomor.max.length": "Nomor transaksi melebihi batas maksimal",
    "trx.live.nomor.required": "Nomor transaksi harus diisi",
    "trx.live.not.found": "Data tidak ditemukan",
    "trx.live.sudah.ada.yg.live": "Customer - {{0}}, Produk - {{1}}, sudah live",
    "trx.live.sudah.live": "Customer - {{0}}, Produk - {{1}}, sudah live",
    "trx.live.sudah.proses.invoice": "Customer - {{0}}, Produk - {{1}}, sudah melakukan proses invoice",
    "trx.live.sudah.stop": "Customer - {{0}}, Produk - {{1}}, sudah dihentikan",
    "trx.live.tglive.max.length": "Tanggal live melebihi batas maksimal",
    "trx.live.tglive.required": "Tanggal live harus diisi",
    "trx.live.tgtrn.max.length": "Tanggal transaksi melebihi batas maksimal",
    "trx.live.tgtrn.required": "Tanggal transaksi harus diisi",
    "upload.ambil.token.external.api.failed": "Permintaan token ke API eksternal upload data gagal!",
    "upload.sudah.proses.invoice": "Data sudah diproses invoice ({{0}}-{{1}})",
    "uploaddata.bk": "Pelanggaran terhadap business key tabel upload data!",
    "trx.hold.nomor.required": "Nomor transaksi harus diisi",
    "trx.hold.tgtrn.required": "Tanggal transaksi harus diisi",
    "trx.hold.tghold.required": "Tanggal hold harus diisi",
    "trx.hold.nomor.max.length": "Nomor transaksi melebihi batas maksimal",
    "trx.hold.tgtrn.max.length": "Tanggal transaksi melebihi batas maksimal",
    "trx.hold.tghold.max.length": "Tanggal hold melebihi batas maksimal",
    "trx.hold.keterangan.max.length": "Keterangan melebihi batas maksimal",
    "trx.hold.bk": "Pelanggaran terhadap business key tabel transaksi hold!",
    "trx.unhold.nomor.required": "Nomor transaksi harus diisi",
    "trx.unhold.tgtrn.required": "Tanggal transaksi harus diisi",
    "trx.unhold.tgunhold.required": "Tanggal unhold harus diisi",
    "trx.unhold.nomor.max.length": "Nomor transaksi melebihi batas maksimal",
    "trx.unhold.tgtrn.max.length": "Tanggal transaksi melebihi batas maksimal",
    "trx.unhold.tgunhold.max.length": "Tanggal unhold melebihi batas maksimal",
    "trx.unhold.keterangan.max.length": "Keterangan melebihi batas maksimal",
    "trx.unhold.bk": "Pelanggaran terhadap business key tabel transaksi unhold!",
    "trx.hold.sudah.dihold": "Hold untuk {{0}} - {{1}} sudah pernah dilakukan!",
    "trx.unhold.tidak.sedang.hold": "{{0}} - {{1}} tidak sedang di hold",
    "saldo.live.header.tghold.max.length": "Tanggal hold di saldo live customer melebihi batas maksimal",
    "trx.hold.not.found": "Data tidak ditemukan",

    "admin.upload.akumulasi.bk": "Pelanggaran terhadap business key tabel admin upload akumulasi!",
    "automaticnumbering.number.already.used": "Nomor {{0}} telah digunakan!",
    "customerProdukTarif.detail.grup.akumulasi.bk":
      "Pelanggaran terhadap business key tabel detail grup akumulasi, nomor urut {{0}}!",
    "customerProdukTarif.detail.grup.akumulasi.nourut.max.length":
      "Nomor urut di detail akumulasi melebihi batas maksimal",
    "customerProdukTarif.detail.grup.akumulasi.nourut.min.length":
      "Nomor urut di detail akumulasi melebihi batas minimal",
    "customerProdukTarif.detail.grup.akumulasi.nourut.required": "Nomor urut di detail akumulasi harus diisi",
    "customerProdukTarif.detail.grup.akumulasi.tglstart.max.length": "Tanggal mulai melebihi batas maksimal",
    "customerProdukTarif.detail.grup.akumulasi.tglstop.max.length": "Tanggal berhenti melebihi batas maksimal",
    "customerProdukTarif.komplit.detail.grup.akumulasi.sudah.dipakai": "Detail grup akumulasi sudah digunakan",
    "customerProdukTarif.komplit.grup.akumulasi.sudah.digunakan": "Grup akumulasi sudah digunakan!",
    "customerProdukTarif.komplit.periode.grup.akumulasi.overlap.admin":
      "Periode grup akumulasi overlap dengan data admin akumulasi",
    "grup.akumulasi.bk": "Pelanggaran terhadap businessk ey tabel grup akumulasi, nama {{0}}!",
    "grup.akumulasi.keterangan.max.length": "Keterangan di grup akumulasi melebihi batas maksimal",
    "grup.akumulasi.keterangan.required": "Keterangan di grup akumulasi harus diisi",
    "grup.akumulasi.nama.max.length": "Nama di grup akumulasi melebihi batas maksimal",
    "grup.akumulasi.nama.required": "Nama di grup akumulasi harus diisi",
    "grup.akumulasi.not.active": "Grup akumulasi tidak aktif",
    "grup.akumulasi.not.found": "Grup akumulasi tidak ditemukan",
    "implementasi.satuan.max.length": "Satuan melebihi batas maksimal",
    "implementasi.training.detail.implementasi.bk":
      "Pelanggaran terhadap business key tabel detail implementasi, nomor urut {{0}}!",
    "implementasi.training.detail.implementasi.bruto.max.length":
      "Nilai Bruto di detail implementasi melebihi batas maksimal",
    "implementasi.training.detail.implementasi.bruto.min.length":
      "Nilai Bruto di detail implementasi melebihi batas minimal",
    "implementasi.training.detail.implementasi.bruto.required": "Nilai Bruto di detail implementasi harus diisi",
    "implementasi.training.detail.implementasi.harga.max.length":
      "Nilai Harga di detail implementasi melebihi batas maksimal",
    "implementasi.training.detail.implementasi.harga.min.length":
      "Nilai Harga di detail implementasi melebihi batas minimal",
    "implementasi.training.detail.implementasi.harga.required": "Nilai Harga di detail implementasi harus diisi",
    "implementasi.training.detail.implementasi.jumlah.max.length":
      "Jumlah di detail implementasi melebihi batas maksimal",
    "implementasi.training.detail.implementasi.jumlah.min.length":
      "Jumlah di detail implementasi melebihi batas minimal",
    "implementasi.training.detail.implementasi.jumlah.required": "Jumlah di detail implementasi harus diisi",
    "implementasi.training.detail.implementasi.keterangan.max.length":
      "Keterangan di detail implementasi melebihi batas maksimal",
    "implementasi.training.detail.implementasi.keterangan.required": "Keterangan di detail implementasi harus diisi",
    "implementasi.training.detail.implementasi.netto.max.length":
      "Nilai Netto di detail implementasi melebihi batas maksimal",
    "implementasi.training.detail.implementasi.netto.min.length":
      "Nilai Netto di detail implementasi melebihi batas minimal",
    "implementasi.training.detail.implementasi.netto.required": "Nilai Netto di detail implementasi harus diisi",
    "implementasi.training.detail.implementasi.nildisc.max.length":
      "Nilai Diskon di detail implementasi melebihi batas maksimal",
    "implementasi.training.detail.implementasi.nildisc.min.length":
      "Nilai Diskon di detail implementasi melebihi batas minimal",
    "implementasi.training.detail.implementasi.nildisc.required": "Nilai Diskon di detail implementasi harus diisi",
    "implementasi.training.detail.implementasi.nilpctdisc.max.length":
      "Nilai Prosen Diskon di detail implementasi melebihi batas maksimal",
    "implementasi.training.detail.implementasi.nilpctdisc.min.length":
      "Nilai Prosen Diskon di detail implementasi melebihi batas minimal",
    "implementasi.training.detail.implementasi.nilpctdisc.required":
      "Nilai Prosen Diskon di detail implementasi harus diisi",
    "implementasi.training.detail.implementasi.nourut.max.length":
      "Nomor urut di detail implementasi melebihi batas maksimal",
    "implementasi.training.detail.implementasi.nourut.min.length":
      "Nomor urut di detail implementasi melebihi batas minimal",
    "implementasi.training.detail.implementasi.nourut.required": "Nomor urut di detail implementasi harus diisi",
    "implementasi.training.detail.implementasi.pctdisc.max.length":
      "Prosen Diskon di detail implementasi melebihi batas maksimal",
    "implementasi.training.detail.implementasi.pctdisc.min.length":
      "Prosen Diskon di detail implementasi melebihi batas minimal",
    "implementasi.training.detail.implementasi.pctdisc.required": "Prosen Diskon di detail implementasi harus diisi",
    "implementasi.training.detail.training.bk":
      "Pelanggaran terhadap business key tabel detail training, nomor urut {{0}}!",
    "implementasi.training.detail.training.bruto.required": "Nilai Bruto di detail training harus diisi",
    "implementasi.training.detail.training.harga.max.length": "Nilai Harga di detail training melebihi batas maksimal",
    "implementasi.training.detail.training.harga.min.length": "Nilai Harga di detail training melebihi batas minimal",
    "implementasi.training.detail.training.harga.required": "Nilai Harga di detail training harus diisi",
    "implementasi.training.detail.training.jumlah.max.length": "Jumlah di detail training melebihi batas maksimal",
    "implementasi.training.detail.training.jumlah.min.length": "Jumlah di detail training melebihi batas minimal",
    "implementasi.training.detail.training.jumlah.required": "Jumlah di detail training harus diisi",
    "implementasi.training.detail.training.keterangan.max.length":
      "Keterangan di detail training melebihi batas maksimal",
    "implementasi.training.detail.training.keterangan.required": "Keterangan di detail training melebihi batas minimal",
    "implementasi.training.detail.training.netto.max.length": "Nilai Netto di detail training melebihi batas maksimal",
    "implementasi.training.detail.training.netto.min.length": "Nilai Netto di detail training melebihi batas minimal",
    "implementasi.training.detail.training.netto.required": "Nilai Netto di detail training harus diisi",
    "implementasi.training.detail.training.nildisc.max.length":
      "Nilai Diskon di detail training melebihi batas maksimal",
    "implementasi.training.detail.training.nildisc.min.length":
      "Nilai Diskon di detail training melebihi batas minimal",
    "implementasi.training.detail.training.nildisc.required": "Nilai Diskon di detail training harus diisi",
    "implementasi.training.detail.training.nilpctdisc.max.length":
      "Nilai Prosen Diskon di detail training melebihi batas maksimal",
    "implementasi.training.detail.training.nilpctdisc.min.length":
      "Nilai Prosen Diskon di detail training melebihi batas minimal",
    "implementasi.training.detail.training.nilpctdisc.required": "Nilai Prosen Diskon di detail training harus diisi",
    "implementasi.training.detail.training.nourut.max.length": "Nomor urut di detail training melebihi batas maksimal",
    "implementasi.training.detail.training.nourut.min.length": "Nomor urut di detail training melebihi batas minimal",
    "implementasi.training.detail.training.nourut.required": "Nomor urut di detail training harus diisi",
    "implementasi.training.detail.training.pctdisc.max.length":
      "Prosen Diskon di detail training melebihi batas maksimal",
    "implementasi.training.detail.training.pctdisc.min.length":
      "Prosen Diskon di detail training melebihi batas minimal",
    "implementasi.training.detail.training.pctdisc.required": "Prosen Diskon di detail training harus diisi",
    "implementasi.training.header.bk": "Pelanggaran terhadap business key tabel header implementasi training",
    "implementasi.training.header.bulantgh.max.length": "Bulan Tagih melebihi batas maksimal",
    "implementasi.training.header.bulantgh.required": "Bulan Tagih harus diisi",
    "implementasi.training.header.flproi.max.length": "Flag proses invoice melebihi batas maksimal",
    "implementasi.training.header.keterangan.max.length": "Keterangan melebihi batas maksimal",
    "implementasi.training.header.nomor.max.length": "Nomor melebihi batas maksimal",
    "implementasi.training.header.nomor.required": "Nomor harus diisi",
    "implementasi.training.header.tahuntgh.max.length": "Tahun Tagih melebihi batas maksimal",
    "implementasi.training.header.tahuntgh.required": "Tahun Tagih harus diisi",
    "implementasi.training.header.tgtrn.max.length": "Tanggal transaksi melebihi batas maksimal",
    "implementasi.training.header.tgtrn.required": "Tanggal transaksi harus diisi",
    "implementasi.training.komplit.bulan.tgh.kurang.dari.bulan.proses": "Tahun bulan tagih telah diproses",
    "implementasi.training.komplit.error.in.detail": "Ada error di detail",
    "implementasi.training.komplit.error.in.subdetail": "Ada error di sub detail",
    "implementasi.training.komplit.no.detail": "Detail tidak ditemukan",
    "implementasi.training.komplit.transaksi.sudah.dipakai.di.proses": "Transaksi ini sudah dipakaii di proses invoice",
    "invoice.hasil.proses.edit.nomor.tidak.boleh.kosong": "Nomor tidak boleh kosong",
    "invoice.header.not.found": "Header invoice tidak ditemukan",
    "invoicemanual.detail.lainlain.master.bruto.max.length":
      "Nilai Bruto di detail lain-lain termasterkan melebihi batas maksimal",
    "invoicemanual.detail.lainlain.master.bruto.min.length":
      "Nilai Bruto di detail lain-lain termasterkan melebihi batas minimal",
    "invoicemanual.detail.lainlain.master.bruto.required": "Nilai Bruto di detail lain-lain termasterkan harus diisi",
    "invoicemanual.detail.lainlain.master.harga.max.length":
      "Nilai Harga di detail lain-lain termasterkan melebihi batas maksimal",
    "invoicemanual.detail.lainlain.master.harga.min.length":
      "Nilai Harga di detail lain-lain termasterkan melebihi batas minimal",
    "invoicemanual.detail.lainlain.master.harga.required": "Nilai Harga di detail lain-lain termasterkan harus diisi",
    "invoicemanual.detail.lainlain.master.jumlah.max.length":
      "Jumlah di detail lain-lain termasterkan melebihi batas maksimal",
    "invoicemanual.detail.lainlain.master.jumlah.min.length":
      "Jumlah di detail lain-lain termasterkan melebihi batas minimal",
    "invoicemanual.detail.lainlain.master.jumlah.required": "Jumlah di detail lain-lain termasterkan harus diisi",
    "invoicemanual.detail.lainlain.master.keterangan.max.length":
      "Keterangan di detail lain-lain termasterkan melebihi batas maksimal",
    "invoicemanual.detail.lainlain.master.keterangan.required":
      "Keterangan di detail lain-lain termasterkan harus diisi",
    "invoicemanual.detail.lainlain.master.netto.max.length":
      "Nilai Netto di detail lain-lain termasterkan melebihi batas maksimal",
    "invoicemanual.detail.lainlain.master.netto.min.length":
      "Nilai Netto di detail lain-lain termasterkan melebihi batas minimal",
    "invoicemanual.detail.lainlain.master.netto.required": "Nilai Netto di detail lain-lain termasterkan harus diisi",
    "invoicemanual.detail.lainlain.master.nildisc.max.length":
      "Nilai Diskon di detail lain-lain termasterkan melebihi batas maksimal",
    "invoicemanual.detail.lainlain.master.nildisc.min.length":
      "Nilai Diskon di detail lain-lain termasterkan melebihi batas minimal",
    "invoicemanual.detail.lainlain.master.nildisc.required":
      "Nilai Diskon di detail lain-lain termasterkan harus diisi",
    "invoicemanual.detail.lainlain.master.nilpctdisc.max.length":
      "Nilai Prosen Diskon di detail lain-lain termasterkan melebihi batas maksimal",
    "invoicemanual.detail.lainlain.master.nilpctdisc.min.length":
      "Nilai Prosen Diskon di detail lain-lain termasterkan melebihi batas minimal",
    "invoicemanual.detail.lainlain.master.nilpctdisc.required":
      "Nilai Prosen Diskon di detail lain-lain termasterkan harus diisi",
    "invoicemanual.detail.lainlain.master.nourut.max.length": "Nomor urut di detail lain-lain melebihi batas maksimal",
    "invoicemanual.detail.lainlain.master.nourut.min.length": "Nomor urut di detail lain-lain melebihi batas minimal",
    "invoicemanual.detail.lainlain.master.nourut.required": "Nomor urut di detail lain-lain harus diisi",
    "invoicemanual.detail.lainlain.master.pctdisc.max.length":
      "Prosen Diskon di detail lain-lain termasterkan melebihi batas maksimal",
    "invoicemanual.detail.lainlain.master.pctdisc.min.length":
      "Prosen Diskon di detail lain-lain termasterkan melebihi batas minimal",
    "invoicemanual.detail.lainlain.master.pctdisc.required":
      "Prosen Diskon di detail lain-lain termasterkan harus diisi",
    "invoicemanual.komplit.edit.nomor.tidak.boleh.kosong": "Nomor tidak boleh kosong",
    "invoicemanual.komplit.saldodeposit.minus.setelah.delete": "Saldo deposit menjadi minus!",
    "invoicemanual.komplit.saldodeposit.minus.setelah.edit": "Saldo deposit menjadi minus!",
    "mapping.exclude.customer.kodept.npwp.kodkp.required": "Kode PT/NPWP/Kode Kelompo Payroll harus diisi",
    "mapping.exclude.customer.npwp.account.max.length": "NPWP melebihi batas maksimal",
    "mapping.exclude.customer.produk.bk":
      "Pelanggaran terhadap business key tabel exclude mapping, id header {{0}}, kode PT {{1}} dan NPWP {{2}}!",
    "mapping.exclude.customer.produk.kodekp.max.length": "Kode Kelompok Payroll melebihi batas maksimal",
    "mapping.exclude.customer.produk.kodept.max.length": "Kode PT melebihi batas maksimal",
    "mapping.exclude.customer.produk.kodept.required": "Kode PT harus diisi",
    "penerimaan.bayar.detail.initial.bk": "Pelanggaran terhadap business key tabel detail customer, nomor urut {{0}}!",
    "penerimaan.bayar.detail.initial.keterangan.max.length": "Keterangan di detail customer melebihi batas maksimal",
    "penerimaan.bayar.detail.initial.keterangan.required": "Keterangan di detail customer harus diisi",
    "penerimaan.bayar.detail.initial.nilai.max.length": "Nilai di detail customer melebihi batas maksimal",
    "penerimaan.bayar.detail.initial.nilai.min.length": "Nilai di detail customer melebihi batas minimal",
    "penerimaan.bayar.detail.initial.nilai.required": "Nilai di detail customer harus diisi",
    "penerimaan.bayar.detail.initial.nobukti.max.length": "Nomor Bukti di detail customer melebihi batas maksimal",
    "penerimaan.bayar.detail.initial.nobukti.required": "Nomor Bukti di detail customer melebihi batas minimal",
    "penerimaan.bayar.detail.initial.nourut.max.length": "Nomor urut di detail customer melebihi batas maksimal",
    "penerimaan.bayar.detail.initial.nourut.min.length": "Nomor urut di detail customer melebihi batas minimal",
    "penerimaan.bayar.detail.initial.nourut.required": "Nomor urut di detail customer harus diisi",
    "penerimaan.bayar.detail.subdetail.jumlah.tidak.cocok": "Total alokasi tidak sama dengan jumlah di detail customer",
    "penerimaan.bayar.header.bank.max.length": "Bank melebihi batas maksimal",
    "penerimaan.bayar.header.bank.required": "Bank harus diisi",
    "penerimaan.bayar.header.bk": "Pelanggaran terhadap business key tabel header penerimaan bayar",
    "penerimaan.bayar.header.detail.jumlah.tidak.cocok":
      "Total nilai di detail customer tidak sama dengan jumlah di header",
    "penerimaan.bayar.header.jumlah.max.length": "Jumlah melebihi batas maksimal",
    "penerimaan.bayar.header.jumlah.min.length": "Jumlah melebihi batas minimal",
    "penerimaan.bayar.header.jumlah.required": "Jumlah harus diisi",
    "penerimaan.bayar.header.keterangan.max.length": "Keterangan melebihi batas maksimal",
    "penerimaan.bayar.header.keterangan.required": "Keterangan harus diisi",
    "penerimaan.bayar.header.nomor.max.length": "Nomor melebihi batas maksimal",
    "penerimaan.bayar.header.nomor.required": "Nomor harus diisi",
    "penerimaan.bayar.header.tgtrn.max.length": "Tanggal transaksi melebihi batas maksimal",
    "penerimaan.bayar.header.tgtrn.required": "Tanggal transaksi harus diisi",
    "penerimaan.bayar.header.tipe.max.length": "Tipe melebihi batas maksimal",
    "penerimaan.bayar.header.tipe.required": "Tipe harus diisi",
    "penerimaan.bayar.komplit.edit.nomor.tidak.boleh.kosong": "Nomor tidak boleh kosong",
    "penerimaan.bayar.komplit.error.in.detail": "Ada error di detail",
    "penerimaan.bayar.komplit.error.in.subdetail": "Ada error di sub detail",
    "penerimaan.bayar.komplit.no.data": "Tidak ada data",
    "penerimaan.bayar.komplit.no.detail": "Detail tidak ditemukan",
    "penerimaan.bayar.sub.detail.alokasi.not.found": "Sub detail alokasi tidak ditemukan",
    "penerimaan.bayar.sub.detail.alokasi.tarif.bk":
      "Pelanggaran terhadap business key tabel sub detail alokasi, nomor urut {{0}}!",
    "penerimaan.bayar.sub.detail.alokasi.tarif.jenis.max.length": "Jenis di sub detail alokasi melebihi batas maksimal",
    "penerimaan.bayar.sub.detail.alokasi.tarif.jenis.required": "Jenis di sub detail alokasi harus diisi",
    "penerimaan.bayar.sub.detail.alokasi.tarif.keterangan.max.length":
      "Keterangan di sub detail alokasi melebihi batas maksimal",
    "penerimaan.bayar.sub.detail.alokasi.tarif.keterangan.required": "Keterangan di sub detail alokasi harus diisi",
    "penerimaan.bayar.sub.detail.alokasi.tarif.nilalok.max.length":
      "Nilai alokasi di sub detail alokasi melebihi batas maksimal",
    "penerimaan.bayar.sub.detail.alokasi.tarif.nilalok.min.length":
      "Nilai alokasi di sub detail alokasi melebihi batas minimal",
    "penerimaan.bayar.sub.detail.alokasi.tarif.nilalok.required": "Nilai alokasi di sub detail alokasi harus diisi",
    "penerimaan.bayar.sub.detail.alokasi.tarif.nourut.max.length":
      "Nomor urut di sub detail alokasi melebihi batas maksimal",
    "penerimaan.bayar.sub.detail.alokasi.tarif.nourut.min.length":
      "Nomor urut di sub detail alokasi melebihi batas minimal",
    "penerimaan.bayar.sub.detail.alokasi.tarif.nourut.required": "Nomor urut di sub detail alokasi harus diisi",
    "penerimaan.bayar.subdetail.failed": "Ada error di sub detail",
    "tagihan.lain.not.active": "Master tagihan tidak aktif",
    "tagihan.lain.not.found": "Master tagihan tidak ditemukan",
    "tagihan.terjadwal.komplit.bulan.tagihan.sudah.diproses": "Bulan tagih sudah diproses",
    "tagihan.terjadwal.komplit.error.in.detail": "Ada error di detail",
    "tagihan.terjadwal.komplit.error.in.subdetail": "ada error di sub detail",
    "tagihan.terjadwal.komplit.no.detail": "Detail tidak ditemukan",
    "tagihan.terjadwal.sudah.proses.invoice": "Transaksi ini sudah diproses",
    "TagihanLain.harga.max.length": "Nilai Harga melebihi batas maksimal",
    "TagihanLain.harga.min.length": "Nilai Harga melebihi batas minimal",
    "TagihanLain.harga.required": "Nilai Harga harus diisi",
    "TagihanLain.keterangan.max.length": "Keterangan melebihi batas maksimal",
    "TagihanLain.keterangan.required": "Keterangan harus diisi",
    "TagihanLain.nama.max.length": "Nama melebihi batas maksimal",
    "TagihanLain.nama.required": "Nama harus diisi",
    "TagihanLain.satuan.max.length": "Satuan melebihi batas maksimal",
    "TagihanLain.satuan.required": "Satuan harus diisi",
    "tagihanterjadwal.detail.implementasi.bk":
      "Pelanggaran terhadap business key tabel detail implementasi, nomor urut {{0}}!",
    "tagihanterjadwal.detail.implementasi.bruto.max.length":
      "Nilai Bruto di detail implementasi melebihi batas maksimal",
    "tagihanterjadwal.detail.implementasi.bruto.min.length":
      "Nilai Bruto di detail implementasi melebihi batas minimal",
    "tagihanterjadwal.detail.implementasi.bruto.required": "Nilai Bruto di detail implementasi harus diisi",
    "tagihanterjadwal.detail.implementasi.harga.max.length":
      "Nilai Harga di detail implementasi melebihi batas maksimal",
    "tagihanterjadwal.detail.implementasi.harga.min.length":
      "Nilai Harga di detail implementasi melebihi batas minimal",
    "tagihanterjadwal.detail.implementasi.harga.required": "Nilai Harga di detail implementasi harus diisi",
    "tagihanterjadwal.detail.implementasi.jumlah.max.length": "Jumlah di detail implementasi melebihi batas maksimal",
    "tagihanterjadwal.detail.implementasi.jumlah.min.length": "Jumlah di detail implementasi melebihi batas minimal",
    "tagihanterjadwal.detail.implementasi.jumlah.required": "Jumlah di detail implementasi harus diisi",
    "tagihanterjadwal.detail.implementasi.keterangan.max.length":
      "Keterangan di detail implementasi melebihi batas maksimal",
    "tagihanterjadwal.detail.implementasi.keterangan.required": "Keterangan di detail implementasi harus diisi",
    "tagihanterjadwal.detail.implementasi.netto.max.length":
      "Nilai Netto di detail implementasi melebihi batas maksimal",
    "tagihanterjadwal.detail.implementasi.netto.min.length":
      "Nilai Netto di detail implementasi melebihi batas minimal",
    "tagihanterjadwal.detail.implementasi.netto.required": "Nilai Netto di detail implementasi harus diisi",
    "tagihanterjadwal.detail.implementasi.nildisc.max.length":
      "Nilai Diskon di detail implementasi melebihi batas maksimal",
    "tagihanterjadwal.detail.implementasi.nildisc.min.length":
      "Nilai Diskon di detail implementasi melebihi batas minimal",
    "tagihanterjadwal.detail.implementasi.nildisc.required": "Nilai Diskon di detail implementasi harus diisi",
    "tagihanterjadwal.detail.implementasi.nilpctdisc.max.length":
      "Nilai Prosen Diskon di detail implementasi melebihi batas maksimal",
    "tagihanterjadwal.detail.implementasi.nilpctdisc.min.length":
      "Nilai Prosen Diskon di detail implementasi melebihi batas minimal",
    "tagihanterjadwal.detail.implementasi.nilpctdisc.required":
      "Nilai Prosen Diskon di detail implementasi harus diisi",
    "tagihanterjadwal.detail.implementasi.nourut.max.length":
      "Nomor urut di detail implementasi melebihi batas maksimal",
    "tagihanterjadwal.detail.implementasi.nourut.min.length":
      "Nomor urut di detail implementasi melebihi batas minimal",
    "tagihanterjadwal.detail.implementasi.nourut.required": "Nomor urut di detail implementasi harus diisi",
    "tagihanterjadwal.detail.implementasi.pctdisc.max.length":
      "Prosen Diskon di detail implementasi melebihi batas maksimal",
    "tagihanterjadwal.detail.implementasi.pctdisc.min.length":
      "Prosen Diskon di detail implementasi melebihi batas minimal",
    "tagihanterjadwal.detail.implementasi.pctdisc.required": "Prosen Diskonn di detail implementasi harus diisi",
    "tagihanterjadwal.detail.lainlain.master.bk":
      "Pelanggaran terhadap business key tabel detail lain-lain, nomor urut {{0}}!",
    "tagihanterjadwal.detail.lainlain.master.bruto.max.length":
      "Nilai Bruto di detail lain-lain termasterkan melebihi batas maksimal",
    "tagihanterjadwal.detail.lainlain.master.bruto.min.length":
      "Nilai Bruto di detail lain-lain termasterkan melebihi batas minimal",
    "tagihanterjadwal.detail.lainlain.master.bruto.required":
      "Nilai Bruto di detail lain-lain termasterkan harus diisi",
    "tagihanterjadwal.detail.lainlain.master.harga.max.length":
      "Nilai Harga di detail lain-lain termasterkan melebihi batas maksimal",
    "tagihanterjadwal.detail.lainlain.master.harga.min.length":
      "Nilai Harga di detail lain-lain termasterkan melebihi batas minimal",
    "tagihanterjadwal.detail.lainlain.master.harga.required":
      "Nilai Harga di detail lain-lain termasterkan harus diisi",
    "tagihanterjadwal.detail.lainlain.master.jumlah.max.length":
      "Jumlah di detail lain-lain termasterkan melebihi batas maksimal",
    "tagihanterjadwal.detail.lainlain.master.jumlah.min.length":
      "Jumlah di detail lain-lain termasterkan melebihi batas minimal",
    "tagihanterjadwal.detail.lainlain.master.jumlah.required": "Jumlah di detail lain-lain termasterkan harus diisi",
    "tagihanterjadwal.detail.lainlain.master.keterangan.max.length":
      "Keterangan di detail lain-lain termasterkan melebihi batas maksimal",
    "tagihanterjadwal.detail.lainlain.master.keterangan.required":
      "Keterangan di detail lain-lain termasterkan harus diisi",
    "tagihanterjadwal.detail.lainlain.master.netto.max.length":
      "Nilai Netto di detail lain-lain termasterkan melebihi batas maksimal",
    "tagihanterjadwal.detail.lainlain.master.netto.min.length":
      "Nilai Netto di detail lain-lain termasterkan melebihi batas minimal",
    "tagihanterjadwal.detail.lainlain.master.netto.required":
      "Nilai Netto di detail lain-lain termasterkan harus diisi",
    "tagihanterjadwal.detail.lainlain.master.nildisc.max.length":
      "Nilai Diskon di detail lain-lain termasterkan melebihi batas maksimal",
    "tagihanterjadwal.detail.lainlain.master.nildisc.min.length":
      "Nilai Diskon di detail lain-lain termasterkan melebihi batas minimal",
    "tagihanterjadwal.detail.lainlain.master.nildisc.required":
      "Nilai Diskon di detail lain-lain termasterkan harus diisi",
    "tagihanterjadwal.detail.lainlain.master.nilpctdisc.max.length":
      "Nilai Prosen Diskon di detail lain-lain termasterkan melebihi batas maksimal",
    "tagihanterjadwal.detail.lainlain.master.nilpctdisc.min.length":
      "Nilai Prosen Diskon di detail lain-lain termasterkan melebihi batas minimal",
    "tagihanterjadwal.detail.lainlain.master.nilpctdisc.required":
      "Nilai Prosen Diskon di detail lain-lain termasterkan harus diisi",
    "tagihanterjadwal.detail.lainlain.master.nourut.max.length":
      "Nomor urut di detail lain-lain melebihi batas maksimal",
    "tagihanterjadwal.detail.lainlain.master.nourut.min.length":
      "Nomor urut di detail lain-lain melebihi batas minimal",
    "tagihanterjadwal.detail.lainlain.master.nourut.required": "Nomor urut di detail lain-lain harus diisi",
    "tagihanterjadwal.detail.lainlain.master.pctdisc.max.length":
      "Prosen Diskon di detail lain-lain termasterkan melebihi batas maksimal",
    "tagihanterjadwal.detail.lainlain.master.pctdisc.min.length":
      "Prosen Diskon di detail lain-lain termasterkan melebihi batas minimal",
    "tagihanterjadwal.detail.lainlain.master.pctdisc.required":
      "Prosen Diskon di detail lain-lain termasterkan harus diisi",
    "tagihanterjadwal.detail.training.bk": "Pelanggaran terhadap business key tabel detail training, nomor urut {{0}}!",
    "tagihanterjadwal.detail.training.bruto.required": "Nilai Bruto di detail training harus diisi",
    "tagihanterjadwal.detail.training.harga.max.length": "Nilai Harga di detail training melebihi batas maksimal",
    "tagihanterjadwal.detail.training.harga.min.length": "Nilai Harga di detail training melebihi batas minimal",
    "tagihanterjadwal.detail.training.harga.required": "Nilai Harga di detail training harus diisi",
    "tagihanterjadwal.detail.training.jumlah.max.length": "Jumlah di detail training melebihi batas maksimal",
    "tagihanterjadwal.detail.training.jumlah.min.length": "Jumlah di detail training melebihi batas minimal",
    "tagihanterjadwal.detail.training.jumlah.required": "Jumlah di detail training harus diisi",
    "tagihanterjadwal.detail.training.keterangan.max.length": "Keterangan di detail training melebihi batas maksimal",
    "tagihanterjadwal.detail.training.keterangan.required": "Keterangan di detail training harus diisi",
    "tagihanterjadwal.detail.training.netto.max.length": "Nilai Netto di detail training melebihi batas maksimal",
    "tagihanterjadwal.detail.training.netto.min.length": "Nilai Netto di detail training melebihi batas minimal",
    "tagihanterjadwal.detail.training.netto.required": "Nilai Netto di detail training harus diisi",
    "tagihanterjadwal.detail.training.nildisc.max.length": "Nilai Diskon di detail training melebihi batas maksimal",
    "tagihanterjadwal.detail.training.nildisc.min.length": "Nilai Diskon di detail training melebihi batas minimal",
    "tagihanterjadwal.detail.training.nildisc.required": "Nilai Diskon di detail training harus diisi",
    "tagihanterjadwal.detail.training.nilpctdisc.max.length":
      "Nilai Prosen Diskon di detail training melebihi batas maksimal",
    "tagihanterjadwal.detail.training.nilpctdisc.min.length":
      "Nilai Prosen Diskon di detail training melebihi batas minimal",
    "tagihanterjadwal.detail.training.nilpctdisc.required": "Nilai Prosen Diskon di detail training harus diisi",
    "tagihanterjadwal.detail.training.nourut.max.length": "Nomor urut di detail training melebihi batas maksimal",
    "tagihanterjadwal.detail.training.nourut.min.length": "Nomor urut di detail training melebihi batas minimal",
    "tagihanterjadwal.detail.training.nourut.required": "Nomor urut di detail training harus diisi",
    "tagihanterjadwal.detail.training.pctdisc.max.length": "Prosen Diskon di detail training melebihi batas maksimal",
    "tagihanterjadwal.detail.training.pctdisc.min.length": "Prosen Diskon di detail training melebihi batas minimal",
    "tagihanterjadwal.detail.training.pctdisc.required": "Prosen Diskon di detail training harus diisi",
    "tagihanterjadwal.header.bk": "Pelanggaran terhadap business key tabel header tagihan terjadwal!",
    "tagihanterjadwal.header.bulantgh.max.length": "Bulan tagih melebihi batas maksimal",
    "tagihanterjadwal.header.bulantgh.required": "Bulan tagih harus diisi",
    "tagihanterjadwal.header.flproi.max.length": "Flag proses invoice melebihi batas maksimal",
    "tagihanterjadwal.header.keterangan.max.length": "Keterangan melebihi batas maksimal",
    "tagihanterjadwal.header.nomor.max.length": "Nomor melebihi batas maksimal",
    "tagihanterjadwal.header.nomor.required": "Nomor harus diisi",
    "tagihanterjadwal.header.tahuntgh.max.length": "Tahun tagih melebihi batas maksimal",
    "tagihanterjadwal.header.tahuntgh.required": "Tahun tagih harus diisi",
    "tagihanterjadwal.header.tgtrn.max.length": "Tanggal transaksi melebihi batas maksimal",
    "tagihanterjadwal.header.tgtrn.required": "Tanggal transaksi harus diisi",
    "tagihanterjadwal.komplit.no.data": "Data tidak ditemukan",
    "training.satuan.max.length": "Satuan melebihi batas maksimal",
    "trx.live.jumkar.max.length": "Jumlah karyawan melebihi batas maksimal",
    "trx.live.jumkar.min.length": "Jumlah karyawan melebihi batas minimal",
    "trx.live.jumkar.required": "Jumlah Karyawan harus diisi",
    "trx.live.jumlah.kary.harus.diisi": "Jumlah karyawan harus diisi",
    "proses.invoice.otomatis.pra.proses.belum.dilakukan": "Pra Proses Invoice belum dilakukan",

    "invoicemanual.komplit.error.in.detail": "Ada error di detail",
    "invoicemanual.detail.lainlain.keterangan.required": "Keterangan harus diisi",
    // 'invoicemanual.komplit.saldodeposit.tidak.cukup': 'Saldo deposit tidak mencukupi',

    "error.customer.tarif.produk.detail.fe.0001": "Produk ini belum live, jenis tarif tidak boleh double",
    "error.customer.tarif.produk.detail.fe.0002":
      "Data sebelumnya untuk jenis tarif ini memiliki tanggal akhir yang masih terbuka",
    "error.customer.tarif.produk.detail.fe.0003": "Tanggal mulai overlap dengan tanggal akhir data sebelumnya",
    "error.customer.tarif.produk.detail.fe.0004": "Tanggal mulai overlap dengan tanggal awal data sebelumnya",
    "error.customer.tarif.produk.detail.fe.0005":
      "Tanggal mulai tidak boleh kurang dari tanggal akhir periode sebelumnya",

    // detil error di kirim bulk invoice
    "bulk.invoice.error.001": "Gagal menciptakan file PDF untuk invoice nomor : {{0}}",

    "error.customer.fe.0001": "Data Tagih Di, hanya boleh diisi salah satu, Customer Ini saja atau Pihak Ketiga saja ",

    "error.could.not.send.email": "Pengiriman email ke {{0}} gagal!",
    "error.access.external.api.failed": "Akses ke external API gagal",

    // error untuk input di grid terkait customer penerimaan bayar
    CustomerSudahAda: "Customer sudah ada",

    // transaksi
    "transaksipembelian.komplit.no.detail": "Transaksi harus memiliki detail",
  };

  public static getValues() {
    return {
      language: IndonesiaMessageDictionary.language,
      contents: IndonesiaMessageDictionary.contents,
    };
  }
}
