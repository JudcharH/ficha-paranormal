// ======================================
// RANDOM DICE
// ======================================

function randomDice(type){

    return Math.floor(
        Math.random() * type
    ) + 1;

}

// ======================================
// REMOVER CARD
// ======================================

function removeCard(button){

    const card =
        button.closest(
            ".ability-card, .inventory-card, .assimilation-card"
        );

    if(card){

        card.remove();

        saveFicha();

    }

}

// ======================================
// FECHAR MENU
// ======================================

function closeMenu(){

    const menu =
        document.querySelector(".assimilation-menu");

    if(menu){

        menu.remove();

    }

}

// ======================================
// ATRIBUTO POR TEXTO
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
// PENALIDADES GLOBAIS
// ======================================

const atributosPenalidades = {

    forca:0,
    agilidade:0,
    vigor:0,
    intelecto:0,
    presenca:0

};

const periciasPenalidades = {

    fortitude:0,
    reflexos:0,
    vontade:0,
    percepcao:0,
    pontaria:0

};

// ======================================
// PEGAR PENALIDADE ATRIBUTO
// ======================================

function getAttributePenalty(attr){

    if(attr.includes("FOR")){

        return atributosPenalidades.forca;

    }

    if(attr.includes("AGI")){

        return atributosPenalidades.agilidade;

    }

    if(attr.includes("INT")){

        return atributosPenalidades.intelecto;

    }

    if(attr.includes("VIG")){

        return atributosPenalidades.vigor;

    }

    if(attr.includes("PRE")){

        return atributosPenalidades.presenca;

    }

    return 0;

}