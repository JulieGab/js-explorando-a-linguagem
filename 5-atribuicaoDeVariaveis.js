console.log('Trabalhando com atribuição de variáveis');

const idade = 28;
let primeiroNome = 'Gabi';
const sobrenome = 'Sá';

console.log(primeiroNome, sobrenome);
// a vírgula também serve como separador
// retorno: Gabi Sá
// mesmo que: console.log(nome + ' ' + sobrenome)

console.log(`meu nome é ${primeiroNome} ${sobrenome}`);
// esse é o meio mais utilizado hoje, por meio da interpolação utilizando ${}.

// podemos também sobrescrever variáveis, dando um novo valor pra ela:
nomeCompleto = primeiroNome + ' '+ sobrenome;
// repare que só foi possível porque a variável foi declarada como let, com "const" não seria possíve, por se tratar de uma constante.
console.log(nomeCompleto);

let minhaIdade; // declarando a variável
minhaIdade = 28 // atribuindo valor
// diferente do const, pode ser atribuído em uma linha diferente. 
minhaIdade = minhaIdade+1
console.log(minhaIdade)