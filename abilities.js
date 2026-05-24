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

// ======================================
// REMOVER CARD
// ======================================

function removeCard(button){

    const card = button.closest(
        ".ability-card, .inventory-card, .assimilation-card"
    );

    if(card){

        card.remove();

    }

}

// ======================================
// MENU
// ======================================

function closeMenu(){

    const menu =
        document.querySelector(".assimilation-menu");

    if(menu){

        menu.remove();

    }

}

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

    const menu = document.createElement("div");

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

// ======================================
// SELECIONAR
// ======================================

function selectAbility(nome){

    const habilidade =
        habilidades.find(h => h.nome === nome);

    if(!habilidade) return;

    const card = document.createElement("div");

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

    closeMenu();

}

// ======================================
// BOTÃO
// ======================================

const abilityBtn =
    document.getElementById("abilityBtn");

if(abilityBtn){

    abilityBtn.addEventListener(
        "click",
        addAbility
    );

}