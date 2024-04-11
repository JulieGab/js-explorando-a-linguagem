console.log(`Trabalhando com loops`);

const listaDeCidades = [
    `Salvador`,
    `Fortaleza`,
    `Rio de Janeiro`
]

const idadeComprador = 18;
const estaAcompanhada = true; 
let temPassagemComprada = false;
const destino = 'Salvador';

console.log('Destinos possíveis:');
console.log(listaDeCidades)

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
while(contador<3){
    if(listaDeCidades[contador] == destino){
        console.log('Destino existente');
    }else{
        console.log('Destino inexistente');
    }
    
    contador += 1; // contador = contador + 1
}

