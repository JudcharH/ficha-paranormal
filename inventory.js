// ======================================
// INVENTÁRIO
// ======================================

const itens = [

    {
        nome: "Faca",
        descricao: "1d4 + FOR",
        ep: 1,
        categoria: "Corpo a Corpo",
        usos: 5,

        modo: "dano",
        dice: 1,
        diceType: 4,
        bonusAttr: "forca"
    },

     // ======================================
    // CORPO A CORPO
    // ======================================

    {
        nome: "Desarmado",
        descricao: "1d4 + FOR",
        ep: 0,
        categoria: "Corpo a Corpo",
        usos: 5,
        modo: "dano"
    },

    {
        nome: "Adaga",
        descricao: "1d6 + FOR",
        ep: 1,
        categoria: "Corpo a Corpo",
        usos: 5,
        modo: "dano"
    },

    {
        nome: "Taco",
        descricao: "1d6 + FOR",
        ep: 2,
        categoria: "Corpo a Corpo",
        usos: 5,
        modo: "dano"
    },

    {
        nome: "Machete",
        descricao: "1d6 + 1 + FOR",
        ep: 2,
        categoria: "Corpo a Corpo",
        usos: 5,
        modo: "dano"
    },

    {
        nome: "Lança",
        descricao: "1d6 + 2 + FOR",
        ep: 2,
        categoria: "Corpo a Corpo",
        usos: 5,
        modo: "dano"
    },

    {
        nome: "Marreta",
        descricao: "2d8 + 3 + FOR",
        ep: 3,
        categoria: "Corpo a Corpo",
        usos: 5,
        modo: "dano"
    },

    {
        nome: "Bastão",
        descricao: "1d6 + FOR",
        ep: 2,
        categoria: "Corpo a Corpo",
        usos: 5,
        modo: "dano"
    },

    {
        nome: "Nunchaku",
        descricao: "1d6 + 1 + FOR",
        ep: 2,
        categoria: "Corpo a Corpo",
        usos: 5,
        modo: "dano"
    },

    {
        nome: "Machadinha",
        descricao: "1d6 + 2 + FOR",
        ep: 2,
        categoria: "Corpo a Corpo",
        usos: 5,
        modo: "dano"
    },

    {
        nome: "Machado",
        descricao: "1d8 + 2 + FOR",
        ep: 3,
        categoria: "Corpo a Corpo",
        usos: 5,
        modo: "dano"
    },

    {
        nome: "Espada",
        descricao: "1d10 + 2 + FOR",
        ep: 3,
        categoria: "Corpo a Corpo",
        usos: 5,
        modo: "dano"
    },

    {
        nome: "Maça",
        descricao: "2d6 + 2 + FOR",
        ep: 2,
        categoria: "Corpo a Corpo",
        usos: 5,
        modo: "dano"
    },

    {
        nome: "Florete",
        descricao: "1d6 + 2 + FOR",
        ep: 2,
        categoria: "Corpo a Corpo",
        usos: 5,
        modo: "dano"
    },

    {
        nome: "Katana",
        descricao: "1d10 + 2 + FOR",
        ep: 3,
        categoria: "Corpo a Corpo",
        usos: 5,
        modo: "dano"
    },

    {
        nome: "Acha",
        descricao: "1d12 + 2 + FOR",
        ep: 3,
        categoria: "Corpo a Corpo",
        usos: 5,
        modo: "dano"
    },

    {
        nome: "Gadanho",
        descricao: "2d4 + 2 + FOR",
        ep: 2,
        categoria: "Corpo a Corpo",
        usos: 5,
        modo: "dano"
    },

    {
        nome: "Motosserra",
        descricao: "3d6 + FOR",
        ep: 3,
        categoria: "Corpo a Corpo",
        usos: 5,
        modo: "dano"
    },

    {
        nome: "Montante",
        descricao: "2d8 + 2 + FOR",
        ep: 2,
        categoria: "Corpo a Corpo",
        usos: 5,
        modo: "dano"
    },

    {
        nome: "Corrente",
        descricao: "1d8 + 1 + FOR",
        ep: 1,
        categoria: "Corpo a Corpo",
        usos: 5,
        modo: "dano"
    },

     // ======================================
    // ARCOS
    // ======================================

    {
        nome: "Arco curto",
        descricao: "1d6 + 2 + AGI",
        ep: 2,
        categoria: "Arco",
        usos: 5,
        modo: "dano"
    },

    {
        nome: "Arco composto",
        descricao: "1d8 + 2 + AGI",
        ep: 3,
        categoria: "Arco",
        usos: 5,
        modo: "dano"
    },

    {
        nome: "Arco refinado",
        descricao: "1d10 + 2 + AGI",
        ep: 4,
        categoria: "Arco",
        usos: 5,
        modo: "dano"
    },

    {
        nome: "Besta",
        descricao: "1d6 + 3 + AGI",
        ep: 2,
        categoria: "Arco",
        usos: 5,
        modo: "dano"
    },

    {
        nome: "Besta refinada",
        descricao: "1d8 + 3 + AGI",
        ep: 3,
        categoria: "Arco",
        usos: 5,
        modo: "dano"
    },

    // ======================================
    // ARMAS DE FOGO
    // ======================================

    {
        nome: "Pistola",
        descricao: "1d8 + AGI",
        ep: 2,
        categoria: "Arma de Fogo",
        usos: 5,

        modo: "dano",
        dice: 1,
        diceType: 8,
        bonusAttr: "agilidade"

    },

      {
        nome: "Revólver",
        descricao: "1d8 + 2 + AGI",
        ep: 2,
        categoria: "Arma de Fogo",
        usos: 5,
        modo: "dano"
    },

    {
        nome: "Fuzil de caça",
        descricao: "2d8 + AGI",
        ep: 3,
        categoria: "Arma de Fogo",
        usos: 5,
        modo: "dano"
    },

    {
        nome: "Submetralhadora",
        descricao: "2d6 + AGI",
        ep: 3,
        categoria: "Arma de Fogo",
        usos: 5,
        modo: "dano"
    },

    {
        nome: "Espingarda",
        descricao: "4d6 + AGI",
        ep: 4,
        categoria: "Arma de Fogo",
        usos: 5,
        modo: "dano"
    },

    {
        nome: "Fuzil de assalto",
        descricao: "2d8 + AGI",
        ep: 4,
        categoria: "Arma de Fogo",
        usos: 5,
        modo: "dano"
    },

    {
        nome: "Fuzil de precisão",
        descricao: "2d10 + 2 + AGI",
        ep: 4,
        categoria: "Arma de Fogo",
        usos: 5,
        modo: "dano"
    },

    {
        nome: "Metralhadora",
        descricao: "2d12 + 2 + AGI",
        ep: 4,
        categoria: "Arma de Fogo",
        usos: 5,
        modo: "dano"
    },

    {
        nome: "Lança-chamas",
        descricao: "6d6 + AGI",
        ep: 5,
        categoria: "Arma Pesada",
        usos: 5,
        modo: "dano"
    },

    {
        nome: "Bazuca",
        descricao: "10d8 + AGI",
        ep: 5,
        categoria: "Arma Pesada",
        usos: 5,
        modo: "dano"
    },

    // ======================================
// EQUIPAMENTOS
// ======================================


    {
        nome: "Proteção Leve",
        descricao: "+5 Defesa",
        ep: 2,
        categoria: "Equipamento",
        usos: 5,
        modo: "equipamento"
    },

    {
        nome: "Proteção Pesada",
        descricao: "+10 Defesa",
        ep: 4,
        categoria: "Equipamento",
        usos: 5,
        modo: "equipamento"
    },

    {
        nome: "Escudo",
        descricao: "+2 Defesa",
        ep: 2,
        categoria: "Equipamento",
        usos: 5,
        modo: "equipamento"
    },

    {
        nome: "Escudo Grande",
        descricao: "+4 Defesa",
        ep: 3,
        categoria: "Equipamento",
        usos: 5,
        modo: "equipamento"
    },

// ======================================
// ITENS GERAIS
// ======================================



    {
        nome: "Vestimenta",
        descricao: "+2 em perícias",
        ep: 1,
        categoria: "Item Geral",
        usos: 5,
        modo: "equipamento"
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
    },

    {
        nome: "Soqueira",
        descricao: "+2 dano desarmado",
        ep: 0.5,
        categoria: "Item Geral",
        usos: 5,
        modo: "equipamento"
    },

    {
        nome: "Kit de Reparos",
        descricao: "Reparar itens",
        ep: 2,
        categoria: "Item Geral",
        usos: 5,
        modo: "suporte"
    },

    {
        nome: "Cicatrizante",
        descricao: "2d6 + 2",
        ep: 1,
        categoria: "Consumível",
        usos: 5,
        modo: "cura"
    },

    {
        nome: "Binóculos",
        descricao: "+5 Percepção",
        ep: 1,
        categoria: "Item Geral",
        usos: 5,
        modo: "equipamento"
    },

    {
        nome: "Pé de Cabra",
        descricao: "1d6 + FOR",
        ep: 1,
        categoria: "Item Geral",
        usos: 5,
        modo: "dano"
    },

    {
        nome: "Mochila",
        descricao: "+4 EP / -2 Furtividade",
        ep: 0,
        categoria: "Item Geral",
        usos: 5,
        modo: "equipamento"
    },

    {
        nome: "Bolsa",
        descricao: "+2 EP / -1 Furtividade",
        ep: 0,
        categoria: "Item Geral",
        usos: 5,
        modo: "equipamento"
    },

    // ======================================
    // ALIMENTOS
    // ======================================

    {
        nome: "Lanchinho",
        descricao: "Recupera 3 PV e 1 PD",
        ep: 0.5,
        categoria: "Alimento",
        usos: 5,
        modo: "cura"
    },

    {
        nome: "Lanche",
        descricao: "Recupera 5 PV e 2 PD",
        ep: 1,
        categoria: "Alimento",
        usos: 5,
        modo: "cura"
    },

    {
        nome: "Marmita",
        descricao: "Recupera 7 PV e 3 PD",
        ep: 2,
        categoria: "Alimento",
        usos: 5,
        modo: "cura"
    },

    {
        nome: "Banquete",
        descricao: "Recupera 10 PV e 4 PD",
        ep: 3,
        categoria: "Alimento",
        usos: 5,
        modo: "cura"
    },



   

]

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