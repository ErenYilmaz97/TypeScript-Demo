function Topla(sayi1, sayi2) {
    return sayi1 + sayi2;
}
console.log("İki Sayının Toplamı = " + Topla(5, 15));
var Carp = function (sayi1, sayi2) {
    return sayi1 * sayi2;
};
console.log("İki Sayının Çarpımı = " + Carp(2, 3));
var Cikar = function (sayi1, sayi2) {
    if (sayi2 === void 0) { sayi2 = 0; }
    return sayi1 - sayi2;
};
console.log(Cikar(5, 2)); //sayi1 = 5; sayi2 = 2
console.log(6); //sayi1 = 6; sayi2 = 0
var Bol = function (sayi1, sayi2) {
    if (sayi2) {
        return sayi1 / sayi2;
    }
    return sayi1;
};
console.log("İki Sayının Bölümü = " + Bol(15, 5));
console.log("İki Sayının Bölümü = " + Bol(20));
