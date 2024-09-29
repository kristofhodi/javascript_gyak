function printDivisors() {
    
    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = "";  

    let number = 10;

    while (number <= 30) {
        let divisors = []; 
        let i = 1;

        while (i <= number) {
            if (number % i === 0) {
                divisors.push(i);  
            }
            i++;
        }

        resultDiv.innerHTML += `${number}: ${divisors.join(", ")},<br>`;

        number++;  
    }
}
