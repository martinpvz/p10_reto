class GameOver extends Phaser.Scene{
    constructor(){
        super({
            key: 'GameOver'
        });
    }

    init() {
        console.log('Escena GameOver');
    }
    preload() {
        this.load.path = './assets/';
        this.load.audio('pop', ['./pop.mp3']);
    }

    create(){
        this.fondo = this.add.image(775, 395, 'gameOverBack').setScale(.365);
        this.menu = this.add.image(820, 550, 'botonMenu2').setScale(.25).setInteractive();
        //SONIDOS
        this.pop = this.sound.add('pop', {loop:false,volume: 0.3});
        this.gameOverSound = this.sound.add('gameOver', {loop:false});
        this.gameOverSound.play();
        //CONSTANTE EVENTOS
        const eventos = Phaser.Input.Events;
        //EVENTOS PARA MOUSE
        this.input.on(eventos.GAMEOBJECT_OVER,(event,gameObject)=>{
            gameObject.setScale(.3);
        });
        this.input.on(eventos.GAMEOBJECT_OUT,(event,gameObject)=>{
            gameObject.setScale(.25);
        });
        this.input.on(eventos.GAMEOBJECT_DOWN,(event,gameObject)=>{
            this.pop.play();
        });
        //EVENTO CLICK MENU
        this.menu.on(eventos.POINTER_DOWN, function () {
            this.sound.pauseAll();
            this.scene.start("Menu");         
        }, this);
    }

    update(time, delta) {
    }
}

export default GameOver;