// exporta só 1 module.exports = soma;

module.exports = {
    soma,
    subtracao,
    multiplicacao,
    divisao
}
function soma (a,b){
    return a + b;
}

function subtracao(a,b){
    if(a > b){
        return a - b;
    };
    return b - a;
}

function multiplicacao(a,b){
    return a * b;
}

function divisao (a,b){
    return a / b;
}