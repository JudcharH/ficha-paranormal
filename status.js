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

    // =========================
    // BASE
    // =========================

    const pvBase =
        (7 + vigor) * nivel;

    const pdBase =
        (5 + presenca) * nivel;

    // =========================
    // PD NORMAL
    // =========================

    document.getElementById("pdMax")
    .value = pdBase;

    // =========================
    // PV COM ASSIMILAÇÕES
    // =========================

    let custoAssimilacoes = 0;

    document.querySelectorAll(".assimilation-pv")
    .forEach(el => {

        custoAssimilacoes +=
            Number(el.innerText) || 0;

    });

    document.getElementById("pvMax")
    .value =
        Math.max(
            1,
            pvBase - custoAssimilacoes
        );

}