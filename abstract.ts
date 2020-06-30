abstract class KrediBase{

    constructor(){

    }
    
    Kaydet():void{
        console.log("Kaydedildi")
    }

    abstract hesapla():void;
}

class TuketiciKredisi extends KrediBase{

    hesapla():void{
        console.log("Tüketici Kredisi Hesaplandı")
        //TÜKETİCİ KREDİSİNİ HESAPLAYAN KODLAR
    }

}

class KonutKredisi extends KrediBase{

    hesapla():void{
        console.log("Konut Kredisi Hesaplandı")
        //KONUT KREDİSİNİ HESAPLAYAN KODLAR
    }
}



class KrediManager{

    Kaydet(nesne:KrediBase):void{
        nesne.Kaydet()
    }

    Hesapla(nesne:KrediBase):void{

        nesne.hesapla()
    }
}

let nesne1 : KrediBase = new TuketiciKredisi()  //NESNE1 TUKETICI KREDİSİ
let nesne2 : KrediBase = new KonutKredisi()     //NESNE2 KONUT KREDİSİ
let krediManager = new KrediManager()


krediManager.Kaydet(nesne1)
krediManager.Kaydet(nesne2)
krediManager.Hesapla(nesne1)
krediManager.Hesapla(nesne2)





