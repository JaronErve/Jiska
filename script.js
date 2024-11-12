function checkNaam() {
    const correctNaam = "Loek";
    const naamInput = document.getElementById("naamInput").value;
    const resultaatElement = document.getElementById("resultaat");

    // Haal de lijst van de laatste 5 ingevoerde woorden op uit localStorage, of maak een lege lijst als die er nog niet is
    let laatstIngevoerdeWoorden = JSON.parse(localStorage.getItem('laatstIngevoerdeWoorden')) || [];

    // Voeg de nieuwe ingevoerde naam toe aan de lijst
    laatstIngevoerdeWoorden.push(naamInput);

    // Zorg ervoor dat de lijst niet groter wordt dan 5
    if (laatstIngevoerdeWoorden.length > 5) {
        laatstIngevoerdeWoorden.shift(); // Verwijder het oudste woord als er meer dan 5 zijn
    }

    // Sla de bijgewerkte lijst op in localStorage
    localStorage.setItem('laatstIngevoerdeWoorden', JSON.stringify(laatstIngevoerdeWoorden));

    // Laat de laatste 5 ingevoerde woorden zien
    const laatstIngevoerdeElement = document.getElementById("laatstIngevoerde");
    laatstIngevoerdeElement.innerHTML = "<strong>Laatste 5 ingevoerde woorden:</strong><br>" + laatstIngevoerdeWoorden.join("<br>");

    if (naamInput.toLowerCase() === correctNaam.toLowerCase()) {
        resultaatElement.innerHTML = "<span style='color: green;'>Welkom Loek!!!</span>";
    } else {
        let resultaat = "";
        for (let i = 0; i < naamInput.length; i++) {
            const letter = naamInput[i];
            const correctLetter = correctNaam[i];

            if (letter === correctLetter) {
                resultaat += `<span style='color: green;'>${letter}</span>`; // Correcte letter, groen
            } else if (correctNaam.includes(letter)) {
                resultaat += `<span style='color: orange;'>${letter}</span>`; // Letter komt voor, maar niet op de juiste plek, oranje
            } else {
                resultaat += `<span style='color: red;'>${letter}</span>`; // Fout, rood
            }
        }
        resultaatElement.innerHTML = resultaat;
    }
}
