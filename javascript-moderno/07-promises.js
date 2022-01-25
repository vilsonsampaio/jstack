const apiCall = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Sucesso!');
    // reject('Erro!');
  }, 2000);
});

// apiCall
//   .then((resposta) => {
//     console.log(resposta);
//   })
//   .catch((erro) => {
//     console.log(erro);
//   })
// ;

// console.log('Depois da Promise...');

async function run() {
  try {
    const resposta = await apiCall;
    console.log(resposta);
    
    console.log('Depois da Promise...');
  } catch(erro) {
    console.log(erro);
  }
}

run();
