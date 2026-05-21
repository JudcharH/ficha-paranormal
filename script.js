// ===============================
// FOTO DO PERSONAGEM
// ===============================

const photoInput = document.getElementById("photoInput");
const photoPreview = document.getElementById("photoPreview");

photoInput.addEventListener("change", function () {

    const file = this.files[0];

    if(file){

        const reader = new FileReader();

        reader.onload = function(e){

            photoPreview.innerHTML = `
                <img src="${e.target.result}">
            `;

        };

        reader.readAsDataURL(file);

    }

});


// ===============================
// ROLAGEM DE DADOS
// ===============================

function rollDice() {

    const quantidade = Number(
        document.getElementById("diceCount").value
    );

    const tipo = Number(
        document.getElementById("diceType").value
    );

    const bonus = Number(
        document.getElementById("diceBonus").value
    );

    let resultados = [];

    for(let i = 0; i < quantidade; i++){

        resultados.push(
            Math.floor(Math.random() * tipo) + 1
        );

    }

    const maior = Math.max(...resultados);

    const total = maior + bonus;

    let critico = "";

    if(tipo === 20 && maior >= 20){

        critico = `
            <div class="critical-text">
                CRÍTICO!
            </div>
        `;

    }

    document.getElementById("diceResult").innerHTML = `

        <div class="dice-rolls">
            ${resultados.join(" • ")}
        </div>

        <div class="dice-big">
            ${maior}
        </div>

        <div class="dice-total">
            Total: ${total}
        </div>

        ${critico}

    `;

}


// ===============================
// ROLAGEM POR ATRIBUTO
// ===============================

function rollAttribute(attributeId){

    const atributo = Number(
        document.getElementById(attributeId).value
    );

    document.getElementById("diceCount").value = atributo;

    document.getElementById("diceType").value = 20;

    rollDice();

}

// ===============================
// SISTEMA DE HABILIDADES
// ===============================

const habilidades = [

    {
        nome: "Ataque Especial",
        custo: 3,
        tipo: "PD",
        descricao: "Recebe bônus de ataque ou dano."
    },

    {
        nome: "Golpe Pesado",
        custo: 3,
        tipo: "PD",
        descricao: "Seu dano corpo a corpo sobe um passo."
    },

    {
        nome: "Casca Grossa",
        custo: 4,
        tipo: "PD",
        descricao: "Recebe +1 PV por nível."
    },

    {
        nome: "Surto de Adrenalina",
        custo: 4,
        tipo: "PD",
        descricao: "Recebe +1 PA temporário."
    }

];


// ===============================
// ADICIONAR HABILIDADE
// ===============================

function addAbility(){

    const nome = prompt("Digite o nome da habilidade:");

    if(!nome) return;

    const habilidade = habilidades.find(h =>
        h.nome.toLowerCase() === nome.toLowerCase()
    );

    if(!habilidade){

        alert("Habilidade não encontrada.");
        return;

    }

    const card = document.createElement("div");

    card.classList.add("ability-card");

    card.innerHTML = `

        <div class="ability-header">

            <h3>${habilidade.nome}</h3>

            <button onclick="removeCard(this)">
                X
            </button>

        </div>

        <p>${habilidade.descricao}</p>

        <span>
            Custo: ${habilidade.custo} ${habilidade.tipo}
        </span>

    `;

    document.getElementById("abilitiesList")
        .appendChild(card);

    descontarCusto(habilidade);

}


// ===============================
// ASSIMILAÇÕES
// ===============================

const assimilations = [

    // =========================================
    // ENERGIA
    // =========================================

    {
        nome: "Teleporte Cinético",
        elemento: "Energia",
        custo: 4,
        estagio: "BASE",
        descricao: "Teleporta até 3m.",
        evolucao1: {
            custo: 8,
            descricao: "Teleporta até 6m e pode evitar ataques."
        },
        evolucao2: {
            custo: 12,
            descricao: "Teleporta até 12m sem consumir PA."
        }
    },

    {
        nome: "Ops, Você Errou",
        elemento: "Energia",
        custo: 4,
        estagio: "BASE",
        descricao: "Inimigos sofrem dano ao errar ataques."
    },

    {
        nome: "Ataque em Cadeia",
        elemento: "Energia",
        custo: 4,
        estagio: "BASE",
        descricao: "Divide dano entre múltiplos alvos."
    },

    {
        nome: "Duplicata Elétrica",
        elemento: "Energia",
        custo: 4,
        estagio: "BASE",
        descricao: "Cria duplicatas ilusórias."
    },

    {
        nome: "Tempestade Viva",
        elemento: "Energia",
        custo: 4,
        estagio: "BASE",
        descricao: "Cria uma tempestade elemental."
    },

    {
        nome: "Acúmulo de Carga",
        elemento: "Energia",
        custo: 4,
        estagio: "BASE",
        descricao: "Acumula cargas elétricas."
    },

    {
        nome: "Reflexos Sobrenaturais",
        elemento: "Energia",
        custo: 4,
        estagio: "BASE",
        descricao: "+5 em Reflexos."
    },

    {
        nome: "Descarga Rápida",
        elemento: "Energia",
        custo: 4,
        estagio: "BASE",
        descricao: "Explosão elétrica ao redor."
    },

    {
        nome: "Corpo Fantasma",
        elemento: "Energia",
        custo: 4,
        estagio: "BASE",
        descricao: "Recebe RD após esquiva."
    },

    {
        nome: "Aceleração",
        elemento: "Energia",
        custo: 4,
        estagio: "BASE",
        descricao: "Recebe PA temporário."
    },

    {
        nome: "Instabilidade",
        elemento: "Energia",
        custo: 4,
        estagio: "BASE",
        descricao: "Efeitos aleatórios de sorte e azar."
    }

];

