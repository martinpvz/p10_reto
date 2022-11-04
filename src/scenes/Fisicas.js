class Fisicas extends Phaser.Scene{
    constructor(){
        super({
            key: 'Fisicas'
        });
    }

    init() {
        console.log('Escena Fisicas');
    }
    
    preload() {
        this.load.path = './assets/';
        this.load.image(['barraArriba1', 'barraArriba2', 'barraArriba3', 'barraArriba4', 'barraPuerta', 'puerta', 'barraCF1', 'barraCF2', 
        'cuerda', 'torre1', 'torre2', 'torre3', 'torre4', 'torre5', 'barraElevador', 'picos', 'barraTiempo', 'escalar', 'barraDiagonal',
        'escalera', 'ninja','fondo_opc1','coleccionable','end','instrucciones']);
        this.load.audio('gong', ['./gong.mp3']);
        this.load.audio('musicaFondo', ['./musicaFondo.mp3']);
    }

    create() {
        //MÚSICA
        this.gong = this.sound.add('gong',{loop:false});
        this.musicaFondo = this.sound.add('musicaFondo',{loop:false});
        this.musicaFondo.play();
        //FONDO Y SPRITE
        this.fondo = this.add.image(800, 395, 'fondo_opc1').setScale(1.1).setDepth(-3).setAlpha(0.8);
        this.end = this.add.image(250, 60, 'instrucciones').setDepth(4).setScale(0.15).setDepth(2);
        this.instrucciones = this.add.image(800, 220, 'end').setDepth(4).setScale(0.3).setAlpha(0);
        this.javier = this.physics.add.image(50, 700, 'ninja').setScale(0.1);
        this.javier.body.setSize(200, 500);
        this.javier.body.setOffset(180,0);
        this.javier.body.setMass(1);
        
        this.puerta = this.physics.add.image(1460, 135, 'puerta').setScale(0.7);
        this.puerta.body.setAllowGravity(false);
        this.puerta.body.setImmovable(true);
        // this.barraCF1 = this.add.image(260, 320, 'barraCF2');
        // this.barraCF1.setScale(0.3)
        // this.barraCF2 = this.add.image(865, 320, 'barraCF1');
        // this.barraCF2.setScale(0.3)
        this.cuerda = this.add.image(500, 334, 'cuerda').setScale(0.8);

        var torres = this.physics.add.staticGroup();
        var barraTiempo = this.physics.add.staticGroup();
        this.barraTorre = this.physics.add.group();
        this.barrasArriba = this.physics.add.staticGroup();
        var barrasHielo = this.physics.add.staticGroup();
        var barrasCuerda = this.physics.add.staticGroup();
        var picos = this.physics.add.staticGroup();

        torres.create(150, 730, 'torre1').setScale(0.6).refreshBody();
        torres.create(300, 715, 'torre2').setScale(0.6).refreshBody();
        torres.create(450, 715, 'torre3').setScale(0.6).refreshBody();
        torres.create(600, 715, 'torre4').setScale(0.6).refreshBody();
        torres.create(760, 715, 'torre5').setScale(0.6).refreshBody();

        barraTiempo.create(980, 670, 'barraTiempo').refreshBody();
        barraTiempo.create(1120, 620, 'barraTiempo').refreshBody();
        barraTiempo.create(1260, 570, 'barraTiempo').refreshBody();
        barraTiempo.create(1400, 520, 'barraTiempo').refreshBody();

        this.barraTorre.create(820, 575, 'barraElevador').setDepth(-1).setScale(0.5).refreshBody();

        //barrasArriba.create(100,200, 'barraArriba1').setScale(0.6).refreshBody()
        this.barrasArriba.create(370,150, 'barraArriba2').setScale(0.6).refreshBody();
        this.barrasArriba.create(1460,190, 'barraPuerta').setScale(0.8).refreshBody();
        this.barrasArriba.create(1230,155, 'barraArriba1').setScale(0.6).refreshBody().disableBody(true,true);
        this.barrasArriba.create(1060,155, 'barraArriba1').setScale(0.6).refreshBody().disableBody(true,true);
        this.barrasArriba.create(890,155, 'barraArriba1').setScale(0.6).refreshBody().disableBody(true,true);
        
        barrasHielo.create(650,155, 'barraArriba2').setScale(0.6).refreshBody()
        //barrasHielo.create(1030,155, 'barraArriba2').setScale(0.6).refreshBody();

        barrasCuerda.create(720,340, 'barraCF1').setScale(0.6).refreshBody()
        barrasCuerda.create(260,340, 'barraCF2').setScale(0.6).refreshBody()

        picos.create(1000, 760, 'picos').setScale(0.15).refreshBody();
        picos.create(310, 760, 'picos').setScale(0.15).setDepth(-1).refreshBody();
        picos.create(660, 760, 'picos').setScale(0.15).setDepth(-1).refreshBody();
        picos.create(1340, 760, 'picos').setScale(0.15).refreshBody();
        picos.create(1690, 760, 'picos').setScale(0.15).refreshBody();
        
        //Colisiones con los limites del mundo
        this.javier.body.setCollideWorldBounds(true);
        this.barraTorre.children.iterate( (torreT) => {
            torreT.setCollideWorldBounds(true);
            torreT.body.setAllowGravity(false);
        } );
        // barraTorre.group.setCollideWorldBounds(true);
        // barraTorre.onWorldBounds = true;
        
        this.escalar = this.add.image(970, 335, 'escalar');
        this.escalar.setScale(0.27);
        this.barraDiagonal = this.add.image(1250, 400, 'barraDiagonal').setScale(0.6);
        this.escalera = this.add.image(300, 215, 'escalera').setScale(0.8);
        //COLECCIONABLE
        this.objeto = this.physics.add.image(650,100,'coleccionable').setScale(.3);
        this.objeto.body.setAllowGravity(false);
        this.physics.add.overlap(this.javier, this.objeto, collectObjeto, null, this);
        function collectObjeto (jugador, objeto)
        {
            objeto.disableBody(true, true);
            console.log("aparecer barras");
            console.log(this.barrasArriba);
            this.barrasArriba.getChildren()[2].enableBody(false,0,0,true,true);
            this.barrasArriba.getChildren()[3].enableBody(false,0,0,true,true);
            this.barrasArriba.getChildren()[4].enableBody(false,0,0,true,true);
            
        }
        // this.obstaculo1.body.setCollideWorldBounds(true);

        //Teclado
        this.cursors = this.input.keyboard.createCursorKeys();
        //FÍSICAS Y COLISIONES
        this.physics.add.existing(this.escalar, true );
        // this.physics.add.existing(this.barraArriba5, true );
        this.physics.add.existing(this.escalera, true );
        // this.physics.add.existing(this.barraCF1, true );
        // this.physics.add.existing(this.barraCF2, true );
        this.physics.add.existing(this.cuerda, true );
        this.physics.add.existing(this.barraDiagonal, true );
        this.physics.add.existing(this.puerta, true );
        // this.physics.add.existing(this.barraPuerta, true );

        //Choque con Plataforma
        // this.physics.add.collider(this.javier, this.obstaculo1, () => {
        //     this.javier.setVelocity(0);
        //     this.javier.setAcceleration(0);
        // });
        this.physics.add.collider(this.javier, torres);

        this.physics.add.collider(this.javier, barraTiempo, () => {
            //algo
        });
        this.physics.add.collider(this.javier, this.barraTorre, () => {
            //algo
        });
        this.physics.add.collider(this.javier, this.barraDiagonal);
        this.physics.add.collider(this.javier, this.escalar, () => {
            this.javier.setVelocityY(0);
            this.javier.setAccelerationY(0);
        });
        this.physics.add.collider(this.javier, this.escalera, () => {
            this.javier.setVelocityY(0);
            this.javier.setAccelerationY(0);
        });
        this.physics.add.collider(this.javier, this.barrasArriba);
        this.physics.add.collider(this.javier, barrasHielo, () => {
            // this.javier.setVelocityX(0);
            // this.javier.setAccelerationX(0);
        });
        this.physics.add.collider(this.javier, this.barraPuerta);
        this.physics.add.collider(this.javier, barrasCuerda);
        this.physics.add.collider(this.javier, this.cuerda, () => {
            // this.javier.setVelocityX(0);
            // this.javier.setAccelerationX(0);
        });
        //Choque con picos
        this.physics.add.collider(this.javier, picos, () => {
            this.musicaFondo.stop();
            this.scene.restart();
        });
        //CHOQUE CON PUERTA / FINAL DE NIVEL
        this.physics.add.collider(this.javier, this.puerta, () => {
            this.gong.play();
            this.instrucciones.setAlpha(0);
            this.sound.pauseAll();
            this.scene.start("Fisicas2"); 
        });
    }


    update(time, delta) {
        // console.log(this.javier.body.onFloor());
        //Movimientos
        if (this.cursors.left.isDown)
        {
            this.javier.setVelocityX(-160);

            this.javier.flipX=1;
        }
        else if (this.cursors.right.isDown)
        {
            this.javier.setVelocityX(160);

            this.javier.flipX=0;
        }
        else
        {
            this.javier.setVelocityX(0);
        }

        //(this.cursors.up.isDown&& this.javier.body.onWall()) Este es para salto en la pared PROBABLE  
        if ((this.cursors.up.isDown && this.javier.body.onFloor())||(this.cursors.up.isDown && this.barraTorre.getChildren()[0].body.touching.up))
        {
            this.javier.setVelocityY(-500);
        }
        // if(this.cursors.up.isDown && this.barraTorre.getChildren()[0].body.touching.up)
        // {
        //     this.javier.setVelocityY(-500);
        // }
        if (this.cursors.up.isDown && this.escalar.body.touching.right && this.javier.body.touching.left)
        {
            this.javier.y -= 3;
        }
        if (this.cursors.up.isDown && this.escalera.body.touching.left && this.javier.body.touching.right)
        {
            this.javier.y -= 3;
        }

        if(this.barraTorre.getChildren()[0].y>769){
            this.barraTorre.getChildren()[0].disableBody(true, true);
        }

    }


}

export default Fisicas;