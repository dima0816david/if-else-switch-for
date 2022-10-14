"use strict";

// Mantiqiy amallar (if, else);

// 1-masala:

// let a = 216;
// if (a >= 0) {
//     console.log('Musbat son');
// }   else {
//     console.log('Manfiy son');
// }

// 2-masala:

// let a = 29;
// if (a % 2 > 0) {
//     console.log('Toq son')
// }   else {
//     console.log('Juft son');
// }

// 3-masala:

// let a = 146;
// if (a % 2 > 0) {
//     console.log('Toq son')
// }   else {
//     console.log('Juft son');
// }

// 4-masala:

// let a = 7;
// let b = 5;
// if (a > 0 && b > 0) {
//     console.log('TRUE')
// }   else {
//     console.log('FALSE');
// }

// 5-masala:

// let a = 7;
// let b = 6;
// let c = 5;
// if (a > b && b > c) {
//     console.log('TRUE')
// }   else {
//     console.log('FALSE');
// }

// 6-masala:

// let a = 7;
// let b = 6;
// let c = 5;
// if (a > b && b > c) {
//     console.log('TRUE')
// }   else {
//     console.log('FALSE');
// }

// 7-masala:

// let a = 9;
// let b = 50;
// if (a % 2 > 0 && b % 2 > 0) {
//     console.log('a va b toq sonlar')
// }   else if (a % 2 == 0 && b % 2 > 0) {
//     console.log('a son juft, b son toq')
// }   else if (a % 2 > 0 && b % 2 == 0) {
//     console.log('a son toq, b son juft')
// }   else {
//     console.log('a va b juft sonlar');
// }

// 8-masala:

// let a = 216;
// let b = 91;
// let c = 45;
// let d = 978;
// if (a >= 0 && b >= 0 && c >= 0 && d >= 0) {
//     console.log('Barcha sonlar musbat')
// }   else if (a < 0 && b >= 0 && c >= 0 && d >= 0) {
//     console.log('a son manfiy, b,c,d sonlar musbat')
// }   else if(a >= 0 && b < 0 && c >= 0 && d >= 0) {
//     console.log('b son manfiy, a,c,d sonlar musbat')
// }   else if(a >= 0 && b >= 0 && c < 0 && d >= 0) {
//     console.log('c son manfiy, a,b,d sonlar musbat')
// }   else if(a >= 0 && b >= 0 && c >= 0 && d < 0) {
//     console.log('d son manfiy, a,b,c sonlar musbat')
// }   else if(a < 0 && b < 0 && c >= 0 && d >= 0) {
//     console.log('a,b sonlar manfiy, c,d sonlar musbat')
// }   else if(a < 0 && b >= 0 && c < 0 && d >= 0) {
//     console.log('a,c sonlar manfiy, b,d sonlar musbat')
// }   else if(a < 0 && b >= 0 && c >= 0 && d < 0) {
//     console.log('a,d sonlar manfiy, b,c sonlar musbat')
// }   else if (a >= 0 && b < 0 && c < 0 && d >= 0) {
//     console.log('b,c sonlar manfiy, a,d sonlar musbat')
// }   else if (a >= 0 && b < 0 && c >= 0 && d < 0) {
//     console.log('b,d sonlar manfiy, a,c sonlar musbat')
// }   else if (a >= 0 && b >= 0 && c < 0 && d < 0) {
//     console.log('c,d sonlar manfiy, a,b sonlar musbat')
// }   else if (a < 0 && b < 0 && c < 0 && d >= 0) {
//     console.log('a,b,c sonlar manfiy, d son musbat')
// }   else if (a < 0 && b >= 0 && c < 0 && d < 0) {
//     console.log('a,c,d sonlar manfiy, b son musbat')
// }   else if (a >= 0 && b < 0 && c < 0 && d < 0) {
//     console.log('b,c,d sonlar manfiy, a son musbat')
// }   else {
//     console.log('Barcha sonlar manfiy')
// }   

// 9-masala:

