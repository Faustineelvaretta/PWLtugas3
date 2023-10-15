import React from 'react';
import './Beranda.css';
import Article from './Article';

const articles = [
  {
    id: 1,
    title: 'Halo, Saya Faustine Elvaretta Tambila',
    content: 'Saya adalah mahasiswa semester 7 di Institut Teknologi Sumatera, Program studi Teknik Informatika. Saya memiliki minat besar dalam bidang Rekayasa Perangkat Lunak dan Sistem Informasi.',
    continuation: (
      <div style={{ textAlign: 'justify' }}>
        <br></br>
        <p>Saya membuat blog ini karena saya ingin berbagi pengalaman dan pengetahuan saya dengan sesama mahasiswa dan pembaca yang tertarik. Saya berharap blog ini dapat menjadi tempat yang bermanfaat dan inspiratif bagi semua orang. Saya juga terbuka untuk menerima saran, kritik, dan masukan dari pembaca. Selain belajar dan menulis blog, saya juga memiliki hobi lain seperti membaca buku dan mendengarkan musik. Saya senang menghabiskan waktu luang saya dengan melakukan hal-hal yang menyenangkan dan positif. Saya juga suka berinteraksi dengan orang-orang baru dan belajar dari mereka. Pada blog kali ini, saya akan menjelaskan sedikit tentang HTML. Semoga informasi yang saya sampaikan bisa bermanfaat untuk kalian semua, Terima kasih telah mengunjungi blog ini.</p>
      </div>
    ),
  },
  {
    id: 2,
    title: 'Penjelasan HTML',
    content: 'HTML adalah singkatan dari HyperText Markup Language, yang merupakan bahasa standar untuk membuat dokumen web.',
    continuation: (
      <div style={{ textAlign: 'justify' }}>
        <br></br>
        <p>HTML menggunakan tag untuk menentukan struktur dan tampilan dari sebuah halaman web. Tag adalah elemen-elemen yang dikelilingi oleh tanda kurung sudut ( dan ) dan biasanya berpasangan, seperti "html" dan "/html". Tag pertama disebut tag pembuka, dan tag kedua disebut tag penutup. Di antara tag pembuka dan penutup, kita dapat menulis konten yang ingin ditampilkan di halaman web, seperti teks, gambar, tautan, tabel, daftar, dan lain-lain.</p>
      </div>
    ),
  },
  {
    id: 3,
    title: 'Tag dalam HTML',
    content: 'HTML memiliki banyak tag yang dapat digunakan untuk membuat halaman web yang berbeda-beda. Beberapa tag yang umum digunakan adalah:',
    continuation: (
      <div style={{ textAlign: 'justify' }}>
        <br></br>
        <p>"html": Tag ini digunakan untuk menandai awal dan akhir dari sebuah dokumen HTML. Tag ini harus ada di setiap dokumen HTML.</p>
        <p>"head": Tag ini digunakan untuk menulis informasi tentang dokumen HTML, seperti judul, deskripsi, kata kunci, gaya, skrip, dan lain-lain. Tag ini harus diletakkan di dalam tag "html".</p>
        <p>"body": Tag ini digunakan untuk menulis konten utama dari dokumen HTML, yang akan ditampilkan di browser. Tag ini harus diletakkan di dalam tag "html" setelah tag "head".</p>
      </div>
    ),
  },
];

function Beranda() {
  return (
    <div className="beranda-container">
      <header>
        <h1>Welcome</h1>
      </header>
      <main>
        {articles.map((article) => (
          <Article key={article.id} article={article} />
        ))}
      </main>
    </div>
  );
}

export default Beranda;
export { articles };
