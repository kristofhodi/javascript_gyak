function calculateBMI() {
    
    let mass = parseFloat(document.getElementById('mass').value);
    let height = parseFloat(document.getElementById('height').value);

    if (isNaN(mass) || isNaN(height) || height <= 0) {
        alert("Kérlek, adj meg érvényes számokat a mezőkben.");
        return;
    }

    let bmi = mass / (height * height);

    document.getElementById("bmiResult").innerText = `BMI: ${bmi.toFixed(2)}`;
}
