function SelamVer(isim:string){

    return "Merhaba " + isim
        
}

let mesaj = SelamVer("eren")
console.log(mesaj)

let sayi:Number
sayi=10
sayi = 10.43


let sehir : string
sehir = "Ankara"
sehir = "İstanbul"
//sehir = 5   //HATA DÖNER. (NORMAL JAVASCRİPTDE OLSA DÖNMEZDİ)

let dogruMu : boolean
dogruMu = false
dogruMu = true


let sayilar : number[] = [1,2,3,4]
let sayilar2 : string[] = ["A","B","C","D"]

let generic : Array<number> = [1,2,3,4]
let generic2 : Array<String> = ["A","B","C","D"]

//let tumdiziler :[number,string] = [1,2,3,4,"A","B","C","D"]

enum Renk{Kırmızı = 1, Siyah,Mavi}
let Renkler:Renk = Renk.Kırmızı

let notSure : any
notSure = "Ankara"
notSure = 5
notSure = true


let selamver2 = (mesaj):void=>{
    console.log("Merhaba " +mesaj)
}

selamver2("Eren")