// ===============================
// ADICIONAR ASSIMILAÇÃO
// ===============================

function addAssimilationCard(assimilation){

    const card = document.createElement("div");

    card.classList.add("assimilation-card");

    card.dataset.level = 0;

    card.innerHTML = `

        <div class="assimilation-header">

            <div>

                <h3>${assimilation.nome}</h3>

                <span class="assimilation-element">
                    ${assimilation.elemento}
                </span>

            </div>

            <button onclick="removeAssimilation(this)">
                X
            </button>

        </div>

        <div class="assimilation-stage">
            BASE
        </div>

        <div class="assimilation-description">
            ${assimilation.descricao}
        </div>

        <div class="assimilation-cost">
            Custo: ${assimilation.custo} PV
        </div>

        <button class="evolve-btn"
            onclick="evolveAssimilation(this)">
            EVOLUIR
        </button>

    `;

    document.getElementById("assimilationList")
        .appendChild(card);

}

// ===============================
// REMOVER ASSIMILAÇÃO
// ===============================

function removeAssimilation(button){

    button.parentElement.parentElement.remove();

}

// ===============================
// ABRIR LISTA DE ASSIMILAÇÕES
// ===============================

function openAssimilationMenu(){

    const menu = document.createElement("div");

    menu.classList.add("assimilation-menu");

    let listHTML = "";

    assimilations.forEach(assimilation => {

        listHTML += `

            <div class="assimilation-option"
                 onclick="selectAssimilation('${assimilation.nome}')">

                <div>

                    <h3>${assimilation.nome}</h3>

                    <span>
                        ${assimilation.elemento}
                    </span>

                </div>

                <small>
                    ${assimilation.custo} PV
                </small>

            </div>

        `;

    });

    menu.innerHTML = `

        <div class="assimilation-menu-content">

            <div class="menu-header">

                <h2>ASSIMILAÇÕES</h2>

                <button onclick="closeAssimilationMenu()">
                    X
                </button>

            </div>

            <input type="text"
                   id="assimilationSearch"
                   placeholder="Pesquisar..."
                   oninput="filterAssimilations()">

            <div class="assimilation-options">

                ${listHTML}

            </div>

        </div>

    `;

    document.body.appendChild(menu);

}

// ===============================
// FECHAR MENU
// ===============================

function closeAssimilationMenu(){

    const menu = document.querySelector(".assimilation-menu");

    if(menu){

        menu.remove();

    }

}

// ===============================
// SELECIONAR ASSIMILAÇÃO
// ===============================

function selectAssimilation(nome){

    const assimilation = assimilations.find(a =>
        a.nome === nome
    );

    if(!assimilation) return;

    addAssimilationCard(assimilation);

    closeAssimilationMenu();

}

// ===============================
// DESCONTAR CUSTO
// ===============================

function descontarCusto(item){

    if(item.tipo === "PD"){

        const pdMax = document.getElementById("pdMax");

        pdMax.value =
            (Number(pdMax.value) || 0) - item.custo;

    }

    else if(item.tipo === "PV"){

        const pvMax = document.getElementById("pvMax");

        pvMax.value =
            (Number(pvMax.value) || 0) - item.custo;

    }

}


// ===============================
// REMOVER CARD
// ===============================

function removeCard(button){

    button.parentElement.parentElement.remove();

    updateEP();

}


// ===============================
// BOTÕES +
// ===============================



// ===============================
// INVENTÁRIO
// ===============================

