// ======================================
// CONDIÇÕES
// ======================================

const condicoes = [

    {
        nome:"Sangramento",
        dano:"1d6"
    },

    {
        nome:"Envenenamento",
        dano:"2d4"
    },

    {
        nome:"Paralisia",
        dano:null
    },

    {
        nome:"Paralisia Total",
        dano:null
    },

    {
        nome:"Caído",
        dano:null
    },

    {
        nome:"Enjoado",
        dano:null
    },

    {
        nome:"Morrendo",
        dano:null
    },

    {
        nome:"Enfraquecido",
        dano:null
    },

    {
        nome:"Lentidão",
        dano:null
    },

    {
        nome:"Cansado",
        dano:null
    },

    {
        nome:"Controlado",
        dano:null
    },

    {
        nome:"Cego",
        dano:null
    },

    {
        nome:"Surdo",
        dano:null
    },

    {
        nome:"Traumatizado",
        dano:null
    },

    {
        nome:"Penumbra",
        dano:null
    },

    {
        nome:"Vulnerável",
        dano:null
    },

    {
        nome:"Desprevenido",
        dano:null
    },

    {
        nome:"Confuso",
        dano:null
    }

];

// ======================================
// MENU
// ======================================

function openConditionMenu(){

    closeMenu();

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

    const menu = document.createElement("div");

    menu.classList.add("assimilation-menu");

    menu.innerHTML = `

        <div class="assimilation-menu-content">

            <div class="menu-header">

                <h2>CONDIÇÕES</h2>

                <button onclick="closeMenu()">
                    X
                </button>

            </div>

            ${html}

        </div>

    `;

    document.body.appendChild(menu);

}

// ======================================
// SELECIONAR CONDIÇÃO
// ======================================

function selectCondition(nome){

    const condicao =
        condicoes.find(c => c.nome === nome);

    if(!condicao) return;

    // ======================================
    // STACK SANGRAMENTO
    // ======================================

    if(nome === "Sangramento"){

        const existente = [
            ...document.querySelectorAll(".condition-card")
        ].find(card =>
            card.querySelector(".condition-name")
            .innerText === "Sangramento"
        );

        if(existente){

            const damageEl =
                existente.querySelector(
                    ".condition-damage"
                );

            let texto =
                damageEl.innerText;

            let partes =
                texto.split("d");

            let quantidade =
                Number(partes[0]);

            let tipo =
                Number(partes[1]);

            quantidade++;

            damageEl.innerText =
                `${quantidade}d${tipo}`;

            saveFicha();

            closeMenu();

            return;

        }

    }

    // ======================================
    // STACK ENVENENAMENTO
    // ======================================

    if(nome === "Envenenamento"){

        const existente = [
            ...document.querySelectorAll(".condition-card")
        ].find(card =>
            card.querySelector(".condition-name")
            .innerText === "Envenenamento"
        );

        if(existente){

            const damageEl =
                existente.querySelector(
                    ".condition-damage"
                );

            let texto =
                damageEl.innerText;

            let partes =
                texto.split("d");

            let quantidade =
                Number(partes[0]);

            let tipo =
                Number(partes[1]);

            quantidade += 2;

            damageEl.innerText =
                `${quantidade}d${tipo}`;

            saveFicha();

            closeMenu();

            return;

        }

    }

    // ======================================
    // BLOQUEAR DUPLICADAS
    // ======================================

    const jaExiste = [
        ...document.querySelectorAll(
            ".condition-name"
        )
    ].some(span =>
        span.innerText === nome
    );

    if(jaExiste){

        alert("Essa condição já está ativa.");

        return;

    }

    // ======================================
// CRIAR CARD
// ======================================

const card = document.createElement("div");

card.classList.add("condition-card");

// IMPORTANTE
card.dataset.name = condicao.nome;

card.innerHTML = `

    <span class="condition-name">
        ${condicao.nome}
    </span>

    <small class="condition-damage">
        ${condicao.dano || "Sem dano"}
    </small>

    <button onclick="removeCondition(this)">
        X
    </button>

`;

document.getElementById("conditionsList")
.appendChild(card);

// IMPORTANTE
updateConditionEffects();

closeMenu();

saveFicha();

}

// ======================================
// REMOVER
// ======================================

function removeCondition(button){

    button.parentElement.remove();

    saveFicha();

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
function updateConditionEffects(){

    // =========================
    // LIMPA PENALIDADES
    // =========================

    document.querySelectorAll(".skill-penalty")
    .forEach(input => {

        input.value = 0;

    });

    // =========================
    // CONDIÇÕES
    // =========================

    const conditions =
        document.querySelectorAll(".condition-card");

    conditions.forEach(card => {

        const nome =
            card.dataset.name;

        // =====================================
        // ENFRAQUECIDO
        // =====================================

        if(nome === "Enfraquecido"){

            applyPenalty(
                ["Atletismo", "Luta"],
                -5
            );

        }

        // =====================================
        // LENTIDÃO
        // =====================================

        if(nome === "Lentidão"){

            applyPenalty(
                [
                    "Acrobacia",
                    "Furtividade",
                    "Reflexos",
                    "Pilotagem",
                    "Pontaria",
                    "Crime",
                    "Iniciativa"
                ],
                -5
            );

        }

        // =====================================
        // ENJOADO
        // =====================================

        if(nome === "Enjoado"){

            applyPenalty(
                [
                    "Atletismo",
                    "Luta",
                    "Acrobacia",
                    "Furtividade"
                ],
                -3
            );

        }

        // =====================================
        // TRAUMATIZADO
        // =====================================

        if(nome === "Traumatizado"){

            applyPenalty(
                ["Vontade"],
                -5
            );

        }

        // =====================================
        // PENUMBRA
        // =====================================

        if(nome === "Penumbra"){

            applyPenalty(
                ["Percepção"],
                -5
            );

            applyPenalty(
                ["Reflexos"],
                -3
            );

        }

        // =====================================
        // CEGO
        // =====================================

        if(nome === "Cego"){

            applyPenalty(
                [
                    "Percepção",
                    "Pontaria"
                ],
                -10
            );

        }

        // =====================================
        // SURDO
        // =====================================

        if(nome === "Surdo"){

            applyPenalty(
                ["Percepção"],
                -10
            );

        }

        // =====================================
        // ENVENENAMENTO
        // =====================================

        if(nome === "Envenenamento"){

            applyPenalty(
                ["Fortitude"],
                -5
            );

        }

    });

    // =========================
    // RECALCULA
    // =========================

    updateSkills();

}

function applyPenalty(skills, value){

    document.querySelectorAll(".skill-row")
    .forEach(row => {

        const skillName =
            row.querySelector(".skill-name")
            .innerText;

        if(skills.includes(skillName)){

            const penaltyInput =
                row.querySelector(".skill-penalty");

            penaltyInput.value =
                Number(penaltyInput.value || 0)
                + value;

        }

    });

}