// ======================================
// STATUS
// ======================================

function atualizarStatus() {

    const nivel =
        Number(document.getElementById("nivel").value) || 1;

    const vigor =
        Number(document.getElementById("vigor").value) || 1;

    const presenca =
        Number(document.getElementById("presenca").value) || 1;

    const pvMax = (7 + vigor) * nivel;

    const pdMax = (5 + presenca) * nivel;

    document.getElementById("pvMax").value = pvMax;

    document.getElementById("pdMax").value = pdMax;

}

function atualizarPA() {

    const nivel =
        Number(document.getElementById("nivel").value) || 1;

    const paMax = 4 + Math.floor(nivel / 10);

    const paAtual =
        document.getElementById("paAtual");

    const texto =
        document.getElementById("paMaxText");

    texto.innerText = `PA Máximo: ${paMax}`;

    if (Number(paAtual.value) > paMax) {

        paAtual.value = paMax;

    }

}

["nivel", "vigor", "presenca"].forEach(id => {

    const el = document.getElementById(id);

    if (!el) return;

    el.addEventListener("input", () => {

        atualizarStatus();
        atualizarPA();

    });

});

atualizarStatus();
atualizarPA();