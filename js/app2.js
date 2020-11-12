let tipps = [];
let ziehung = [];
let number = [];
let tip = [];
let versuche = 0;
function start(){
    tip = createNumbers();
    document.getElementById('yourTips').innerHTML = tip.join(" __ ");
    checkJackpot();
}

function createNumbers() {
    for (let i = 0; i < 6; i++) {
        tipps[i] = Math.floor(Math.random() * 45) + 1;
    }
    tipps = sort(tipps);

    for (let i = 1; i < 6; i++) {
        while(tipps[i - 1] === tipps[i]){
            tipps[i] = Math.floor(Math.random() * 45) + 1;
        }

    }
    tipps = sort(tipps);
    return tipps;
}

function createZiehung() {
    versuche++;
    for (let i = 0; i < 6; i++) {
        ziehung[i] = Math.floor(Math.random() * 45) + 1;
    }
    ziehung = sort(ziehung);

    for (let i = 1; i < 6; i++) {
        while(ziehung[i - 1] === ziehung[i]){
            ziehung[i] = Math.floor(Math.random() * 45) + 1;
        }

    }
    ziehung = sort(ziehung);
    return ziehung;
}

function sort(arr) {
    var len = arr.length;

    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

function checkJackpot() {
    let i = 0;
    let number = new Array(tipps.length);
    number = createZiehung(number);
    while (i < tipps.length) {
        if(number[i] != tipps[i]){
            number = createZiehung(number);
            i = 0;
        }else{
            i++;
        }
    }
    document.getElementById('ziehung').innerHTML = number.join(" __ ");
    document.getElementById('ergebnis').innerHTML = "Sie haben den Checkpot nach " + versuche + " Versuchen geknackt!";
}