const itens = [

   // =========================
// CORPO A CORPO
// =========================

{
    nome: "Desarmado",
    descricao: "1d4 + FOR",
    ep: 0,
    alcance: "Adjacente",
    categoria: "Corpo a Corpo",
    usos: 0
},

{
    nome: "Faca",
    descricao: "1d4 + 1 + FOR",
    ep: 1,
    alcance: "1-4",
    categoria: "Corpo a Corpo",
    usos: 0
},

{
    nome: "Adaga",
    descricao: "1d6 + FOR",
    ep: 1,
    alcance: "Adjacente",
    categoria: "Corpo a Corpo",
    usos: 0
},

{
    nome: "Taco",
    descricao: "1d6 + FOR",
    ep: 2,
    alcance: "Adjacente",
    categoria: "Corpo a Corpo",
    usos: 5
},

{
    nome: "Machete",
    descricao: "1d6 + 1 + FOR",
    ep: 2,
    alcance: "Adjacente",
    categoria: "Corpo a Corpo",
    usos: 0
},

{
    nome: "Lança",
    descricao: "1d6 + 2 + FOR",
    ep: 2,
    alcance: "1-4",
    categoria: "Corpo a Corpo",
    usos: 0
},

{
    nome: "Marreta",
    descricao: "2d8 + 3 + FOR",
    ep: 3,
    alcance: "Adjacente",
    categoria: "Corpo a Corpo",
    usos: 0
},

{
    nome: "Bastão",
    descricao: "1d6 + FOR",
    ep: 2,
    alcance: "Adjacente",
    categoria: "Corpo a Corpo",
    usos: 0
},

{
    nome: "Nunchaku",
    descricao: "1d6 + 1 + FOR",
    ep: 2,
    alcance: "Adjacente",
    categoria: "Corpo a Corpo",
    usos: 0
},

{
    nome: "Machadinha",
    descricao: "1d6 + 2 + FOR",
    ep: 2,
    alcance: "1-4",
    categoria: "Corpo a Corpo",
    usos: 0
},

{
    nome: "Machado",
    descricao: "1d8 + 2 + FOR",
    ep: 3,
    alcance: "Adjacente",
    categoria: "Corpo a Corpo",
    usos: 5
},

{
    nome: "Espada",
    descricao: "1d10 + 2 + FOR",
    ep: 3,
    alcance: "Adjacente",
    categoria: "Corpo a Corpo",
    usos: 5
},

{
    nome: "Maça",
    descricao: "2d6 + 2 + FOR",
    ep: 2,
    alcance: "Adjacente",
    categoria: "Corpo a Corpo",
    usos: 0
},

{
    nome: "Florete",
    descricao: "1d6 + 2 + FOR",
    ep: 2,
    alcance: "Adjacente",
    categoria: "Corpo a Corpo",
    usos: 5
},

{
    nome: "Katana",
    descricao: "1d10 + 2 + FOR",
    ep: 3,
    alcance: "Adjacente",
    categoria: "Corpo a Corpo",
    usos: 5
},

{
    nome: "Acha",
    descricao: "1d12 + 2 + FOR",
    ep: 3,
    alcance: "Adjacente",
    categoria: "Corpo a Corpo",
    usos: 5
},

{
    nome: "Gadanho",
    descricao: "2d4 + 2 + FOR",
    ep: 2,
    alcance: "Adjacente",
    categoria: "Corpo a Corpo",
    usos: 0
},

{
    nome: "Motosserra",
    descricao: "3d6 + FOR",
    ep: 3,
    alcance: "Adjacente",
    categoria: "Corpo a Corpo",
    usos: 0
},

{
    nome: "Montante",
    descricao: "2d8 + 2 + FOR",
    ep: 2,
    alcance: "Adjacente",
    categoria: "Corpo a Corpo",
    usos: 8
},

{
    nome: "Corrente",
    descricao: "1d8 + 1 + FOR",
    ep: 1,
    alcance: "Adjacente",
    categoria: "Corpo a Corpo",
    usos: 5
},

    // =========================
// ARCOS E BESTAS
// =========================

{
    nome: "Arco Curto",
    descricao: "1d6 + 2 + AGI",
    ep: 2,
    alcance: "1-4",
    categoria: "Arco",
    usos: 0
},

{
    nome: "Arco Composto",
    descricao: "1d8 + 2 + AGI",
    ep: 3,
    alcance: "1-5",
    categoria: "Arco",
    usos: 0
},

{
    nome: "Arco Refinado",
    descricao: "1d10 + 2 + AGI",
    ep: 4,
    alcance: "1-6",
    categoria: "Arco",
    usos: 0
},

{
    nome: "Besta",
    descricao: "1d6 + 3 + AGI",
    ep: 2,
    alcance: "1-4",
    categoria: "Arco",
    usos: 0
},

{
    nome: "Besta Refinada",
    descricao: "1d8 + 3 + AGI",
    ep: 3,
    alcance: "1-5",
    categoria: "Arco",
    usos: 0
},

// =========================
// ARMAS DE FOGO
// =========================

{
    nome: "Pistola",
    descricao: "1d8 + AGI",
    ep: 2,
    alcance: "1-5",
    categoria: "Arma de Fogo",
    usos: 0
},

{
    nome: "Revólver",
    descricao: "1d8 + 2 + AGI",
    ep: 2,
    alcance: "1-4",
    categoria: "Arma de Fogo",
    usos: 0
},

{
    nome: "Fuzil de Caça",
    descricao: "2d8 + AGI",
    ep: 3,
    alcance: "1-5",
    categoria: "Arma de Fogo",
    usos: 0
},

{
    nome: "Submetralhadora",
    descricao: "2d6 + AGI",
    ep: 3,
    alcance: "1-4",
    categoria: "Arma de Fogo",
    usos: 0
},

{
    nome: "Espingarda",
    descricao: "4d6 + AGI",
    ep: 4,
    alcance: "1-3",
    categoria: "Arma de Fogo",
    usos: 0
},

{
    nome: "Fuzil de Assalto",
    descricao: "2d8 + AGI",
    ep: 4,
    alcance: "1-5",
    categoria: "Arma de Fogo",
    usos: 0
},

{
    nome: "Fuzil de Precisão",
    descricao: "2d10 + 2 + AGI",
    ep: 4,
    alcance: "1-6",
    categoria: "Arma de Fogo",
    usos: 0
},

{
    nome: "Metralhadora",
    descricao: "2d12 + 2 + AGI",
    ep: 4,
    alcance: "1-5",
    categoria: "Arma de Fogo",
    usos: 0
},

{
    nome: "Lança-chamas",
    descricao: "6d6 + AGI",
    ep: 5,
    alcance: "1-3",
    categoria: "Arma de Fogo",
    usos: 5
},

{
    nome: "Bazuca",
    descricao: "10d8 + AGI",
    ep: 5,
    alcance: "1-6",
    categoria: "Arma de Fogo",
    usos: 5
},

// =========================
// PROTEÇÕES
// =========================

{
    nome: "Proteção Leve",
    descricao: "+5 Defesa",
    ep: 2,
    alcance: "-",
    categoria: "Proteção",
    usos: 0
},

{
    nome: "Proteção Pesada",
    descricao: "+10 Defesa",
    ep: 4,
    alcance: "-",
    categoria: "Proteção",
    usos: 0
},

{
    nome: "Escudo",
    descricao: "+2 Defesa",
    ep: 2,
    alcance: "-",
    categoria: "Proteção",
    usos: 5
},

{
    nome: "Escudo Grande",
    descricao: "+4 Defesa",
    ep: 3,
    alcance: "-",
    categoria: "Proteção",
    usos: 8
},

// =========================
// ITENS GERAIS
// =========================

{
    nome: "Vestimenta",
    descricao: "+2 em perícias não combativas",
    ep: 1,
    alcance: "-",
    categoria: "Item Geral",
    usos: 0
},

{
    nome: "Soqueira",
    descricao: "+2 dano desarmado",
    ep: 0.5,
    alcance: "-",
    categoria: "Item Geral",
    usos: 0
},

{
    nome: "Kit Médico",
    descricao: "Cura e medicina",
    ep: 2,
    alcance: "-",
    categoria: "Item Geral",
    usos: 5
},

{
    nome: "Kit de Reparos",
    descricao: "Reparo de durabilidade",
    ep: 2,
    alcance: "-",
    categoria: "Item Geral",
    usos: 5
},

{
    nome: "Cicatrizante",
    descricao: "2d6 + 2 PV",
    ep: 1,
    alcance: "-",
    categoria: "Consumível",
    usos: 1
},

{
    nome: "Binóculos",
    descricao: "+5 percepção",
    ep: 1,
    alcance: "-",
    categoria: "Item Geral",
    usos: 0
},

{
    nome: "Pé de Cabra",
    descricao: "+5 força para arrombar",
    ep: 1,
    alcance: "-",
    categoria: "Ferramenta",
    usos: 5
},

{
    nome: "Mochila",
    descricao: "+4 EP",
    ep: 0,
    alcance: "-",
    categoria: "Armazenamento",
    usos: 0
},

{
    nome: "Bolsa",
    descricao: "+2 EP",
    ep: 0,
    alcance: "-",
    categoria: "Armazenamento",
    usos: 0
},

// =========================
// ALIMENTOS
// =========================

{
    nome: "Lanchinho",
    descricao: "Recupera 3 PV e 1 PD",
    ep: 0.5,
    alcance: "-",
    categoria: "Alimento",
    usos: 1
},

{
    nome: "Lanche",
    descricao: "Recupera 5 PV e 2 PD",
    ep: 1,
    alcance: "-",
    categoria: "Alimento",
    usos: 1
},

{
    nome: "Marmita",
    descricao: "Recupera 7 PV e 3 PD",
    ep: 2,
    alcance: "-",
    categoria: "Alimento",
    usos: 1
},

{
    nome: "Banquete",
    descricao: "Recupera 10 PV e 4 PD",
    ep: 3,
    alcance: "-",
    categoria: "Alimento",
    usos: 1
},

];

