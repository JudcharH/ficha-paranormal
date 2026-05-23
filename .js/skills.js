// ======================================
// PENALIDADES GLOBAIS
// ======================================



// ======================================
// PEGAR ATRIBUTO
// ======================================

function getAttributeValue(attr){

    // =====================
    // FORÇA
    // =====================

    if(attr.includes("FOR")){

        return (
            Number(
                document.getElementById("forca").value
            ) || 1
        ) + atributosPenalidades.forca;

    }

    // =====================
    // AGILIDADE
    // =====================

    if(attr.includes("AGI")){

        return (
            Number(
                document.getElementById("agilidade").value
            ) || 1
        ) + atributosPenalidades.agilidade;

    }

    // =====================
    // INTELECTO
    // =====================

    if(attr.includes("INT")){

        return (
            Number(
                document.getElementById("intelecto").value
            ) || 1
        ) + atributosPenalidades.intelecto;

    }

    // =====================
    // VIGOR
    // =====================

    if(attr.includes("VIG")){

        return (
            Number(
                document.getElementById("vigor").value
            ) || 1
        ) + atributosPenalidades.vigor;

    }

    // =====================
    // PRESENÇA
    // =====================

    if(attr.includes("PRE")){

        return (
            Number(
                document.getElementById("presenca").value
            ) || 1
        ) + atributosPenalidades.presenca;

    }

    return 1;

}

// ======================================
// UPDATE PERÍCIAS
// ======================================

function updateSkills(){

    const rows =
        document.querySelectorAll(".skill-row");

    rows.forEach(row => {

        const treino =
            Number(
                row.querySelector(".skill-train").value
            ) || 0;

        const bonus =
            Number(
                row.querySelector(".skill-bonus").value
            ) || 0;

        const total =
            treino + bonus;

        row.querySelector(".skill-total")
        .innerText = `+${total}`;

    });

}

// ======================================
// ROLAR PERÍCIA
// ======================================

function rollSkill(row){

    const attr =
        row.querySelector(".skill-attr").innerText;

    let atributo =
        getAttributeValue(attr);

    // =====================
    // MÍNIMO
    // =====================

    if(atributo < 1){

        atributo = 1;

    }

    const treino =
        Number(
            row.querySelector(".skill-train").value
        ) || 0;

    const bonus =
        Number(
            row.querySelector(".skill-bonus").value
        ) || 0;

    const nome =
        row.querySelector(".skill-name")
        .innerText;

    // =====================
    // ROLAGEM
    // =====================

    let resultados = [];

    for(let i = 0; i < atributo; i++){

        resultados.push(
            randomDice(20)
        );

    }

    let maior =
        Math.max(...resultados);

    let penalidade = 0;

    // ======================================
    // PENALIDADES ESPECÍFICAS
    // ======================================

    // =====================
    // ENFRAQUECIDO
    // =====================

    if(
        nome === "Atletismo" ||
        nome === "Luta"
    ){

        penalidade +=
            atributosPenalidades.forca;

    }

    // =====================
    // LENTIDÃO
    // =====================

    if(
        nome === "Acrobacia" ||
        nome === "Furtividade" ||
        nome === "Iniciativa" ||
        nome === "Pilotagem" ||
        nome === "Pontaria" ||
        nome === "Reflexos"
    ){

        penalidade +=
            atributosPenalidades.agilidade;

    }

    // =====================
    // TRAUMATIZADO
    // =====================

    if(
        nome === "Vontade"
    ){

        penalidade +=
            atributosPenalidades.vontade;

    }

    // =====================
    // CEGO
    // =====================

    if(
        nome === "Percepção"
    ){

        penalidade +=
            atributosPenalidades.percepcao;

    }

    if(
        nome === "Pontaria"
    ){

        penalidade +=
            atributosPenalidades.pontaria;

    }

    // =====================
    // PENUMBRA
    // =====================

    if(
        nome === "Reflexos"
    ){

        penalidade +=
            atributosPenalidades.reflexos;

    }

    // =====================
    // TOTAL
    // =====================

    const total =
        maior +
        treino +
        bonus +
        penalidade;

    // =====================
    // RESULTADO
    // =====================

    document.getElementById("diceResult")
    .innerHTML = `

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

// ======================================
// CLICK PERÍCIAS
// ======================================

document.querySelectorAll(".clickable-skill")
.forEach(skill => {

    skill.addEventListener("click", function(e){

        if(
            e.target.tagName === "INPUT"
        ) return;

        rollSkill(this);

    });

});

// ======================================
// UPDATE INPUTS
// ======================================

document.querySelectorAll(
    ".skill-train, .skill-bonus"
)
.forEach(input => {

    input.addEventListener(
        "input",
        updateSkills
    );

});

// ======================================
// START
// ======================================

updateSkills();