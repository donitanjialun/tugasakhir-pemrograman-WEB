function hitung(){/*nama function yang digunakan untuk mengisi script js nya 
	yang akan dipanggil di html*/

var myForm = document.formkalkulator;/*variabel myform yang akan diisi dengan
document form kalkulator yang dihtml agar terhubung dipanggil kembali*/
var x=eval(myForm.x.value);/*variabel x yang ditampung berasal dari inputan 
data di html*/
var y=eval(myForm.y.value);/*variabel y yang ditampung berasal dari inputan 
data di html*/
var pil= myForm.opsi.value;/*variabel pil yang ditampung berasal dari pilihan
opsi di html*/
if (pil == "tambah") {/*jika pilihan tambah maka akan melakukan proses x+y 
	sesuai data inputan*/
var z = x + y;
 }else if (pil == "kurang") {/*jika pilihan kurang maka akan melakukan proses x-y 
	sesuai data inputan*/
var z = x - y;
 } else if (pil == "kali") {/*jika pilihan kali maka akan melakukan proses x*y 
	sesuai data inputan*/
var z = x * y;
 } else if (pil == "bagi") {/*jika pilihan bagi maka akan melakukan proses x*y 
	sesuai data inputan*/
var z = x / y;
 }
 myForm.hasil.value = z;/*nantinya output akan disimpan ke variabel z*/
 myForm.x.value = "";/*input form x awalan masih kosong (input sendiri)*/
 myForm.y.value = "";/*input form x awalan masih kosong (input sendiri)*/
}
function resetForm(){/*menreset form calculator tadi*/
document.formkalkulator.reset();/*disini akan dihapus data yang telah diinputkan dari nama 
formkalkulator tadi*/
}