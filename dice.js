// ======================================
// DICE.JS
// Motor de Rolagem
// ======================================

// ======================================
// DADO
// ======================================

function randomDice(faces){

    return Math.floor(
        Math.random()*faces
    )+1;

}

// ======================================
// ROLAR VÁRIOS DADOS
// ======================================

function rollDice(qtd,faces){

    let resultados=[];

    let total=0;

    for(let i=0;i<qtd;i++){

        const valor=
        randomDice(faces);

        resultados.push(valor);

        total+=valor;

    }

    return{

        rolls:resultados,

        total:total

    };

}

// ======================================
// D20 POR ATRIBUTO
// ======================================

function rollAttribute(attribute){

    let resultados=[];

    for(let i=0;i<attribute;i++){

        resultados.push(
            randomDice(20)
        );

    }

    return{

        rolls:resultados,

        highest:Math.max(...resultados)

    };

}

// ======================================
// CRÍTICO
// ======================================

function isCritical(value){

    return value===20;

}

// ======================================
// FALHA CRÍTICA
// ======================================

function isFumble(value){

    return value===1;

}

// ======================================
// RESULTADO
// ======================================

function showDiceResult(html){

    document
    .getElementById("diceResult")
    .innerHTML=html;

}

// ======================================
// ROLAGEM SIMPLES
// ======================================

function simpleRoll(){

    const qtd=
    Number(
        document.getElementById("diceCount").value
    )||1;

    const faces=
    Number(
        document.getElementById("diceType").value
    )||20;

    const bonus=
    Number(
        document.getElementById("diceBonus").value
    )||0;

    const resultado=
    rollDice(qtd,faces);

    const total=
    resultado.total+bonus;

    showDiceResult(

    `
        <div class="dice-rolls">

            ${resultado.rolls.join(" • ")}

        </div>

        <div class="dice-big">

            ${resultado.total}

        </div>

        <div class="dice-total">

            Total: ${total}

        </div>

    `

    );

}

// ======================================
// BOTÃO
// ======================================

const rollButton=
document.getElementById("rollDiceBtn");

if(rollButton){

    rollButton.onclick=
    simpleRoll;

}