let autok: {type: string, hengerurtartalom: number, benzinesE: boolean} [] = [
    {type: "toyota", hengerurtartalom: 5000, benzinesE: false},
    {type: "toyota", hengerurtartalom: 1889, benzinesE: true},
     {type: "reno", hengerurtartalom: 2780, benzinesE: true},
     {type: "suzuki", hengerurtartalom: 6002, benzinesE: true}
    ]
function legkisebbHengerurtartalom(autoTomb: {type:string, hengerurtartalom:number, benzinesE: boolean}[]) { 
    let leggkisebbHenger = autoTomb[0].hengerurtartalom;
    let autoNeve: string = "";
    for (let i = 0; i < autoTomb.length; i++) {
        if (autoTomb[i].hengerurtartalom < leggkisebbHenger) {
             leggkisebbHenger = autoTomb[i].hengerurtartalom
              autoNeve = autoTomb[i].type
        }
    }  return `A legkisebb hengerürtartalommmal rendelkező autó ${autoNeve}, és ${leggkisebbHenger} a hengerürtartalma!`
}
console.log(legkisebbHengerurtartalom(autok));

function benzinesekSzama(autoTomb: {type:string, hengerurtartalom:number, benzinesE: boolean}[]) {
    let benzinesAutokSzama: number = 0;
    for (let auto of autoTomb) {
        if (auto.benzinesE === true ) {
            benzinesAutokSzama++
        }
    }
    return benzinesAutokSzama
}
console.log(benzinesekSzama(autok));
