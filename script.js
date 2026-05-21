// ======================================
// FOTO PERSONAGEM
// ======================================

const photoInput = document.getElementById("photoInput");
const photoPreview = document.getElementById("photoPreview");

if (photoInput) {
    photoInput.addEventListener("change", function () {

        const file = this.files[0];

        if (!file) return;

        const reader = new FileReader();

        reader.onload = function (e) {

            photoPreview.innerHTML = `
                <img src="${e.target.result}" style="width:100%;height:100%;object-fit:cover;">
            `;

        };

        reader.readAsDataURL(file);

    });
}

// ======================================
// ROLAGEM
// ======================================

function randomDice(type) {
    return Math.floor(Math.random() * type) + 1;
}

function rollDice() {

    const quantidade =
        Number(document.getElementById("diceCount").value) || 1;

    const tipo =
        Number(document.getElementById("diceType").value) || 20;

    const bonus =
        Number(document.getElementById("diceBonus").value) || 0;

    let rolls = [];

    for (let i = 0; i < quantidade; i++) {
        rolls.push(randomDice(tipo));
    }

    const maior = Math.max(...rolls);

    const total = maior + bonus;

    let critico = "";

    if (tipo === 20 && maior === 20) {
        critico = `<div class="critical-text">CRÍTICO!</div>`;
    }

    document.getElementById("diceResult").innerHTML = `

        <div class="dice-rolls">
            ${rolls.join(" • ")}
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

// ======================================
// ROLAR ATRIBUTO
// ======================================

function rollAttribute(attributeId) {

    const atributo =
        Number(document.getElementById(attributeId).value) || 1;

    document.getElementById("diceCount").value = atributo;
    document.getElementById("diceType").value = 20;

    rollDice();
}

// ======================================
// STATUS AUTOMÁTICO
// ======================================

function atualizarStatus() {

    const nivel =
        Number(document.getElementById("nivel").value) || 1;

    const vigor =
        Number(document.getElementById("vigor").value) || 1;

    const presenca =
        Number(document.getElementById("presenca").value) || 1;

    const pvMax = (7 + vigor) * nivel;
    const pdMax = (5 + presenca) * nivel;

    document.getElementById("pvMax").value = pvMax;
    document.getElementById("pdMax").value = pdMax;
}

["nivel", "vigor", "presenca"].forEach(id => {

    const el = document.getElementById(id);

    if (el) {
        el.addEventListener("input", atualizarStatus);
    }

});

atualizarStatus();

// ======================================
// PERÍCIAS
// ======================================

function updateSkills() {

    const rows =
        document.querySelectorAll(".skill-row");

    rows.forEach(row => {

        const treino =
            Number(row.querySelector(".skill-train").value) || 0;

        const bonus =
            Number(row.querySelector(".skill-bonus").value) || 0;

        const total = treino + bonus;

        row.querySelector(".skill-total").innerText =
            `+${total}`;

    });
}

document.querySelectorAll(".skill-train, .skill-bonus")
.forEach(input => {

    input.addEventListener("input", updateSkills);

});

updateSkills();

// ======================================
// ROLAR PERÍCIA
// ======================================

function getAttributeValue(attrText) {

    if (attrText.includes("FOR")) {
        return Number(document.getElementById("forca").value) || 1;
    }

    if (attrText.includes("AGI")) {
        return Number(document.getElementById("agilidade").value) || 1;
    }

    if (attrText.includes("INT")) {
        return Number(document.getElementById("intelecto").value) || 1;
    }

    if (attrText.includes("VIG")) {
        return Number(document.getElementById("vigor").value) || 1;
    }

    if (attrText.includes("PRE")) {
        return Number(document.getElementById("presenca").value) || 1;
    }

    return 1;
}

function rollSkill(row) {

    const attr =
        row.querySelector(".skill-attr").innerText;

    const atributo =
        getAttributeValue(attr);

    const treino =
        Number(row.querySelector(".skill-train").value) || 0;

    const bonus =
        Number(row.querySelector(".skill-bonus").value) || 0;

    let resultados = [];

    for (let i = 0; i < atributo; i++) {
        resultados.push(randomDice(20));
    }

    const maior = Math.max(...resultados);

    const total = maior + treino + bonus;

    const nome =
        row.querySelector(".skill-name").innerText;

    document.getElementById("diceResult").innerHTML = `

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

document.querySelectorAll(".clickable-skill")
.forEach(skill => {

    skill.addEventListener("click", function (e) {

        if (e.target.tagName === "INPUT") return;

        rollSkill(this);

    });

});

// ======================================
// HABILIDADES
// ======================================

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
        descricao: "Seu dano sobe um passo."
    },

    {
        nome: "Casca Grossa",
        custo: 4,
        tipo: "PD",
        descricao: "Recebe +1 PV por nível."
    }

];

function addAbility() {

    let html = "";

    habilidades.forEach(habilidade => {

        html += `

            <div class="assimilation-option"
            onclick="selectAbility('${habilidade.nome}')">

                <h3>${habilidade.nome}</h3>

                <span>
                    ${habilidade.custo} ${habilidade.tipo}
                </span>

            </div>

        `;

    });

    const menu = document.createElement("div");

    menu.classList.add("assimilation-menu");

    menu.innerHTML = `

        <div class="assimilation-menu-content">

            <div class="menu-header">

                <h2>HABILIDADES</h2>

                <button onclick="this.closest('.assimilation-menu').remove()">
                    X
                </button>

            </div>

            ${html}

        </div>

    `;

    document.body.appendChild(menu);

}

