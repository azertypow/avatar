//  var :
    var count;
    var pass;

//  colors :
    var color;

//  cheveux :
    var cheveux;

//  sourcil :
    var sourcilDroit;
    var sourcilGauche;

//  oueil :
    var oeilGauche;
    var oeilDroit;

//  moustache :
    var moustache;

//  barbe :
    var barbe;

function setup() {
    //  int :
        count = 0;

    //  deffinition des couleurs :
        color = 45;

    //  fond :
        background(255);
        createCanvas(260, 370);

    //  creer objects :

        //  cheveux :
            cheveux = new Cheveux();

        //  sourcils :
            sourcilDroit = new Sourcil(50, 130, 60, 10);
            sourcilGauche = new Sourcil(150, 130, 60, 10);

        //  yeux :
            oeilGauche = new Oeuil(90, 160, 20, 20);
            oeilDroit = new Oeuil(170, 160, 20, 20);

        //  moustache :
            moustache = new Moustache();

        //  barbe :
            barbe = new Barbe();
}

function draw() {
    background(255);

    //  tracer objets :

        //  cheveux :
            cheveux.right();
            cheveux.left();

        //  sourcils :
            sourcilDroit.display();
            sourcilGauche.display();

        //  yeux :
            oeilGauche.display();
            oeilDroit.display();

        //  moustache :
            moustache.left();
            moustache.right();

        //  barbe :
            barbe.display();

    //noLoop();

        count++;
    var max = 200;
        if( count == max )
        {
            pass = 10;
        }
            if( pass >= 10 && pass < 20 ){
                annimation(pass - 10);
                pass++;
            }
                if( pass == 17 ){
                    pass = 20;
                }
                if( pass >= 20 && pass < 30 ){
                    annimation( -(pass - 10) );
                    pass++;
                }
                if( pass == 22 ){
                    pass = -1;

                    count = getRandomArbitrary(0, max);
                    console.log(count);

                }

    console.log(count);
}

//  functions :

    function annimation(n){
        sourcilDroit['y'] = sourcilDroit['y'] + n;
        sourcilGauche['y'] = sourcilGauche['y'] + n;

        oeilGauche['height'] = oeilGauche['height'] - n;
        oeilDroit['height'] = oeilDroit['height'] - n;
    }

    function bezierVertex_ControlRelativePosition( beforeAncX, beforeAncY, xControl1 = 0, yControl1 = 0, xAnchor1, yAnchor1, xControl2 = 0, yControl2 = 0 ){

        xControl1 = beforeAncX + xControl1;
        yControl1 = beforeAncY + yControl1;

        xControl2 = xAnchor1 + xControl2;
        yControl2 = yAnchor1 + yControl2;

        bezierVertex(xControl1, yControl1, xControl2, yControl2, xAnchor1, yAnchor1);

    }

    //  valeur min (incluse) valeur max (exclue)
        function getRandomArbitrary(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }

