// Diferenças quanto ao objeto this
function minhaFuncao() {
  this.name = 'Mateus';
}

console.log(new minhaFuncao()); // opt: { name: 'Mateus' }

const minhaArrowFunction = () => {
  this.name = 'Carlos';
};

console.log(minhaArrowFunction()); // opt: undefined
console.log(new minhaArrowFunction()); // opt: TypeError: minhaArrowFunction is not a constructor
console.log(this); // opt: { name: 'Mateus' }; (this referente ao objeto Node)


function minhaFuncao2() {
  this.name = 'Mateus';

  const minhaArrowFunction2 = () => {
    this.lastname = 'Silva';
  };

  minhaArrowFunction2();
}

console.log(new minhaFuncao2()); // opt: { name: 'Mateus', lastname: 'Silva' }
console.log(this); // opt: { }




// Diferenças quanto ao objeto arguments
function soma(...argumentos) {
  console.log(Object.values(arguments)); // opt: [ 1, 2, 3, 4, 5, 6, 7, 'Mateus' ] (facilitando a visualização)
  console.log(argumentos); // opt: [ 1, 2, 3, 4, 5, 6, 7, 'Mateus' ]
}

soma(1, 2, 3, 4, 5, 6, 7, 'Mateus');


const somaArrowFunction = (...argumentos) => {
  console.log(arguments); // opt:NodeArguments { ... }
  console.log(argumentos); // opt: [ 1, 2, 3, 4, 5, 6, 7, 'Mateus' ]
}

somaArrowFunction(1, 2, 3, 4, 5, 6, 7, 'Mateus');




// Formas de declarar arrow functions
// Função que recebe um corpo (padrão)
const funcao = () => {
	console.log('Corpo da função');
}

// Função que apenas retorna um valor
// Utilizando a short syntax
const funcao = () => 'Hello World';

// Utilizando parênteses - Retornando um operador ternário
const verificaNumero = (number) => (
	number >= 10 
		? 'Maior ou igual a 10' 
		: 'Menor que 10'
);

// Utilizando parênteses - Retornando um objeto
const getUser = () => (
	{ 
		id: 123, 
		name: 'Mateus' 
	}
);
