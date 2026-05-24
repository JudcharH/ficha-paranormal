// ======================================
// MAIN
// ======================================

// ENTER NÃO RECARREGA

document.addEventListener("keydown", function(e){

    if(
        e.key === "Enter" &&
        e.target.tagName === "INPUT"
    ){

        e.preventDefault();

        e.target.blur();

    }

});

// ======================================
// FECHAR MENU COM ESC
// ======================================

document.addEventListener("keydown", function(e){

    if(e.key === "Escape"){

        closeMenu();

        closeInventoryModal();

    }

});

// ======================================
// DEBUG
// ======================================

console.log("Ficha carregada com sucesso.");

// ======================================
// SAVE AUTOMÁTICO EXTRA
// ======================================

window.addEventListener("beforeunload", () => {

    saveFicha();

});

// ======================================
// RELOAD STATUS
// ======================================

atualizarStatus();
atualizarPA();
updateSkills();

// ======================================
// TESTE
// ======================================

console.log("Main iniciado.");