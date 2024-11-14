let laatstIngevoerdeWoorden = [];

function checkNaam() {
    const correctNaam = "Loek";
    const naamInput = document.getElementById("naamInput").value.trim().toLowerCase();
    const resultaatElement = document.getElementById("resultaat");

    if (naamInput.length !== 4) {
        resultaatElement.innerHTML = "<span style='color: red;'>Voer een naam in van precies 4 letters.</span>";
        return;
    }

    if (naamInput === correctNaam.toLowerCase()) {
        // Toon het grote welkom bericht en vuurwerk
        showVuurwerk();
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

function showVuurwerk() {
    const vuurwerkContainer = document.getElementById("vuurwerkContainer");
    vuurwerkContainer.style.display = "flex";
    
    // Creëer vuurwerk effect
    for (let i = 0; i < 30; i++) {
        const firework = document.createElement("div");
        firework.classList.add("firework");
        firework.style.left = Math.random() * 100 + "vw";
        firework.style.top = Math.random() * 100 + "vh";
        firework.style.backgroundColor = getRandomColor();
        vuurwerkContainer.appendChild(firework);
        
        // Verwijder vuurwerk na animatie
        firework.addEventListener("animationend", () => {
            firework.remove();
        });
    }
    
    // Sluit vuurwerk en welkom bericht na enkele seconden
    setTimeout(() => {
        vuurwerkContainer.style.display = "none";
    }, 3000);
}

function getRandomColor() {
    const colors = ["#ff5733", "#ffbd33", "#dbff33", "#75ff33", "#33ff57", "#33ffbd", "#33dbff", "#3375ff", "#5733ff"];
    return colors[Math.floor(Math.random() * colors.length)];
}
