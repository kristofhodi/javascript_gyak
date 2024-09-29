function calculateGrade() {
    
    let score = document.getElementById('score').value;

    if (score === "" || score < 0 || score > 100) {
        document.getElementById('result').innerText = "Kérlek, adj meg egy érvényes pontszámot 0 és 100 között.";
        return;
    }

    let grade;
    if (score >= 90) {
        grade = "A";
    } else if (score >= 80) {
        grade = "B";
    } else if (score >= 70) {
        grade = "C";
    } else if (score >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }

    document.getElementById('result').innerText = `Az érdemjegyed: ${grade}`;
}