// let a = 174;
// let b = 29;
// let c = -131;
// let d = -788;
// if (a >= 0 && b >= 0 && c >= 0 && d >= 0) {
//     console.log('Barcha sonlar musbat')
// }   else if (a < 0 && b >= 0 && c >= 0 && d >= 0) {
//     console.log('a son manfiy, b,c,d sonlar musbat')
// }   else if(a >= 0 && b < 0 && c >= 0 && d >= 0) {
//     console.log('b son manfiy, a,c,d sonlar musbat')
// }   else if(a >= 0 && b >= 0 && c < 0 && d >= 0) {
//     console.log('c son manfiy, a,b,d sonlar musbat')
// }   else if(a >= 0 && b >= 0 && c >= 0 && d < 0) {
//     console.log('d son manfiy, a,b,c sonlar musbat')
// }   else if(a < 0 && b < 0 && c >= 0 && d >= 0) {
//     console.log('a,b sonlar manfiy, c,d sonlar musbat')
// }   else if(a < 0 && b >= 0 && c < 0 && d >= 0) {
//     console.log('a,c sonlar manfiy, b,d sonlar musbat')
// }   else if(a < 0 && b >= 0 && c >= 0 && d < 0) {
//     console.log('a,d sonlar manfiy, b,c sonlar musbat')
// }   else if (a >= 0 && b < 0 && c < 0 && d >= 0) {
//     console.log('b,c sonlar manfiy, a,d sonlar musbat')
// }   else if (a >= 0 && b < 0 && c >= 0 && d < 0) {
//     console.log('b,d sonlar manfiy, a,c sonlar musbat')
// }   else if (a >= 0 && b >= 0 && c < 0 && d < 0) {
//     console.log('c,d sonlar manfiy, a,b sonlar musbat')
// }   else if (a < 0 && b < 0 && c < 0 && d >= 0) {
//     console.log('a,b,c sonlar manfiy, d son musbat')
// }   else if (a < 0 && b >= 0 && c < 0 && d < 0) {
//     console.log('a,c,d sonlar manfiy, b son musbat')
// }   else if (a >= 0 && b < 0 && c < 0 && d < 0) {
//     console.log('b,c,d sonlar manfiy, a son musbat')
// }   else {
//     console.log('Barcha sonlar manfiy')
// }

// 10-masala:

// let kunlar = +prompt('hafta kunini kiriting');
// if (kunlar == 1) {
//     console.log('Dushanba')
// }   else if (kunlar == 2) {
//     console.log('Seshanba')
// }   else if (kunlar == 3) {
//     console.log('Chorshanba')
// }   else if (kunlar == 4) {
//     console.log('Payshanba')
// }   else if (kunlar == 5) {
//     console.log('Juma')
// }   else if (kunlar == 6) {
//     console.log('Shanba')
// }   else if (kunlar == 7) {
//     console.log('Yakshanba')
// }   else {
//     console.log('1....7 gacha raqamni kiriting')
// }

// 11-masala:

// let kod = +prompt('Telefon raqam kodini kiriting');
// if (kod == 90 || kod == 91) {
//     console.log('Beeline')
// }   else if (kod == 97 || kod == 88) {
//     console.log('UMS')
// }   else if (kod == 33) {
//     console.log('Humans')
// }   else if (kod == 99) {
//     console.log('Uztelekom')
// }   else if (kod == 93) {
//     console.log('Ucell')
// }   else if (kod == 98) {
//     console.log('Perfectum Mobile')
// }   else {
//     console.log('Bunday kodli telefon raqam mavjud emas')
// }

// 12-masala:

// let a = +prompt('Raqam kiriting');
// if (a >= 0) a++;
// else a--; {
//     console.log(a)
// }

// 13-masala:

// let a = +prompt('Raqam kiriting');
// if (a > 0) a+=3;
// else a-=2; {
//     console.log(a)
// }

// 14-masala:

// let a = 109;
// let b = 154;
// if (a > b) {
//     console.log(a)
// }   else {
//     console.log(b)
// }

// 15-masala:

// let a = 34;
// let b = 51;
// let c = 7;
// if (a > b && a > c) {
//     console.log(a)
// } else if (a < b && b > c) {
//     console.log(b)
// } else {
//     console.log(c)
// }

// 16-masala:

// let a = 3;
// let b = 4;
// let c = 7;
// if (a < b && a < c) {
//     console.log(a)
// } else if (a > b && b < c) {
//     console.log(b)
// } else {
//     console.log(c)
// }

// ------------------------------>