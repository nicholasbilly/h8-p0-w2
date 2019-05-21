// nomor 1

var i = 2;
var code = 'I love coding';

console.log('LOOPING PERTAMA');

while (i <= 20) {
    console.log(i + ' - ' + code);
    var i = i + 2;
}

var j = 20;
var developer = 'I will become fullstack developer';

console.log('LOOPING KEDUA');

while (j >= 2) {
    console.log(j + ' - ' + developer);
    var j = j - 2;
}

// nomor 2 

console.log('LOOPING PERTAMA');
for (var k = 1; k <= 20; k++) {
    console.log(k + ' - ' + code);
}

console.log('LOOPING KEDUA');
for (var h = 20; h >= 1; h--) {
    console.log(h + ' - ' + developer);
}

// nomor 3

for (var a = 1; a <= 100; a++) {
    if (a % 2 === 0) {
        console.log('counter sekarang = ' + a + ' adalah GENAP');
    } else {
        console.log('counter sekarang = ' + a + ' adalah GANJIL');
    }
}
console.log();

for (var b = 1; b <= 100; b++) {
    if (b % 3 === 0) {
        console.log('counter sekarang = ' + b + ' kelipatan 3');
    } else {
        console.log('counter sekarang = ' + b);
    }
    var b = b + 1;
}
console.log();

for (var c = 1; c <= 100; c++) {
    if (c % 6 === 0) {
        console.log('counter sekarang = ' + c + ' kelipatan 6');
    } else {
        console.log('counter sekarang = ' + c);
    }
    var c = c + 4;
}

console.log();

for (var d = 1; d <= 100; d++) {
    if (d % 10 === 0) {
        console.log('counter sekarang = ' + d + ' kelipatan 10');
    } else {
        console.log('counter sekarang = ' + d);
    }
    var d = d + 8;
}