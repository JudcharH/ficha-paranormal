//======================================
// STATUS DOS MEMBROS
//======================================

function calcularMembro(base, vigor, nivel){

    return base + vigor + (Math.max(0,nivel-1) * vigor);

}

function updateStatus(){

    const nivel =
        Number(document.getElementById("nivel")?.value) || 1;

    const vigor =
        Number(document.getElementById("vigor")?.value) || 1;

    const presenca =
        Number(document.getElementById("presenca")?.value) || 1;

    const agilidade =
        Number(document.getElementById("agilidade")?.value) || 1;

    //==============================
    // MEMBROS
    //==============================

    const cabeca =
        calcularMembro(2,vigor,nivel);

    const torso =
        calcularMembro(2,vigor,nivel);

    const braco =
        calcularMembro(1,vigor,nivel);

    const perna =
        calcularMembro(1,vigor,nivel);

    //==============================
    // MOSTRAR
    //==============================

    document.getElementById("cabecaMax").innerText =
        "Máx: " + cabeca;

    document.getElementById("torsoMax").innerText =
        "Máx: " + torso;

    document.getElementById("bracoEMax").innerText =
        "Máx: " + braco;

    document.getElementById("bracoDMax").innerText =
        "Máx: " + braco;

    document.getElementById("pernaEMax").innerText =
        "Máx: " + perna;

    document.getElementById("pernaDMax").innerText =
        "Máx: " + perna;

    //==============================
    // PD
    //==============================

    const pdBonus =
        Number(document.getElementById("pdBonus")?.value) || 0;

    let custoHabilidades = 0;

    document.querySelectorAll(".skill-cost")
    .forEach(el=>{

        custoHabilidades +=
            Number(el.innerText)||0;

    });

    const pdMax =
        Math.max(
            1,
            ((5+presenca)*nivel)
            -
            custoHabilidades
            +
            pdBonus
        );

    document.getElementById("pdMax").value =
        pdMax;

    //==============================
    // DESLOCAMENTO
    //==============================

    document.getElementById("deslocamento").value =
        agilidade;

    atualizarPA();

}

window.updateStatus = updateStatus;


//======================================
// PA
//======================================

function atualizarPA(){

    const nivel =
        Number(document.getElementById("nivel").value)||1;

    const paMax =
        4 + Math.floor(nivel/10);

    document.getElementById("paMaxText")
        .innerText =
        "PA Máximo: " + paMax;

    const atual =
        document.getElementById("paAtual");

    if(Number(atual.value)>paMax){

        atual.value=paMax;

    }

}


//======================================
// LISTENERS
//======================================

document.addEventListener("DOMContentLoaded",()=>{

    updateStatus();

    [

        "nivel",
        "vigor",
        "presenca",
        "agilidade",
        "pdBonus"

    ].forEach(id=>{

        const el=document.getElementById(id);

        if(el){

            el.addEventListener(
                "input",
                updateStatus
            );

        }

    });

});