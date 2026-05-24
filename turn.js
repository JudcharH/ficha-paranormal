// ======================================
// PASSAR RODADA
// ======================================

function nextTurn(){

    // =====================
    // RESET PA
    // =====================

    const paTexto =
        document.getElementById("paMaxText")
        .innerText;

    const paMax = Number(
        paTexto.replace(/\D/g, "")
    );

    document.getElementById("paAtual").value =
        paMax;

    // =====================
    // DANO CONDIÇÕES
    // =====================

    let danoTotal = 0;

    document.querySelectorAll(".condition-card")
    .forEach(card => {

        const danoTexto =
            card.querySelector(".condition-damage")
            .innerText;

        if(
            danoTexto &&
            danoTexto.includes("d")
        ){

            const partes =
                danoTexto.split("d");

            const quantidade =
                Number(partes[0]);

            const tipo =
                Number(partes[1]);

            for(let i = 0; i < quantidade; i++){

                danoTotal += randomDice(tipo);

            }

        }

    });

    // =====================
    // APLICA DANO
    // =====================

    const pvAtual =
        document.getElementById("pvAtual");

    let pv =
        Number(pvAtual.value) || 0;

    pv -= danoTotal;

    if(pv < 0){

        pv = 0;

    }

    pvAtual.value = pv;

    // =====================
    // RESULTADO
    // =====================

    document.getElementById("diceResult")
    .innerHTML = `

        <div class="dice-big">
            ${danoTotal}
        </div>

        <div class="dice-total">
            Dano das condições
        </div>

    `;

    saveFicha();

}

// ======================================
// BOTÃO
// ======================================

const nextTurnBtn =
    document.getElementById("nextTurnBtn");

if(nextTurnBtn){

    nextTurnBtn.addEventListener(
        "click",
        nextTurn
    );

}