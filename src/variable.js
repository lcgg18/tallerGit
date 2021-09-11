var nueva = "hola"

//let nueva1 ="hola mundo"

// lo muestra en consola
console.log(nueva) // hola

//lo muestra en la pagina
//document.write(nueva)

if(true){
    let nueva = "hola mundo"
    console.log(nueva) //hola mundo
}
console.log(nueva) // hola

const server ="192.168.0.1"

console.log(server)

let numero = 1.5;
let dogs ="puppy";
let boll = true;

var sym = Symbol("foot");

var sym1 = "foof";

if(numero > 0 && numero <= 1.5){
    document.write(numero)
}

function nueva(numero1, numero2, stade = false){
    
    result = numero1 * numero2

    if(stade == false){
        console.log(result)
    }else{
        alert(result)
    }
}

var arr = ["manzana", "pera", "banana"]

for(let i=0; i < arr.length; i++){
    console.log(arr[i])
}

arr.forEach((arr,i)=>{
    document.write(arr, i)
})

function f_nueva(numero1, numero2, stade = false){
    
    return numero1*numero2
   
}

var mult = function(numero1,numero2){
    
    return numero1*numero2
    
}