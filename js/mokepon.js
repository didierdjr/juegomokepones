const botonMascotaJugador = document.getElementById('boton-mascota')
const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('Reiniciar')


const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const spanMascotaJugador = document.getElementById('mascota-jugador')

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const sectionMensaje = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const botonReiniciar = document.getElementById('boton-reiniciar')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const contenedorTarjetas = document.getElementById('contenedorTarjetas')

const contenedorAtaques =document.getElementById("contenedorAtaques")
const sectionVerMapa = document.getElementById('ver-mapa')
const mapa = document.getElementById('mapa')

let mokepones = []  //arrays o arreglos dentro de estos van los tipos de objetos que tendre en el array
let ataqueEnemigo = []
let inputHipodoge
let inputCapipepo 
let inputRatigueya 
let inputYahina
let vidasEnemigo = 3
let vidasJugador = 3
let opcionDeMokepones
let mascotaJugador
let mascotaJugadorObjeto //variable para guardar el objeto de la mascota del jugador
let ataquesMokepon
let ataquesMokeponEnemigo
let botonFuego 
let botonAgua
let botonTierra
let botonesAtaque = []
let botones
let indexAtaqueJugador
let indexAtaqueEnemigo
let ataqueJugador = []
let victoriasJugador = 0
let victoriasEnemigo = 0
let lienzo = mapa.getContext("2d") //crear el lienzo para dibujar en el mapa
let intervalo
let mapaBackground = new Image() //crear una imagen para el fondo del mapa
mapaBackground.src = './Assets/mokemap.webp'
let alturaQueBuscamos //variable para guardar la altura del mapa
let anchoDelMapa = window.innerWidth - 20//variable para guardar el ancho del mapa
const anchoMaximoDelMapa = 350 //variable para guardar el ancho maximo del mapa


if (anchoDelMapa > anchoMaximoDelMapa) {
    anchoDelMapa = anchoMaximoDelMapa - 20
}

alturaQueBuscamos = (anchoDelMapa * 600) / 800 //calcular la altura del mapa en base al ancho del mapa
mapa.width = anchoDelMapa //asignar el ancho del mapa
mapa.height = alturaQueBuscamos //asignar la altura del mapa
//console.log(mapa.width, mapa.height) //verificar el ancho y la altura del mapa
//console.log(window.innerWidth, window.innerHeight) //verificar el ancho y la altura de la ventana del navegador
//console.log(alturaQueBuscamos) //verificar la altura que buscamos para el mapa
//console.log(anchoDelMapa) //verificar el ancho del mapa

// clases y como crearlas
class Mokepon {
    constructor(nombre, foto, vida, fotoMapa) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.ancho = 40
        this.alto = 40
        this.x = aleatorio(0, mapa.width - this.ancho) //posicion aleatoria en el eje x
        this.y = aleatorio(0, mapa.height - this.alto) //posicion aleatoria en el eje y
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
    }

    pintarMokepon() {
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto,

        )
    }
}


let hipodoge = new Mokepon('Hipodoge', './Assets/mokepons_mokepon_hipodoge_attack.png', 5, './Assets/hipodoge.png' )

let capipepo = new Mokepon('Capipepo', './Assets/mokepons_mokepon_capipepo_attack.png', 5, './Assets/capipepo.png')

let ratigueya = new Mokepon('Ratigueya', './Assets/mokepons_mokepon_ratigueya_attack.png', 5, './Assets/ratigueya.png')


let hipodogeEnemigo = new Mokepon('Hipodoge', './Assets/mokepons_mokepon_hipodoge_attack.png', 5, './Assets/hipodoge.png')

let capipepoEnemigo = new Mokepon('Capipepo', './Assets/mokepons_mokepon_capipepo_attack.png', 5, './Assets/capipepo.png')

let ratigueyaEnemigo = new Mokepon('Ratigueya', './Assets/mokepons_mokepon_ratigueya_attack.png', 5, './Assets/ratigueya.png')




