function checkNaam() {
    const correctNaam = "Loek";
    const naamInput = document.getElementById("naamInput").value;
    const resultaatElement = document.getElementById("resultaat");

    if (naamInput.toLowerCase() === correctNaam.toLowerCase()) {
        resultaatElement.innerHTML = "<span style='color: green;'>Welkom Loek!!!</span>";
    } else {
        let resultaat = "";
        for (let i = 0; i < naamInput.length; i++) {
            const letter = naamInput[i];
            const correctLetter = correctNaam[i];

            if (letter === correctLetter) {
                resultaat += <span style='color: green;'>${letter}</span>; // Correcte letter, groen
            } else if (correctNaam.includes(letter)) {
                resultaat += <span style='color: orange;'>${letter}</span>; // Letter komt voor, maar niet op de juiste plek, oranje
            } else {
                resultaat += <span style='color: red;'>${letter}</span>; // Fout, rood
            }
        }
        resultaatElement.innerHTML = resultaat;
    }
}
