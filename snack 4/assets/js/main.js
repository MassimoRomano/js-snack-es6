let persone = [
    { nome: 'massimo', cognome: 'romano',  age: 30},
    { nome: 'mario',cognome: 'rossi',age: 14},
    { nome: 'michele',cognome: 'verdi', age: 22},
    { nome: 'angelo',cognome: 'duro',age: 47},
    { nome: 'antonio', cognome: 'blu',age: 17},
]

const patente = persone.map(guida => {
    if ( guida.age >= 18) {
        return `${guida.nome} ${guida.cognome} Buon Divertimento Puoi Guidare`;
    }
    return `${guida.nome} ${guida.cognome} Prendi la Bici`;

})


console.log(patente);