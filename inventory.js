// ======================================
// INVENTÁRIO
// ======================================

const itens = [

    {
        nome: "Faca",
        descricao: "1d4 + FOR",
        ep: 1,
        categoria: "Corpo a Corpo",
        usos: 0
    },

    {
        nome: "Pistola",
        descricao: "1d8 + AGI",
        ep: 2,
        categoria: "Arma de Fogo",
        usos: 0
    },

    {
        nome: "Kit Médico",
        descricao: "Cura PV",
        ep: 2,
        categoria: "Consumível",
        usos: 5
    }

];

// ======================================
// MODAL
// ======================================

function openInventoryModal(){

    document.getElementById("inventoryModal")
    .style.display = "flex";

    renderModalItems("");

}

function closeInventoryModal(){

    document.getElementById("inventoryModal")
    .style.display = "none";

}


// ======================================
// RENDER ITENS
// ======================================

function renderModalItems(search){

    const list =
        document.getElementById("modalItemsList");

    list.innerHTML = "";

    itens
    .filter(item =>
        item.nome
        .toLowerCase()
        .includes(search.toLowerCase())
    )
    .forEach(item => {

        const div = document.createElement("div");

        div.classList.add("modal-item");

        div.innerHTML = `

            <h3>${item.nome}</h3>

            <span>${item.categoria}</span>

            <p>${item.descricao}</p>

        `;

        div.onclick = () => {

            createInventoryCard(item);

            closeInventoryModal();

        };

        list.appendChild(div);

    });

}

// ======================================
// CARD ITEM
// ======================================

function createInventoryCard(item){

    const card = document.createElement("div");

    card.classList.add("inventory-card");

    card.innerHTML = `

        <div class="ability-header">

            <h3 contenteditable="true">
                ${item.nome}
            </h3>

            <button onclick="removeCard(this)">
                X
            </button>

        </div>

        <div class="inventory-info">

            <div>

                <label>Dano</label>

                <input
                    type="text"
                    value="${item.descricao}"
                >

            </div>

            <div>

                <label>Categoria</label>

                <input
                    type="text"
                    value="${item.categoria}"
                >

            </div>

            <div>

                <label>EP</label>

                <input
                    type="number"
                    value="${item.ep}"
                >

            </div>

            <div>

                <label>Usos</label>

                <input
                    type="number"
                    value="${item.usos}"
                >

            </div>

        </div>

    `;

    document.getElementById("inventoryList")
    .appendChild(card);

    card.dataset.dice =
    item.dice || 1;

card.dataset.diceType =
    item.diceType || 20;

card.dataset.bonus =
    item.bonus || 0;

}

// ======================================
// EVENTOS
// ======================================

const inventoryBtn =
    document.getElementById("inventoryBtn");

if(inventoryBtn){

    inventoryBtn.addEventListener(
        "click",
        openInventoryModal
    );

}

const itemSearch =
    document.getElementById("itemSearch");

if(itemSearch){

    itemSearch.addEventListener("input", function(){

        renderModalItems(this.value);

    });

}

const inventoryModal =
    document.getElementById("inventoryModal");

if(inventoryModal){

    inventoryModal.addEventListener("click", function(e){

        if(e.target === inventoryModal){

            closeInventoryModal();

        }

    });

}

card.addEventListener("click", function(e){

    if(e.target.tagName === "BUTTON") return;

    rollItem(this);

});

function rollItem(card){

    const dice =
        Number(card.dataset.dice) || 1;

    const diceType =
        Number(card.dataset.diceType) || 20;

    const bonus =
        Number(card.dataset.bonus) || 0;

    // =========================
    // ENVIA PRO PAINEL
    // =========================

    document.getElementById("diceCount")
    .value = dice;

    document.getElementById("diceType")
    .value = diceType;

    document.getElementById("diceBonus")
    .value = bonus;

    // =========================
    // ROLA AUTOMATICAMENTE
    // =========================

    const btn =
        document.getElementById("rollDiceBtn");

    if(btn){

        btn.click();

    }

}