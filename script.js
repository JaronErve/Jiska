let laatstIngevoerdeWoorden = [];

function checkNaam() {
    const correctNaam = "Loek";
    const naamInput = document.getElementById("naamInput").value.trim().toLowerCase();
    const resultaatElement = document.getElementById("resultaat");
    const laatsteNamenElement = document.getElementById("laatsteNamen");
    const vuurwerkElement = document.getElementById("vuurwerk");

    if (naamInput.length !== 4) {
        resultaatElement.innerHTML = "<span style='color: red;'>Voer een naam in van precies 4 letters.</span>";
        return;
    }

    // Voeg de ingevoerde naam toe aan de lijst van laatst ingevoerde namen
    laatstIngevoerdeWoorden.unshift(naamInput);
    if (laatstIngevoerdeWoorden.length > 5) {
        laatstIngevoerdeWoorden.pop();
    }

    // Update de lijstweergave van de laatste ingevoerde namen
    laatsteNamenElement.innerHTML = "";
    laatstIngevoerdeWoorden.forEach(woord => {
        const li = document.createElement("li");
        let gekleurdeWoord = "";

        // Loop door elke letter in de naam om kleur toe te passen
        for (let i = 0; i < woord.length; i++) {
            const letter = woord[i];
            const correctLetter = correctNaam[i].toLowerCase();

            if (letter === correctLetter) {
                gekleurdeWoord += `<span style='color: green;'>${letter}</span>`;
            } else if (correctNaam.toLowerCase().includes(letter)) {
                gekleurdeWoord += `<span style='color: orange;'>${letter}</span>`;
            } else {
                gekleurdeWoord += `<span style='color: red;'>${letter}</span>`;
            }
        }
        
        li.innerHTML = gekleurdeWoord;  // Zet de gekleurde tekst in de lijst
        laatsteNamenElement.appendChild(li);
    });

    if (naamInput === correctNaam.toLowerCase()) {
        // Welkom Loek! met vuurwerk
        resultaatElement.innerHTML = "<span style='color: green;'>Welkom Loek!!!</span>";
        vuurwerkElement.style.display = "block"; // Toon het vuurwerk
        // Laat vuurwerk 5 seconden duren op de eerste locatie
        setTimeout(() => {
            // Verplaats het vuurwerk naar een andere locatie en laat het nog 20 seconden duren
            vuurwerkElement.style.top = "50%";
            vuurwerkElement.style.left = "50%";
            setTimeout(() => {
                vuurwerkElement.style.display = "none"; // Verberg het vuurwerk na 25 seconden
            }, 20000); // Blijf 20 seconden op de nieuwe locatie
        }, 5000); // Laat het vuurwerk 5 seconden op de eerste locatie
    } else {
        let resultaat = "";
        for (let i = 0; i < naamInput.length; i++) {
            const letter = naamInput[i];
            const correctLetter = correctNaam[i].toLowerCase();

            if (letter === correctLetter) {
                resultaat += `<span style='color: green;'>${letter}</span>`;
            } else if (correctNaam.toLowerCase().includes(letter)) {
                resultaat += `<span style='color: orange;'>${letter}</span>`;
            } else {
                resultaat += `<span style='color: red;'>${letter}</span>`;
            }
        }
        resultaatElement.innerHTML = resultaat;
    }
}
