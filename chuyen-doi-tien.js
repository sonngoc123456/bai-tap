
function chuyendoi(){
    let sotienvao = +document.getElementById('onhapva').value
    let chuyen1 = document.getElementById('chuyen1').value
    let chuyen2 = document.getElementById('chuyen2').value
    if(chuyen1==chuyen2){
     document.getElementById('result').innerHTML='result ' + sotienvao + chuyen2;
    }else {
        if (chuyen1=='usd' && chuyen2=='vnd'){
            document.getElementById('result').innerHTML='result ' + (sotienvao*23000) + chuyen2
        }else {
            document.getElementById('result').innerHTML='result ' + (sotienvao/23000) + chuyen2
        }
    }
}