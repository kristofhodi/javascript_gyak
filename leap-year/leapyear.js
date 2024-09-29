function checkLeapYear() {
    let year = parseInt(document.getElementById('year').value);

    if (isNaN(year)) {
        document.getElementById('result').innerText = "Kérlek, adj meg egy érvényes évet!";
        return;
    }

    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        document.getElementById('result').innerText = `${year} szökőév.`;
    } else {
        document.getElementById('result').innerText = `${year} nem szökőév.`;
    }
}
