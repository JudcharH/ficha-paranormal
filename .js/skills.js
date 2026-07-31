// ======================================
// SKILLS V2
// ======================================

// ----------------------------
// ATRIBUTOS
// ----------------------------

const ATTRIBUTE_NAMES = {

    FOR: "forca",
    AGI: "agilidade",
    INT: "intelecto",
    VIG: "vigor",
    PRE: "presenca"

};

// ----------------------------
// DADOS TREINAMENTO
// ----------------------------

const TRAINING_DICE = {

    0:0,
    1:4,
    2:8,
    3:12

};

// ======================================
// PEGAR ATRIBUTO
// ======================================

function getSkillAttribute(row){

    return row.dataset.attribute;

}

// ======================================
// VALOR ATRIBUTO
// ======================================

function getAttributeValue(name){

    const id =
    ATTRIBUTE_NAMES[name];

    if(!id) return 1;

    return Number(
        document.getElementById(id).value
    )||1;

}

// ======================================
// TREINAMENTO
// ======================================

function getTrainingValue(row){

    const value =
    Number(

        row.querySelector(".skill-train").value

    )||0;

    return TRAINING_DICE[value];

}


// ======================================
// BONUS
// ======================================

function getBonus(row){

    return Number(

        row.querySelector(".skill-bonus").value

    )||0;

}

// ======================================
// PENALIDADE
// ======================================

function getPenalty(row){

    return Number(

        row.querySelector(".skill-penalty").value

    )||0;

}

// ======================================
// UPDATE PERÍCIAS
// ======================================

function updateSkills(){

    document
    .querySelectorAll(".skill-row")
    .forEach(row=>{

        const atributo =
        getSkillAttribute(row);

        const atributoValor =
        getAttributeValue(atributo);

        const treino =
        getTrainingValue(row);

        const bonus =
        getBonus(row);

        const penalty =
        getPenalty(row);

        const total =
        bonus+penalty;

        row.dataset.attributeValue=
        atributoValor;

        row.dataset.trainingDice=
        treino;

        row.dataset.total=
        total;

        const totalText=
        row.querySelector(".skill-total");

        if(total>=0){

            totalText.innerText=
            "+"+total;

        }else{

            totalText.innerText=
            total;

        }

        row.classList.remove(

            "skill-trained",
            "skill-veteran",
            "skill-expert"

        );

        if(treino===4){

            row.classList.add(
                "skill-trained"
            );

        }

        if(treino===8){

            row.classList.add(
                "skill-veteran"
            );

        }

        if(treino===12){

            row.classList.add(
                "skill-expert"
            );

        }

    });

}

// ======================================
// ATRIBUTOS DISPONÍVEIS
// ======================================

const skillAttributes = [

    "FOR",
    "AGI",
    "INT",
    "VIG",
    "PRE"

];

// ======================================
// TROCAR ATRIBUTO
// ======================================

function changeSkillAttribute(skillRow){

    const atual =
    skillRow.dataset.attribute;

    let indice =
    skillAttributes.indexOf(atual);

    indice++;

    if(indice>=skillAttributes.length){

        indice=0;

    }

    const novo =
    skillAttributes[indice];

    skillRow.dataset.attribute=
    novo;

    skillRow
    .querySelector(".skill-attr")
    .innerText=
    "(" + novo + ")";

    updateSkills();

}

// ======================================
// EVENTOS
// ======================================

function bindSkillEvents(){

    document
    .querySelectorAll(".skill-row")
    .forEach(row=>{

        // ------------------------
        // clicar no atributo
        // ------------------------

        row
        .querySelector(".skill-attr")
        .onclick=function(e){

            e.stopPropagation();

            changeSkillAttribute(row);

        };

        // ------------------------
        // clicar na perícia
        // ------------------------

        row.onclick=function(e){

            if(

                e.target.tagName==="INPUT"

                ||

                e.target.tagName==="SELECT"

            ){

                return;

            }

            rollSkill(row);

        };

    });

}

// ======================================
// ROLAR PERÍCIA
// ======================================

function rollSkill(row){

    const atributo =
    Number(row.dataset.attributeValue)||1;

    const bonus =
    Number(row.dataset.total)||0;

    const treino =
    Number(row.dataset.trainingDice)||0;

    const nome =
    row.querySelector(".skill-name").innerText;

    let rolls=[];

    for(let i=0;i<atributo;i++){

        rolls.push(

            randomDice(20)

        );

    }

    const maior=
    Math.max(...rolls);

    let treinoValor=0;

    let treinoTexto="";

    const critico=
    maior===20;

    if(treino>0){

        if(critico){

            const dado1=
            randomDice(treino);

            const dado2=
            randomDice(treino);

            treinoValor=
            dado1+dado2;

            treinoTexto=
            dado1+" + "+dado2;

        }

        else{

            treinoValor=
            randomDice(treino);

            treinoTexto=
            treinoValor;

        }

    }

    const total=

        maior+
        treinoValor+
        bonus;

    document
    .getElementById("diceResult")
    .innerHTML=

    `
    <div class="dice-skill-name">

        ${nome}

    </div>

    <div class="dice-rolls">

        d20:
        ${rolls.join(" • ")}

    </div>

    <div class="dice-rolls">

        Treinamento:
        ${treinoTexto}

    </div>

    <div class="dice-big">

        ${maior}

    </div>

    <div class="dice-total">

        Total:
        ${total}

    </div>

    ${critico ?

    `<div class="critical-text">

        CRÍTICO

    </div>`

    :

    ""

    }

    `;

}