let automobili = [
    { marca: "Toyota", modello: "Yaris", alimentazione: "benzina" },
    { marca: "Volkswagen", modello: "Golf", alimentazione: "diesel" },
    { marca: "Renault", modello: "Clio", alimentazione: "metano" },
    { marca: "Tesla", modello: "Model 3", alimentazione: "elettrico" },
    { marca: "Fiat", modello: "Panda", alimentazione: "gpl" },
    { marca: "Ford", modello: "Fiesta", alimentazione: "benzina" },
    { marca: "BMW", modello: "X1", alimentazione: "diesel" },
    { marca: "Audi", modello: "A3", alimentazione: "benzina" },
    { marca: "Hyundai", modello: "Kona", alimentazione: "elettrico" },
    { marca: "Mercedes-Benz", modello: "Classe-C", alimentazione: "elettrico" }
];

let autoBenzina = automobili.filter(auto => auto.alimentazione === 'benzina');
let autoDiesel = automobili.filter(auto => auto.alimentazione === 'diesel');
let altreAuto = automobili.filter(auto => {
    return auto.alimentazione !== 'benzina' && auto.alimentazione !== 'diesel';
});


console.log("Auto a benzina:");
autoBenzina.forEach(auto => console.log(auto));
console.log("\nAuto a diesel:");
autoDiesel.forEach(auto => console.log(auto));
console.log("\nAltre auto:");
altreAuto.forEach(auto => console.log(auto));