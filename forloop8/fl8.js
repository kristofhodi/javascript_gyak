function calculateFactorial() {

    let number = parseInt(document.getElementById('number').value);

    if (isNaN(number) || number < 0) {
        document.getElementById('result').innerText = "Kérlek, adj meg egy nem negatív számot.";
        return;
    }

    let factorial = 1;

    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }

    document.getElementById('result').innerText = `${number} faktoriálisa ${factorial}.`;
}
