class HUD extends Phaser.Scene{
    constructor(){
        super({
            key: 'HUD'
        });
    }

    init() {
        console.log('Escena HUD');
    }
    
    // preload() {
    //     this.load.path = './assets/';
    //     this.load.image(['heart']);
    // }

    create() {
        this.cora= this.add.image(1200, 100, 'heart').setScale(.5).setDepth(10);
        this.cora2= this.add.image(1300, 100, 'heart').setScale(.5).setDepth(10);
        this.cora3= this.add.image(1400, 100, 'heart').setScale(.5).setDepth(10);

        let ourGame = this.scene.get('SceneA');
        this.score = 0;

        //  Listen for events from it
        ourGame.events.on('addScore', function () {

            this.score += 10;
            console.log(this.score)
            if( this.score==10){
                this.cora.setAlpha(0);
            }
            if( this.score==20){
                this.cora2.setAlpha(0);
            }
            if( this.score==30){
                // this.cora3.setAlpha(0);
                this.score = 0;
                this.cora.setAlpha(1);
                this.cora2.setAlpha(1);
                this.cora3.setAlpha(1);
                // this.scene.stop();
                // this.scene.stop('Fisicas');
                // this.scene.restart();
                // this.scene.start("Inicio");
            }
        }, this);


        // console.log(this.contadorVidas)
    
        // listen to 'update-count' event and call `updateCount()`
        // when it fires
        // eventsCenter.on('update-count', this.contadorVidas, this);
    
        // clean up when Scene is shutdown
        // this.events.on(Phaser.Scenes.Events.SHUTDOWN, () => {
        //     eventsCenter.off('update-count', this.contadorVidas, this)
        // })
    }


    update(time, delta) {
    }


}

export default HUD;