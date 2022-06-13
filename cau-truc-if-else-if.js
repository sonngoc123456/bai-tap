let nhap = prompt("enter the Name");
if (nhap == 'admin') {
    let password = prompt("nhap pass");
    if(password == 'themaster') {
        alert("welcome");
    }else if(password == null) {
        alert("Canceled");
    }else {
        alert("wrong password");
    }
}else if (nhap == null) {
    alert("Canceled");
}else {
    alert("i don't now you");
}