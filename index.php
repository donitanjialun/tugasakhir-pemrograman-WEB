 <!DOCTYPE html>
<html>
<head>
	<title>Tugas Akhir Pemrograman WEB</title>
	<link rel="stylesheet" type="text/css" href="css2.css"><!--memanggil CSS External--> 
</head>
<body bgcolor="tomato"><!--Warna Background-->
<div class="header">
<h1>Selamat Datang</h1>

<div class="navigasi">
	<nav>
  <ul>
  <li><a href='javascript.html'>Home</a></li><!--hyperlink berupa navigasi menu-->
    <li><a href='index.php'>Php</a></li><!--hyperlink berupa navigasi menu-->
    <li><a href='profile.html'>profile</a></li><!--hyperlink berupa navigasi menu-->
  
  </ul>
</nav>
</div>

<div class="main">
	 <h2>Aplikasi Penyimpanan Data Pada File TXT</h2>  
 <hr>  
 <form action="simpan.php" method="post">  <!--membuat form dan akan disimpan dalam php  bernama simpan , dengan menggunakan post agar tidak terlihat diurl-->
 <table width="100%" border="0">  <!--mengatur ukuran lebar table dan border-->
 <tr> <!-- mmebuat baris table-->
      <td width="150">Isi Nama File   </td>  <!--digunakan untuk mengisi isian table-->
      <td><input type="text" name="nama" required></td>  <!--digunakan untuk mengisi isian table dan diinput dengan tipe text yang menggunakan variabel nama nantinya digunakan pada php pemrosesannya-->
 </tr> 

 <tr> 
      <td width="150" valign="top">Isi Biodata Anda</td>  <!--Mengatur tinggi table dan mengisi isian table-->
      <td><textarea name="isi" cols="50" rows="10" required></textarea></td> <!--digunakan untuk mengisi isian table dan diinput dengan tipe text yang menggunakan variabel isi nantinya digunakan pada php pemrosesannya--> 
 </tr> 


 <tr>  
      <td width="150"></td>  
      <td><input type="submit" value="simpan"></td>  <!--membuat tombol submit dengan variabel simpan yang akan digunakan pada php pemrosesannya-->
 </tr>  
 </table>  
 </form>  

</div>

<div class="mainkiri">
	<h1>Penggunaan PHP</h1>
	

	


</div>

<div class="footer">
	<p>&copy Doni Tan Jialun </p>
</div>

</html>