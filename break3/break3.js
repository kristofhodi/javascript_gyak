function printLettersUntilNonLetter() {
    let myString = document.getElementById('inputString').value;

    if (myString === "") {
        document.getElementById('result').innerText = "Kérlek, adj meg egy karakterláncot!";
        return;
    }

    let result = "";

    for (let i = 0; i < myString.length; i++) {
        if (myString[i].match(/[a-zA-Z]/)) {
            result += myString[i] + "<br>"; 
        } 
    }

    // Kiírás a HTML elembe
    document.getElementById('result').innerHTML = result ? result : "Nincsenek betűk a karakterláncban.";
}
