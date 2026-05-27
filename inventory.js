// ======================================
// INVENTÁRIO
// ======================================

const itens = [

    {
        nome: "Faca",
        descricao: "1d4 + FOR",
        ep: 1,
        categoria: "Corpo a Corpo",
        usos: 0,

        modo: "dano",
        dice: 1,
        diceType: 4,
        bonusAttr: "forca"
    },

    {
        nome: "Pistola",
        descricao: "1d8 + AGI",
        ep: 2,
        categoria: "Arma de Fogo",
        usos: 0,

        modo: "dano",
        dice: 1,
        diceType: 8,
        bonusAttr: "agilidade"
    },

    {
        nome: "Kit Médico",
        descricao: "Cura 2d8",
        ep: 2,
        categoria: "Consumível",
        usos: 5,

        modo: "cura",
        dice: 2,
        diceType: 8,
        bonus: 0
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
// RENDER
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

        const div =
            document.createElement("div");

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
// CARD
// ======================================

function createInventoryCard(item){

    const card =
        document.createElement("div");

    card.classList.add("inventory-card");

    // ======================================
    // DATASETS
    // ======================================

    card.dataset.dice =
        item.dice || 1;

    card.dataset.diceType =
        item.diceType || 6;

    card.dataset.bonus =
        item.bonus || 0;

    card.dataset.bonusAttr =
        item.bonusAttr || "";

    card.dataset.modo =
        item.modo || "dano";

    // ======================================
    // HTML
    // ======================================

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

    // ======================================
    // CLIQUE NORMAL / SHIFT / CTRL
    // ======================================

    card.addEventListener("click", function(e){

        if(e.target.tagName === "BUTTON") return;

        // SHIFT = vantagem
        if(e.shiftKey){

            rollItem(this, {
                vantagem: true
            });

            return;

        }

        // CTRL = sem bônus
        if(e.ctrlKey){

            rollItem(this, {
                semBonus: true
            });

            return;

        }

        // NORMAL
        rollItem(this);

    });

    // ======================================
    // CRÍTICO
    // ======================================

    card.addEventListener("contextmenu", function(e){

        e.preventDefault();

        rollItem(this, {
            critico: true
        });

    });

    document
    .getElementById("inventoryList")
    .appendChild(card);

}

// ======================================
// ROLAR ITEM
// ======================================

function rollItem(card, options = {}){

    // ======================================
    // PEGA TEXTO ATUAL
    // ======================================

    const damageInput =
        card.querySelector(
            '.inventory-info input[type="text"]'
        );

    if(!damageInput) return;

    let formula =
        damageInput.value.toUpperCase();

    // ======================================
    // ATRIBUTOS
    // ======================================

    const atributos = {

        FOR:
            Number(
                document.getElementById("forca")?.value
            ) || 0,

        AGI:
            Number(
                document.getElementById("agilidade")?.value
            ) || 0,

        INT:
            Number(
                document.getElementById("intelecto")?.value
            ) || 0,

        VIG:
            Number(
                document.getElementById("vigor")?.value
            ) || 0,

        PRE:
            Number(
                document.getElementById("presenca")?.value
            ) || 0

    };

    // ======================================
    // SUBSTITUI ATRIBUTOS
    // ======================================

    Object.keys(atributos).forEach(attr => {

        formula =
            formula.replaceAll(
                attr,
                atributos[attr]
            );

    });

    // ======================================
    // PEGA DADOS
    // ======================================

    const diceRegex =
        /(\d+)D(\d+)/g;

    let rolls = [];

    let total = 0;

    let match;

    while((match = diceRegex.exec(formula)) !== null){

        let quantidade =
            Number(match[1]);

        const tipo =
            Number(match[2]);

        // ======================================
        // CRÍTICO
        // ======================================

        if(options.critico){

            quantidade *= 2;

        }

        // ======================================
        // VANTAGEM
        // ======================================

        if(options.vantagem){

            quantidade += 1;

        }

        // ======================================
        // ROLA
        // ======================================

        for(let i = 0; i < quantidade; i++){

            const roll =
                randomDice(tipo);

            rolls.push(roll);
                
            

            total += roll;

        }

    }

    // ======================================
    // REMOVE DADOS DA FORMULA
    // ======================================

    let bonusFormula =
        formula.replace(diceRegex, "");

    // ======================================
    // REMOVE ESPAÇOS
    // ======================================

    bonusFormula =
        bonusFormula.replace(/\s+/g, "");

    // ======================================
    // CALCULA BONUS
    // ======================================

    let bonus = 0;

    const bonusMatches =
        bonusFormula.match(/[+-]\d+/g);

    if(bonusMatches){

        bonusMatches.forEach(value => {

            bonus += Number(value);

        });

    }

    // ======================================
    // SEM BONUS
    // ======================================

    if(options.semBonus){

        bonus = 0;

    }

    total += bonus;

    // ======================================
    // TEXTO CRÍTICO
    // ======================================

    let critico = "";

    if(options.critico){

        critico = `

            <div class="critical-text">
                CRÍTICO!
            </div>

        `;

    }

    // ======================================
    // RESULTADO
    // ======================================

    document.getElementById("diceResult")
    .innerHTML = `

        <div class="dice-rolls">

            ${rolls.join(" • ")}

        </div>

        <div class="dice-big">

            ${total}

        </div>

        <div class="dice-total">

            Bônus: ${bonus}

        </div>

        ${critico}

    `;

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

    itemSearch.addEventListener(
        "input",
        function(){

            renderModalItems(this.value);

        }
    );

}

const inventoryModal =
    document.getElementById("inventoryModal");

if(inventoryModal){

    inventoryModal.addEventListener(
        "click",
        function(e){

            if(e.target === inventoryModal){

                closeInventoryModal();

            }

        }
    );

}