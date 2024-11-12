let laatstIngevoerdeWoorden = []; // Array om de laatst ingevoerde woorden en kleuren bij te houden

function checkNaam() {
    const correctNaam = "Loek";
    const naamInput = document.getElementById("naamInput").value;
    const resultaatElement = document.getElementById("resultaat");

    // Voeg het huidige woord en de kleurinstellingen toe aan de lijst van laatst ingevoerde woorden
    if (naamInput.trim() !== "") {
        laatstIngevoerdeWoorden.unshift({ woord: naamInput, kleuren: getKleurInstellingen(naamInput) }); // Voeg het nieuwe woord en de kleuren toe aan de array
        if (laatstIngevoerdeWoorden.length > 5) {
            laatstIngevoerdeWoorden.pop(); // Verwijder het oudste woord als er meer dan 5 woorden zijn
        }
    }

    // Controleer of het woord juist is en toon de gekleurde letters
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

    // Toon de 5 laatst ingevoerde woorden met hun kleurinstellingen
    const woordenLijst = document.createElement("ul");
    laatstIngevoerdeWoorden.forEach((item) => {
        const li = document.createElement("li");
        let gekleurdWoord = "";
        for (let i = 0; i < item.woord.length; i++) {
            const letter = item.woord[i];
            const kleur = item.kleuren[i];

            // Voeg de kleur toe aan elke letter
            gekleurdWoord += `<span style="color: ${kleur};">${letter}</span>`;
        }
        li.innerHTML = gekleurdWoord; // Voeg het gekleurde woord toe
        woordenLijst.appendChild(li);
    });

    // Voeg de lijst van laatst ingevoerde woorden toe aan het resultaat
    resultaatElement.appendChild(woordenLijst);
}

// Functie om de kleurinstellingen voor een woord te krijgen
function getKleurInstellingen(naamInput) {
    const correctNaam = "Loek";
    let kleuren = [];

    for (let i = 0; i < naamInput.length; i++) {
        const letter = naamInput[i];
        const correctLetter = correctNaam[i];

        if (letter === correctLetter) {
            kleuren.push("green"); // Correcte letter, groen
        } else if (correctNaam.includes(letter)) {
            kleuren.push("orange"); // Letter komt voor, maar niet op de juiste plek, oranje
        } else {
            kleuren.push("red"); // Fout, rood
        }
    }

    return kleuren;
}
