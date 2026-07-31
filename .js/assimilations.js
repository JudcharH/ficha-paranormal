// ======================================
// ASSIMILAÇÕES
// ======================================

const assimilations=[

{

    nome:"Presas",

    elemento:"Sangue",

    custo:5,

    tipo:"Ativação • 1 PA",

    descricao:
    "Cria garras e presas monstruosas. Enquanto estiverem ativas, seus ataques desarmados causam +1 dado de dano."

},

{

    nome:"Lâmina de Sangue",

    elemento:"Sangue",

    custo:5,

    tipo:"Ativação • 1 PA",

    descricao:
    "Cria uma espada formada por sangue coagulado que causa 2d8 + FOR de dano de Sangue."

},

{

    nome:"Células Regenerativas",

    elemento:"Sangue",

    custo:5,

    tipo:"Passiva",

    descricao:
    "Recupera 2d6 PV no início de cada rodada."

},

{

    nome:"Espinhoso",

    elemento:"Sangue",

    custo:5,

    tipo:"Ativação • 1 PA",

    descricao:
    "Enquanto estiver ativo, sempre que sofrer um ataque corpo a corpo, o atacante recebe 2d6 de dano de Sangue."

}

];

// ======================================
// CRIAR CARD
// ======================================

function createAssimilationCard(data){

    const card=document.createElement("div");

    card.className="assimilation-card";

    card.innerHTML=`

    <div class="assimilation-header">

        <div>

            <h3>${data.nome}</h3>

            <span class="assimilation-element">

                🩸 ${data.elemento}

            </span>

        </div>

        <button onclick="removeAssimilation(this)">

            ✕

        </button>

    </div>

    <div class="assimilation-cost">

        Custo: ${data.custo} PV

    </div>

    <div class="assimilation-stage">

        ${data.tipo}

    </div>

    <div class="assimilation-description">

        ${data.descricao}

    </div>

    `;

    return card;

}

// ======================================
// ASSIMILAÇÕES ESCOLHIDAS
// ======================================

let playerAssimilations=[];

// ======================================
// MENU
// ======================================

function openAssimilationMenu(){

    document
    .getElementById("assimilationMenu")
    .style.display="flex";

    updateAssimilationMenu();

}

function closeAssimilationMenu(){

    document
    .getElementById("assimilationMenu")
    .style.display="none";

}

// ======================================
// MENU
// ======================================

function updateAssimilationMenu(){

    const list=

    document.getElementById(

        "assimilationOptions"

    );

    list.innerHTML="";

    assimilations.forEach(data=>{

        const card=

        document.createElement("div");

        card.className=

        "assimilation-option";

        card.innerHTML=

        `

        <div>

            <h3>${data.nome}</h3>

            <span>

                ${data.elemento}

            </span>

        </div>

        <small>

            ${data.custo} PV

        </small>

        `;

        card.onclick=function(){

            addAssimilation(data);

        };

        list.appendChild(card);

    });

}

// ======================================
// ADICIONAR
// ======================================

function addAssimilation(data){

    if(

        playerAssimilations.some(

            a=>a.nome===data.nome

        )

    ){

        return;

    }

    playerAssimilations.push(data);

    renderAssimilations();

    closeAssimilationMenu();

}

// ======================================
// RENDER
// ======================================

function renderAssimilations(){

    const list=

    document.getElementById(

        "assimilationList"

    );

    list.innerHTML="";

    playerAssimilations.forEach(data=>{

        list.appendChild(

            createAssimilationCard(data)

        );

    });

}

// ======================================
// REMOVER
// ======================================

function removeAssimilation(button){

    const card=

    button.closest(

        ".assimilation-card"

    );

    const nome=

    card.querySelector("h3").innerText;

    playerAssimilations=

    playerAssimilations.filter(

        a=>a.nome!==nome

    );

    renderAssimilations();

}

// ======================================
// PESQUISA
// ======================================

const search=

document.getElementById(

    "assimilationSearch"

);

if(search){

    search.oninput=function(){

        const texto=

        this.value.toLowerCase();

        document

        .querySelectorAll(

            ".assimilation-option"

        )

        .forEach(card=>{

            card.style.display=

            card.innerText

            .toLowerCase()

            .includes(texto)

            ?

            "flex"

            :

            "none";

        });

    };

}

// ======================================
// BOTÃO +
// ======================================

const btn=

document.getElementById(

    "assimilationBtn"

);

if(btn){

    btn.onclick=

    openAssimilationMenu;

}