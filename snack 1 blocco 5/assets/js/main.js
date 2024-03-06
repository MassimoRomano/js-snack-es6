const zucchine = [
    { tipo: "Zucchina nera", lunghezza: "15-20 cm", peso: "200" },
    { tipo: "Zucchina romanesca", lunghezza: "20-25 cm", peso: "259" },
    { tipo: "Zucchina trombetta", lunghezza: "fino a 30 cm", peso: "350" },
    { tipo: "Zucchina gialla", lunghezza: "10-15 cm", peso: "125g" },
    { tipo: "Zucchina bianca", lunghezza: "", peso: "50g" },
    { tipo: "Zucchina tonda", lunghezza: "circa 10 cm", peso: "175" },
    { tipo: "Zucchina lunga di Napoli", lunghezza: "25-30 cm", peso: "300" },
    { tipo: "Zucchina costata", lunghezza: "15-20 cm", peso: "250" },
    { tipo: "Zucchina bianca striata", lunghezza: "15-20 cm", peso: "195" },
    { tipo: "Zucchina rampicante", lunghezza: "fino a 25 cm", peso: "260" }
];


    let pesoZucchine = 0;
    zucchine.forEach(zucchina => {
        pesoZucchine = pesoZucchine + zucchina.peso;
    });

console.log(`Il peso totale è:, ${pesoZucchine},g`);