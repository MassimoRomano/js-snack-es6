let nomi = ['pippo', 'PLUTO' ,'Paperino']
console.log(nomi);

let formatoNomi = [];

nomi.forEach(ordine =>{
    let formatta = ordine.toLowerCase().charAt(0).toUpperCase() + ordine.toLowerCase().slice(1);

    formatoNomi.push(formatta);

})


console.log(formatoNomi);
 