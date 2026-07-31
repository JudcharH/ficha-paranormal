// ======================================
// INVENTORY.JS
// ======================================

// ======================================
// INVENTÁRIO
// ======================================

let inventory=[];

// ======================================
// ITENS
// ======================================

const items=[

{
    nome:"Faca",

    categoria:"Arma",

    descricao:"Uma faca simples.",

    peso:1
},

{
    nome:"Pistola",

    categoria:"Arma",

    descricao:"Arma de fogo leve.",

    peso:2
},

{
    nome:"Kit Médico",

    categoria:"Utilitário",

    descricao:"Recupera PV.",

    peso:2
},

{
    nome:"Lanterna",

    categoria:"Utilitário",

    descricao:"Ilumina ambientes.",

    peso:1
}

];

// ======================================
// ABRIR
// ======================================

function openInventoryModal(){

    document
    .getElementById(
        "inventoryModal"
    )
    .style.display="flex";

    updateInventorySearch();

}

// ======================================
// FECHAR
// ======================================

function closeInventoryModal(){

    document
    .getElementById(
        "inventoryModal"
    )
    .style.display="none";

}

// ======================================
// PESQUISA
// ======================================

function updateInventorySearch(){

    const list=

    document.getElementById(
        "modalItemsList"
    );

    list.innerHTML="";

    items.forEach(item=>{

        const div=
        document.createElement("div");

        div.className="modal-item";

        div.innerHTML=

        `

        <h3>${item.nome}</h3>

        <span>${item.categoria}</span>

        <p>${item.descricao}</p>

        `;

        div.onclick=function(){

            addItem(item);

        };

        list.appendChild(div);

    });

}

// ======================================
// ADICIONAR
// ======================================

function addItem(item){

    inventory.push({

        ...item,

        quantidade:1

    });

    renderInventory();

    closeInventoryModal();

}


// ======================================
// RENDER
// ======================================

function renderInventory(){

    const list=

    document.getElementById(
        "inventoryList"
    );

    list.innerHTML="";

    inventory.forEach(item=>{

        const card=
        document.createElement("div");

        card.className="inventory-card";

        card.innerHTML=

        `

        <div class="ability-header">

            <h3>

                ${item.nome}

            </h3>

            <button>

                ✕

            </button>

        </div>

        <p>

            ${item.descricao}

        </p>

        <span>

            Peso:
            ${item.peso}

        </span>

        `;

        card
        .querySelector("button")
        .onclick=function(){

            removeItem(item.nome);

        };

        list.appendChild(card);

    });

}

// ======================================
// REMOVER
// ======================================

function removeItem(nome){

    inventory=

    inventory.filter(

        item=>item.nome!==nome

    );

    renderInventory();

}

// ======================================
// PESQUISA
// ======================================

const itemSearch=

document.getElementById(
    "itemSearch"
);

if(itemSearch){

    itemSearch.oninput=function(){

        const texto=

        this.value.toLowerCase();

        document

        .querySelectorAll(".modal-item")

        .forEach(item=>{

            item.style.display=

            item.innerText

            .toLowerCase()

            .includes(texto)

            ?

            "block"

            :

            "none";

        });

    };

}

// ======================================
// BOTÃO
// ======================================

const inventoryButton=

document.getElementById(
    "inventoryBtn"
);

if(inventoryButton){

    inventoryButton.onclick=

    openInventoryModal;

}