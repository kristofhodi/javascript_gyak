function playGame() {
    let player1 = parseInt(document.getElementById('player1').value);
    let player2 = parseInt(document.getElementById('player2').value);

    if (isNaN(player1) || isNaN(player2) || player1 < 0 || player1 > 2 || player2 < 0 || player2 > 2) {
        document.getElementById('result').innerText = "Kérlek, érvényes számokat adj meg (0: kő, 1: papír, 2: olló)!";
        return;
    }

    if (player1 === player2) {
        document.getElementById('result').innerText = "A játék döntetlen.";
    } else if (
        (player1 === 0 && player2 === 2) ||  // kő veri az ollót
        (player1 === 1 && player2 === 0) ||  // papír veri a követ
        (player1 === 2 && player2 === 1)     // olló veri a papírt
    ) {
        document.getElementById('result').innerText = "Az első játékos nyert.";
    } else {
        document.getElementById('result').innerText = "A második játékos nyert.";
    }
}
