var autok = [
    { type: "toyota", hengerurtartalom: 5000, benzinesE: false },
    { type: "toyota", hengerurtartalom: 1889, benzinesE: true },
    { type: "reno", hengerurtartalom: 2780, benzinesE: true },
    { type: "suzuki", hengerurtartalom: 6002, benzinesE: true }
];
function legkisebbHengerurtartalom(autoTomb) {
    var leggkisebbHenger = autoTomb[0].hengerurtartalom;
    var autoNeve = "";
    for (var i = 0; i < autoTomb.length; i++) {
        if (autoTomb[i].hengerurtartalom < leggkisebbHenger) {
            leggkisebbHenger = autoTomb[i].hengerurtartalom;
            autoNeve = autoTomb[i].type;
        }
    }
    return "A legkisebb henger\u00FCrtartalommmal rendelkez\u0151 aut\u00F3 ".concat(autoNeve, ", \u00E9s ").concat(leggkisebbHenger, " a henger\u00FCrtartalma!");
}
console.log(legkisebbHengerurtartalom(autok));
function benzinesekSzama(autoTomb) {
    var benzinesAutokSzama = 0;
    for (var _i = 0, autoTomb_1 = autoTomb; _i < autoTomb_1.length; _i++) {
        var auto = autoTomb_1[_i];
        if (auto.benzinesE === true) {
            benzinesAutokSzama++;
        }
    }
    return benzinesAutokSzama;
}
console.log(benzinesekSzama(autok));