const itemSearch = document.getElementById("modalItemSearch")
const itemResults = document.getElementById("itemResults");

itemSearch.addEventListener("input", function(){

    const valor = this.value.toLowerCase();

    itemResults.innerHTML = "";

    if(valor.length <= 0) return;

    const filtrados = itens.filter(item =>
        item.nome.toLowerCase().includes(valor)
    );

    filtrados.forEach(item => {

        const div = document.createElement("div");

        div.classList.add("search-item");

        div.innerHTML = `

            <strong>${item.nome}</strong>
            <span>${item.descricao}</span>

        `;

        div.onclick = () => {

            createInventoryCard(item);

            itemResults.innerHTML = "";

            itemSearch.value = "";

        };

        itemResults.appendChild(div);

    });

});

// ===============================
// CRIAR ITEM INVENTÁRIO
// ===============================

function createInventoryCard(item){

    const card = document.createElement("div");

    card.classList.add("inventory-card");

    card.innerHTML = `

        <div class="ability-header">

            <h3>${item.nome}</h3>

            <button onclick="removeCard(this)">
                X
            </button>

        </div>

        <div class="item-category">
            ${item.categoria || "Item"}
        </div>

        <div class="inventory-info">

            <label>Dano</label>
            <input type="text"
                value="${item.descricao}">

            <label>Alcance</label>
            <input type="text"
                value="${item.alcance || "-"}">

            <label>EP</label>
            <input type="number"
                value="${item.ep || 0}">

        </div>

        <div class="uses-box">

            <span>Usos</span>

            <input type="number"
                value="${item.usos || 0}">

        </div>

        <div class="mod-area">

            <h4>Modificações</h4>

            <div class="mods-list"></div>

            <button class="mini-add-btn"
                onclick="addModification(this)">
                +
            </button>

        </div>

    `;

    document.getElementById("inventoryList")
        .appendChild(card);

}

