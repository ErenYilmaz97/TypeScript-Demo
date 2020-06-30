function Topla(sayi1:number,sayi2:number):number{

    return sayi1+sayi2
    
}

console.log("İki Sayının Toplamı = "+Topla(5,15))

let Carp = (sayi1:number,sayi2:number):number=>{
    return sayi1 * sayi2
}

console.log("İki Sayının Çarpımı = " +Carp(2,3))


let Cikar = (sayi1:number,sayi2:number=0):number=>{
    return sayi1-sayi2
}

console.log(Cikar(5,2))   //sayi1 = 5; sayi2 = 2
console.log(6)            //sayi1 = 6; sayi2 = 0

let Bol = (sayi1:number,sayi2?:number):number=>{  
    if(sayi2){
        return sayi1 / sayi2
    }
    return sayi1
}

console.log("İki Sayının Bölümü = " +Bol(15,5))
console.log("İki Sayının Bölümü = " +Bol(20))