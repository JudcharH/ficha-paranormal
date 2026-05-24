// ======================================
// PERÍCIAS
// ======================================

function getAttributeValue(attr){

    if(attr.includes("FOR")){

        return Number(
            document.getElementById("forca").value
        ) || 1;

    }

    if(attr.includes("AGI")){

        return Number(
            document.getElementById("agilidade").value
        ) || 1;

    }

    if(attr.includes("INT")){

        return Number(
            document.getElementById("intelecto").value
        ) || 1;

    }

    if(attr.includes("VIG")){

        return Number(
            document.getElementById("vigor").value
        ) || 1;

    }

    if(attr.includes("PRE")){

        return Number(
            document.getElementById("presenca").value
        ) || 1;

    }

    return 1;

}

// ======================================
// UPDATE
// ======================================

function updateSkills(){

    const rows =
        document.querySelectorAll(".skill-row");

    rows.forEach(row => {

        const treino = Number(
            row.querySelector(".skill-train").value
        ) || 0;

        const bonus = Number(
            row.querySelector(".skill-bonus").value
        ) || 0;

        const attrText =
            row.querySelector(".skill-attr")
            .innerText;

        const atributo =
            getAttributeValue(attrText);

        const total =
            treino + bonus;

        row.querySelector(".skill-total")
        .innerText = "+" + total;

        // =========================
        // VISUAL TREINADA
        // =========================

        if(treino > 0){

            row.classList.add("trained-skill");

        }else{

            row.classList.remove("trained-skill");

        }

        // =========================
        // DATA
        // =========================

        row.dataset.attribute =
            atributo;

    });

}

// ======================================
// ROLAR PERÍCIA
// ======================================

function rollSkill(row){

    const atributo = Number(
        row.dataset.attribute
    ) || 1;

    const treino = Number(
        row.querySelector(".skill-train").value
    ) || 0;

    const bonus = Number(
        row.querySelector(".skill-bonus").value
    ) || 0;

    const nome =
        row.querySelector(".skill-name")
        .innerText;

    let rolls = [];

    for(let i = 0; i < atributo; i++){

        rolls.push(randomDice(20));

    }

    const maior =
        Math.max(...rolls);

    const total =
        maior + treino + bonus;

    let critico = "";

    if(maior === 20){

        critico = `

            <div class="critical-text">
                CRÍTICO!
            </div>

        `;

    }

    document.getElementById("diceResult")
    .innerHTML = `

        <div class="dice-skill-name">
            ${nome}
        </div>

        <div class="dice-rolls">
            ${rolls.join(" • ")}
        </div>

        <div class="dice-big">
            ${maior}
        </div>

        <div class="dice-total">
            Total: ${total}
        </div>

        ${critico}

    `;

}

// ======================================
// CLICK
// ======================================

function bindSkillEvents(){

    document.querySelectorAll(".clickable-skill")
    .forEach(skill => {

        skill.onclick = function(e){

            if(
                e.target.tagName === "INPUT"
            ){
                return;
            }

            rollSkill(this);

        };

    });

}

// ======================================
// EVENTOS INPUT
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
// UPDATE ATRIBUTOS
// ======================================

[
    "forca",
    "agilidade",
    "intelecto",
    "vigor",
    "presenca"
]
.forEach(id => {

    const el =
        document.getElementById(id);

    if(el){

        el.addEventListener(
            "input",
            updateSkills
        );

    }

});

// ======================================
// START
// ======================================

updateSkills();

bindSkillEvents();