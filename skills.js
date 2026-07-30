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