function calculateAverage() {
    
    let number = document.getElementById('inputNumber').value;
    
    if (number === "") {
        document.getElementById('result').innerText = "Kérlek, adj meg egy érvényes számot!";
        return;
    }

    let sum = 0;
    let count = 0;
    
    let numStr = number.toString();

    for (let i = 0; i < numStr.length; i++) {
        sum += parseInt(numStr[i]); 
        count++; 
    }

    let average = sum / count;

    document.getElementById('result').innerText = `A számjegyek átlaga: ${average}`;
}
