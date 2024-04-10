console.log('Trabalhando com atribuição de variáveis');

const idade = 28;
let nome = 'Gabi';
const sobrenome = 'Sá';

console.log(nome, sobrenome);
// a vírgula também serve como separador
// retorno: Gabi Sá
// mesmo que: console.log(nome + ' ' + sobrenome)

console.log(`meu nome é ${nome} ${sobrenome}`);
// esse é o meio mais utilizado hoje, por meio da interpolação utilizando ${}.

// podemos também sobrescrever variáveis, dando um novo valor pra ela:
nome = nome + ' '+ sobrenome;
// repare que só foi possível porque a variável foi declarada como let, com "const" não seria possíve, por se tratar de uma constante.
console.log(nome)