// ======================================
// STATUS.JS
// ======================================

// --------------------------------------
// ELEMENTOS
// --------------------------------------

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

const nivel =
document.getElementById("nivel");

const vigor =
document.getElementById("vigor");

const presenca =
document.getElementById("presenca");

// ======================================
// CALCULAR PV
// ======================================

function calculatePV(){

    const lvl =
    Number(nivel.value)||1;

    const vig =
    Number(vigor.value)||1;

    const bonus =
    Number(pvBonus.value)||0;

    return ((7+vig)*lvl)+bonus;

}

// ======================================
// CALCULAR PD
// ======================================

function calculatePD(){

    const lvl =
    Number(nivel.value)||1;

    const pre =
    Number(presenca.value)||1;

    const bonus =
    Number(pdBonus.value)||0;

    return ((4+pre)*lvl)+bonus;

}

// ======================================
// CALCULAR PA
// ======================================

function calculatePA(){

    const lvl =
    Number(nivel.value)||1;

    if(lvl>=10){

        return 4;

    }

    return 3;

}

// ======================================
// ATUALIZAR STATUS
// ======================================

function updateStatus(){

    const maxPV =
    calculatePV();

    const maxPD =
    calculatePD();

    const maxPA =
    calculatePA();

    pvMax.value =
    maxPV;

    pdMax.value =
    maxPD;

    document
    .getElementById("paMaxText")
    .innerText =
    "PA Máximo: "+maxPA;

    if(Number(pvAtual.value)>maxPV){

        pvAtual.value=maxPV;

    }

    if(Number(pdAtual.value)>maxPD){

        pdAtual.value=maxPD;

    }

    if(Number(paAtual.value)>maxPA){

        paAtual.value=maxPA;

    }

    if(Number(pvAtual.value)<0){

        pvAtual.value=0;

    }

    if(Number(pdAtual.value)<0){

        pdAtual.value=0;

    }

    if(Number(paAtual.value)<0){

        paAtual.value=0;

    }

}

// ======================================
// EVENTOS
// ======================================

[
nivel,
vigor,
presenca,
pvBonus,
pdBonus

].forEach(el=>{

    if(el){

        el.addEventListener(

            "input",

            updateStatus

        );

    }

});

// ======================================
// RESTAURAR
// ======================================

function fullHeal(){

    updateStatus();

    pvAtual.value =
    pvMax.value;

    pdAtual.value =
    pdMax.value;

}

// ======================================
// INICIAR
// ======================================

updateStatus();