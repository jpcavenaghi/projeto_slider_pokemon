//linka as setas avançar e voltar pelo html
const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');

const cartoes = document.querySelectorAll('.cartao');
let cartaoAtual = 0;

//funções
function esconderCartaoSelecionado(){
    const cartaoselecionado = document.querySelector('.selecionado');
    cartaoselecionado.classList.remove('selecionado');
}

function mostrarCartao (indiceCartao){
    cartoes[indiceCartao].classList.add('selecionado');
}

//identifica o clique de um usuario na seta avançar
btnAvancar.addEventListener('click',function(){
//não deixa o código avançar depois do fim da execução
if(cartaoAtual === cartoes.length -1) return

esconderCartaoSelecionado();

//faz aparecer o próximo card da lista
cartaoAtual++;
mostrarCartao(cartaoAtual);
})

//botão voltar
btnVoltar.addEventListener('click',function(){
   
    if(cartaoAtual === 0) return;

    esconderCartaoSelecionado();

    cartaoAtual--;
    mostrarCartao(cartaoAtual);
})