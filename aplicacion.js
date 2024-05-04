function sonar(idelemento) {
    document.querySelector(idelemento).play();
}
const listaDeTeclas = document.querySelectorAll(".tecla");

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador]; 
    const rama = tecla.classList[1];
   
    //aca ubicacion de audios de las musicas
    const audio = `#sonido_${rama}`;
    console.log(audio);

    tecla.onclick = function () {
        sonar(audio);
    };
    tecla.onkeydown=function(evento){
        if( evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('activa');
        }
    }
    // Agregar evento para detectar cuando se suelta la tecla
    tecla.onkeyup = function() {
        tecla.classList.remove('activa');
    };
    

}
