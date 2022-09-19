class Computador{

    constructor (placaVideo, placaMae, processador, memoria, fonte, ssd, hd){
        this.asus = placaVideo
        this.aorus = placaMae
        this.intel = processador
        this.hyperx = memoria
        this.core = fonte
        this.kingstom = ssd
        this.seagate = hd
    } 

    montarComputador(){

        if( this.asus == 1, this.aorus == 1, this.intel == 1, this.hyoerx == 2, this.core == 1, this.kingostom == 1, this.seagate == 1){

                console.log("Seu PC Gamer está pronto para rodar qualquer jogo da atualidade")

        }else{

                console.log("Não foi possível montar seu PC Gamer devido a falta ou excesso de Hardwares")

        }
    }

}
    
    const computador2 = new Computador (1,1,1,2,1,1,1)

    computador2.montarComputador()