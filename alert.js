function alert() {
  var jam = new Date().getHours(); /*digunakan untuk mengambil data date dan jam sesuai default pc*/ 

  var kata;/*variabel kata*/ 

  var variabelnama = prompt("Mohon Masukkan Nama:", "");/*mengisi variabel nama , dengan prompt*/ 
  if (variabelnama == null || variabelnama == "") {/*jika nama kosong , maka akan muncul  user tidak mengisi buku tamu*/ 
    kata = "User Tidak Mengisi Buku Tamu :(( Mari Dicoba Javascript nyaa ^o^ ";
  } else if (jam < 18 ||  j) {/*jika jam kurang dari 18.00*/ 
    kata = "Hello  " + " Good day " + variabelnama + " Apa kabar? "+" \n Mari dicoba Javascript Kalkulator sebelah ya ^o^";
  }
    else {/*else maka dihitung sudah malam*/ 
      kata = "Hello  " + " Good evening " + variabelnama + " Apa kabar? "+" \n Mari dicoba Javascript Kalkulator sebelah ya ^o^";
    }
  document.getElementById("demo").innerHTML = kata;/*menggunakan value demo tadi agar jalan jsnya , Id harus sesuai dengan yang di HTML*/ 
 }


  
