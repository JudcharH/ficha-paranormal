// ======================================
// BOTÃO ROLAR
// ======================================

const rollBtn =
    document.getElementById("rollDiceBtn");

if (rollBtn) {

    rollBtn.addEventListener(
        "click",
        rollDice
    );

}

// ======================================
// BOTÕES ATRIBUTO
// ======================================

document
    .querySelectorAll(".attribute-roll-btn")
    .forEach(button => {

        button.addEventListener("click", function () {

            const attr =
                this.dataset.attr;

            rollAttribute(attr);

        });

    });

console.log("Sistema carregado.");