//  objects :


    function Cheveux(){

        this.right = function () {
            noStroke();

            fill(color);

            beginShape();
                vertex(150,20);
                bezierVertex_ControlRelativePosition(
                    150,
                    20,
                        20,
                        0,
                    210,
                    40,
                        -20,
                        0
                );
                bezierVertex_ControlRelativePosition(
                    210,
                    40,
                        20,
                        0,
                    230,
                    110,
                        0,
                        0
                );
                bezierVertex_ControlRelativePosition(
                    230,
                    110,
                        0,
                        0,
                    210,
                    70,
                        10,
                        0
                );
                bezierVertex_ControlRelativePosition(
                    210,
                    70,
                        -10,
                        0,
                    130,
                    90,
                        20,
                        0
                );
                bezierVertex_ControlRelativePosition(
                    130,
                    90,
                        -30,
                        0,
                    50,
                    50,
                        0,
                        10
                );
                bezierVertex_ControlRelativePosition(
                    50,
                    50,
                        0,
                        -30,
                    150,
                    20,
                        -20,
                        0
                );
            endShape();
        };

        this.left = function () {
            noStroke();

            fill(color);

            beginShape();
            vertex(40,50);
                bezierVertex_ControlRelativePosition(
                    40,
                    50,
                        20,
                        0,
                    80,
                    70,
                        0,
                        0
                );
                bezierVertex_ControlRelativePosition(
                    80,
                    70,
                        0,
                        0,
                    50,
                    70,
                        10,
                        0
                );
                bezierVertex_ControlRelativePosition(
                    50,
                    70,
                        -10,
                        0,
                    30,
                    110,
                        0,
                        0
                );
                bezierVertex_ControlRelativePosition(
                    30,
                    110,
                        0,
                        0,
                    40,
                    50,
                        -10,
                        0
                );
            endShape();
        };

    }

    function Sourcil(posX, posY, width, height){
        this.x = posX;
        this.y = posY;
        this.width = width;
        this.height = height;

        this.display = function(){

            noStroke();
            fill(color);

            rect(this.x, this.y, this.width, this.height);
        }

    }

    function Oeuil(posX, posY, width, height){
        this.x = posX;
        this.y = posY;
        this.width = width;
        this.height = height;

        this.display = function(){

            noStroke();
            fill(color);

            ellipse(this.x, this.y, this.width, this.height);
        }

    }

    function Moustache(){

        this.left = function (){
            noStroke();

            fill(color);

            beginShape();
            vertex(120,220);
            bezierVertex_ControlRelativePosition(
                120,
                220,
                    10,
                    0,
                130,
                230,
                    0,
                    0
            );
            bezierVertex_ControlRelativePosition(
                130,
                230,
                    0,
                    10,
                120,
                240,
                    10,
                    0
            );
            bezierVertex_ControlRelativePosition(
                120,
                240,
                    -10,
                    0,
                60,
                250,
                    0,
                    0
            );
            bezierVertex_ControlRelativePosition(
                60,
                250,
                    0,
                    0,
                120,
                220,
                    -10,
                    0
            );
            endShape();
        };

        this.right = function (){
            noStroke();

            fill(color);

            beginShape();
            vertex(140,220);
            bezierVertex_ControlRelativePosition(
                140,
                220,
                    10,
                    0,
                200,
                250,
                    0,
                    0
            );
            bezierVertex_ControlRelativePosition(
                200,
                250,
                    0,
                    0,
                140,
                240,
                    10,
                    0
            );
            bezierVertex_ControlRelativePosition(
                140,
                240,
                    -10,
                    0,
                130,
                230,
                    0,
                    10
            );
            bezierVertex_ControlRelativePosition(
                130,
                230,
                    0,
                    0,
                140,
                220,
                    -10,
                    0
            );
            endShape();
        };

    }

    function Barbe(){
        this.display = function(){
            noStroke();

            fill(color);

            beginShape();
            vertex(130,350);
            bezierVertex_ControlRelativePosition(
                130, 350,
                -20, 0,

                20, 310,
                0, 20
            );
            bezierVertex_ControlRelativePosition(
                20, 310,
                0, -20,

                30, 190,
                0, 0
            );
            bezierVertex_ControlRelativePosition(
                30, 190,
                0, 0,

                30, 240,
                0, -10
            );
            bezierVertex_ControlRelativePosition(
                30, 240,
                0, 10,

                80, 260,
                -20, 0
            );
            bezierVertex_ControlRelativePosition(
                80, 260,
                0, 20,

                100, 280,
                -10, 0
            );
            bezierVertex_ControlRelativePosition(
                100, 280,
                10, 0,

                130, 270,
                -10, 0
            );
            bezierVertex_ControlRelativePosition(
                130, 270,
                10, 0,

                160, 280,
                -10, 0
            );
            bezierVertex_ControlRelativePosition(
                160, 280,
                10, 0,

                180, 260,
                0, 20
            );
            bezierVertex_ControlRelativePosition(
                180, 260,
                20, 0,

                230, 240,
                0, 10
            );
            bezierVertex_ControlRelativePosition(
                230, 240,
                0, -10,

                230, 190,
                0, 0
            );
            bezierVertex_ControlRelativePosition(
                230, 190,
                0, 0,

                240, 310,
                0, -20
            );
            bezierVertex_ControlRelativePosition(
                240, 310,
                0, 20,

                130, 350,
                20, 0
            );
            endShape();
        };
    }