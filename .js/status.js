// ======================================
// ATUALIZAR STATUS
// ======================================

function atualizarStatus(){

    const nivel =
        Number(
            document.getElementById("nivel").value
        ) || 1;

    const vigor =
        Number(
            document.getElementById("vigor").value
        ) || 1;

    const presenca =
        Number(
            document.getElementById("presenca").value
        ) || 1;

    // =====================
    // BASE
    // =====================

    let pvMax =
        (7 + vigor) * nivel;

    let pdMax =
        (5 + presenca) * nivel;

    // =====================
    // PENALIDADES
    // =====================

    if(
        typeof atributosPenalidades !== "undefined"
    ){

        pvMax +=
            atributosPenalidades.pvMax || 0;

        pdMax +=
            atributosPenalidades.pdMax || 0;

    }

    // =====================
    // LIMITES
    // =====================

    if(pvMax < 1){

        pvMax = 1;

    }

    if(pdMax < 0){

        pdMax = 0;

    }

    // =====================
    // ELEMENTOS
    // =====================

    const pvMaxEl =
        document.getElementById("pvMax");

    const pdMaxEl =
        document.getElementById("pdMax");

    const pvAtualEl =
        document.getElementById("pvAtual");

    const pdAtualEl =
        document.getElementById("pdAtual");

    // =====================
    // DEFINE MAX
    // =====================

    pvMaxEl.value = pvMax;

    pdMaxEl.value = pdMax;

    // =====================
    // LIMITA ATUAL
    // =====================

    if(
        Number(pvAtualEl.value) > pvMax
    ){

        pvAtualEl.value = pvMax;

    }

    if(
        Number(pdAtualEl.value) > pdMax
    ){

        pdAtualEl.value = pdMax;

    }

}

// ======================================
// PA
// ======================================

function atualizarPA(){

    const nivel =
        Number(
            document.getElementById("nivel").value
        ) || 1;

    // =====================
    // CALCULA
    // =====================

    const paMax =
        4 + Math.floor(nivel / 10);

    const paAtual =
        document.getElementById("paAtual");

    const texto =
        document.getElementById("paMaxText");

    // =====================
    // TEXTO
    // =====================

    texto.innerText =
        `PA Máximo: ${paMax}`;

    // =====================
    // LIMITADOR
    // =====================

    if(
        Number(paAtual.value) > paMax
    ){

        paAtual.value = paMax;

    }

    // =====================
    // PRIMEIRA CARGA
    // =====================

    if(
        paAtual.value === "" ||
        paAtual.value === "0"
    ){

        paAtual.value = paMax;

    }

}

// ======================================
// PASSAR RODADA
// ======================================

function nextTurn(){

    const paTexto =
        document.getElementById("paMaxText")
        .innerText;

    const paMax =
        Number(
            paTexto.replace(/\D/g, "")
        );

    // =====================
    // RESET PA
    // =====================

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
            ?.innerText;

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

                danoTotal +=
                    randomDice(tipo);

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

    // =====================
    // SAVE
    // =====================

    if(
        typeof saveFicha === "function"
    ){

        saveFicha();

    }

}

// ======================================
// LISTENERS
// ======================================

[
    "nivel",
    "vigor",
    "presenca"
]
.forEach(id => {

    const el =
        document.getElementById(id);

    if(el){

        el.addEventListener(
            "input",
            () => {

                atualizarStatus();
                atualizarPA();

            }
        );

    }

});

// ======================================
// BOTÃO RODADA
// ======================================

const rodadaBtn =
    document.querySelector(".next-turn-btn");

if(rodadaBtn){

    rodadaBtn.addEventListener(
        "click",
        nextTurn
    );

}

// ======================================
// START
// ======================================

atualizarStatus();
atualizarPA();