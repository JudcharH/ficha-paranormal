const assimilations = [

    {
        nome: "Sede Carmesim",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "Sempre que causar dano recupera igual VIG em PV"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 8,
                descricao:
                "Recupera VIG x2 PV e +3 contra sangramento"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 12,
                descricao:
                "Recupera VIG x4 PV e +5 contra sangramento"
            }

        ]
    },

    {
        nome: "Alteração Sanguínea",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "Assume outra aparência e recebe +5 sociais"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 8,
                descricao:
                "Cria clone de sangue"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 12,
                descricao:
                "Cria receptáculo permanente"
            }

        ]
    },

    {
        nome: "Presas",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "Após 2 ataques causa 2d4+1"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 8,
                descricao:
                "Dano aumenta para 3d4+2"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 12,
                descricao:
                "Dano aumenta para 4d4+3"
            }

        ]
    }

];

// ======================================
// MENU
// ======================================

function openAssimilationMenu(){

    let html = "";

    assimilations.forEach(a => {

        html += `

            <div
                class="assimilation-option"
                onclick="selectAssimilation('${a.nome}')"
            >

                <h3>${a.nome}</h3>

            </div>

        `;

    });

    const menu = document.createElement("div");

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

// ======================================
// SELECIONAR
// ======================================

function selectAssimilation(nome){

    const assimilation =
        assimilations.find(a => a.nome === nome);

    if(!assimilation) return;

    createAssimilationCard(assimilation);

    closeMenu();

}

// ======================================
// CRIAR CARD
// ======================================

function createAssimilationCard(assimilation){

    const evo = assimilation.evolucoes[0];

    const card = document.createElement("div");

    card.classList.add("assimilation-card");

    card.dataset.nome = assimilation.nome;
    card.dataset.level = 0;

    card.innerHTML = `

        <div class="assimilation-header">

            <div>

                <h3>
                    ${assimilation.nome}
                </h3>

                <small class="assimilation-level">
                    ${evo.nivel}
                </small>

            </div>

            <button onclick="removeAssimilation(this)">
                X
            </button>

        </div>

        <div class="assimilation-description">

            ${evo.descricao}

        </div>

        <div class="assimilation-cost">

            Custo:
            <span class="assimilation-pv">
                ${evo.custo}
            </span>
            PV

        </div>

    `;

    card.addEventListener("click", function(e){

        if(e.target.tagName === "BUTTON") return;

        evolveAssimilation(this);

    });

    document.getElementById("assimilationList")
    .appendChild(card);

    

}

// ======================================
// EVOLUIR
// ======================================

function evolveAssimilation(card){

    let level =
        Number(card.dataset.level);

    const nome =
        card.dataset.nome;

    const assimilation =
        assimilations.find(a => a.nome === nome);

    if(!assimilation) return;

    if(level >= 2) return;

    level++;

    card.dataset.level = level;

    const evo =
        assimilation.evolucoes[level];

    card.querySelector(".assimilation-level")
    .innerText = evo.nivel;

    card.querySelector(".assimilation-description")
    .innerText = evo.descricao;

    card.querySelector(".assimilation-pv")
    .innerText = evo.custo;

    

}

atualizarStatus();

// ======================================
// REMOVER
// ======================================

function removeAssimilation(button){

    button.closest(".assimilation-card")
    .remove();

    

}

atualizarStatus();

// ======================================
// APLICAR CUSTO PV
// ======================================

function applyAssimilationCost(){

    const nivel =
        Number(
            document.getElementById("nivel").value
        ) || 1;

    const vigor =
        Number(
            document.getElementById("vigor").value
        ) || 1;

    // =========================
    // PV BASE REAL
    // =========================

    let pvBase =
        (7 + vigor) * nivel;

    // =========================
    // SOMA CUSTOS
    // =========================

    let total = 0;

    document.querySelectorAll(".assimilation-card")
    .forEach(card => {

        total += Number(
            card.querySelector(".assimilation-pv")
            .innerText
        );

    });

    // =========================
    // PV FINAL
    // =========================

    const pvFinal =
        Math.max(1, pvBase - total);

    document.getElementById("pvMax")
    .value = pvFinal;

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
// BOTÃO
// ======================================

document.getElementById("assimilationBtn")
.addEventListener(
    "click",
    openAssimilationMenu
);