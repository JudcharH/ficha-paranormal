function atualizarStatus(){

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
    // FINAL
    // =========================

    const pvFinal =
        Math.max(
            1,
            pvBase - custoAssimilacoes
        );

    // =========================
    // APLICA
    // =========================

    document.getElementById("pvMax")
    .value = pvFinal;

    document.getElementById("pdMax")
    .value = pdBase;

}

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
            atualizarStatus
        );

    }

});

atualizarStatus();