// ===============================
// MODIFICAÇÕES DOS ITENS
// ===============================

const modificacoes = [

    // Corpo a Corpo
    "Certeira",
    "Cruel",
    "Discreta",
    "Perigosa",
    "Eletrificada",
    "Espinhosa",
    "Resistente",
    "Pesada",
    "Perfurante",

    // Distância
    "Alongada",
    "Calibre Grosso",
    "Pente Rápido",
    "Mira Laser",
    "Mira Telescópica",
    "Visão de Calor",
    "Silenciador",
    "Explosiva",
    "Letal",

    // Equipamentos
    "Antibombas",
    "Blindada",
    "Reforçada"

];

function addModification(button){

    const mod = prompt(
        "Digite a modificação:"
    );

    if(!mod) return;

    const existe = modificacoes.find(m =>
        m.toLowerCase() === mod.toLowerCase()
    );

    if(!existe){

        alert("Modificação não encontrada.");
        return;

    }

    const modTag = document.createElement("div");

    modTag.classList.add("mod-tag");

    modTag.innerHTML = `

        ${existe}

        <button onclick="this.parentElement.remove()">
            X
        </button>

    `;

    button.parentElement
        .querySelector(".mods-list")
        .appendChild(modTag);

}

const modificacoes = [

    // corpo a corpo

    "Certeira",
    "Cruel",
    "Discreta",
    "Perigosa",
    "Eletrificada",
    "Espinhosa",
    "Resistente",
    "Pesada",
    "Perfurante",

    // distância

    "Alongada",
    "Calibre Grosso",
    "Pente Rápido",
    "Mira Laser",
    "Mira Telescópica",
    "Visão de Calor",
    "Silenciador",
    "Explosiva",
    "Letal",

    // proteção

    "Antibombas",
    "Blindada",
    "Reforçada"

];

function addModification(button){

    const modsList = button.parentElement
        .querySelector(".mods-list");

    const modRow = document.createElement("div");

    modRow.classList.add("mod-row");

    const select = document.createElement("select");

    modificacoes.forEach(mod => {

        const option = document.createElement("option");

        option.value = mod;
        option.innerText = mod;

        select.appendChild(option);

    });

    const removeBtn = document.createElement("button");

    removeBtn.innerText = "X";

    removeBtn.classList.add("remove-mod-btn");

    removeBtn.onclick = () => {

        modRow.remove();

    };

    modRow.appendChild(select);

    modRow.appendChild(removeBtn);

    modsList.appendChild(modRow);

}

function updateEP(){

    const items = document.querySelectorAll(".item-ep");

    let total = 0;

    items.forEach(item => {

        total += Number(item.value) || 0;

    });

    let epBox = document.getElementById("epTotal");

    if(!epBox){

        epBox = document.createElement("div");

        epBox.id = "epTotal";

        epBox.classList.add("ep-total");

        document.querySelector(".container")
            .appendChild(epBox);

    }

    epBox.innerHTML = `
        EP TOTAL: ${total}
    `;

}

function addModification(button){

    const mod = prompt("Nome da modificação:");

    if(!mod) return;

    const modsList = button.parentElement
        .querySelector(".mods-list");

    const modDiv = document.createElement("div");

    modDiv.classList.add("mod-item");

    modDiv.innerHTML = `

        <span>${mod}</span>

        <button onclick="this.parentElement.remove()">
            X
        </button>

    `;

    modsList.appendChild(modDiv);

}

// botão inventário


    // ===============================
// PV E PD AUTOMÁTICOS
// ===============================

