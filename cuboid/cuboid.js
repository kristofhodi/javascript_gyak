function calculateCuboid() {
    let length = parseFloat(document.getElementById('length').value);
    let width = parseFloat(document.getElementById('width').value);
    let height = parseFloat(document.getElementById('height').value);

    if (isNaN(length) || isNaN(width) || isNaN(height)) {
        alert("Kérlek, adj meg érvényes számokat mindhárom mezőben.");
        return;
    }

    let surfaceArea = 2 * (length * width + width * height + height * length);

    let volume = length * width * height;

    document.getElementById("surfaceArea").innerText = `Felület: ${surfaceArea.toFixed(2)}`;
    document.getElementById("volume").innerText = `Térfogat: ${volume.toFixed(2)}`;
}
