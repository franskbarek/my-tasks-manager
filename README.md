## Aplikasi Manajemen Tugas

Aplikasi ini adalah sebuah API sederhana untuk manajemen tugas menggunakan Express.js dan MongoDB. API ini mendukung endpoint berikut:

### Cara Menjalankan Aplikasi

> 1.  Clone repositori ini ke komputer Anda
>     git clone **`https://github.com/franskbarek/my-tasks-manager.git`**
> 2.  Masuk ke dalam direktori aplikasi
>     cd my-task-manager-api
> 3.  Install dependensi
>     npm install atau yarn jika menggunakan yarn
> 4.  Jalankan aplikasi
>     npm start atau yarn start jika menggunakan yarn
>
> Aplikasi akan berjalan pada **`http://localhost:3000`** dan siap digunakan. Pastikan untuk menjalankan MongoDB pada komputer Anda sebelum menjalankan aplikasi ini.

**_Catatan_**
_-Pastikan mongoDB sudah terinstall dan running ada 2 opsi bisa menggunakannya pada lokal mesin anda atau bisa juga pada cloud_,
_-Sesuaikan konfigurasi database pada file index.js dengan setting pada mongodb anda,_
_-Anda dapat menggunakan aplikasi seperti Postman atau Insomnia untuk mengirim permintaan ke API._
_-Jangan lupa untuk melakukan testing dan debugging pada aplikasi Anda untuk memastikan bahwa semuanya berjalan dengan baik._ _-Jika menemukan bug atau masalah, silakan buat issue pada repositori ini atau hubungi pengembang. Semoga aplikasi ini dapat membantu Anda dalam manajemen tugas Anda. Selamat mencoba!_

### Mendapatkan Seluruh Tugas

Untuk mendapatkan semua tugas, gunakan permintaan GET ke alamat **`/tasks`**.

Contoh:

GET http://localhost:3000/tasks

Response:

```
[
{
"_id": "5f9b4f4f4b4c1a4d8f4b4c1a",
"title": "Tugas 1",
"description": "Deskripsi tugas 1",
"completed": false
},
{
"_id": "5f9b4f4f4b4c1a4d8f4b4c1b",
"title": "Tugas 2",
"description": "Deskripsi tugas 2",
"completed": true
}
]
```

### Tambah Tugas

Untuk menambah tugas baru, gunakan permintaan POST ke alamat **`/tasks`** dengan request body yang berisi bidang-bidang berikut:

> **title**: Judul tugas (wajib)
> **description**: Deskripsi tugas (opsional)
> **completed**: Boolean yang menunjukkan apakah tugas selesai (default: false)

Contoh:

POST http://localhost:3000/tasks

Body:

```
{
"title": "Tugas 3",
"description": "Deskripsi tugas 3",
"completed": false
}
```

Response:

```
{
"_id": "5f9b4f4f4b4c1a4d8f4b4c1c",
"title": "Tugas 3",
"description": "Deskripsi tugas 3",
"completed": false
}
```

### Mendapatkan Tugas Tertentu

Untuk mengambil tugas dengan id tertentu, gunakan permintaan GET ke alamat **`/tasks/:id`**.

Contoh:

GET http://localhost:3000/tasks/5f9b4f4f4b4c1a4d8f4b4c1a

Response:

```
{
"_id": "5f9b4f4f4b4c1a4d8f4b4c1a",
"title": "Tugas 1",
"description": "Deskripsi tugas 1",
"completed": false
}
```

### Perbarui Tugas

Untuk memperbarui tugas dengan id tertentu, gunakan permintaan PATCH ke alamat **`/tasks/:id`** dengan request body yang berisi bidang yang ingin di perbarui.

Contoh:

PATCH http://localhost:3000/tasks/5f9b4f4f4b4c1a4d8f4b4c1a

Body:

```
{
"completed": true
}
```

Response:

```
{
"_id": "5f9b4f4f4b4c1a4d8f4b4c1a",
"title": "Tugas 1",
"description": "Deskripsi tugas 1",
"completed": true
}
```

### Hapus Tugas

Untuk menghapus tugas dengan id tertentu, gunakan permintaan DELETE ke alamat **`/tasks/:id`**.

Contoh:

DELETE http://localhost:3000/tasks/5f9b4f4f4b4c1a4d8f4b4c1a

Response:

`"Task has been deleted..."`
