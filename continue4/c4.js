function printNumbers() {

    let result = '';   
    let divisibleByThreeCount = 0; 

    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            divisibleByThreeCount++;  

            if (divisibleByThreeCount === 1 || divisibleByThreeCount === 2 || divisibleByThreeCount === 3) {
                if (divisibleByThreeCount === 3) {
                    divisibleByThreeCount = 0; 
                }
                continue;
            }
        }

        
        result += i + ', ';
    }

    document.getElementById('result').innerText = result.slice(0, -2); 
}
