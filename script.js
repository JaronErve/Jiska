let laatstIngevoerdeWoorden = [];

function checkNaam() {
    const correctNaam = "Loek";
    const naamInput = document.getElementById("naamInput").value.trim().toLowerCase();
    const resultaatElement = document.getElementById("resultaat");
    const laatsteNamenElement = document.getElementById("laatsteNamen");

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
        li.textContent = woord;
        laatsteNamenElement.appendChild(li);
    });

    if (naamInput === correctNaam.toLowerCase()) {
        resultaatElement.innerHTML = "<span style='color: green;'>Welkom Loek!!!</span>";
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
