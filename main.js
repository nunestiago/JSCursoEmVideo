exibirTipo(4);
function exibirTipo(limite) {
    if (limite % 2 === 0) {
        console.log('Par');
    }
    else console.log('Ímpar');
    
}



// let radar = verificadorVelocidade(130);
// console.log(radar);

// function verificadorVelocidade(velocidade) {
//     if (velocidade < 70) {
//         return 'Ok'
//     }

//     if (velocidade >= 130) {
//         return 'Carteira Suspensa'
//     }

//     else {
//         const pontos = Math.floor(((velocidade - 70) /5 )); 
//         return 'Perdeu ' + pontos + ' pontos.';
//     }
    
// }

