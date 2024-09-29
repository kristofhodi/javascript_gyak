function printLetters() {

    let myString = document.getElementById('inputString').value;

    if (myString === "") {
        document.getElementById('result').innerText = "Kérlek, adj meg egy karakterláncot!";
        return;
    }

    let result = "";
    
    for (let i = 0; i < myString.length; i++) {
        result += myString[i] + "<br>";
    }

    document.getElementById('result').innerHTML = result;
}
