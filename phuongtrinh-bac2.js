function sum() {
    let a = +document.getElementById('a').value;
    let b = +document.getElementById('b').value;
    let c = +document.getElementById('c').value;
    delta = (b * b - 4 * a * c)
    if (a == 0) {
        document.getElementById('result').innerHTML = "khong phai phuong trinh bac 2";
    } else {
        if (delta > 0) {
            document.getElementById('result').innerHTML = "phuong trinh co hai nghiem";
            x1 = (-b - Math.sqrt(delta)) / (2 * a);
            x2 = (-b + Math.sqrt(delta)) / (2 * a);
            document.getElementById('result').innerHTML = "Nghiem x = " + x1 + " Nghiem y = " + x2;
        } else
            if (delta < 0) {
            document.getElementById('result').innerHTML = "phuong trinh vo nghiem";
        } else {
            x1 = x2 = -b / (2 * a).toFixed('2');
            document.getElementById('result').innerHTML = "phuong trinh co nghiem kep";

            document.getElementById('result').innerHTML = "Nghiem x1=x2 = " + x1 2+ " Nghiem y = " + x;
        }
    }
}