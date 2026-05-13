// Declaração dos elementos

const infoBotao = document.querySelector('.info_botao')
const info = document.querySelector('.info')

const acessibilidade = document.querySelector('.acessibilidade')
const roda = document.querySelector('.roda')

const flash = document.querySelector('.flash')
const timer = document.querySelector('.timer')
const foto = document.querySelector('.foto')
const galeria = document.querySelector('.galeria')

// Início

info.style.display = 'none'
roda.style.display = 'none'

const nomeUsuario = prompt('Digite seu nome:')

if(nomeUsuario){
    alert(`Bem-vindo(a), ${nomeUsuario}!`)
}

// Botão de info

infoBotao.addEventListener('click', () => {

    if(info.style.display === 'none'){
        info.style.display = 'flex'
    }
    else{
        info.style.display = 'none'
    }

})

// Acessibilidade

acessibilidade.addEventListener('click', () => {

    if(roda.style.display === 'none'){
        roda.style.display = 'flex'

        alert('Modo acessibilidade ativado!')

        detectarSom()
    }
    else{
        roda.style.display = 'none'
    }

})

// Flash

flash.addEventListener('click', () => {

    document.body.classList.toggle('flashAtivo')

    alert('Flash ativado!')

})