function selectAbility(nome) {

    const habilidade =
        habilidades.find(h => h.nome === nome);

    if(!habilidade) return;

    const card =
        document.createElement("div");

    card.classList.add("ability-card");

    card.innerHTML = `

        <div class="ability-header">

            <h3 contenteditable="true">
                ${habilidade.nome}
            </h3>

            <button onclick="removeCard(this)">
                X
            </button>

        </div>

        <p contenteditable="true">
            ${habilidade.descricao}
        </p>

        <span>
            Custo: ${habilidade.custo} ${habilidade.tipo}
        </span>

    `;

    document.getElementById("abilitiesList")
    .appendChild(card);

    document.querySelector(".assimilation-menu").remove();
}

// ======================================
// REMOVER CARD
// ======================================

function removeCard(button) {

    button.closest("div").parentElement.remove();

    saveFicha();
}

// ======================================
// ASSIMILAÇÕES
// ======================================

const assimilations = [

    {
        nome: "Teleporte Cinético",
        elemento: "Energia",
        custo: 4,
        descricao: "Teleporta até 3m."
    },

    {
        nome: "Aceleração",
        elemento: "Energia",
        custo: 4,
        descricao: "Recebe PA temporário."
    }

];

function openAssimilationMenu() {

    let html = "";

    assimilations.forEach(a => {

        html += `

            <div class="assimilation-option"
            onclick="selectAssimilation('${a.nome}')">

                <h3>${a.nome}</h3>

                <span>${a.elemento}</span>

            </div>

        `;

    });

    const menu =
        document.createElement("div");

    menu.classList.add("assimilation-menu");

    menu.innerHTML = `

        <div class="assimilation-menu-content">

            <div class="menu-header">

                <h2>ASSIMILAÇÕES</h2>

                <button onclick="closeAssimilationMenu()">
                    X
                </button>

            </div>

            ${html}

        </div>

    `;

    document.body.appendChild(menu);
}

function closeAssimilationMenu() {

    const menu =
        document.querySelector(".assimilation-menu");

    if (menu) menu.remove();
}

function selectAssimilation(nome) {

    const assimilation =
        assimilations.find(a => a.nome === nome);

    if (!assimilation) return;

    const card =
        document.createElement("div");

    card.classList.add("assimilation-card");

    card.innerHTML = `

        <div class="ability-header">

            <h3>${assimilation.nome}</h3>

            <button onclick="removeCard(this)">
                X
            </button>

        </div>

        <span>${assimilation.elemento}</span>

        <p>${assimilation.descricao}</p>

    `;

    document.getElementById("assimilationList")
    .appendChild(card);

    closeAssimilationMenu();
}

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
        descricao: "Cura",
        ep: 2,
        categoria: "Item",
        usos: 5
    }

];

// ======================================
// MODAL
// ======================================

function openInventoryModal() {

    document.getElementById("inventoryModal")
    .style.display = "flex";

    renderModalItems("");
}

function closeInventoryModal() {

    document.getElementById("inventoryModal")
    .style.display = "none";
}

// ======================================
// RENDER ITENS
// ======================================

function renderModalItems(search) {

    const list =
        document.getElementById("modalItemsList");

    list.innerHTML = "";

    itens
    .filter(item =>
        item.nome.toLowerCase()
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

document.getElementById("modalItemSearch")
.addEventListener("input", function () {

    renderModalItems(this.value);

});

// ======================================
// ITEM INVENTÁRIO
// ======================================

function createInventoryCard(item) {

    const card =
        document.createElement("div");

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

            <label>Dano</label>

            <input type="text"
            value="${item.descricao}">

            <label>Categoria</label>

            <input type="text"
            value="${item.categoria}">

            <label>EP</label>

            <input type="number"
            class="item-ep"
            value="${item.ep}">

            <label>Usos</label>

            <input type="number"
            value="${item.usos}">

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

// ======================================
// CONDIÇÕES
// ======================================

const condicoes = [

    "Sangramento",
    "Paralisia",
    "Caído",
    "Cego",
    "Confuso"

];

function addCondition() {

    let html = "";

    condicoes.forEach(condicao => {

        html += `

            <div class="assimilation-option"
            onclick="selectCondition('${condicao}')">

                <h3>${condicao}</h3>

            </div>

        `;

    });

    const menu = document.createElement("div");

    menu.classList.add("assimilation-menu");

    menu.innerHTML = `

        <div class="assimilation-menu-content">

            <div class="menu-header">

                <h2>CONDIÇÕES</h2>

                <button onclick="this.closest('.assimilation-menu').remove()">
                    X
                </button>

            </div>

            ${html}

        </div>

    `;

    document.body.appendChild(menu);

}

function selectCondition(nome) {

    const card =
        document.createElement("div");

    card.classList.add("condition-card");

    card.innerHTML = `

        <span>${nome}</span>

        <button onclick="removeCard(this)">
            X
        </button>

    `;

    document.getElementById("conditionsList")
    .appendChild(card);

    document.querySelector(".assimilation-menu").remove();
}

// ======================================
// SAVE / LOAD
// ======================================

function saveFicha() {

    const data = {

        body: document.body.innerHTML

    };

    localStorage.setItem(
        "fichaParanormal",
        JSON.stringify(data)
    );
}

function loadFicha() {

    const data =
        JSON.parse(localStorage.getItem("fichaParanormal"));

    if (!data) return;
}

document.addEventListener("input", () => {

    saveFicha();

});

document.addEventListener("click", () => {

    setTimeout(saveFicha, 100);

});

loadFicha();

function addModification(button) {

    const mod =
        prompt("Nome da modificação:");

    if(!mod) return;

    const tag =
        document.createElement("div");

    tag.classList.add("mod-tag");

    tag.innerHTML = `

        ${mod}

        <button onclick="this.parentElement.remove()">
            X
        </button>

    `;

    button.parentElement
    .querySelector(".mods-list")
    .appendChild(tag);

}