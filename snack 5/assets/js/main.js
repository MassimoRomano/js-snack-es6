const bici = [
    { nome: 'bici corsa', peso: 3 },
    { nome: 'bici terra', peso: 6 },
    { nome: 'bici strada', peso: 4 },
    { nome: 'bici competitiva', peso: 2 },
    { nome: 'bici ghiaccio', peso: 10 },
    { nome: 'bici montagna', peso: 7 },
];

//Utilizzo bici.map per estrarre solo i pesi delle biciclette
let biciPeso = bici.map(bici => bici = bici.peso);
console.log(biciPeso);

//troviamo il peso minimo tra tutti
let leggera = Math.min(...biciPeso);
console.log(leggera);

// usiammo bici.find per trovare quella piu' leggera
let biciclettaLeggera = bici.find(b => b.peso === leggera);

//Usiamo il Destructuring per farci dare il nome e il peso
let { nome, peso } = biciclettaLeggera;

// Isiamo il literal per stampare in console il nome e il peso
console.log(`La bicicletta più leggera è la ${nome} che pesa ${peso} kg.`);