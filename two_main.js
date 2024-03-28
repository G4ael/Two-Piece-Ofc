let pontos = new Text() 
let vida = new Text() 
let player_pontos = new Text() 
let player_vida = new Text()
let player = new Player(100,428,120,150,'./assets/mago_1.png')

let grupoInimigo = []
let inimigo = {
    time1: 0, //tempo para os inimigos aparecerem
    time2: 0, //tempo para os inimigos aparecerem
    time3: 0, //tempo para os inimigos aparecerem

    criaInimigo(){
        this.time1 += 0.4
        this.time2 += 0.4
        this.time3 += 0.4
        let pos_x = (Math.random() * (835 - 2 +1)+2) //onde os inimigos vão aparecer
        let pos_x2 = (Math.random() * (835 - 2 +1)+2) //onde os inimigos vão aparecer
        let pos_x3 = (Math.random() * (835 - 2 +1)+2) //onde os inimigos vão aparecer
        if(this.time1 >=60){
            this.time1 = 0
            grupoInimigo.push(new Inimigo(pos_x,-200,80,80,'./assets/Morcego_1.png'))
            console.log(grupoInimigo)
        }
        if(this.time2 >=85){
            this.time2 = 0
            grupoInimigo.push(new Inimigo(pos_x2,-300,80,80,'./assets/Morcego_2.png'))
            console.log(grupoInimigo)
        }
        if(this.time3 >=135){
            this.time3 = 0
            grupoInimigo.push(new Inimigo(pos_x3,-400,80,80,'./assets/Morcego_2.png'))
            console.log(grupoInimigo)
        }
    
        // Ajuste a criação de inimigos com base no nível atual
        if (nivel >= 2) {
            this.time1 += 0.5
            this.time2 += 0.5
            this.time3 += 0.5

        }else if(nivel >= 3){
            this.time1 += 0.6
            this.time2 += 0.6
            this.time3 += 0.6

        }else if(nivel >= 4){
            this.time1 += 0.8
            this.time2 += 0.8
            this.time3 += 0.8
        }
    },

    
    des(){
        grupoInimigo.forEach((inimigo)=>{ //Desenha o inimigo
            inimigo.des_img()
        })
    },
    destroiInimigo(){
        grupoTiros.forEach((tiro)=>{
            grupoInimigo.forEach((inimigo)=>{
                if(tiro.colid(inimigo)){
                    grupoTiros.splice(grupoTiros.indexOf(tiro), 1)
                    grupoInimigo.splice(grupoInimigo.indexOf(inimigo), 1)
                    player.pts += 1
                }
            })
        })
    },
    atual(){
        this.criaInimigo()
        this.destroiInimigo()
        grupoInimigo.forEach((inimigo)=>{ //atualiza o inimigo
            inimigo.mov()
            inimigo.anim('Morcego_')
            inimigo.atual_inimigo()
        })
    }
}

function reiniciarJogo() {
    player = new Player(100, 428, 120, 150, './assets/mago_1.png');
    grupoInimigo = [];
    player.pts = 0;
    player.vida = 4;
}


//Movimento do player
document.addEventListener('keydown',(e)=>{
    if(e.key === 'a'){
        player.dir = -15

    } else if(e.key === 'd'){
        player.dir = 15
    }
})

document.addEventListener('keyup', (e)=>{
    if(e.key === 'a' || e.key === 'd'){
        player.dir = 0 // Parando o movimento quando a tecla for liberada
    }
})

function desenha(){//desenha todas as classes
    //sempre fica ativo

     //faz o text
    pontos.des_text('Pontos: ',950, 80, 'White', '26px Times')
    vida.des_text('Vida: ',950, 150, 'White', '26px Times')
    player_pontos.des_text(player.pts, 1040, 80, 'White', '26px Times')
    player_vida.des_text(player.vida,1020, 150, 'White', '26px Times')

    player.des_vida()

    if(jogar){//quando jogar for true desenha o player e os inimigos
        inimigo.des_img()
        player.des_img()
    }
    else{//se o jogo não for true desenha apenas  as linhas e o text
        text5.des_text('Game Over',340, 320, 'White', '55px Pixelify Sans')
        text6.des_text('Pressione Enter para recomeçar', 265, 400, 'White', '26px Pixelify Sans');
    }
}

function atualiza(){ //faz a atualização das class e variaveis

    if(jogar){
        player.mov()
        player.anim('mago_')
        inimigo.atual()
        inimigo.atual('Morcego_')

    }
}
