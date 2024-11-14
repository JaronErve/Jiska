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
        startVuurwerk(); // Start het vuurwerk met willekeurige posities
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

// Functie om vuurwerk willekeurig over het scherm te plaatsen
function startVuurwerk() {
    const vuurwerkElement = document.getElementById("vuurwerk");

    // Functie om de positie van het vuurwerk willekeurig te zetten
    function setRandomPosition() {
        const maxWidth = window.innerWidth;  // Breedte van het scherm
        const maxHeight = window.innerHeight;  // Hoogte van het scherm
        
        // Willekeurige positie
        const randomX = Math.floor(Math.random() * maxWidth);
        const randomY = Math.floor(Math.random() * maxHeight);
        
        // Zet de positie van het vuurwerk
        vuurwerkElement.style.left = randomX + "px";
        vuurwerkElement.style.top = randomY + "px";
    }

    setRandomPosition(); // Zet de eerste willekeurige positie

    vuurwerkElement.style.display = "block"; // Toon het vuurwerk

    // Herhaal de animatie met willekeurige posities
    setInterval(() => {
        setRandomPosition(); // Verander de positie elke seconde
    }, 1000);

    // Verberg het vuurwerk na 5 seconden
    setTimeout(() => {
        vuurwerkElement.style.display = "none";
    }, 5000);
}
