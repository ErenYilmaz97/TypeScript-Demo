class Ev{

    odaSayisi:Number
    pencereSayisi:Number
    kat:Number

    constructor(odaSayisi:number,pencereSayisi:number,kat:number){
        this.odaSayisi = odaSayisi
        this.pencereSayisi = pencereSayisi
        this.kat = kat
    }

    YemekYe(){
        console.log(this.kat +" Katlı Evde Yemek yenildi")
    }
}

let ev1 = new Ev(3,6,4)
ev1.YemekYe()

class Kisi{

    ad:string
    yas:number
    

    Ekle(){
        console.log("Kişi Kaydedildi")
    }
}


class Personel extends Kisi{

    departman:string
    

    SatisYap(){
        console.log("Satış Yapıldı")
    }
}

class Musteri extends Kisi{

    adres:string
    

    SatınAl(){
        console.log("Ürün Satın Alındı")
    }
}


let personel1 = new Personel()
personel1.ad = "Eren"
personel1.departman = "Satış"
personel1.yas = 23
personel1.Ekle()
personel1.SatisYap()

let musteri1 = new Musteri()
musteri1.ad = "Ahmet"
musteri1.yas = 30
musteri1.adres = "Ankara"
musteri1.Ekle()
musteri1.SatınAl()


