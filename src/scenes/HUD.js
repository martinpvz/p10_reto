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
    // }

    create() {
        this.cora= this.add.image(1450, 40, 'heart').setScale(.25).setDepth(10).setTint('0x943126');
        this.cora2= this.add.image(1500, 40, 'heart').setScale(.25).setDepth(10).setTint('0x943126');
        this.cora3= this.add.image(1550, 40, 'heart').setScale(.25).setDepth(10).setTint('0x943126');

        let ourGame = this.scene.get('SceneA');
        let ourGameB = this.scene.get('SceneB');
        let ourGameW = this.scene.get('SceneB');
        this.score = 0;

        //  Listen for events from it
        ourGame.events.on('loseHeart', function () {
            this.score += 10;
            console.log(this.score)
            if( this.score==10){
                this.cora.setAlpha(0);
            }
            if( this.score==20){
                this.cora2.setAlpha(0);
            }
            if( this.score==30){
                this.cora3.setAlpha(0);
                this.score = 0;
                setTimeout(() => {
                    this.scene.pause('HUD');
                    console.log("Se pausó escena HUD");
                }, 1000);
                setTimeout(() => {
                        this.scene.resume('HUD');
                        console.log("Se reanudó escena HUD");
                        this.cora.setAlpha(1);
                        this.cora2.setAlpha(1);
                        this.cora3.setAlpha(1);
                }, 2000);
                
            }

        }, this);

        //  Listen for events from it
        ourGameB.events.on('loseHeart', function () {
            this.score += 10;
            console.log(this.score)
            if( this.score==10){
                this.cora.setAlpha(0);
            }
            if( this.score==20){
                this.cora2.setAlpha(0);
            }
            if( this.score==30){
                this.cora3.setAlpha(0);
                this.score = 0;
                setTimeout(() => {
                    this.scene.pause('HUD');
                    console.log("Se pausó escena HUD");
                }, 1000);
                setTimeout(() => {
                        this.scene.resume('HUD');
                        console.log("Se reanudó escena HUD");
                        this.cora.setAlpha(1);
                        this.cora2.setAlpha(1);
                        this.cora3.setAlpha(1);
                }, 2000);
                
            }
        }, this);

        
        //  EVENTO CUANDO SE GANA
        ourGameW.events.on('YouWin', function () {
            setTimeout(() => {
                this.scene.pause('HUD');
                console.log("Se pausó escena HUD");          
            }, 1000);
            setTimeout(() => {
                this.scene.resume('HUD');
                console.log("Se reanudó escena HUD");
                this.cora.setAlpha(1);
                this.cora2.setAlpha(1);
                this.cora3.setAlpha(1);
            }, 2000);
            this.score = 0;
            console.log(this.score)
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