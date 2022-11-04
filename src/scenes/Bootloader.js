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
        this.load.path = './assets/';
        this.load.image(['nube','fondo','play','info','conf','logo','sound','noSound','infoCuadro']);
        this.load.audio('pop', ['./pop.mp3']);
        this.load.audio('InicioM', ['./InicioM2.mp3']);
    }

    create(){
        this.scene.start('Menu');
    }

    update(time, delta) {
        // ESTA FUNCION CREA UN CICLO INFINITO
    }
}

export default Bootloader;