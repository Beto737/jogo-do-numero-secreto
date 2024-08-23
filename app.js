    let listaDeNumerosSorteados [];
    let numeroLimite = 10;
    let numeroSecreto = gerarNumeroAleatorio();
    let tentativas = 1;
    
    function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelecto (tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Protuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
  exibirTextoNaTela('h1', 'Jogo do número secreto');
  exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verficarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
      exibirTextoNaTela('h1', 'Acertou!');
      let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tenntativa';
      let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
      exibirTextoNaTela('p', mensagemTentativas);
      document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
      if(chute > numeroSecreto) {
        exibirTextoNaTela ('p', 'O número secreto é menor');
      } else{
        exibirTextoNaTela('p', 'O número secreto é maior');
      }
      tentativas++;
      limparCampo();
    }
     
}

function gerarNumeroAleatorio(params) {
  letNumeroEscolhido = parseInt(Math.random() * 10 + 1); 
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

if (quantidadeDeElementosNaLista == 10){
  listaDeNumerosSorteados = [];
}

  if (listaDeNumerosSorteados.includes(letNumeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else{
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log (listaDeNumerosSorteados);
  return numeroEscolhido;
  }
}
function limparCampo() {
  chute = document.querySelector('input');
  chute.value = '';
}

function reiniciarJogo(){
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true);
}