function drawSquare() {

    let size = parseInt(document.getElementById('size').value);

    if (isNaN(size) || size < 1) {
        document.getElementById('result').innerText = "Kérlek, adj meg egy 1-nél nagyobb számot.";
        return;
    }

    let square = '';

    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            if (row === 0 || row === size - 1 || col === 0 || col === size - 1 || row === col) {
                square += '%'; 
            } else {
                square += ' '; 
            }
        }
        square += '\n';
    }

    document.getElementById('result').innerText = square;
}
