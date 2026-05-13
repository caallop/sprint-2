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

// Timer

timer.addEventListener('click', () => {

    alert('Foto será tirada em 3 segundos!')

    setTimeout(() => {
        tirarFoto()
    }, 3000)

})

// Foto

foto.addEventListener('click', () => {
    tirarFoto()
})

function tirarFoto(){

    alert('📸 Foto tirada!')

    criarNotificacao('Foto salva na galeria')

}

// Galeria

const imagens = [
    './img/foto1.jpg',
    './img/foto2.jpg',
    './img/foto3.jpg'
]

let indice = 0

function slideshow(){

    indice++

    if(indice >= imagens.length){
        indice = 0
    }

    const imagemGaleria = document.querySelector('.galeria img')

    if(imagemGaleria){
        imagemGaleria.src = imagens[indice]
    }

}

setInterval(slideshow, 4000)

// Detectar som

const sons = [
    'Sirene',
    'Campainha',
    'Bebê chorando',
    'Buzina'
]

function detectarSom(){

    const som = sons[Math.floor(Math.random() * sons.length)]

    mostrarAlertaVisual(som)

}

// Roda 

function mostrarAlertaVisual(som){

    const alerta = document.createElement('div')

    alerta.classList.add('alertaVisual')

    alerta.innerText = `⚠ Som detectado: ${som}`

    document.body.appendChild(alerta)

    if(som === 'Sirene'){
        document.body.style.backgroundColor = '#ff4d4d'
    }

    if(som === 'Campainha'){
        document.body.style.backgroundColor = '#ffd54f'
    }

    if(som === 'Bebê chorando'){
        document.body.style.backgroundColor = '#64b5f6'
    }

    if(som === 'Buzina'){
        document.body.style.backgroundColor = '#81c784'
    }

    setTimeout(() => {

        alerta.remove()

        document.body.style.backgroundColor = ''

    }, 3000)

}

// Histórico

function criarNotificacao(texto){

    const notificacao = document.createElement('div')

    notificacao.classList.add('notificacao')

    notificacao.innerText = texto

    document.body.appendChild(notificacao)

    setTimeout(() => {
        notificacao.remove()
    }, 3000)

}
