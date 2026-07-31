// ======================================
// HABILIDADES
// ======================================

const abilities=[];

// ======================================
// HABILIDADES DO PERSONAGEM
// ======================================

let playerAbilities=[];

// ======================================
// CARD
// ======================================

function createAbilityCard(data){

    const card=document.createElement("div");

    card.className="ability-card";

    card.innerHTML=`

    <div class="ability-header">

        <h3>${data.nome}</h3>

        <button onclick="removeAbility(this)">

            ✕

        </button>

    </div>

    <p>

        ${data.descricao}

    </p>

    <span>

        ${data.custo}

    </span>

    `;

    return card;

}

// ======================================
// ADICIONAR
// ======================================

function addAbility(data){

    if(

        playerAbilities.some(

            h=>h.nome===data.nome

        )

    ){

        return;

    }

    playerAbilities.push(data);

    renderAbilities();

}

// ======================================
// RENDER
// ======================================

function renderAbilities(){

    const list=

    document.getElementById(

        "abilitiesList"

    );

    list.innerHTML="";

    playerAbilities.forEach(data=>{

        list.appendChild(

            createAbilityCard(data)

        );

    });

}

// ======================================
// REMOVER
// ======================================

function removeAbility(button){

    const card=

    button.closest(

        ".ability-card"

    );

    const nome=

    card.querySelector("h3").innerText;

    playerAbilities=

    playerAbilities.filter(

        h=>h.nome!==nome

    );

    renderAbilities();

}

// ======================================
// MENU
// ======================================

function openAbilityMenu(){

    document

    .getElementById(

        "abilityMenu"

    )

    .style.display="flex";

}

function closeAbilityMenu(){

    document

    .getElementById(

        "abilityMenu"

    )

    .style.display="none";

}

// ======================================
// BOTÃO
// ======================================

const abilityButton=

document.getElementById(

    "abilityBtn"

);

if(abilityButton){

    abilityButton.onclick=

    openAbilityMenu;

}