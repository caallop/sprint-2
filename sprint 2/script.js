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
