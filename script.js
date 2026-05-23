// ======================================
// FOTO PERSONAGEM
// ======================================

const photoInput =
    document.getElementById("photoInput");

const photoPreview =
    document.getElementById("photoPreview");

if(photoInput){

    photoInput.addEventListener("change", function(){

        const file = this.files[0];

        if(!file) return;

        const reader = new FileReader();

        reader.onload = function(e){

            photoPreview.innerHTML = `

                <img
                    src="${e.target.result}"
                    style="
                        width:100%;
                        height:100%;
                        object-fit:cover;
                    "
                >

            `;

        };

        reader.readAsDataURL(file);

    });

}

// ======================================
// DADOS
// ======================================

function randomDice(type){

    return Math.floor(Math.random() * type) + 1;

}

function rollDice(){

    const quantidade =
        Number(document.getElementById("diceCount").value) || 1;

    const tipo =
        Number(document.getElementById("diceType").value) || 20;

    const bonus =
        Number(document.getElementById("diceBonus").value) || 0;

    let rolls = [];

    for(let i = 0; i < quantidade; i++){

        rolls.push(randomDice(tipo));

    }

    const maior = Math.max(...rolls);

    const total = maior + bonus;

    let critico = "";

    if(tipo === 20 && maior === 20){

        critico = `

            <div class="critical-text">
                CRÍTICO!
            </div>

        `;

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

function rollAttribute(attributeId){

    const atributo =
        Number(document.getElementById(attributeId).value) || 1;

    document.getElementById("diceCount").value =
        atributo;

    document.getElementById("diceType").value =
        20;

    document.getElementById("diceBonus").value =
        0;

    rollDice();

}

// ======================================
// STATUS
// ======================================

function atualizarStatus(){

    const nivel =
        Number(document.getElementById("nivel").value) || 1;

    const vigor =
        Number(document.getElementById("vigor").value) || 1;

    const presenca =
        Number(document.getElementById("presenca").value) || 1;

    const pvMax =
        (7 + vigor) * nivel;

    const pdMax =
        (5 + presenca) * nivel;

    document.getElementById("pvMax").value =
        pvMax;

    document.getElementById("pdMax").value =
        pdMax;

}

["nivel","vigor","presenca"]
.forEach(id => {

    const el =
        document.getElementById(id);

    if(el){

        el.addEventListener(
            "input",
            () => {

                atualizarStatus();
                atualizarPA();

            }
        );

    }

});

atualizarStatus();
atualizarPA();

document.getElementById("paAtual").value =
    4 + Math.floor(
        (
            Number(
                document.getElementById("nivel").value
            ) || 1
        ) / 10
    );

function atualizarPA(){

    const nivel =
        Number(
            document.getElementById("nivel").value
        ) || 1;

    // =====================
    // PA MÁXIMO
    // =====================

    const paMax =
        4 + Math.floor(nivel / 10);

    // =====================
    // ELEMENTOS
    // =====================

    const paAtual =
        document.getElementById("paAtual");

    const texto =
        document.getElementById("paMaxText");

    // =====================
    // TEXTO
    // =====================

    texto.innerText =
        `PA Máximo: ${paMax}`;

    // =====================
    // LIMITADOR
    // =====================

    if(
        Number(paAtual.value) > paMax
    ){

        paAtual.value = paMax;

    }

}

// ======================================
// PERÍCIAS
// ======================================

function updateSkills(){

    const rows =
        document.querySelectorAll(".skill-row");

    rows.forEach(row => {

        const treino =
            Number(
                row.querySelector(".skill-train").value
            ) || 0;

        const bonus =
            Number(
                row.querySelector(".skill-bonus").value
            ) || 0;

        const total =
            treino + bonus;

        row.querySelector(".skill-total")
        .innerText = `+${total}`;

    });

}

document.querySelectorAll(
    ".skill-train, .skill-bonus"
)
.forEach(input => {

    input.addEventListener(
        "input",
        updateSkills
    );

});

updateSkills();

// ======================================
// PEGAR ATRIBUTO
// ======================================

function getAttributeValue(attr){

    if(attr.includes("FOR")){

        return Number(
            document.getElementById("forca").value
        ) || 1;

    }

    if(attr.includes("AGI")){

        return Number(
            document.getElementById("agilidade").value
        ) || 1;

    }

    if(attr.includes("INT")){

        return Number(
            document.getElementById("intelecto").value
        ) || 1;

    }

    if(attr.includes("VIG")){

        return Number(
            document.getElementById("vigor").value
        ) || 1;

    }

    if(attr.includes("PRE")){

        return Number(
            document.getElementById("presenca").value
        ) || 1;

    }

    return 1;

}

// ======================================
// ROLAR PERÍCIA
// ======================================

function rollSkill(row){

    const attr =
        row.querySelector(".skill-attr").innerText;

    const atributo =
        getAttributeValue(attr);

    const treino =
        Number(
            row.querySelector(".skill-train").value
        ) || 0;

    const bonus =
        Number(
            row.querySelector(".skill-bonus").value
        ) || 0;

    let resultados = [];

    for(let i = 0; i < atributo; i++){

        resultados.push(randomDice(20));

    }

    const maior =
        Math.max(...resultados);

    const total =
        maior + treino + bonus;

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

    skill.addEventListener("click", function(e){

        if(e.target.tagName === "INPUT") return;

        rollSkill(this);

    });

});

// ======================================
// REMOVER CARD
// ======================================

function removeCard(button){

    const card =
        button.closest(
            ".ability-card, .inventory-card, .assimilation-card"
        );

    if(card){

        card.remove();

    }

}

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

function addAbility(){

    let html = "";

    habilidades.forEach(habilidade => {

        html += `

            <div
                class="assimilation-option"
                onclick="selectAbility('${habilidade.nome}')"
            >

                <div>

                    <h3>${habilidade.nome}</h3>

                    <span>
                        ${habilidade.custo} ${habilidade.tipo}
                    </span>

                </div>

            </div>

        `;

    });

    const menu =
        document.createElement("div");

    menu.classList.add("assimilation-menu");

    menu.innerHTML = `

        <div class="assimilation-menu-content">

            <div class="menu-header">

                <h2>HABILIDADES</h2>

                <button onclick="closeMenu()">
                    X
                </button>

            </div>

            ${html}

        </div>

    `;

    document.body.appendChild(menu);

}

function selectAbility(nome){

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
            Custo:
            ${habilidade.custo}
            ${habilidade.tipo}
        </span>

    `;

    document.getElementById("abilitiesList")
    .appendChild(card);

    closeMenu();

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
        descricao: "Recebe ação extra temporária."
    }

];

function openAssimilationMenu(){

    let html = "";

    assimilations.forEach(a => {

        html += `

            <div
                class="assimilation-option"
                onclick="selectAssimilation('${a.nome}')"
            >

                <div>

                    <h3>${a.nome}</h3>

                    <span>${a.elemento}</span>

                </div>

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

                <button onclick="closeMenu()">
                    X
                </button>

            </div>

            ${html}

        </div>

    `;

    document.body.appendChild(menu);

}

function selectAssimilation(nome){

    const assimilation =
        assimilations.find(a => a.nome === nome);

    if(!assimilation) return;

    const card =
        document.createElement("div");

    card.classList.add("assimilation-card");

    card.innerHTML = `

        <div class="assimilation-header">

            <div>

                <h3>
                    ${assimilation.nome}
                </h3>

                <div class="assimilation-element">
                    ${assimilation.elemento}
                </div>

            </div>

            <button onclick="removeCard(this)">
                X
            </button>

        </div>

        <div class="assimilation-description">
            ${assimilation.descricao}
        </div>

        <div class="assimilation-cost">
            Custo:
            ${assimilation.custo} PV
        </div>

    `;

    document.getElementById("assimilationList")
    .appendChild(card);

    closeMenu();

}

// ======================================
// FECHAR MENU
// ======================================

function closeMenu(){

    const menu =
        document.querySelector(".assimilation-menu");

    if(menu){

        menu.remove();

    }

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
        descricao: "Cura PV",
        ep: 2,
        categoria: "Consumível",
        usos: 5
    }

];

// ======================================
// MODAL INVENTÁRIO
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

const itemSearch =
    document.getElementById("itemSearch");

if(itemSearch){

    itemSearch.addEventListener("input", function(){

        renderModalItems(this.value);

    });

}

// ======================================
// ITEM INVENTÁRIO
// ======================================

function createInventoryCard(item){

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

        <div class="mod-area">

            <h4>Modificações</h4>

            <div class="mods-list">

            </div>

            <button
                class="mini-add-btn"
                onclick="addModification(this)"
            >
                +
            </button>

        </div>

    `;

    document.getElementById("inventoryList")
    .appendChild(card);

}
// ======================================
// MODIFICAÇÕES
// ======================================

const modifications = [

    "Mira Laser",
    "Silenciador",
    "Punho Reforçado",
    "Coronha Tática",
    "Lâmina Serrilhada",
    "Catalisador",
    "Proteção Ritualística"

];

function addModification(button){

    const existente =
        button.parentElement.querySelector(".mods-search");

    // evita abrir duas pesquisas
    if(existente) return;

    const searchBox =
        document.createElement("div");

    searchBox.classList.add("mods-search");

    searchBox.innerHTML = `

        <input
            type="text"
            class="mods-input"
            placeholder="Pesquisar modificação..."
        >

        <div class="mods-results"></div>

    `;

    button.parentElement.appendChild(searchBox);

    const input =
        searchBox.querySelector(".mods-input");

    const results =
        searchBox.querySelector(".mods-results");

    function renderMods(search = ""){

        results.innerHTML = "";

        modifications
        .filter(mod =>
            mod.toLowerCase()
            .includes(search.toLowerCase())
        )
        .forEach(mod => {

            const item =
                document.createElement("div");

            item.classList.add("mod-result");

            item.innerText = mod;

            item.onclick = () => {

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

                searchBox.remove();

            };

            results.appendChild(item);

        });

    }

    input.addEventListener("input", function(){

        renderMods(this.value);

    });

    renderMods();

}

// ======================================
// CONDIÇÕES
// ======================================

const condicoes = [

    {
        nome:"Sangramento",
        dano:"1d6"
    },

    {
        nome:"Chamas",
        dano:"2d6"
    },

    {
        nome:"Envenenamento",
        dano:"2d4"
    },

    {
        nome:"Paralisia",
        descricao:"Acerto Garantido"
    },

    {
        nome:"Paralisia Total",
        descricao:"Acerto garantido+"
    },

    {
        nome:"Enjoado",
        descricao:"-3 em testes físicos"
    },

    {
        nome:"Morrendo",
        descricao:"Não possui PA"
    },

    {
        nome:"Enfraquecido",
        descricao:"-5 em testes de Força, -10 no PV máximo"
    },

    {
        nome:"Lentidão",
        descricao:"-5 em testes de Agilidade, -3m de deslocamento"
    },

    {
        nome:"Cansado",
        descricao:"Habilidades custam o dobro"
    },

    {
        nome:"Controlado",
        descricao:"Entrega seus PA para o conjurador"
    },

    {
        nome:"Cego",
        descricao:"-10 em Percepção, -10 em ataques à distância"
    },

    {
        nome:"Surdo",
        descricao:"-10 em Percepção"
    },

    {
        nome:"Traumatizado",
        descricao:"-5 em testes de Vontade, -8 no PD máximo"
    },

    {
        nome:"Penumbra",
        descricao:"-5 em Percepção, -3 em Reflexos"
    },

    {
        nome:"Vulnerável",
        descricao:"Sofre o dobro de dano bônus"
    },

    {
        nome:"Desprevenido",
        descricao:"-3 na Defesa, Não pode usar reações"
    },

    {
        nome:"Confuso",
        descricao:"Move-se aleatoriamente, Consome 1 PA por rodada"
    },

    {
        nome:"Caído",
        dano:null
    }

];

function addCondition(){

    let html = "";

    condicoes.forEach(condicao => {

        html += `

            <div
                class="assimilation-option"
                onclick="selectCondition('${condicao.nome}')"
            >

                <h3>${condicao.nome}</h3>

            </div>

        `;

    });

    const menu =
        document.createElement("div");

    menu.classList.add("assimilation-menu");

    menu.innerHTML = `

        <div class="assimilation-menu-content">

            <div class="menu-header">

                <h2>CONDIÇÕES</h2>

                <button onclick="closeMenu()">
                    X
                </button>

            </div>

            <input
                type="text"
                id="conditionSearch"
                placeholder="Pesquisar condição..."
            >

            <div
                class="assimilation-options"
                id="conditionOptions"
            >

                ${html}

            </div>

        </div>

    `;

    document.body.appendChild(menu);

    document.getElementById("conditionSearch")
    .addEventListener("input", function(){

        const value =
            this.value.toLowerCase();

        document.querySelectorAll(
            "#conditionOptions .assimilation-option"
        )
        .forEach(option => {

            option.style.display =
                option.innerText
                .toLowerCase()
                .includes(value)
                ? "flex"
                : "none";

        });

    });

}

function removeCondition(button){

    button.parentElement.remove();

    recalculateConditions();

}


// ======================================
// BOTÃO CONDIÇÃO
// ======================================

const conditionBtn =
    document.getElementById("conditionBtn");

if(conditionBtn){

    conditionBtn.addEventListener(
        "click",
        addCondition
    );

}

// ======================================
// SAVE / LOAD
// ======================================

function saveFicha(){

    const data = {

        html:
            document.getElementById("inventoryList").innerHTML,

        abilities:
            document.getElementById("abilitiesList").innerHTML,

        assimilations:
            document.getElementById("assimilationList").innerHTML,

        conditions:
            document.getElementById("conditionsList").innerHTML

    };

    localStorage.setItem(
        "fichaParanormal",
        JSON.stringify(data)
    );

}

function loadFicha(){

    const data =
        JSON.parse(
            localStorage.getItem("fichaParanormal")
        );

    if(!data) return;

    if(data.html){

        document.getElementById("inventoryList")
        .innerHTML = data.html;

    }

    if(data.abilities){

        document.getElementById("abilitiesList")
        .innerHTML = data.abilities;

    }

    if(data.assimilations){

        document.getElementById("assimilationList")
        .innerHTML = data.assimilations;

    }

    if(data.conditions){

        document.getElementById("conditionsList")
        .innerHTML = data.conditions;

    }

}

// ======================================
// AUTO SAVE
// ======================================

document.addEventListener("input", () => {

    saveFicha();

});

document.addEventListener("click", () => {

    setTimeout(saveFicha, 100);

});

// ======================================
// LOAD
// ======================================

loadFicha();

// ======================================
// FECHAR MODAL AO CLICAR FORA
// ======================================

const inventoryModal =
    document.getElementById("inventoryModal");

if(inventoryModal){

    inventoryModal.addEventListener("click", function(e){

        if(e.target === inventoryModal){

            closeInventoryModal();

        }

    });

}

// ======================================
// ENTER NOS INPUTS
// ======================================

document.addEventListener("keydown", function(e){

    if(e.key === "Enter"){

        if(
            e.target.tagName === "INPUT"
        ){

            e.preventDefault();

            e.target.blur();

        }

    }

});

// ======================================
// DEBUG
// ======================================

console.log("Ficha carregada com sucesso.");

// ======================================
// REAPLICAR EVENTOS APÓS LOAD
// ======================================

function rebindEvents(){

    // =========================
    // REMOVER CONDIÇÕES
    // =========================

    document.querySelectorAll(".condition-card button")
    .forEach(button => {

        button.onclick = function(){

            this.parentElement.remove();

            saveFicha();

        };

    });

    // =========================
    // REMOVER MODS
    // =========================

    document.querySelectorAll(".mod-tag button")
    .forEach(button => {

        button.onclick = function(){

            this.parentElement.remove();

            saveFicha();

        };

    });

    // =========================
    // REMOVER CARDS
    // =========================

    document.querySelectorAll(
        ".ability-header button"
    )
    .forEach(button => {

        button.onclick = function(){

            removeCard(this);

        };

    });

    // =========================
    // ROLAR PERÍCIAS
    // =========================

    document.querySelectorAll(".clickable-skill")
    .forEach(skill => {

        skill.onclick = function(e){

            if(
                e.target.tagName === "INPUT"
            ) return;

            rollSkill(this);

        };

    });

}

// ======================================
// EXECUTA APÓS LOAD
// ======================================

rebindEvents();

// ======================================
// OBSERVER
// ======================================

const observer = new MutationObserver(() => {

    rebindEvents();

});

observer.observe(document.body, {

    childList: true,
    subtree: true

});

// ======================================
// FIM
// ======================================

// ======================================
// MENU MODIFICAÇÕES
// ======================================

function openModificationMenu(button){

    let html = "";

    modifications.forEach(mod => {

        html += `

            <div
                class="assimilation-option"
                onclick="selectModification(
                    '${mod}',
                    this
                )"
            >

                <h3>${mod}</h3>

            </div>

        `;

    });

    const menu =
        document.createElement("div");

    menu.classList.add("assimilation-menu");

    menu.innerHTML = `

        <div class="assimilation-menu-content">

            <div class="menu-header">

                <h2>MODIFICAÇÕES</h2>

                <button onclick="closeMenu()">
                    X
                </button>

            </div>

            <input
                type="text"
                id="modSearch"
                placeholder="Pesquisar modificação..."
            >

            <div
                class="assimilation-options"
                id="modOptions"
            >

                ${html}

            </div>

        </div>

    `;

    document.body.appendChild(menu);

    menu.dataset.targetCard =
        button.closest(".inventory-card")
        .querySelector(".mods-list");

    document.getElementById("modSearch")
    .addEventListener("input", function(){

        const value =
            this.value.toLowerCase();

        document.querySelectorAll(
            "#modOptions .assimilation-option"
        )
        .forEach(option => {

            option.style.display =
                option.innerText
                .toLowerCase()
                .includes(value)
                ? "flex"
                : "none";

        });

    });

}

function selectModification(nome){

    const target =
        document.querySelector(".assimilation-menu")
        .dataset.targetCard;

    const modsList =
        document.querySelector(target);

    const tag =
        document.createElement("div");

    tag.classList.add("mod-tag");

    tag.innerHTML = `

        ${nome}

        <button onclick="this.parentElement.remove()">
            X
        </button>

    `;

    modsList.appendChild(tag);

    closeMenu();

}

// ======================================
// MENU CONDIÇÕES
// ======================================

function openConditionMenu(){

    let html = "";

    condicoes.forEach(condicao => {

        html += `

            <div
                class="assimilation-option"
                onclick="selectCondition('${condicao.nome}')"
            >

                <h3>${condicao.nome}</h3>

            </div>

        `;

    });

    const menu =
        document.createElement("div");

    menu.classList.add("assimilation-menu");

    menu.innerHTML = `

        <div class="assimilation-menu-content">

            <div class="menu-header">

                <h2>CONDIÇÕES</h2>

                <button onclick="closeMenu()">
                    X
                </button>

            </div>

            <input
                type="text"
                id="conditionSearch"
                placeholder="Pesquisar condição..."
            >

            <div
                class="assimilation-options"
                id="conditionOptions"
            >

                ${html}

            </div>

        </div>

    `;

    document.body.appendChild(menu);

    document.getElementById("conditionSearch")
    .addEventListener("input", function(){

        const value =
            this.value.toLowerCase();

        document.querySelectorAll(
            "#conditionOptions .assimilation-option"
        )
        .forEach(option => {

            option.style.display =
                option.innerText
                .toLowerCase()
                .includes(value)
                ? "flex"
                : "none";

        });

    });

}

function selectCondition(nome){

    const condicao =
        condicoes.find(c =>
            c.nome === nome
            
        );

        recalculateConditions();

        

    // =========================
    // SANGRAMENTO STACK
    // =========================

    if(nome === "Sangramento"){

        const existente =
            [...document.querySelectorAll(".condition-card")]
            .find(card =>
                card.querySelector("span")
                .innerText === "Sangramento"
            );

        if(existente){

            const damageEl =
                existente.querySelector(".condition-damage");

            let texto =
                damageEl.innerText;

            let partes =
                texto.split("d");

            let quantidade =
                Number(partes[0]);

            quantidade++;

            damageEl.innerText =
                `${quantidade}d6`;

            closeMenu();

            saveFicha();

            return;

        }

    }

    // =========================
    // ENVENENAMENTO STACK
    // =========================

    if(nome === "Envenenamento"){

        const existente =
            [...document.querySelectorAll(".condition-card")]
            .find(card =>
                card.querySelector("span")
                .innerText === "ENvenenamento"
            );

        if(existente){

            const damageEl =
                existente.querySelector(".condition-damage");

            let texto =
                damageEl.innerText;

            let partes =
                texto.split("d");

            let quantidade =
                Number(partes[0]);

            quantidade++;

            damageEl.innerText =
                `${quantidade}d4`;

            closeMenu();

            saveFicha();

            return;

        }

    }

    // =========================
    // BLOQUEIA DUPLICADAS
    // =========================

    const jaExiste =
        [...document.querySelectorAll(".condition-card span")]
        .some(span =>
            span.innerText === nome
        );

    if(
        jaExiste &&
        nome !== "Sangramento"
    ){

        alert("Essa condição já está ativa.");

        return;

    }

     // =========================
    // BLOQUEIA DUPLICADAS
    // =========================

    const jaExiste =
        [...document.querySelectorAll(".condition-card span")]
        .some(span =>
            span.innerText === nome
        );

    if(
        jaExiste &&
        nome !== "Envenenamento"
    ){

        alert("Essa condição já está ativa.");

        return;

    }

    // =========================
    // CRIA CARD
    // =========================

    const card =
        document.createElement("div");

    card.classList.add("condition-card");

    card.innerHTML = `

        <span>${nome}</span>

        <small class="condition-damage">
            ${condicao.dano || "Sem dano"}
        </small>

        <button onclick="removeCondition(this)">
            X
        </button>

    `;

    document.getElementById("conditionsList")
    .appendChild(card);

    closeMenu();

    saveFicha();

}

// ======================================
// TROCA BOTÕES
// ======================================

document.getElementById("conditionBtn")
.onclick = openConditionMenu;



function removeCondition(button){

    button.parentElement.remove();

    saveFicha();

}

function closeMenu(){

    const menu =
        document.querySelector(".assimilation-menu");

    if(menu){

        menu.remove();

    }

}

function nextTurn(){

    // =====================
    // PEGA PA MÁXIMO
    // =====================

    const paTexto =
        document.getElementById("paMaxText")
        .innerText;

    const paMax =
        Number(
            paTexto.replace(/\D/g, "")
        );

    // =====================
    // RESET PA
    // =====================

    document.getElementById("paAtual").value =
        paMax;

    // =====================
    // CONDIÇÕES
    // =====================

    let danoTotal = 0;

    document.querySelectorAll(".condition-card span")
    .forEach(condicaoEl => {

        const nome =
            condicaoEl.innerText;

        const card =
    condicaoEl.closest(".condition-card");

const danoTexto =
    card.querySelector(".condition-damage")
    .innerText;

if(
    danoTexto &&
    danoTexto.includes("d")
){

            const formula =
    danoTexto;

            const partes =
                formula.split("d");

            const quantidade =
                Number(partes[0]);

            const tipo =
                Number(partes[1]);

            for(let i = 0; i < quantidade; i++){

                danoTotal +=
                    randomDice(tipo);

            }

        }

    });

    // =====================
    // APLICA DANO
    // =====================

    const pvAtual =
        document.getElementById("pvAtual");

    let pv =
        Number(pvAtual.value) || 0;

    pv -= danoTotal;

    if(pv < 0){

        pv = 0;

    }

    pvAtual.value = pv;

    // =====================
    // RESULTADO
    // =====================

    document.getElementById("diceResult")
    .innerHTML = `

        <div class="dice-big">
            ${danoTotal}
        </div>

        <div class="dice-total">
            Dano das condições
        </div>

    `;

    saveFicha();

}

