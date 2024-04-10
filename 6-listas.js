console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const fortaleza = `Fortaleza`;
// const rioDeJaneiro = `Rio de Janeiro`;

// quando temos um mesmo grupo de variáveis, a melhor forma de se trabalhar com ele, é utilizando listas: array:

// const listaDeCidades = new Array(
//     `Salvador`,
//     `Fortaleza`,
//     `Rio de Janeiro`
// )

// forma mais simples de fazer:
const listaDeCidades = [
    `Salvador`,
    `Fortaleza`,
    `Rio de Janeiro`
]

// adicionando mais itens à lista:
listaDeCidades.push(`Floripa`)

// removendo itens da lista:
listaDeCidades.splice(2,1)
// nesse caso, solicitei a remoção a partir do indice dois, e somente 1 elemento, removendo assim, Rio de janeiro

console.log(listaDeCidades)
// exibindo algum item específico:
console.log(listaDeCidades[2])