# 🎨 CSS Gradient Generator (Dynamic Background String Injektor)

Aplikasi utilitas perancang kombinasi warna linear dinamis (*CSS Gradient Generator*) menggunakan **Vanilla JavaScript**. Fokus utama dari rancangan modul latihan ini adalah melatih logika siswa dalam menghimpun multi-variabel string (*String Concatenation*) untuk mengintervensi isi properti manipulasi style CSS secara *real-time*.

Sangat direkomendasikan bagi siswa SMK Jurusan RPL kelas awal untuk menguasai penggabungan teks string dinamis.

---

## 🚀 Fitur Utama

* **Multi-Input String Concatenation:** Merangkai tiga komponen parameter terpisah (`color-1`, `color-2`, dan `range degree`) menjadi satu kesatuan format sintaks fungsi orisinal CSS `linear-gradient()`.
* **Instant Reactive Interception:** Memanfaatkan sensor pemicu `.addEventListener('input')` agar visualisasi pergeseran warna berputar terasa halus dan interaktif seketika di layar preview.
* **Clipboard API Integration:** Menggunakan metode asinkron modern `navigator.clipboard.writeText()` untuk memberikan kemudahan fitur satu kali klik salin teks tanpa merusak fokus dokumen.
* **Async UI Feedback Timeout:** Memasang fungsi tunda `setTimeout()` pasca penyalinan kode selesai guna memberikan sinyal konfirmasi animasi perubahan teks tombol temporer.

---

## 📂 Struktur Folder Proyek

```text
├── index.html       # Struktur boks kontainer preview, komponen dual input warna, slider derajat, dan textarea
├── style.css        # Visual boks preview pop art, kustomisasi pengunci textarea, dan token warna pastel
└── script.js        # Mesin perangkai string gradasi, mutator properti style, dan clipboard bridge handler
