class Player extends Obj{
    dir = 0
    pts = 0
    vida = 5

    mov(){
        this.x += this.dir
        if(this.x <= 0){
            this.x = 0
        }else if(this.x >= 835){
            this.x = 835
        }
    }
    
}

class Inimigo extends Obj{
    vida_inimigo = 5
    pararY = 180  // posição onde o inimigo vai parar
    tempoProximoTiro = Math.random() * 100 // tempo até o próximo tiro do inimigo
    intervaloTiro = 60 // intervalo de tempo entre os tiros dos inimigos
    tempoTiro = 0

    atual_inimigo(){
        if(this.y <= this.pararY){
            this.y += 0.5
        }else if(this.vida_inimigo <= 0){
            this.recomeca()
        }

        this.tempoTiro++
        if(this.tempoTiro >= this.tempoProximoTiro){
            this.tempoTiro = 0
            this.atira()
            this.tempoProximoTiro = Math.random() * 350 // define um novo tempo para o próximo tiro
        }
    }
    recomeca(){
        this.y = -100
        this.x = Math.floor(Math.random() * ((950 - 2 + 1) + 2)) // quando o inimigo morrer
    }

    vel = Math.random() * (2 - 0.5) + 0.5

    mov(){
        if(this.y <= this.pararY){
            this.y += 0.5
        }

    }

    atira(){
        grupoTirosInimigo.push(new TiroInimigo(this.x - 40 + this.w, this.y + 40, 30, 40, './assets/tiro.png')) 
    }
}