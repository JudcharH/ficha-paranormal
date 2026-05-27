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
    // CUSTO ASSIMILAÇÕES
    // =========================

    let custoAssimilacoes = 0;

    document.querySelectorAll(".assimilation-pv")
    .forEach(el => {

        custoAssimilacoes +=
            Number(el.innerText) || 0;

    });

    // =========================
    // CUSTO HABILIDADES
    // =========================

    let custoHabilidades = 0;

    document.querySelectorAll(".skill-cost")
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

}

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

atualizarStatus();
atualizarPA();

document
.querySelectorAll(
    "#nivel, #vigor, #presenca"
)

document.addEventListener(
    "DOMContentLoaded",
    () => {

        updateStatus();

        const campos = [

            "nivel",
            "vigor",
            "presenca"

        ];

        campos.forEach(id => {

            const input =
                document.getElementById(id);

            if(input){

                input.addEventListener(
                    "input",
                    updateStatus
                );

            }

        });

    }
);