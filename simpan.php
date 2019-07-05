<?php  
 $nama     = trim($_POST[nama]);/*mengambil data nama dari php yang digunakan untuk mengisiform*/
 $namafile = "$nama.txt";  /*saat sudah diisi , variabel nama tadi digunakan untuk nama file notepad nanti*/
 $isi      = trim($_POST[isi]);/*tempat penyimpanan data yang sudah diisi di php input*/

 $file	   = fopen($namafile,"w");  /*membuka file lalu write*/
 fwrite($file,$isi);  /*menulis pada variabel file tadi*/

 fclose($file);  /*menutup file varibel tadi ( wajib )*/
 echo "<h2>Hasil Penyimpanan Data</h2>";  /*Tulisan ukuran h2*/
 echo "Hasil : <a href='$namafile'> $namafile </a>";  /*output notepad akan dipanggil disini*/
 ?>  