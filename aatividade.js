let a = 0;

let b = 20;
let resultado = 0;
let par;

for (let i = a; i <= b; i++) {
    if (i % 2 === 0) {
        par = i;
        resultado = par + resultado;
    }

}
console.log(resultado);





