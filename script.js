let laatstIngevoerdeWoorden = [];

function checkNaam() {
    const correctNaam = "Loek";
    const naamInput = document.getElementById("naamInput").value.toLowerCase(); // Zet ingevoerde naam om naar kleine letters
    const resultaatElement = document.getElementById("resultaat");

    if (naamInput.trim() !== "") {
        laatstIngevoerdeWoorden.unshift({ woord: naamInput, kleuren: getKleurInstellingen(naamInput) });
        if (laatstIngevoerdeWoorden.length > 5) {
            laatstIngevoerdeWoorden.pop();
        }
    }

    if (naamInput === correctNaam.toLowerCase()) { // Vergelijk beide namen in kleine letters
        resultaatElement.innerHTML = "<span style='color: green;'>Welkom Loek!!!</span>";
    } else {
        let resultaat = "";
        for (let i = 0; i < naamInput.length; i++) {
            const letter = naamInput[i];
            const correctLetter = correctNaam[i].toLowerCase(); // Zet correctLetter om naar kleine letters

            if (letter === correctLetter) {
                resultaat += `<span style='color: green;'>${naamInput[i]}</span>`;
            } else if (correctNaam.toLowerCase().includes(letter)) { // Controleer in kleine letters
                resultaat += `<span style='color: orange;'>${naamInput[i]}</span>`;
            } else {
                resultaat += `<span style='color: red;'>${naamInput[i]}</span>`;
            }
        }
        resultaatElement.innerHTML = resultaat;
    }

    const woordenLijst = document.createElement("ul");
    laatstIngevoerdeWoorden.forEach((item) => {
        const li = document.createElement("li");
        let gekleurdWoord = "";
        for (let i = 0; i < item.woord.length; i++) {
            const letter = item.woord[i];
            const kleur = item.kleuren[i];
            gekleurdWoord += `<span style="color: ${kleur};">${letter}</span>`;
        }
        li.innerHTML = gekleurdWoord;
        woordenLijst.appendChild(li);
    });

    resultaatElement.appendChild(woordenLijst);
}

function getKleurInstellingen(naamInput) {
    const correctNaam = "Loek".toLowerCase(); // Zet correctNaam om naar kleine letters
    let kleuren = [];

    for (let i = 0; i < naamInput.length; i++) {
        const letter = naamInput[i].toLowerCase(); // Zet letter om naar kleine letters
        const correctLetter = correctNaam[i];

        if (letter === correctLetter) {
            kleuren.push("green");
        } else if (correctNaam.includes(letter)) {
            kleuren.push("orange");
        } else {
            kleuren.push("red");
        }
    }

    return kleuren;
}
