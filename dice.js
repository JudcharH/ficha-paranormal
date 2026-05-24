// ======================================
// DADOS
// ======================================

function randomDice(type){

    return Math.floor(Math.random() * type) + 1;

}

function rollDice(){

    const quantidade =
        Number(document.getElementById("diceCount").value) || 1;

    const tipo =
        Number(document.getElementById("diceType").value) || 20;

    const bonus =
        Number(document.getElementById("diceBonus").value) || 0;

    let rolls = [];

    for(let i = 0; i < quantidade; i++){

        rolls.push(randomDice(tipo));

    }

    const maior = Math.max(...rolls);

    const total = maior + bonus;

    let critico = "";

    if(tipo === 20 && maior === 20){

        critico = `
            <div class="critical-text">
                CRÍTICO!
            </div>
        `;

    }

    document.getElementById("diceResult").innerHTML = `

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
// ROLAR ATRIBUTO
// ======================================

function rollAttribute(attributeId){

    const atributo =
        Number(document.getElementById(attributeId).value) || 1;

    document.getElementById("diceCount").value = atributo;

    document.getElementById("diceType").value = 20;

    document.getElementById("diceBonus").value = 0;

    rollDice();

}

// ======================================
// EVENTOS
// ======================================

const rollDiceBtn = document.getElementById("rollDiceBtn");

if(rollDiceBtn){

    rollDiceBtn.addEventListener("click", rollDice);

}

document.querySelectorAll(".attribute-roll-btn")
.forEach(button => {

    button.addEventListener("click", function(){

        const attr = this.dataset.attr;

        rollAttribute(attr);

    });

});