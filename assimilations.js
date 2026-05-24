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

                <div>

                    <h3>${a.nome}</h3>

                    <span>${a.elemento}</span>

                </div>

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

    const card = document.createElement("div");

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
            Custo: ${assimilation.custo} PV
        </div>

    `;

    document.getElementById("assimilationList")
    .appendChild(card);

    closeMenu();

}

// ======================================
// BOTÃO
// ======================================

const assimilationBtn =
    document.getElementById("assimilationBtn");

if(assimilationBtn){

    assimilationBtn.addEventListener(
        "click",
        openAssimilationMenu
    );

}