const nivelInput = document.querySelector(
    'input[value="1"]'
);

const vigorInput =
    document.getElementById("vigor");

const presencaInput =
    document.getElementById("presenca");

function atualizarStatus(){

    const nivel =
        Number(nivelInput.value) || 1;

    const vigor =
        Number(vigorInput.value) || 1;

    const presenca =
        Number(presencaInput.value) || 1;

    const pvMax =
        (7 + vigor) * nivel;

    const pdMax =
        (5 + presenca) * nivel;

    document.getElementById("pvMax").value =
        pvMax;

    document.getElementById("pdMax").value =
        pdMax;

}

nivelInput.addEventListener(
    "input",
    atualizarStatus
);

vigorInput.addEventListener(
    "input",
    atualizarStatus
);

presencaInput.addEventListener(
    "input",
    atualizarStatus
);

atualizarStatus();

// ===============================
// PERÍCIAS
// ===============================

function updateSkills(){

    const rows = document.querySelectorAll(".skill-row");

    rows.forEach(row => {

        const treino = Number(
            row.querySelector(".skill-train").value
        ) || 0;

        const bonus = Number(
            row.querySelector(".skill-bonus").value
        ) || 0;

        const total = treino + bonus;

        row.querySelector(".skill-total").innerText =
            `+${total}`;

    });

}

// ===============================
// ROLAGEM DE PERÍCIAS
// ===============================

document.querySelectorAll(".skill-roll")
.forEach(button => {

    button.addEventListener("click", () => {

        const row =
            button.parentElement;

        const attr =
            row.dataset.attr;

        const atributo =
            Number(
                document.getElementById(attr).value
            );

        const bonus =
            Number(
                row.querySelector(".skill-value").value
            ) || 0;

        let resultados = [];

        for(let i = 0; i < atributo; i++){

            resultados.push(
                Math.floor(Math.random() * 20) + 1
            );

        }

        const maior =
            Math.max(...resultados);

        const total =
            maior + bonus;

        document.getElementById(
            "diceResult"
        ).innerHTML = `

            <div class="dice-rolls">
                ${resultados.join(" • ")}
            </div>

            <div class="dice-big">
                ${maior}
            </div>

            <div class="dice-total">
                Resultado Final: ${total}
            </div>

        `;

    });

});

document.querySelectorAll("input").forEach(input => {

    input.addEventListener("input", updateSkills);

});

updateSkills();

// ===============================
// CÁLCULO AUTOMÁTICO PV/PD
// ===============================

function updateStatus(){

    const nivel = Number(
        document.getElementById("nivel").value
    ) || 1;

    const vigor = Number(
        document.getElementById("vigor").value
    ) || 0;

    const presenca = Number(
        document.getElementById("presenca").value
    ) || 0;

    // PV = (7 + VIG) × nível
    const pv = (7 + vigor) * nivel;

    // PD = (5 + PRE) × nível
    const pd = (5 + presenca) * nivel;

    document.getElementById("pvMax").value = pv;

    document.getElementById("pdMax").value = pd;

}

document.getElementById("nivel")
    .addEventListener("input", updateStatus);

document.getElementById("vigor")
    .addEventListener("input", updateStatus);

document.getElementById("presenca")
    .addEventListener("input", updateStatus);

updateStatus();

// ===============================
// CONDIÇÕES
// ===============================

const conditions = [

    "Sangramento",
    "Envenenamento",
    "Paralisia",
    "Paralisia Total",
    "Caído",
    "Enjoado",
    "Morrendo",
    "Enfraquecido",
    "Lentidão",
    "Cansado",

    "Controlado",
    "Cego",
    "Surdo",
    "Traumatizado",
    "Penumbra",
    "Vulnerável",
    "Desprevenido",
    "Confuso",
    "Chamas",
    "Anti Vida"

];

function addCondition(){

    const nome = prompt(
        "Digite a condição:"
    );

    if(!nome) return;

    const existe = conditions.find(c =>
        c.toLowerCase() === nome.toLowerCase()
    );

    if(!existe){

        alert("Condição não encontrada.");
        return;

    }

    const card = document.createElement("div");

    card.classList.add("condition-card");

    card.innerHTML = `

        <span>${existe}</span>

        <button onclick="removeCondition(this, '${existe}')">
            X
        </button>

    `;

    document.getElementById("conditionsList")
        .appendChild(card);

    applyCondition(existe);

}

function applyCondition(condition){

    const pvMax = document.getElementById("pvMax");

    const pdMax = document.getElementById("pdMax");

    if(condition === "Enfraquecido"){

        pvMax.value =
            Number(pvMax.value) - 10;

    }

    if(condition === "Traumatizado"){

        pdMax.value =
            Number(pdMax.value) - 8;

    }

}

function removeCondition(button, condition){

    const pvMax = document.getElementById("pvMax");

    const pdMax = document.getElementById("pdMax");

    if(condition === "Enfraquecido"){

        pvMax.value =
            Number(pvMax.value) + 10;

    }

    if(condition === "Traumatizado"){

        pdMax.value =
            Number(pdMax.value) + 8;

    }

    button.parentElement.remove();

}

