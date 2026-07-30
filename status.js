// ======================================
// STATUS.JS
// ======================================

// -----------------------------
// ELEMENTOS
// -----------------------------

const nivelInput =
document.getElementById("nivel");

const vigorInput =
document.getElementById("vigor");

const presencaInput =
document.getElementById("presenca");

const pvAtual =
document.getElementById("pvAtual");

const pvMax =
document.getElementById("pvMax");

const pvBonus =
document.getElementById("pvBonus");

const pdAtual =
document.getElementById("pdAtual");

const pdMax =
document.getElementById("pdMax");

const pdBonus =
document.getElementById("pdBonus");

const paAtual =
document.getElementById("paAtual");

const paTexto =
document.getElementById("paMaxText");

// ======================================
// PA
// ======================================

function getMaxPA(){

    const nivel =
    Number(nivelInput.value)||1;

    if(nivel>=10){

        return 4;

    }

    return 3;

}

// ======================================
// PV
// ======================================

function getBasePV(){

    const nivel =
    Number(nivelInput.value)||1;

    const vigor =
    Number(vigorInput.value)||1;

    return (7+vigor)*nivel;

}

// ======================================
// PD
// ======================================

function getBasePD(){

    const nivel =
    Number(nivelInput.value)||1;

    const presenca =
    Number(presencaInput.value)||1;

    return (4+presenca)*nivel;

}

// ======================================
// ATUALIZAR PV
// ======================================

function updatePV(){

    const bonus =
    Number(pvBonus.value)||0;

    const maximo =
    getBasePV()+bonus;

    pvMax.value=maximo;

    if(Number(pvAtual.value)>maximo){

        pvAtual.value=maximo;

    }

}

// ======================================
// ATUALIZAR PD
// ======================================

function updatePD(){

    const bonus =
    Number(pdBonus.value)||0;

    const maximo =
    getBasePD()+bonus;

    pdMax.value=maximo;

    if(Number(pdAtual.value)>maximo){

        pdAtual.value=maximo;

    }

}

// ======================================
// PA
// ======================================

function updatePA(){

    const maximo =
    getMaxPA();

    paTexto.innerText=
    "PA Máximo: "+maximo;

    if(Number(paAtual.value)>maximo){

        paAtual.value=maximo;

    }

}

// ======================================
// STATUS
// ======================================

function updateStatus(){

    updatePV();

    updatePD();

    updatePA();

}

// ======================================
// EVENTOS
// ======================================

[
nivelInput,
vigorInput,
presencaInput,
pvBonus,
pdBonus

].forEach(el=>{

    if(!el)return;

    el.addEventListener(

        "input",

        updateStatus

    );

});

// ======================================
// START
// ======================================

updateStatus();