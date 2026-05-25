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
// GRAUS DE TREINAMENTO
// ======================================

function getTrainingBonus(value){

    value = Number(value) || 0;

    // 0 = destreinado
    if(value <= 0){
        return 0;
    }

    // 1 = treinado
    if(value === 1){
        return 5;
    }

    // 2 = veterano
    if(value === 2){
        return 10;
    }

    // 3 = expert
    if(value >= 3){
        return 15;
    }

    return 0;

}

// ======================================
// PENALIDADES
// ======================================

function getSkillPenalty(skillName){

    let penalty = 0;

    const conditions =
        document.querySelectorAll(".condition-card span");

    conditions.forEach(cond => {

        const nome = cond.innerText;

        // =====================================
        // ENFRAQUECIDO
        // =====================================

        if(
            nome === "Enfraquecido"
            &&
            (
                skillName === "Atletismo"
                ||
                skillName === "Luta"
            )
        ){
            penalty -= 5;
        }

        // =====================================
        // LENTIDÃO
        // =====================================

        if(
            nome === "Lentidão"
            &&
            (
                skillName === "Acrobacia"
                ||
                skillName === "Furtividade"
                ||
                skillName === "Reflexos"
                ||
                skillName === "Pilotagem"
                ||
                skillName === "Pontaria"
                ||
                skillName === "Crime"
                ||
                skillName === "Iniciativa"
            )
        ){
            penalty -= 5;
        }

        // =====================================
        // ENJOADO
        // =====================================

        if(
            nome === "Enjoado"
            &&
            (
                skillName === "Atletismo"
                ||
                skillName === "Luta"
                ||
                skillName === "Acrobacia"
                ||
                skillName === "Furtividade"
            )
        ){
            penalty -= 3;
        }

        // =====================================
        // TRAUMATIZADO
        // =====================================

        if(
            nome === "Traumatizado"
            &&
            skillName === "Vontade"
        ){
            penalty -= 5;
        }

        // =====================================
        // PENUMBRA
        // =====================================

        if(
            nome === "Penumbra"
            &&
            skillName === "Percepção"
        ){
            penalty -= 5;
        }

        if(
            nome === "Penumbra"
            &&
            skillName === "Reflexos"
        ){
            penalty -= 3;
        }

        // =====================================
        // CEGO
        // =====================================

        if(
            nome === "Cego"
            &&
            (
                skillName === "Percepção"
                ||
                skillName === "Pontaria"
            )
        ){
            penalty -= 10;
        }

        // =====================================
        // SURDO
        // =====================================

        if(
            nome === "Surdo"
            &&
            skillName === "Percepção"
        ){
            penalty -= 10;
        }

        // =====================================
        // ENVENENAMENTO
        // =====================================

        if(
            nome === "Envenenamento"
            &&
            skillName === "Fortitude"
        ){
            penalty -= 5;
        }

    });

    return penalty;

}

// ======================================
// UPDATE PERÍCIAS
// ======================================

function updateSkills(){

    const rows =
        document.querySelectorAll(".skill-row");

    rows.forEach(row => {

        // =====================
        // INPUTS
        // =====================

        const treinoValor = Number(
            row.querySelector(".skill-train").value
        ) || 0;

        const bonusExtra = Number(
            row.querySelector(".skill-bonus").value
        ) || 0;

        const penaltyInput = row.querySelector(".skill-penalty");

        // =====================
        // NOME
        // =====================

        const skillName =
            row.querySelector(".skill-name")
            .innerText;

        // =====================
        // ATRIBUTO
        // =====================

        const attrText =
            row.querySelector(".skill-attr")
            .innerText;

        const atributo =
            getAttributeValue(attrText);

        // =====================
        // TREINAMENTO
        // =====================

        const treino =
            getTrainingBonus(treinoValor);

        // =====================
        // PENALIDADE
        // =====================

        const penalty =
            getSkillPenalty(skillName);

        // atualiza campo visual
        if(penaltyInput){

            penaltyInput.value = penalty;

        }

        // =====================
        // TOTAL
        // =====================

        const total =
            treino + bonusExtra + penalty;

        // =====================
        // TEXTO
        // =====================

        row.querySelector(".skill-total")
        .innerText =
            total >= 0
            ? "+" + total
            : total;

        // =====================
        // VISUAL
        // =====================

        row.classList.remove(
            "skill-trained",
            "skill-veteran",
            "skill-expert"
        );

        if(treinoValor === 1){

            row.classList.add(
                "skill-trained"
            );

        }

        if(treinoValor === 2){

            row.classList.add(
                "skill-veteran"
            );

        }

        if(treinoValor >= 3){

            row.classList.add(
                "skill-expert"
            );

        }

        // =====================
        // DATA
        // =====================

        row.dataset.attribute =
            atributo;

        row.dataset.total =
            total;

    });

}

// ======================================
// ROLAR PERÍCIA
// ======================================

function rollSkill(row){

    const atributo = Number(
        row.dataset.attribute
    ) || 1;

    const totalBonus = Number(
        row.dataset.total
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
        maior + totalBonus;

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