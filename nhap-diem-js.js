let vatly = +prompt("Enter the vatly");
let hoahoc = +prompt("Enter the hoahoc");
let sinhhoc = +prompt("Enter the sinhhoc");
let tong = 0;
let tb = 0 ;
 tong = vatly + hoahoc + sinhhoc ;
 tb = (tong / 3).toFixed(2)
 document.write("tong : " + tong);
 document.write('<br>')
document.write("trung binh : " + tb)