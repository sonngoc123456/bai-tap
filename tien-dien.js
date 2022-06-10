function Tinhtien() {
    let sodien = document.getElementById('so dien').value;
    if(sodien <= 50) {
        let tien = sodien * 1600;
        document.getElementById('dongia').innerHTML = 'ban dang o bac 1 voi gia 1600đ/1so';
        document.getElementById('tien').innerHTML = 'so tien phai tra cho '+ sodien +' so là: '+ tien + 'VNĐ';
    }else if(sodien <= 100) {
        let tien = (50*1600) +((sodien - 50)*1700);
        document.getElementById('dongia').innerHTML = 'ban dang o bac 2 voi gia 1700đ/1so';
        document.getElementById('tien').innerHTML = 'so tien phai tra cho '+ sodien +' so là: '+ tien + 'VNĐ';
    }else if(sodien <= 200) {
        let tien = (50*1600)+(50*1700) +((sodien - 100)*2000);
        document.getElementById('dongia').innerHTML = 'ban dang o bac 3 voi gia 2000đ/1so';
        document.getElementById('tien').innerHTML = 'so tien phai tra cho '+ sodien +' so là: '+ tien + 'VNĐ';
    }else if(sodien <= 300) {
        let tien = (50*1600)+(50*1700)+(100*2000) +((sodien - 200)*2500);
        document.getElementById('dongia').innerHTML = 'ban dang o bac 4 voi gia 2500đ/1so';
        document.getElementById('tien').innerHTML = 'so tien phai tra cho '+ sodien +' so là: '+ tien + 'VNĐ';
    }else if(sodien <= 400) {
        let tien = (50*1600)+(50*1700)+(100*2000)+(100*2500) +((sodien - 300)*2800);
        document.getElementById('dongia').innerHTML = 'ban dang o bac 5 voi gia 2800đ/1so';
        document.getElementById('tien').innerHTML = 'so tien phai tra cho '+ sodien +' so là: '+ tien + 'VNĐ';
    }else {
        let tien = (50*1600)+(50*1700)+(100*2000)+(100*2500)+(100*2800) +((sodien - 400)*2900);
        document.getElementById('dongia').innerHTML = 'ban dang o bac 6 voi gia 2900đ/1so';
        document.getElementById('tien').innerHTML = 'so tien phai tra cho '+ sodien +' so là: '+ tien + 'VND';
    }
}
