function calculateRemainingSeconds() {
    let currentHours = parseFloat(document.getElementById('hour').value);
    let currentMinutes = parseFloat(document.getElementById('minutes').value);
    let currentSeconds = parseFloat(document.getElementById('seconds').value);

    const totalSecondsInDay = 24 * 60 * 60;

    let elapsedSeconds = (currentHours * 60 * 60) + (currentMinutes * 60) + currentSeconds;

    let remainingSeconds = totalSecondsInDay - elapsedSeconds;

    document.getElementById('result').innerText = `Hátralévő másodpercek: ${remainingSeconds}`;
}
