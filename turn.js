// ======================================
// TURN.JS
// ======================================

// ======================================
// RODADA
// ======================================

let currentTurn=1;

// ======================================
// PA MÁXIMO
// ======================================

function getMaxPA(){

    return calculatePA();

}

// ======================================
// RESTAURAR PA
// ======================================

function restorePA(){

    paAtual.value=

    getMaxPA();

}

// ======================================
// NOVA RODADA
// ======================================

function nextTurn(){

    currentTurn++;

    restorePA();

    processConditions();

    processPassiveAbilities();

    processAssimilations();

    updateStatus();

    updateTurnDisplay();

}

// ======================================
// TEXTO
// ======================================

function updateTurnDisplay(){

    const text=

    document.getElementById(

        "turnText"

    );

    if(text){

        text.innerText=

        "Rodada "+currentTurn;

    }

}

// ======================================
// PASSIVAS
// ======================================

function processPassiveAbilities(){

    playerAbilities.forEach(ability=>{

        switch(ability.nome){

        }

    });

}

// ======================================
// ASSIMILAÇÕES
// ======================================

function processAssimilations(){

    playerAssimilations.forEach(

        assimilation=>{

            switch(

                assimilation.nome

            ){

                case "Células Regenerativas":

                    const cura=

                    rollDice(2,6);

                    pvAtual.value=

                    Math.min(

                        Number(pvMax.value),

                        Number(pvAtual.value)+cura.total

                    );

                break;

            }

        }

    );

}

// ======================================
// BOTÃO
// ======================================

const nextTurnButton=

document.getElementById(

    "nextTurnBtn"

);

if(nextTurnButton){

    nextTurnButton.onclick=

    nextTurn;

}

// ======================================
// INICIAR
// ======================================

updateTurnDisplay();

restorePA();