const nama = "Ahmad Asyhari",
    tahunMasuk = '2020',
    kodeProdi = '1142',
    noUrutNim = '0036',
    jKel = 'L',
    mataKuliah = 'Basis Data',
    kehadiran = (100),
    tugas = (100),
    uts = (100),
    uas = (100);
const nim = tahunMasuk + kodeProdi + noUrutNim;
let prodi;
switch (kodeProdi) {
    case '1142':
        prodi = "Teknik Informatika";
        break;
    case '1141':
        prodi = "Sistem Komputer";
        break;
    default:
        prodi = 'Kode Program Studi tidak terdaftar';
}
let jenisKelamin;
switch (jKel) {
    case 'L':
    case 'l':
        jenisKelamin = 'Laki-Laki';
        break;
    case 'P':
    case 'p':
        jenisKelamin = 'Perempuan';
        break;
    default:
        jenisKelamin = 'Kode Jenis Kelamin tidak terdaftar';
}
let nilaiAngka = kehadiran * 0.1 + tugas * 0.2 + uts * 0.3 + uas *
    0.4;
let nilaiHuruf, predikat;
if (nilaiAngka > 85 && nilaiAngka <= 100) {
    nilaiHuruf = 'A';
    predikat = 'Sangat Memuaskan';
} else if (nilaiAngka > 75 && nilaiAngka <= 85) {
    nilaiHuruf = 'B';
    predikat = 'Memuaskan';
} else if (nilaiAngka > 60 && nilaiAngka <= 75) {
    nilaiHuruf = 'C';
    predikat = 'Cukup Memuaskan';
} else if (nilaiAngka > 45 && nilaiAngka <= 60) {
    nilaiHuruf = 'D';
    predikat = 'Kurang Memuaskan';
} else {
    nilaiHuruf = 'E';
    predikat = 'Sangat Kurang';
}
console.log("Nilai Mahasiswa untuk Matakuliah " + mataKuliah);
console.log("=================================================");
console.log("Nama : " + nama);
console.log("NIM : " + nim);
console.log("Program Studi : " + prodi);
console.log("Jenis Kelamin : " + jKel);
console.log("Nilai Angka : " + nilaiAngka);
console.log("Nilai Huruf : " + nilaiHuruf);
console.log("Predikat : " + predikat);
console.log("================================================");