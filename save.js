// ======================================
// SAVE / LOAD
// ======================================

function saveFicha(){

    const data = {

        inventory:
            document.getElementById("inventoryList").innerHTML,

        abilities:
            document.getElementById("abilitiesList").innerHTML,

        assimilations:
            document.getElementById("assimilationList").innerHTML,

        conditions:
            document.getElementById("conditionsList").innerHTML,

        pvAtual:
            document.getElementById("pvAtual").value,

        pdAtual:
            document.getElementById("pdAtual").value,

        paAtual:
            document.getElementById("paAtual").value

    };

    localStorage.setItem(
        "fichaParanormal",
        JSON.stringify(data)
    );

}

// ======================================
// LOAD
// ======================================

function loadFicha(){

    const data = JSON.parse(
        localStorage.getItem("fichaParanormal")
    );

    if(!data) return;

    if(data.inventory){

        document.getElementById("inventoryList")
        .innerHTML = data.inventory;

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

    if(data.pvAtual){

        document.getElementById("pvAtual").value =
            data.pvAtual;

    }

    if(data.pdAtual){

        document.getElementById("pdAtual").value =
            data.pdAtual;

    }

    if(data.paAtual){

        document.getElementById("paAtual").value =
            data.paAtual;

    }

}

// ======================================
// AUTO SAVE
// ======================================

document.addEventListener("input", () => {

    saveFicha();

});

document.addEventListener("click", () => {

    setTimeout(saveFicha, 100);

});

// ======================================
// LOAD INICIAL
// ======================================

loadFicha();