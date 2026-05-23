// ======================================
// RANDOM DICE
// ======================================

function randomDice(type){

    return Math.floor(
        Math.random() * type
    ) + 1;

}

// ======================================
// FECHAR MENU
// ======================================

function closeMenu(){

    const menu =
        document.querySelector(
            ".assimilation-menu"
        );

    if(menu){

        menu.remove();

    }

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

    }

    if(
        typeof saveFicha === "function"
    ){

        saveFicha();

    }

}

// ======================================
// PENALIDADES GLOBAIS
// ======================================

const atributosPenalidades = {

    // =====================
    // ATRIBUTOS
    // =====================

    forca:0,
    agilidade:0,
    intelecto:0,
    vigor:0,
    presenca:0,

    // =====================
    // STATUS
    // =====================

    pvMax:0,
    pdMax:0,

    defesa:0,
    deslocamento:0,

    // =====================
    // PERÍCIAS
    // =====================

    percepcao:0,
    reflexos:0,
    pontaria:0,
    vontade:0

};

// ======================================
// ENTER INPUT
// ======================================

document.addEventListener(
    "keydown",
    function(e){

        if(
            e.key === "Enter" &&
            e.target.tagName === "INPUT"
        ){

            e.preventDefault();

            e.target.blur();

        }

    }
);

// ======================================
// DEBUG
// ======================================

console.log(
    "utils.js carregado."
);