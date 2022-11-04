class Bootloader extends Phaser.Scene{
    constructor(){
        super({
            key: 'Bootloader'
        });
    }

    init() {
        console.log('Escena Bootloader');
    }
    preload() {
        //PARA MENU
        this.load.path = './assets/';
        this.load.image(['nube','fondo2','play','info','conf','logo2','sound','noSound','infoCuadro']);
        this.load.audio('pop', ['./pop.mp3']);
        this.load.audio('InicioM', ['./InicioM2.mp3']);
        //PARA ESCENA A
        this.load.image(['barraArriba1', 'barraArriba2', 'barraArriba3', 'barraArriba4', 'barraPuerta', 'puerta', 'barraCF1', 'barraCF2', 
        'cuerda', 'torre1', 'torre2', 'torre3', 'torre4', 'torre5', 'barraElevador', 'picos', 'barraTiempo', 'escalar', 'barraDiagonal',
        'escalera', 'ninja','fondo_opc1','coleccionable','end','instrucciones']);
        this.load.audio('gong', ['./gong.mp3']);
        this.load.audio('musicaFondo', ['./musicaFondo.mp3']);
        //PARA ESCENA B
        this.load.image(['barraArriba1', 'barraArriba2', 'barraArriba3', 'barraArriba4', 'barraPuerta', 'puerta', 'barraCF1', 'barraCF2', 
        'cuerda', 'torre1', 'torre2', 'torre3', 'torre4', 'torre5', 'barraElevador', 'picos', 'barraTiempo', 'escalar', 'barraDiagonal',
        'escalera', 'ninja','fondo_opc1','coleccionable','end']);
        this.load.audio('gong', ['./gong.mp3']);
        this.load.audio('musicaFondo', ['./musicaFondo.mp3']);
        //PARA ESCENA GAMEOVER
        this.load.image(['gameOverBack','botonMenu2']);
    }

    create(){
        this.scene.start('GameOver');
    }

    update(time, delta) {
        // ESTA FUNCION CREA UN CICLO INFINITO
    }
}

export default Bootloader;