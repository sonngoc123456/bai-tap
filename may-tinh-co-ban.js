let hienso = document.getElementById('hienso');
function layphim(value) {
    hienso.value += value;
}
function result() {
    let result = eval(hienso.value);
     hienso.value = result;
}
function xoa() {
    hienso.value = '';
}