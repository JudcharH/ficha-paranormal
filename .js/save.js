// ======================================
// SAVE.JS
// ======================================

// ======================================
// CHAVE
// ======================================

const SAVE_KEY="FichaParanormalV2";

// ======================================
// SALVAR
// ======================================

function saveCharacter(){

    const data={

        nome:
        document.querySelector(
            'input[type="text"]'
        ).value,

        nivel:
        nivel.value,

        origem:
        document.querySelectorAll(
            'input[type="text"]'
        )[1].value,

        idade:
        document.querySelectorAll(
            'input[type="number"]'
        )[0].value,

        pvAtual:
        pvAtual.value,

        pvBonus:
        pvBonus.value,

        pdAtual:
        pdAtual.value,

        pdBonus:
        pdBonus.value,

        paAtual:
        paAtual.value,

        atributos:{

            forca:forca.value,

            agilidade:agilidade.value,

            intelecto:intelecto.value,

            vigor:vigor.value,

            presenca:presenca.value

        },

        inventory,

        playerAbilities,

        playerAssimilations,

        activeConditions,

        currentTurn

    };

    localStorage.setItem(

        SAVE_KEY,

        JSON.stringify(data)

    );

}

// ======================================
// CARREGAR
// ======================================

function loadCharacter(){

    const save=

    localStorage.getItem(

        SAVE_KEY

    );

    if(!save){

        return;

    }

    const data=

    JSON.parse(save);

        nivel.value=
    data.nivel;

    pvAtual.value=
    data.pvAtual;

    pvBonus.value=
    data.pvBonus;

    pdAtual.value=
    data.pdAtual;

    pdBonus.value=
    data.pdBonus;

    paAtual.value=
    data.paAtual;

    forca.value=
    data.atributos.forca;

    agilidade.value=
    data.atributos.agilidade;

    intelecto.value=
    data.atributos.intelecto;

    vigor.value=
    data.atributos.vigor;

    presenca.value=
    data.atributos.presenca;

        inventory=
    data.inventory||[];

    playerAbilities=
    data.playerAbilities||[];

    playerAssimilations=
    data.playerAssimilations||[];

    activeConditions=
    data.activeConditions||[];

    currentTurn=
    data.currentTurn||1;

        renderInventory();

    renderAbilities();

    renderAssimilations();

    renderConditions();

    updateStatus();

    updateTurnDisplay();

}

// ======================================
// AUTO SAVE
// ======================================

setInterval(

    saveCharacter,

    5000

);

// ======================================
// SAIR
// ======================================

window.addEventListener(

    "beforeunload",

    saveCharacter

);