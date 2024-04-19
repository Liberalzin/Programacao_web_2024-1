function somar(a, b) {
    return num(a) + num(b);
}

function subtrair(a, b) {
    return num(a) - num(b);
}

function multiplicar(a, b) {
    return num(a) * num(b);
}

function dividir(a, b) {
    return num(a) / num(b);
}

module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir
};