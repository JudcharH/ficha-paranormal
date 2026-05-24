function removeCard(button){

    const card =
        button.closest(
            ".ability-card, .inventory-card, .assimilation-card"
        );

    if(card){

        card.remove();

        saveFicha();

    }

}