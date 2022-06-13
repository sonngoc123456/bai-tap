function yes() {
    alert('toi cung vay');
}
function no() {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight
    document.getElementById('no').style.left = x + 'px';
    document.getElementById('no').style.top = y + 'px';
}