// ======================================
// SAVE
// ======================================

function saveFicha(){

    const data = {

        // =====================
        // CAMPOS
        // =====================

        html:
            document.getElementById("inventoryList")
            ?.innerHTML || "",

        abilities:
            document.getElementById("abilitiesList")
            ?.innerHTML || "",

        assimilations:
            document.getElementById("assimilationList")
            ?.innerHTML || "",

        conditions:
            document.getElementById("conditionsList")
            ?.innerHTML || "",

        // =====================
        // INPUTS
        // =====================

        inputs:{}

    };

    // ======================================
    // SALVA TODOS INPUTS
    // ======================================

    document.querySelectorAll("input")
    .forEach(input => {

        if(input.id){

            data.inputs[input.id] =
                input.value;

        }

    });

    // ======================================
    // LOCAL STORAGE
    // ======================================

    localStorage.setItem(
        "fichaParanormal",
        JSON.stringify(data)
    );

}

// ======================================
// LOAD
// ======================================

function loadFicha(){

    const data =
        JSON.parse(
            localStorage.getItem(
                "fichaParanormal"
            )
        );

    if(!data) return;

    // ======================================
    // HTML
    // ======================================

    if(data.html){

        document.getElementById("inventoryList")
        .innerHTML = data.html;

    }

    if(data.abilities){

        document.getElementById("abilitiesList")
        .innerHTML = data.abilities;

    }

    if(data.assimilations){

        document.getElementById("assimilationList")
        .innerHTML = data.assimilations;

    }

    if(data.conditions){

        document.getElementById("conditionsList")
        .innerHTML = data.conditions;

    }

    // ======================================
    // INPUTS
    // ======================================

    if(data.inputs){

        Object.keys(data.inputs)
        .forEach(id => {

            const input =
                document.getElementById(id);

            if(input){

                input.value =
                    data.inputs[id];

            }

        });

    }

    // ======================================
    // REAPLICAR
    // ======================================

    if(
        typeof aplicarEfeitosCondicoes === "function"
    ){

        aplicarEfeitosCondicoes();

    }

    if(
        typeof atualizarStatus === "function"
    ){

        atualizarStatus();

    }

    if(
        typeof atualizarPA === "function"
    ){

        atualizarPA();

    }

    if(
        typeof updateSkills === "function"
    ){

        updateSkills();

    }

}

// ======================================
// AUTO SAVE
// ======================================

document.addEventListener(
    "input",
    () => {

        saveFicha();

    }
);

document.addEventListener(
    "click",
    () => {

        setTimeout(
            saveFicha,
            100
        );

    }
);

// ======================================
// START
// ======================================

loadFicha();

console.log(
    "save.js carregado."
);