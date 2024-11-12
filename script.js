let laatstIngevoerdeWoorden = []; // Array om de laatst ingevoerde woorden bij te houden

function checkNaam() {
    const correctNaam = "Loek";
    const naamInput = document.getElementById("naamInput").value;
    const resultaatElement = document.getElementById("resultaat");

    // Voeg het huidige woord toe aan de lijst van laatst ingevoerde woorden
    if (naamInput.trim() !== "") {
        laatstIngevoerdeWoorden.unshift(naamInput); // Voeg het nieuwe woord toe aan het begin van de array
        if (laatstIngevoerdeWoorden.length > 5) {
            laatstIngevoerdeWoorden.pop(); // Verwijder het oudste woord als er meer dan 5 woorden zijn
        }
    }

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

    // Toon de 5 laatst ingevoerde woorden
    const woordenLijst = document.createElement("ul");
    laatstIngevoerdeWoorden.forEach((woord) => {
        const li = document.createElement("li");
        li.textContent = woord;
        woordenLijst.appendChild(li);
    });

    // Voeg de lijst van laatst ingevoerde woorden toe aan het resultaat
    resultaatElement.appendChild(woordenLijst);
}
