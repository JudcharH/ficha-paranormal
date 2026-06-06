// ======================================
// STATUS
// ======================================

function updateStatus() {

    // =========================
    // ATRIBUTOS
    // =========================

    const nivel =
        Number(
            document.getElementById("nivel")?.value
        ) || 1;

    const vigor =
        Number(
            document.getElementById("vig")?.value
        ) || 1;

    const presenca =
        Number(
            document.getElementById("pre")?.value
        ) || 1;

    const agilidade =
        Number(
            document.getElementById("agi")?.value
        ) || 1;

    // =========================
    // BASE
    // =========================

    const pvBase =
        (7 + vigor) * nivel;

    const pdBase =
        (5 + presenca) * nivel;

    // =========================
    // BÔNUS
    // =========================

    const pvBonus =
        Number(
            document.getElementById("pvBonus")?.value
        ) || 0;

    const pdBonus =
        Number(
            document.getElementById("pdBonus")?.value
        ) || 0;

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
    // PV / PD FINAL
    // =========================

    const pvFinal =
        Math.max(
            1,
            pvBase - custoAssimilacoes + pvBonus
        );

    const pdFinal =
        Math.max(
            1,
            pdBase - custoHabilidades + pdBonus
        );

    // =========================
    // APLICA
    // =========================

    const pvMax =
        document.getElementById("pvMax");

    const pdMax =
        document.getElementById("pdMax");

    if (pvMax) {
        pvMax.value = pvFinal;
    }

    if (pdMax) {
        pdMax.value = pdFinal;
    }

    // =========================
    // DESLOCAMENTO
    // =========================

    const deslocamento =
        document.getElementById("deslocamento");

    if (deslocamento) {

        deslocamento.value =
            `${agilidade} posição${agilidade > 1 ? "ões" : ""}`;

    }

    // =========================
    // PA
    // =========================

    atualizarPA();

}

// GLOBAL
window.updateStatus = updateStatus;


// ======================================
// PA
// ======================================

function atualizarPA() {

    const nivel =
        Number(
            document.getElementById("nivel")?.value
        ) || 1;

    const paMax =
        4 + Math.floor(nivel / 10);

    const texto =
        document.getElementById("paMaxText");

    if (texto) {

        texto.innerText =
            `PA Máximo: ${paMax}`;

    }

    const paAtual =
        document.getElementById("paAtual");

    if (
        paAtual &&
        Number(paAtual.value) > paMax
    ) {

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
            "vig",
            "pre",
            "agi",
            "pvBonus",
            "pdBonus"
        ].forEach(id => {

            const el =
                document.getElementById(id);

            if (el) {

                el.addEventListener(
                    "input",
                    updateStatus
                );

            }

        });

    }
);