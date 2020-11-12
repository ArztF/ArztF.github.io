proof1 = false;
proof2 = false;
counter1 = 0;
counter2 = 0;
function neuerWurf() {
    if (proof1 === false && proof2 === false) {
        document.getElementById('gewinner').innerHTML = '';
    }
    num1 = Math.floor(Math.random() * 6) + 1;

    document.getElementById('erg').innerHTML = num1;
    proof1 = true;

    if (proof1 === true && proof2 === true) {
        if (num1 < num2) {
            document.getElementById('gewinner').innerHTML = 'Spieler 2 hat gewonnen';
            counter1++;
            document.getElementById('counter2').innerHTML = 'Spieler 2 hat ' + counter1 + ' mal gewonnen';
        } else if (num1 === num2) {

        } else {
            document.getElementById('gewinner').innerHTML = 'Spieler 1 hat gewonnen';
            counter2++;
            document.getElementById('counter').innerHTML = 'Spieler 1 hat ' + counter2 + ' mal gewonnen';
        }
        proof1 = false;
        proof2 = false;
        setTimeout(function() {
            document.getElementById('erg').innerHTML = '';
            document.getElementById('erg2').innerHTML = '';
        }, 1500);
    }
}

function neuerWurf2() {
    if (proof1 === false && proof2 === false) {
        document.getElementById('gewinner').innerHTML = '';
    }
    num2 = Math.floor(Math.random() * 6) + 1;

    document.getElementById('erg2').innerHTML = num2;
    proof2 = true;

    if (proof1 === true && proof2 === true) {
        if (num1 < num2) {
            document.getElementById('gewinner').innerHTML = 'Spieler 2 hat gewonnen';
            counter1++;
            document.getElementById('counter2').innerHTML = 'Spieler 2 hat ' + counter1 + ' mal gewonnen';
        } else if (num1 === num2) {

        } else {
            document.getElementById('gewinner').innerHTML = 'Spieler 1 hat gewonnen';
            counter2++;
            document.getElementById('counter').innerHTML = 'Spieler 1 hat ' + counter2 + ' mal gewonnen';
        }
        proof1 = false;
        proof2 = false;
        setTimeout(function() {
            document.getElementById('erg').innerHTML = '';
            document.getElementById('erg2').innerHTML = '';
        }, 1500);
    }
}