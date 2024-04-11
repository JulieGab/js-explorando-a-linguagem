console.log(`Trabalhando com condicionais`);

const listaDeCidades = [
    `Salvador`,
    `Fortaleza`,
    `Rio de Janeiro`
]

const idadeComprador = 18;
const estaAcompanhada = true; 
const temPassagemComprada = true;

console.log('Destinos possíveis:');
console.log(listaDeCidades)

// if(idadeComprador >= 18){
//     console.log('Comprador maior de idade');   
//     listaDeCidades.splice(1,1)
// } else if(estaAcompanhada){
//         console.log('Comprador está acompanhado');  
//         listaDeCidades.splice(1,1) 
// } else{
//         console.log('Comprador menor de idade, não pode comprar.');
// }


console.log(listaDeCidades)

// operadores lógicos:
// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador == 18); // atribuição

if (idadeComprador >= 18 || estaAcompanhada == true){ // concatenar operadores lógicos
    console.log('Boa viagem!');   
    listaDeCidades.splice(1,1);
} else {
    console.log('Comprador menor de idade, não pode comprar.');
}

console.log("Embarque: \n");
if(idadeComprador >= 18 && temPassagemComprada){
    console.log('Boa viagem!')
}else{
    console.log('Menor de idade, não pode embarcar!');
}

console.log(listaDeCidades);
