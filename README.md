## 🚀 Fitur (Planned)
  - Vault pengelolaan aset
  - Reward claiming
  - Unstaking logic
  - Schedule management
## 🧱 Struktur Proyek

```bash
eigenFi/
├── config.js       # Konfigurasi koneksi dan pengaturan wallet
├── index.js        # Entry point aplikasi
├── package.json    # Informasi dan dependensi Node.js
└── README.md       # Dokumentasi proyek
```

## 📦 Instalasi

Pastikan Anda telah menginstal [Node.js](https://nodejs.org/) minimal versi 16.

```bash
# Clone repositori
git clone https://github.com/mrscriptword/eigenFi.git
cd eigenFi

# Install dependensi
npm install
```

## ⚙️ Konfigurasi

Edit file `config.js` untuk mengatur koneksi ke RPC dan wallet:

```js
module.exports = {
  PRIVATE_KEY: '0x...',
};
```

## ▶️ Menjalankan

Untuk menjalankan skrip CLI:

```bash
node index.js
```

- `stake()` — Mengunci token ke dalam smart contract vault.
- `unstake()` — Mengeluarkan token setelah periode tertentu.
- `claim()` — Mengambil reward berdasarkan jadwal distribusi.

## 🤝 Kontribusi

Pull request sangat disambut! Jika Anda memiliki ide, perbaikan, atau ingin bantu pengembangan, silakan fork dan buat PR.
