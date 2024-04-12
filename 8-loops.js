console.log(`Trabalhando com loops`);

const listaDeCidades = [
    `Salvador`,
    `Fortaleza`,
    `Rio de Janeiro`
]

const idadeComprador = 18;
const estaAcompanhada = true; 
let temPassagemComprada = false;
const destino = 'Curitiba';

console.log('Destinos possíveis:');
console.log(listaDeCidades)

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false

while(contador<3){
    if(listaDeCidades[contador] == destino){
        destinoExiste = true;
        break;
    }

    contador += 1; // contador = contador + 1
}

console.log('Destino existe: ', destinoExiste)