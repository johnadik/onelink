ChatGPT: 

Untuk menukar format jadual asal kepada format yang diinginkan menggunakan **Power Query** , ikuti langkah berikut:**Langkah 1: Import Data ke Power Query**  
1. Pilih **table**  yang mengandungi data asal.
 
2. Pergi ke tab **Data**  > **Get & Transform**  > **From Table/Range** .
**Langkah 2: Unpivot Data**  
1. Dalam Power Query, pilih lajur **"NAMA PROJEK"**  dan **"JENIS BAJA"**  (pastikan hanya dua lajur ini yang dipilih).
 
2. Pergi ke tab **Transform**  > klik **Unpivot Other Columns** .
 
3. Anda akan mendapat tiga lajur baharu: 
  - **Attribute**  (nama lajur asal yang dipivot, contoh: "TERIMA - JAN", "TABUR - JAN", dll.).
 
  - **Value**  (nilai bagi setiap entri).
**Langkah 3: Pisahkan Lajur Bulan dan Jenis Transaksi**  
1. Pilih lajur **Attribute**  (yang mengandungi "TERIMA - JAN", "TABUR - FEB", dll.).
 
2. Pergi ke **Transform**  > **Split Column**  > **By Delimiter** .
 
3. Pilih delimiter **" - "**  (space-dash-space).
 
4. Klik **OK** .
 
5. Ini akan menghasilkan dua lajur baru: 
  - **Attribute.1**  (mengandungi "TERIMA" atau "TABUR").
 
  - **Attribute.2**  (mengandungi "JAN", "FEB", dll.).
**Langkah 4: Pivot Data Semula**  
1. Pilih lajur **Attribute.1**  (yang sekarang mengandungi "TERIMA" atau "TABUR").
 
2. Pergi ke **Transform**  > Klik **Pivot Column** .
 
3. Pada **Values Column** , pilih **Value** .
 
4. Pastikan **Advanced Options**  > pilih **Don’t Aggregate** .
 
5. Klik **OK** .
**Langkah 5: Kemaskan Nama Lajur**  
1. Tukar nama lajur: 
  - **"Attribute.2"**  → **"BULAN"** .
 
  - **"TERIMA"**  → **"TERIMA BULAN INI"** .
 
  - **"TABUR"**  → **"TABUR BULAN INI"** .
**Langkah 6: Simpan & Gunakan Data**  
1. Pergi ke tab **Home** .
 
2. Klik **Close & Load**  untuk memasukkan data yang telah diproses ke dalam Excel.
Sekarang, anda akan mendapat jadual dalam format yang diinginkan secara dinamik menggunakan **Power Query** . 🎯