document.getElementById("conditionBtn")
    .addEventListener("click", addCondition);

    // ===============================
// CONDIÇÕES
// ===============================

const condicoes = [

    "Sangramento",
    "Envenenamento",
    "Paralisia",
    "Paralisia Total",
    "Caído",
    "Enjoado",
    "Morrendo",
    "Enfraquecido",
    "Lentidão",
    "Cansado",
    "Controlado",
    "Cego",
    "Surdo",
    "Traumatizado",
    "Penumbra",
    "Vulnerável",
    "Desprevenido",
    "Confuso",
    "Chamas",
    "Anti Vida"

];

function addCondition(){

    const nome = prompt(
        "Digite a condição:"
    );

    if(!nome) return;

    const existe = condicoes.find(c =>
        c.toLowerCase() === nome.toLowerCase()
    );

    if(!existe){

        alert("Condição não encontrada.");
        return;

    }

    const card = document.createElement("div");

    card.classList.add("condition-card");

    card.innerHTML = `

        <span>${existe}</span>

        <button onclick="removeCondition(this)">
            X
        </button>

    `;

    document.getElementById("conditionsList")
        .appendChild(card);

    aplicarCondicao(existe);

}

function removeCondition(button){

    const nome = button.parentElement
        .querySelector("span").innerText;

    removerCondicaoEfeito(nome);

    button.parentElement.remove();

}

function aplicarCondicao(nome){

    const pvMax =
        document.getElementById("pvMax");

    const pdMax =
        document.getElementById("pdMax");

    if(nome === "Enfraquecido"){

        pvMax.value =
            Number(pvMax.value || 0) - 10;

    }

    if(nome === "Traumatizado"){

        pdMax.value =
            Number(pdMax.value || 0) - 8;

    }

}

function removerCondicaoEfeito(nome){

    const pvMax =
        document.getElementById("pvMax");

    const pdMax =
        document.getElementById("pdMax");

    if(nome === "Enfraquecido"){

        pvMax.value =
            Number(pvMax.value || 0) + 10;

    }

    if(nome === "Traumatizado"){

        pdMax.value =
            Number(pdMax.value || 0) + 8;

    }

}

document.querySelector(".add-condition-btn")
    .addEventListener("click", addCondition);

    // ===============================
// SAVE AUTOMÁTICO
// ===============================

function saveFicha(){

    const data = {

        // INFO
        nome:
            document.querySelectorAll(".field input")[0].value,

        nivel:
            document.getElementById("nivel")?.value || 1,

        origem:
            document.querySelectorAll(".field input")[2].value,

        idade:
            document.querySelectorAll(".field input")[3].value,

        // STATUS
        pvAtual:
            document.getElementById("pvAtual").value,

        pvMax:
            document.getElementById("pvMax").value,

        pdAtual:
            document.getElementById("pdAtual").value,

        pdMax:
            document.getElementById("pdMax").value,

        // ATRIBUTOS
        forca:
            document.getElementById("forca").value,

        agilidade:
            document.getElementById("agilidade").value,

        intelecto:
            document.getElementById("intelecto").value,

        vigor:
            document.getElementById("vigor").value,

        presenca:
            document.getElementById("presenca").value,

        // HTMLS
        inventory:
            document.getElementById("inventoryList").innerHTML,

        conditions:
            document.getElementById("conditionsList").innerHTML,

        assimilations:
            document.getElementById("assimilationList").innerHTML,

        abilities:
            document.getElementById("abilitiesList").innerHTML

    };

    localStorage.setItem(
        "fichaParanormal",
        JSON.stringify(data)
    );

}

// ===============================
// LOAD FICHA
// ===============================

function loadFicha(){

    const data = JSON.parse(
        localStorage.getItem("fichaParanormal")
    );

    if(!data) return;

    // INFO
    document.querySelectorAll(".field input")[0].value =
        data.nome || "";

    if(document.getElementById("nivel")){

        document.getElementById("nivel").value =
            data.nivel || 1;

    }

    document.querySelectorAll(".field input")[2].value =
        data.origem || "";

    document.querySelectorAll(".field input")[3].value =
        data.idade || "";

    // STATUS
    document.getElementById("pvAtual").value =
        data.pvAtual || 0;

    document.getElementById("pvMax").value =
        data.pvMax || 0;

    document.getElementById("pdAtual").value =
        data.pdAtual || 0;

    document.getElementById("pdMax").value =
        data.pdMax || 0;

    // ATRIBUTOS
    document.getElementById("forca").value =
        data.forca || 1;

    document.getElementById("agilidade").value =
        data.agilidade || 1;

    document.getElementById("intelecto").value =
        data.intelecto || 1;

    document.getElementById("vigor").value =
        data.vigor || 1;

    document.getElementById("presenca").value =
        data.presenca || 1;

    // HTMLS
    document.getElementById("inventoryList").innerHTML =
        data.inventory || "";

    document.getElementById("conditionsList").innerHTML =
        data.conditions || "";

    document.getElementById("assimilationList").innerHTML =
        data.assimilations || "";

    document.getElementById("abilitiesList").innerHTML =
        data.abilities || "";

}

