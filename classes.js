var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Ev = /** @class */ (function () {
    function Ev(odaSayisi, pencereSayisi, kat) {
        this.odaSayisi = odaSayisi;
        this.pencereSayisi = pencereSayisi;
        this.kat = kat;
    }
    Ev.prototype.YemekYe = function () {
        console.log(this.kat + " Katlı Evde Yemek yenildi");
    };
    return Ev;
}());
var ev1 = new Ev(3, 6, 4);
ev1.YemekYe();
var Kisi = /** @class */ (function () {
    function Kisi() {
    }
    Kisi.prototype.Ekle = function () {
        console.log("Kişi Kaydedildi");
    };
    return Kisi;
}());
var Personel = /** @class */ (function (_super) {
    __extends(Personel, _super);
    function Personel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Personel.prototype.SatisYap = function () {
        console.log("Satış Yapıldı");
    };
    return Personel;
}(Kisi));
var Musteri = /** @class */ (function (_super) {
    __extends(Musteri, _super);
    function Musteri() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Musteri.prototype.SatınAl = function () {
        console.log("Ürün Satın Alındı");
    };
    return Musteri;
}(Kisi));
var personel1 = new Personel();
personel1.ad = "Eren";
personel1.departman = "Satış";
personel1.yas = 23;
personel1.Ekle();
personel1.SatisYap();
var musteri1 = new Musteri();
musteri1.ad = "Ahmet";
musteri1.yas = 30;
musteri1.adres = "Ankara";
musteri1.Ekle();
musteri1.SatınAl();
