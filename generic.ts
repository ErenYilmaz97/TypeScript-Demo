function Yazdir<T>(x:T):T{
    return x
}

let yazdir = Yazdir<number>(5)
let yazdir2 = Yazdir<String>("Eren")

console.log(yazdir)
console.log(yazdir2)