mokepones.push(hipodoge, capipepo, ratigueya) //metodo push para insertar en el arreglo cada uno de los objetos

//obejtos literarios son objetos sin clases
hipodoge.ataques.push(
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '☘️', id: 'boton-tierra'},
) //obejtos literarios son objetos sin clases

//creamos los ataques de los enemigos
hipodogeEnemigo.ataques.push(
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '☘️', id: 'boton-tierra'},
)

capipepo.ataques.push(
    {nombre: '☘️', id: 'boton-tierra'},
    {nombre: '☘️', id: 'boton-tierra'},
    {nombre: '☘️', id: 'boton-tierra'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-tierra'},
) //obejtos literarios son objetos sin clases

capipepoEnemigo.ataques.push(
    {nombre: '☘️', id: 'boton-tierra'},
    {nombre: '☘️', id: 'boton-tierra'},
    {nombre: '☘️', id: 'boton-tierra'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-tierra'},
)
ratigueya.ataques.push(
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '☘️', id: 'boton-tierra'},
) //obejtos literarios son objetos sin clases

ratigueyaEnemigo.ataques.push(
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '☘️', id: 'boton-tierra'},
)
function iniciarJuego(){
    
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    sectionSeleccionarAtaque.style.display = 'none'
    sectionVerMapa.style.display = 'none'

        mokepones.forEach((mokepon)  =>         { 

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

    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador() {

    sectionSeleccionarMascota.style.display = 'none'
   
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
    else if (inputYahina.checked) {
        spanMascotaJugador.innerHTML = inputYahina.id
        mascotaJugador = inputYahina.id
    }
    else {
        alert('Elige una Mascota')
    }

    extraerAtaques(mascotaJugador)
       //sectionSeleccionarAtaque.style.display = 'flex'
    sectionVerMapa.style.display = "flex"
    iniciarMapa()
    
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
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === '🔥') {
                ataqueJugador.push('FUEGO')
                console.log(ataqueJugador)
                boton.style.background = "#112f58"
                boton.disabled = true
                }   else if (e.target.textContent === '💧'){
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
                boton.style.background = "#112f58"
                boton.disabled = true
                }   else {
                ataqueJugador.push('TIERRA')
                console.log(ataqueJugador) 
                boton.style.background = "#112f58"
                boton.disabled = true
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
    let ataqueAleatorio = aleatorio(0, ataquesMokeponEnemigo.length-1)
    
    if(ataqueAleatorio === 0 || ataqueAleatorio === 1 || ataqueAleatorio === 2){
        ataqueEnemigo.push('FUEGO')
    } else if (ataqueAleatorio === 3 || ataqueAleatorio === 4){
        ataqueEnemigo.push('AGUA')
    } else {
        ataqueEnemigo.push('TIERRA')
    }
    iniciarPelea()
}

function iniciarPelea(){
    if (ataqueJugador.length === 5){
       combate()
    }       
}

function crearMensaje(resultado) {


    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensaje.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo
  
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador);
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);
}

function crearMensajeFinal(resultadoFinal) {
    
    sectionMensaje.innerHTML = resultadoFinal   
    sectionReiniciar.style.display = 'block'
}

function indexAmbosOponentes (jugador, enemigo){
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}


function combate(){   
    for (let index = 0; index < ataqueJugador.length; index++) {
        if(ataqueJugador[index] === ataqueEnemigo[index]){
            indexAmbosOponentes(index, index)
            crearMensaje('Empate  😢😢😢') 
        }
        else if(ataqueJugador[index] === 'FUEGO' && ataqueEnemigo[index] === 'TIERRA' ){
            indexAmbosOponentes(index, index)
            crearMensaje('Ganaste 🏆🏆🏆')
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        }
        else if(ataqueJugador[index] ==='AGUA' && ataqueEnemigo[index] === 'FUEGO' ){ 
            indexAmbosOponentes(index, index)
            crearMensaje('Ganaste 🏆🏆🏆') 
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        }
        else if(ataqueJugador[index] === 'TIERRA' && ataqueEnemigo[index] === 'AGUA' ){
            indexAmbosOponentes(index, index)
            crearMensaje('Ganaste 🏆🏆🏆')
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        }
        else {
            crearMensaje('perdiste😖😖😖')
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
        }
        revisarVictorias()
    }
}    
    
    function revisarVictorias(){
        if(victoriasJugador === victoriasEnemigo){
            crearMensajeFinal('Esto es un empate')
        }
        else if(victoriasJugador > victoriasEnemigo){
            crearMensajeFinal('Felicidades Ganaste el juego')
        }
        else{
            crearMensajeFinal('Lo siento perdiste el juego')
        }
     }

function reiniciarJuego (){
        location.reload()
    }

function aleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1)+ min)}

