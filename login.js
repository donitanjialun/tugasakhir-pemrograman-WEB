var username = prompt("Username:");/*mengisi username pada variabel usernamer*/
var password = prompt("Password:");/*mengisi password pada variabel password*/

if(username == "donitanjialun" && password == "tugasbosquu"){/*ini syarat agar bisa login */
    document.write("<h1>Selamat datang!</h1>");/*jika benar muncul begini*/
} else {
    document.write("<p>Password salah, Isi Buku Tamu Yaaah ^^!</p>");/*jika salah isi buku pengunjung*/
}