// ===============================
// AUTO SAVE
// ===============================

document.addEventListener("input", saveFicha);

document.addEventListener("click", () => {

    setTimeout(saveFicha, 100);

});

loadFicha();

// ===============================
// ROLAR PERÍCIA
// ===============================

function rollSkill(row){

    const attrText =
        row.querySelector(".skill-attr")
        .innerText;

    let atributo = 1;

    // ATRIBUTO USADO

    if(attrText.includes("FOR")){

        atributo = Number(
            document.getElementById("forca").value
        );

    }

    else if(attrText.includes("AGI")){

        atributo = Number(
            document.getElementById("agilidade").value
        );

    }

    else if(attrText.includes("INT")){

        atributo = Number(
            document.getElementById("intelecto").value
        );

    }

    else if(attrText.includes("VIG")){

        atributo = Number(
            document.getElementById("vigor").value
        );

    }

    else if(attrText.includes("PRE")){

        atributo = Number(
            document.getElementById("presenca").value
        );

    }

    // BONUS

    const treino = Number(
        row.querySelector(".skill-train").value
    ) || 0;

    const bonus = Number(
        row.querySelector(".skill-bonus").value
    ) || 0;

    // ROLAGEM

    let resultados = [];

    for(let i = 0; i < atributo; i++){

        resultados.push(
            Math.floor(Math.random() * 20) + 1
        );

    }

    const maior = Math.max(...resultados);

    const total =
        maior + treino + bonus;

    const nome =
        row.querySelector(".skill-name")
        .innerText;

    document.getElementById("diceResult")
        .innerHTML = `

        <div class="dice-skill-name">
            ${nome}
        </div>

        <div class="dice-rolls">
            ${resultados.join(" • ")}
        </div>

        <div class="dice-big">
            ${maior}
        </div>

        <div class="dice-total">
            Total: ${total}
        </div>

    `;

}

// ===============================
// CLICK NAS PERÍCIAS
// ===============================

document.querySelectorAll(".clickable-skill")
.forEach(skill => {

    skill.addEventListener("click", function(e){

        // evita clicar nos inputs

        if(
            e.target.tagName === "INPUT"
        ) return;

        rollSkill(this);

    });

});

// ===============================
// MODAL INVENTÁRIO
// ===============================

function openInventoryModal(){

    document.getElementById("inventoryModal")
        .style.display = "flex";

    renderModalItems("");

}

function closeInventoryModal(){

    document.getElementById("inventoryModal")
        .style.display = "none";

}

// ===============================
// RENDER ITENS
// ===============================

function renderModalItems(search){

    const list =
        document.getElementById("modalItemsList");

    list.innerHTML = "";

    itens
    .filter(item =>
        item.nome.toLowerCase()
        .includes(search.toLowerCase())
    )
    .forEach(item => {

        const div = document.createElement("div");

        div.classList.add("modal-item");

        div.innerHTML = `

            <h3>${item.nome}</h3>

            <span>${item.categoria || "Item"}</span>

            <p>${item.descricao}</p>

        `;

        div.onclick = () => {

            createInventoryCard(item);

            closeInventoryModal();

        };

        list.appendChild(div);

    });

}

// ===============================
// PESQUISA
// ===============================

document.getElementById("modalItemSearch")
.addEventListener("input", function(){

    renderModalItems(this.value);

});

// ===============================
// BOTÃO +
// ===============================


document.querySelectorAll(".add-btn")[2]
.addEventListener("click", openInventoryModal);

// ===============================
// MODIFICAÇÕES
// ===============================

const modifications = [

    "Certeira",
    "Cruel",
    "Discreta",
    "Perigosa",
    "Eletrificada",
    "Espinhosa",
    "Resistente",
    "Pesada",
    "Perfurante",

    "Alongada",
    "Calibre Grosso",
    "Pente Rápido",
    "Mira Laser",
    "Mira Telescópica",
    "Visão de Calor",
    "Silenciador",
    "Explosiva",
    "Letal"

];


// ===============================
// ADICIONAR MODIFICAÇÃO
// ===============================

function addModification(button){

    const mod = prompt(
        "Digite a modificação:"
    );

    if(!mod) return;

    const existe = modifications.find(m =>
        m.toLowerCase() === mod.toLowerCase()
    );

    if(!existe){

        alert("Modificação não encontrada.");
        return;

    }

    const modCard = document.createElement("div");

    modCard.classList.add("mod-card");

    modCard.innerHTML = `

        <span>${existe}</span>

        <button onclick="removeCard(this)">
            X
        </button>

    `;

    button.parentElement
        .querySelector(".mods-list")
        .appendChild(modCard);

}