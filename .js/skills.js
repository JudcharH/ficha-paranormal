// ======================================
// PERÍCIAS
// ======================================

function updateSkills() {

    const rows =
        document.querySelectorAll(".skill-row");

    rows.forEach(row => {

        const treino =
            Number(row.querySelector(".skill-train").value) || 0;

        const bonus =
            Number(row.querySelector(".skill-bonus").value) || 0;

        const total = treino + bonus;

        row.querySelector(".skill-total")
            .innerText = `+${total}`;

    });

}

document
    .querySelectorAll(".skill-train, .skill-bonus")
    .forEach(input => {

        input.addEventListener(
            "input",
            updateSkills
        );

    });

updateSkills();

// ======================================
// PEGAR ATRIBUTO
// ======================================

function getAttributeValue(attr) {

    if (attr.includes("FOR")) {

        return Number(
            document.getElementById("forca").value
        ) || 1;

    }

    if (attr.includes("AGI")) {

        return Number(
            document.getElementById("agilidade").value
        ) || 1;

    }

    if (attr.includes("INT")) {

        return Number(
            document.getElementById("intelecto").value
        ) || 1;

    }

    if (attr.includes("VIG")) {

        return Number(
            document.getElementById("vigor").value
        ) || 1;

    }

    if (attr.includes("PRE")) {

        return Number(
            document.getElementById("presenca").value
        ) || 1;

    }

    return 1;

}

// ======================================
// ROLAR PERÍCIA
// ======================================

function rollSkill(row) {

    const attr =
        row.querySelector(".skill-attr").innerText;

    const atributo =
        getAttributeValue(attr);

    const treino =
        Number(row.querySelector(".skill-train").value) || 0;

    const bonus =
        Number(row.querySelector(".skill-bonus").value) || 0;

    let resultados = [];

    for (let i = 0; i < atributo; i++) {

        resultados.push(randomDice(20));

    }

    const maior = Math.max(...resultados);

    const total = maior + treino + bonus;

    const nome =
        row.querySelector(".skill-name").innerText;

    document.getElementById("diceResult").innerHTML = `
        <div class="dice-skill-name">
            ${nome}
        </div>

        <div class="dice-rolls">
            ${resultados.join(" • ")}
        </div>

        <div class="dice-big">
            ${maior}
        </div>

        <div class="dice-total">
            Total: ${total}
        </div>
    `;

}

document
    .querySelectorAll(".clickable-skill")
    .forEach(skill => {

        skill.addEventListener("click", function (e) {

            if (e.target.tagName === "INPUT") return;

            rollSkill(this);

        });

    });