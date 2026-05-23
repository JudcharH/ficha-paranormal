// ======================================
// ROLAR DADO BASE
// ======================================

function rollDice(){

    const quantidade =
        Number(
            document.getElementById("diceCount").value
        ) || 1;

    const tipo =
        Number(
            document.getElementById("diceType").value
        ) || 20;

    const bonus =
        Number(
            document.getElementById("diceBonus").value
        ) || 0;

    let rolls = [];

    for(let i = 0; i < quantidade; i++){

        rolls.push(
            randomDice(tipo)
        );

    }

    const maior =
        Math.max(...rolls);

    const total =
        maior + bonus;

    let critico = "";

    // =====================
    // CRÍTICO
    // =====================

    if(
        tipo === 20 &&
        maior === 20
    ){

        critico = `

            <div class="critical-text">
                CRÍTICO!
            </div>

        `;

    }

    // =====================
    // RESULTADO
    // =====================

    document.getElementById("diceResult")
    .innerHTML = `

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
        Number(
            document.getElementById(attributeId).value
        ) || 1;

    document.getElementById("diceCount").value =
        atributo;

    document.getElementById("diceType").value =
        20;

    document.getElementById("diceBonus").value =
        0;

    rollDice();

}

// ======================================
// BOTÃO ROLAR
// ======================================

const rollBtn =
    document.querySelector(".roll-button");

if(rollBtn){

    rollBtn.addEventListener(
        "click",
        rollDice
    );

}

// ======================================
// BOTÕES ATRIBUTOS
// ======================================

document.querySelectorAll(
    ".attribute-rolls button"
)
.forEach(button => {

    button.addEventListener("click", function(){

        const texto =
            this.innerText.trim();

        // =====================
        // FOR
        // =====================

        if(texto === "FOR"){

            rollAttribute("forca");

        }

        // =====================
        // AGI
        // =====================

        if(texto === "AGI"){

            rollAttribute("agilidade");

        }

        // =====================
        // INT
        // =====================

        if(texto === "INT"){

            rollAttribute("intelecto");

        }

        // =====================
        // VIG
        // =====================

        if(texto === "VIG"){

            rollAttribute("vigor");

        }

        // =====================
        // PRE
        // =====================

        if(texto === "PRE"){

            rollAttribute("presenca");

        }

    });

});