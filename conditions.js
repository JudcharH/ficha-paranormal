// ======================================
// CONDIÇÕES
// ======================================

const condicoes = [

    { nome:"Sangramento", dano:"1d6" },
    { nome:"Chamas", dano:"2d6" },
    { nome:"Envenenamento", dano:"2d4" },
    { nome:"Paralisia", dano:null },
    { nome:"Cego", dano:null },
    { nome:"Confuso", dano:null },
    { nome:"Caído", dano:null }

];

// ======================================
// MENU
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

            <div id="conditionOptions">

                ${html}

            </div>

        </div>

    `;

    document.body.appendChild(menu);

}

// ======================================
// SELECIONAR
// ======================================

function selectCondition(nome){

    const condicao =
        condicoes.find(c => c.nome === nome);

    if(!condicao) return;

    const card = document.createElement("div");

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

}

// ======================================
// REMOVER
// ======================================

function removeCondition(button){

    const card =
        button.closest(".condition-card");

    if(card){

        card.remove();

    }

}