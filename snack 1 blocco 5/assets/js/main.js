const zucchine = [
    { tipo: "Zucchina nera", lunghezza: 18, peso: 20 },
    { tipo: "Zucchina romanesca", lunghezza: 22, peso: 29 },
    { tipo: "Zucchina trombetta", lunghezza: 27, peso: 35 },
    { tipo: "Zucchina gialla", lunghezza: 13, peso: 12 },
    { tipo: "Zucchina bianca", lunghezza: 16, peso: 5 },
    { tipo: "Zucchina tonda", lunghezza: 10, peso: 75 },
    { tipo: "Zucchina lunga di Napoli", lunghezza: "26", peso: 30 },
    { tipo: "Zucchina costata", lunghezza: 19, peso: 25 },
    { tipo: "Zucchina bianca striata", lunghezza: 12, peso: 19 },
    { tipo: "Zucchina rampicante", lunghezza: 25, peso: 26 }
];



    let pesoZucchine = 0;
    zucchine.forEach(zucchina => {
        pesoZucchine += zucchina.peso;
    });

console.log(pesoZucchine);