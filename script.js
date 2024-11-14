let laatstIngevoerdeWoorden = []; // Array om de laatst ingevoerde woorden en kleuren bij te houden

function checkNaam() {
    const correctNaam = "Loek";
    const naamInput = document.getElementById("naamInput").value.trim().toLowerCase(); // Zet naar kleine letters
    const resultaatElement = document.getElementById("resultaat");

    // Controleer of de ingevoerde naam exact 4 letters heeft
    if (naamInput.length !== 4) {
        resultaatElement.innerHTML = "<span style='color: red;'>Voer een naam in van precies 4 letters.</span>";
        return; // Stop de functie als de invoer niet precies 4 letters is
    }

    // Voeg het huidige woord en de kleurinstellingen toe aan de lijst van laatst ingevoerde woorden
    laatstIngevoerdeWoorden.unshift({ woord: naamInput, kleuren: getKleurInstellingen(naamInput) });
    if (laatstIngevoerdeWoorden.length > 5) {
        laatstIngevoerdeWoorden.pop(); // Verwijder het oudste woord als er meer dan 5 woorden zijn
    }

    // Controleer of het woord juist is en toon de gekleurde letters
    if (naamInput === correctNaam.toLowerCase()) {
        resultaatElement.innerHTML = "<span style='color: green;'>Welkom Loek!!!</span>";
    } else {
        let resultaat = "";
        for (let i = 0; i < naamInput.length; i++) {
            const letter = naamInput[i];
            const correctLetter = correctNaam[i].toLowerCase();

            if (letter === correctLetter) {
                resultaat += `<span style='color: green;'>${letter}</span>`; // Correcte letter, groen
            } else if (correctNaam.toLowerCase().includes(letter)) {
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
    const correctNaam = "Loek".toLowerCase(); // Zet het referentiewoord naar kleine letters
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
