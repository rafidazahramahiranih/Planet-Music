# UTS Pemrograman Mobile 2
Nama: Rafida Zahra Maharani H

NIM: 2130511064

## Deskripsi Proyek

Proyek ini merupakan bagian dari Ujian Tengah Semester (UTS) untuk mata kuliah Pemrograman Mobile 2. Aplikasi Koleksi Musik adalah aplikasi web berbasis React yang memungkinkan pengguna untuk mengelola daftar putar musik mereka. Pengguna dapat menambahkan, mengedit, dan menghapus koleksi musik. Aplikasi ini menggunakan `localStorage` untuk menyimpan data sehingga dapat bertahan di antara sesi.

## Fitur

- Tambahkan Koleksi Musik: Pengguna dapat menambahkan koleksi musik baru dengan memberikan judul dan artis.
- Edit Koleksi Musik: Pengguna dapat mengedit detail dari koleksi musik yang sudah ada.
- Hapus Koleksi Musik: Pengguna dapat menghapus koleksi musik dari daftar.
- Penyimpanan Persisten: Data disimpan di localStorage sehingga koleksi tetap ada meskipun browser ditutup atau direfresh.
- Desain Responsif: Aplikasi ini dirancang agar menarik secara visual dan mudah digunakan.

## Komponen

- App.js: Komponen utama yang mengelola state aplikasi dan merender header, daftar koleksi, serta modal untuk menambahkan koleksi baru.
- CollectionList.js: Komponen ini merender daftar koleksi musik menggunakan komponen `CollectionItem`.
- CollectionItem.js: Komponen ini merender item koleksi individu dan menyediakan opsi untuk mengedit atau menghapusnya.
- AddCollectionForm.js: Komponen ini menyediakan formulir untuk menambahkan koleksi musik baru.
- Modal.js: Komponen ini menyediakan dialog modal untuk menampilkan komponen `AddCollectionForm`.
- App.css: File ini berisi gaya untuk aplikasi, memastikan desain yang menarik secara visual dan mudah digunakan.

## Teknologi yang Digunakan
- React: Library JavaScript untuk membangun antarmuka pengguna.
- CSS: Digunakan untuk styling aplikasi.
- LocalStorage: Untuk penyimpanan data koleksi musik.

Fakultas Sains dan Teknologi
Universitas Muhammadiyah Sukabumi
