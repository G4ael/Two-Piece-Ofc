let pontos = new Text() 
let vida = new Text() 
let player_pontos = new Text() 
let player_vida = new Text()

function desenha(){
    pontos.des_text('Pontos: ',950, 80, 'White', '26px Times')
    vida.des_text('Vida: ',950, 150, 'White', '26px Times')
    player_pontos.des_text(player.pts, 1040, 80, 'White', '26px Times')
    player_vida.des_text(player.vida,1020, 150, 'White', '26px Times')
}