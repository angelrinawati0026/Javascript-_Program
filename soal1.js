const prompt = require('prompt-sync')({sigint: true});
const num = prompt('Masukkan nilai x: ');

if (Number(num) < 0){
    console.log("Tidak bisa input bilangan negatif")
}else if(Number(num) % 2 !== 0 ){
    console.log("Tidak bisa input bilangan ganjil")
}else{
    console.log(`akar pangkat 2 dari ${Number(num)} adalah ${Math.sqrt(Number(num))}`)
}
