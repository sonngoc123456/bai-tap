let weight = prompt('nhap can nang (KG)');
let height = prompt('mhap chieu ca (M)');
bmi = weight /(height * height);
if (bmi < 18.5) {
    document.write('gay')
}else if (bmi < 25) {
    document.write('binh thuong')
}else if (bmi < 30) {
    document.write('hoi beo')
}else {
    document.write('beo')
}