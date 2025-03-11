const lista = 
`Mele;5;Supermercato
Banane;3;Supermercato
Arance;4;Supermercato
Pane;2;Panetteria
Latte;1;Supermercato
Uova;12;Supermercato
Carote;500;Supermercato
Patate;1;Supermercato
Pollo;500;Macelleria
Manzo;300;Macelleria
Pesce;400;Pescheria
Gamberetti;200;Pescheria
Calamari;300;Pescheria
Vino rosso;1;Enoteca`


//1) creare una funzione che, partendo da lista, ritorni un array di oggetti: {nome: value, quantità: value, provenienza:value}

// function fromCsvListToObjectArray(csv) {

//     const lines = csv.split('\n');

//     const result = lines.map(line => {

//         const rgx = /^(.+);(\d+);(.+)$/

//         const match = line.match(rgx);

//         // const nome = match[1];
//         // const quantitaStr = match[2];
//         // const quantita = Number(quantitaStr);
//         // const provenienza = match[3];

//         const [_, nome, quantitaStr, provenienza] = match;
//         const quantita = Number(quantitaStr);


//         // const newObj = {nome: nome, quantita:quantita, provenienza:provenienza};
//         const newObj = {nome, quantita, provenienza};

//         return newObj;
//     })


//     return result;
// }

// function fromCsvListToObjectArray2(csv) {

//         const rgx = /^(?<nome>.+);(?<quantita>\d+);(?<provenienza>.+)$/gm

//         let match;
//         const result = [];

//         while (match !== null) {
//             match = rgx.exec(csv);
//             if(match){
//                 result.push(match.groups)
//             }
//         }
        
//         return result;

// }

// console.log(fromCsvListToObjectArray2(lista));
//2) creare una funzione che, partendo da lista, ritorni un array di oggetti che hanno come provenienza il supermercato: {nome: value, quantità: value, provenienza:value}

// function fromCsvListToObjectArraySupermercato(csv) {

//     const rgx = /^(?<nome>.+);(?<quantita>\d+);(?<provenienza>Supermercato)$/gm

//     let match;
//     const result = [];

//     while (match !== null) {
//         match = rgx.exec(csv);
//         if(match){
//             result.push(match.groups)
//         }
//     }
    
//     return result;

// }

// console.log(fromCsvListToObjectArraySupermercato(lista))

//3) creare una funzione che, partendo da lista e da una stringa che indica la proveneienzz, ritorni un array di oggetti: {nome: value, quantità: value, provenienza:value}

// function fromCsvListToObjectArrayWithSearch(csv, searchStr) {

//    const temp = `^(?<nome>.+);(?<quantita>\\d+);(?<provenienza>${searchStr})$`

//     const regexp = new RegExp(temp, 'gmi')

//     let match;
//     const result = [];

//     while (match !== null) {
//         match = regexp.exec(csv);
//         if(match){
//             result.push(match.groups)
//         }
//     }
    
//     return result;

// }

// console.log(fromCsvListToObjectArrayWithSearch(lista, 'Macelleria'))

//4) creare una funzione che, partendo da lista e da un array di keys, ritorni un array di oggetti: {keys[0]: value, keys[1]: value, keys[2]: value}

function fromCsvListToObjectArrayWithCustomKeys(csv, keys) {

    const temp = `^(?<${keys[0]}>.+);(?<${keys[1]}>\\d+);(?<${keys[2]}>.+)$`
 
     const regexp = new RegExp(temp, 'gm')
 
     let match;
     const result = [];
 
     while (match !== null) {
         match = regexp.exec(csv);
         if(match){
             result.push(match.groups)
         }
     }
     
     return result;
 
 }

 console.log(fromCsvListToObjectArrayWithCustomKeys(lista, ['pippo', 'pluto', 'paperino']))