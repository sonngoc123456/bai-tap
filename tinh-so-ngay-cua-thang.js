function tinhngay() {
    let nhap = +document.getElementById('nhapthang').value;
    switch (nhap) {
        case 4:
        case 6:
        case 9:
        case 11:
            document.getElementById('songay').innerHTML = 'thang ' + nhap + ' co 31 ngay';
            break;
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            document.getElementById('songay').innerHTML = 'thang '+ nhap + " co 30 ngay";
            break;
        default:
            document.getElementById('songay').innerHTML ='thang ' + nhap + " co 28 ngay hoac 29 ngay";
    }
}