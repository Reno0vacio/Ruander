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
//console.log(legkisebbHengerurtartalom(autok));
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
//console.log(benzinesekSzama(autok));
function atlatHenger(autoTomb) {
    var osszHenger = 0;
    var hengerekSzama = 0;
    for (var _i = 0, autoTomb_2 = autoTomb; _i < autoTomb_2.length; _i++) {
        var autohenger = autoTomb_2[_i];
        osszHenger += autohenger.hengerurtartalom;
        hengerekSzama++;
    }
    return osszHenger / hengerekSzama;
}
//console.log(atlatHenger(autok));
function vanEBenzines(autoTomb) {
    var benzinesAutokSzama = 0;
    for (var _i = 0, autoTomb_3 = autoTomb; _i < autoTomb_3.length; _i++) {
        var autohenger = autoTomb_3[_i];
        if (autohenger.benzinesE) {
            benzinesAutokSzama++;
        }
    }
    if (benzinesAutokSzama === 0) {
        console.log("Nem volt benzines auto!");
    }
    return benzinesAutokSzama;
}
//console.log(vanEBenzines(autok));
function benzinesValogato(autoTomb) {
    var nemBenzines = [];
    var benzines = [];
    for (var _i = 0, autoTomb_4 = autoTomb; _i < autoTomb_4.length; _i++) {
        var auto = autoTomb_4[_i];
        if (auto.benzinesE) {
            benzines.push(auto);
        }
        else {
            nemBenzines.push(auto);
        }
    }
    return "A benzines autok szama ".concat(benzines.length, ", \u00E9s a nem benzinesek szama ").concat(nemBenzines.length, ".");
}
console.log(benzinesValogato(autok));
