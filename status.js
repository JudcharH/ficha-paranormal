// ======================================
// STATUS
// ======================================

function updateStatus() {

    // =========================
    // ATRIBUTOS
    // =========================

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

    // =========================
    // BASE
    // =========================

    let pvBase =
        (7 + vigor) * nivel;

    let pdBase =
        (5 + presenca) * nivel;

    // =========================
    // ASSIMILAÇÕES
    // =========================

    let custoAssimilacoes = 0;

    document
    .querySelectorAll(".assimilation-pv")
    .forEach(el => {

        custoAssimilacoes +=
            Number(el.innerText) || 0;

    });

    // =========================
    // HABILIDADES
    // =========================

    let custoHabilidades = 0;

    document
    .querySelectorAll(".skill-cost")
    .forEach(el => {

        custoHabilidades +=
            Number(el.innerText) || 0;

    });

    // =========================
    // FINAL
    // =========================

    const pvFinal =
        Math.max(
            1,
            pvBase - custoAssimilacoes
        );

    const pdFinal =
        Math.max(
            1,
            pdBase - custoHabilidades
        );

    // =========================
    // APLICA
    // =========================

    document.getElementById("pvMax")
    .value = pvFinal;

    document.getElementById("pdMax")
    .value = pdFinal;

    // =========================
    // ATUALIZA PA
    // =========================

    atualizarPA();

}

// GLOBAL
window.updateStatus = updateStatus;

// ======================================
// PA
// ======================================

function atualizarPA(){

    const nivel =
        Number(
            document.getElementById("nivel").value
        ) || 1;

    // =========================
    // PA MÁXIMO
    // =========================

    const paMax =
        4 + Math.floor(nivel / 10);

    // =========================
    // TEXTO
    // =========================

    document.getElementById("paMaxText")
    .innerText =
        `PA Máximo: ${paMax}`;

    // =========================
    // LIMITADOR
    // =========================

    const paAtual =
        document.getElementById("paAtual");

    if(Number(paAtual.value) > paMax){

        paAtual.value = paMax;

    }

}

// ======================================
// LISTENERS
// ======================================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        updateStatus();

        [
            "nivel",
            "vigor",
            "presenca"
        ].forEach(id => {

            const el =
                document.getElementById(id);

            if(el){

                el.addEventListener(
                    "input",
                    () => {

                        updateStatus();

                    }
                );

            }

        });

    }
);