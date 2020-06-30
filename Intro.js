function SelamVer(isim) {
    return "Merhaba " + isim;
}
var mesaj = SelamVer("eren");
console.log(mesaj);
var sayi;
sayi = 10;
sayi = 10.43;
var sehir;
sehir = "Ankara";
sehir = "İstanbul";
//sehir = 5   //HATA DÖNER. (NORMAL JAVASCRİPTDE OLSA DÖNMEZDİ)
var dogruMu;
dogruMu = false;
dogruMu = true;
var sayilar = [1, 2, 3, 4];
var sayilar2 = ["A", "B", "C", "D"];
var generic = [1, 2, 3, 4];
var generic2 = ["A", "B", "C", "D"];
//let tumdiziler :[number,string] = [1,2,3,4,"A","B","C","D"]
var Renk;
(function (Renk) {
    Renk[Renk["K\u0131rm\u0131z\u0131"] = 1] = "K\u0131rm\u0131z\u0131";
    Renk[Renk["Siyah"] = 2] = "Siyah";
    Renk[Renk["Mavi"] = 3] = "Mavi";
})(Renk || (Renk = {}));
var Renkler = Renk.Kırmızı;
var notSure;
notSure = "Ankara";
notSure = 5;
notSure = true;
var selamver2 = function (mesaj) {
    console.log("Merhaba " + mesaj);
};
selamver2("Eren");
