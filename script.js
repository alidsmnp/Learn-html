// Mengambil elemen tombol
const button = document.querySelector('button');

// Menambahkan event listener untuk menangani klik pada tombol
button.addEventListener('click', function() {
    alert('Selamat! Kamu telah mengklik tombol untuk menjawab soal candaan seputar HTML!');
});

// Menambahkan fungsi untuk validasi tautan
const linkSection = document.getElementById('tautan');
const link = linkSection.querySelector('a');

link.addEventListener('click', function(event) {
    const userConfirmed = confirm('Apakah kamu yakin ingin membuka tautan ini?');
    if (!userConfirmed) {
        event.preventDefault(); // Mencegah tautan terbuka jika pengguna membatalkan
    }
});