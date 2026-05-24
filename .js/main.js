// ======================================
// BOTÃO ROLAR
// ======================================

document
.getElementById("rollDiceBtn")
.addEventListener(
    "click",
    rollDice
);

// ======================================
// BOTÕES ATRIBUTO
// ======================================

document
.querySelectorAll(".attribute-roll-btn")
.forEach(button => {

    button.addEventListener("click", function(){

        const atributo =
            this.dataset.attr;

        rollAttribute(atributo);

    });

});

// ======================================
// INVENTÁRIO
// ======================================

document
.getElementById("inventoryBtn")
.addEventListener(
    "click",
    openInventoryModal
);

// ======================================
// HABILIDADES
// ======================================

document
.getElementById("abilityBtn")
.addEventListener(
    "click",
    addAbility
);

// ======================================
// ASSIMILAÇÕES
// ======================================

document
.getElementById("assimilationBtn")
.addEventListener(
    "click",
    openAssimilationMenu
);

// ======================================
// PASSAR RODADA
// ======================================

document
.getElementById("nextTurnBtn")
.addEventListener(
    "click",
    nextTurn
);