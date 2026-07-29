// --- 1. SELEKSI ELEMEN DOM ---
const elPreviewBox = document.getElementById("gradient-preview");
const elColor1 = document.getElementById("color-1");
const elColor2 = document.getElementById("color-2");
const elInputAngle = document.getElementById("input-angle");
const elTxtAngle = document.getElementById("txt-angle");
const elTxtCssCode = document.getElementById("txt-css-code");
const btnCopy = document.getElementById("btn-copy");

// --- 2. FUNGSI LOGIKA UTAMA: GENERATE GRADASI ---
function perbaruiEfekGradasiWarna() {
    // Ambil nilai terbaru dari ketiga komponen kontrol input
    const warnaAwal = elColor1.value;
    const warnaAkhir = elColor2.value;
    const nilaiSudut = elInputAngle.value;

    // 1. Perbarui teks indikator derajat kemiringan sudut di atas slider
    elTxtAngle.innerText = nilaiSudut;

    // 2. Susun baris kode string standar fungsi CSS background linear gradient
    const stringCssGradient = `linear-gradient(${nilaiSudut}deg, ${warnaAwal}, ${warnaAkhir})`;

    // 3. Suntikkan string tersebut langsung ke inline style background elemen preview boks
    elPreviewBox.style.background = stringCssGradient;

    // 4. Tampilkan baris properti lengkap ke dalam textarea agar bisa disalin user
    elTxtCssCode.value = `background: ${stringCssGradient};`;
}

// --- 3. FUNGSI MENYALIN TEKS KE CLIPBOARD ---
function salinKodeKePapanKlip() {
    // Pilih teks di dalam kotak textarea
    elTxtCssCode.select();
    elTxtCssCode.setSelectionRange(0, 99999); // Kompatibilitas pengaman tambahan untuk perangkat HP

    // Eksekusi penyalinan ke sistem memori clipboard perangkat luar
    navigator.clipboard.writeText(elTxtCssCode.value)
        .then(() => {
            // Berikan efek umpan balik visual instan pada tombol setelah berhasil disalin
            const teksAsli = btnCopy.innerText;
            btnCopy.innerText = "Tersalin! ⚡";
            btnCopy.style.backgroundColor = "#ffb703"; // Ubah warna tombol sesaat menjadi kuning

            // Kembalikan status tombol seperti semula setelah jeda waktu 1,5 detik
            setTimeout(() => {
                btnCopy.innerText = teksAsli;
                btnCopy.style.backgroundColor = "var(--btn-color)";
            }, 1500);
        })
        .catch(err => {
            alert("Gagal menyalin kode, silakan salin secara manual! ⚠️");
        });
}

// --- 4. BINDING EVENT LISTENERS ---
// Menggunakan event 'input' agar perubahan warna dan geseran slider langsung terasa tanpa jeda lepas klik
elColor1.addEventListener("input", perbaruiEfekGradasiWarna);
elColor2.addEventListener("input", perbaruiEfekGradasiWarna);
elInputAngle.addEventListener("input", perbaruiEfekGradasiWarna);

// Listener Aksi Tombol Salin
btnCopy.addEventListener("click", salinKodeKePapanKlip);
