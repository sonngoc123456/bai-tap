let check_1 = document.getElementById('click1')
let check_2 = document.getElementById('click2')
let check_3 = document.getElementById('click3')
function check1(){
    if(check_1.checked && check_2.checked){
        check_3.checked = false
    }
}
function check2(){
    if(check_2.checked && check_3.checked){
        check_1.checked = false
    }
}
function check3(){
    if(check_1.checked && check_3.checked){
        check_2.checked = false
    }
}