function pintarCanvas() {
    console.log(mascotaJugadorObjeto.x, mascotaJugadorObjeto.y)

    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY

    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(mapaBackground, 
                    0, 
                    0, 
                    mapa.width, 
                    mapa.height
                    ) //dibuja el fondo del mapa
            mascotaJugadorObjeto.pintarMokepon()
            hipodogeEnemigo.pintarMokepon()
            capipepoEnemigo.pintarMokepon()
            ratigueyaEnemigo.pintarMokepon()

            if(mascotaJugadorObjeto.velocidadX !== 0 || mascotaJugadorObjeto.velocidadY !== 0) {
                revisarColision(hipodogeEnemigo)
                revisarColision(capipepoEnemigo)
                revisarColision(ratigueyaEnemigo)
            }
}   

function moverDerecha() {
    mascotaJugadorObjeto.velocidadX = 5
}

function moverIzquierda() {
    mascotaJugadorObjeto.velocidadX = -5
}
function moverArriba() {
    mascotaJugadorObjeto.velocidadY = -5
}

function moverAbajo() {
    mascotaJugadorObjeto.velocidadY = 5
}

function detenerMovimiento() {
    mascotaJugadorObjeto.velocidadX = 0
    mascotaJugadorObjeto.velocidadY = 0
}

function presionoUnaTecla(event){
    switch (event.key) {
        case 'ArrowUp':
            moverArriba()
            break
        case 'ArrowDown':
            moverAbajo()
            break
        case 'ArrowLeft':
            moverIzquierda()
            break
        case 'ArrowRight':
            moverDerecha()
            break
        default:  //si no entran en ninguno de los casos anteriores ejecuta el caso default
            break;
    }
}

function iniciarMapa() {
    
    mascotaJugadorObjeto = obtenerObjetoMascota()
    console.log(mascotaJugadorObjeto, mascotaJugador)
    intervalo = setInterval(pintarCanvas, 50)

    window.addEventListener('keydown', presionoUnaTecla)
    window.addEventListener('keyup', detenerMovimiento)
}

function obtenerObjetoMascota() {
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            return mokepones[i]
        }
        
    } 
}

function revisarColision (enemigo) {
    conts= arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const izquierdaEnemigo = enemigo.x
    const derechaEnemigo = enemigo.x + enemigo.ancho
    //console.log('Revisando colision con ' + enemigo.nombre)
    const arribaMascota = mascotaJugadorObjeto.y        
    const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
    const izquierdaMascota = mascotaJugadorObjeto.x
    const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
    //console.log('Colision')
    
    if(
        abajoMascota< arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo
    ) {
        return
    }

    detenerMovimiento()
    clearInterval(intervalo)
    sectionSeleccionarAtaque.style.display = 'flex'
    sectionVerMapa.style.display = 'none'
    seleccionarMascotaEnemigo(enemigo)

}


window.addEventListener('load', iniciarJuego)