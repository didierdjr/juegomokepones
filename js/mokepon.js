const botonMascotaJugador = document.getElementById('boton-mascota')
const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('Reiniciar')


const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const spanMascotaJugador = document.getElementById('mascota-jugador')

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const secctionMensaje = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const nuevoAtaqueDelJugador = document.createElement('p')
const nuevoAtaqueDelEnemigo = document.createElement('p')
const botonReiniciar = document.getElementById('boton-reiniciar')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const contenedorTarjetas = document.getElementById('contenedorTarjetas')

const contenedorAtaques =document.getElementById("contenedorAtaques")

let ataqueJugador = []
let mokepones = []  //arrays o arreglos dentro de estos van los tipos de objetos que tendre en el array
let ataqueEnemigo = []
let inputHipodoge
let inputCapipepo 
let inputRatigueya 
let vidasEnemigo = 3
let vidasJugador = 3
let opcionDeMokepones
let mascotaJugador
let ataquesMokepon
let ataquesMokeponEnemigo
let botonFuego 
let botonAgua
let botonTierra
let botonesAtaque = []
let botones
let indexAtaqueJugador
let indexAtaqueEnemigo


// clases y como crearlas
class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}



let hipodoge = new Mokepon('Hipodoge', './Assets/mokepons_mokepon_hipodoge_attack.png', 5 )

let capipepo = new Mokepon('Capipepo', './Assets/mokepons_mokepon_capipepo_attack.png', 5)

let ratigueya = new Mokepon('Ratigueya', './Assets/mokepons_mokepon_ratigueya_attack.png', 5)

mokepones.push(hipodoge, capipepo, ratigueya) //metodo push para insertar en el arreglo cada uno de los objetos

hipodoge.ataques.push(
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '☘️', id: 'boton-tierra'},
) //obejtos literarios son objetos sin clases


capipepo.ataques.push(
    {nombre: '☘️', id: 'boton-tierra'},
    {nombre: '☘️', id: 'boton-tierra'},
    {nombre: '☘️', id: 'boton-tierra'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-tierra'},
) //obejtos literarios son objetos sin clases


ratigueya.ataques.push(
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '☘️', id: 'boton-tierra'},
) //obejtos literarios son objetos sin clases


function iniciarJuego(){
    
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    sectionSeleccionarAtaque.style.display = 'none'

    mokepones.forEach((mokepon)  => { 

        opcionDeMokepones = `<input type='radio' name='mascota' id= ${mokepon.nombre} />
        <label class="tarjeta-de-mokepon" for= ${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>`
        
        contenedorTarjetas.innerHTML += opcionDeMokepones
        //templates literarios para implementar HTML con valores de nuestras variables, templates literarios

        inputHipodoge = document.getElementById('Hipodoge')
        inputCapipepo = document.getElementById('Capipepo')
        inputRatigueya = document.getElementById('Ratigueya')

    }) // este metodo ayuda a iterar o mevernos dentro de los objetos y sus atributos que tiene este arreglo//por cada mokepon que existe has lo siguiente:

    sectionReiniciar.style.display = 'none'

    

    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador() {

    sectionSeleccionarMascota.style.display = 'none'

    sectionSeleccionarAtaque.style.display = 'flex'
      
    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = inputHipodoge.id
        mascotaJugador = inputHipodoge.id
    } 
    else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
    }
    else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
    }
    else {
        alert('Elige una Mascota')
    }

    extraerAtaques(mascotaJugador)
       seleccionarMascotaEnemigo()
}

function extraerAtaques(mascotaJugador) {
    let ataques 
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques
        }
        
    } 
    mostrarAtaques (ataques)
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) =>{
        ataquesMokepon = `
        <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon
    })

    botonFuego =document.getElementById('boton-fuego')
    botonAgua=document.getElementById('boton-agua')
    botonTierra=document.getElementById('boton-tierra')
    botones = document.querySelectorAll('.BAtaque')


}

function secuenciaAtaque(){
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) =>{
            if (e.target.textContent === '🔥') {
                ataqueJugador.push('FUEGO')
                console.log(ataqueJugador)
                boton.style.backgroundColor = "#112f58"
            }   else if (e.target.textContent === '💧'){
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
                boton.style.backgroundColor = "#112f58"
            }   else if (e.target.textContent === '☘️') {
                ataqueJugador.push('TIERRA')
                console.log(ataqueJugador) 
                boton.style.backgroundColor = "#112f58"
            }
            ataqueAleatorioEnemigo()
        })
    })

    
}



function seleccionarMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(0,mokepones.length-1)

    spanMascotaEnemigo.innerHTML = mokepones [mascotaAleatorio].nombre
    ataquesMokeponEnemigo = mokepones [mascotaAleatorio].ataques

    secuenciaAtaque()
}


function ataqueAleatorioEnemigo(){
    let ataqueAleatorio= aleatorio(1,3)
    
    if(ataqueAleatorio == 0 ||ataqueAleatorio == 1){
        ataqueEnemigo.push('FUEGO')
    }  else if (ataqueAleatorio==3 || ataqueAleatorio == 4){
        ataqueEnemigo.push('AGUA')
    }  else{
        ataqueEnemigo.push('TIERRA')
    }
    console.log(ataqueEnemigo)
    iniciarPelea()
}

function iniciarPelea(){
    if (ataqueJugador.lenght === 5) {
        batalla()
    }
}



function crearMensaje(resultado) {
    secctionMensaje.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo
  
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador);
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);

}

function crearMensajeFinal(resultadoFinal) {
    
    secctionMensaje.innerHTML = resultadoFinal   
    
    botonFuego.disabled = true
    
    botonAgua.disabled = true
    
    botonTierra.disabled = true

    sectionReiniciar.style.display = 'block'
}

function indexAmbosOponentes (jugador, enemigo){
    indexAtaqueJugador= ataqueEnemigo[jugador]
    indexAtaqueEnemigo= ataqueEnemigo[enemigo]
}

function batalla (){

    for (let index = 0; index < ataqueJugador.length; index++) {
       if(ataqueJugador[index] === ataqueEnemigo[index]){
        indexAmbosOponentes (index, index)
        crearMensaje("Empate")
       }
    }

    if(ataqueJugador == 'TIERRA' && ataqueEnemigo =='AGUA'){
        crearMensaje('Ganaste 🏆🏆🏆') 
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo    }
    else if(ataqueJugador == 'FUEGO' && ataqueEnemigo =='TIERRA'){
        crearMensaje('Ganaste 🏆🏆🏆') 
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo    }
    else if(ataqueJugador == 'AGUA' && ataqueEnemigo =='FUEGO'){
        crearMensaje('Ganaste 🏆🏆🏆') 
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo    }
    else if(ataqueJugador == ataqueEnemigo){
        crearMensaje('Empate  😢😢😢') 
    }
    else {crearMensaje('Perdiste 😖😖😖') 
    vidasJugador --
    spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()

    }

    function revisarVidas(){
        if(vidasEnemigo == 0){
            crearMensajeFinal('Ganaste fin del juego')
        }
        else if(vidasJugador== 0){
            crearMensajeFinal ('ya no tienes vidas Perdiste lo siento')
        }
     }
function reiniciarJuego (){
        location.reload()
    }

function aleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1)+ min)}
window.addEventListener('load', iniciarJuego)