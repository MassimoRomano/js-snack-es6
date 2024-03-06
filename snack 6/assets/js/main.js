const squadre = [
    { nome: 'Juventus', punti: 0, falli: 0 },
    { nome: 'Inter', punti: 0, falli: 0 },
    { nome: 'Napoli', punti: 0, falli: 0 },
    { nome: 'Lazio', punti: 0, falli: 0 },
    { nome: 'Milan', punti: 0, falli: 0 }
];

function numeriRand(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


squadre.forEach(squadra => {
    squadra.punti = numeriRand(0, 100);
    squadra.falli = numeriRand(0, 60);
});

console.log(squadre);


const squadreFalli = [];
squadre.forEach(({ nome, falli }) => {
    squadreFalli.push({ nome, falli });
});

console.log(squadreFalli);


const stampaPagina = document.getElementById('home');

