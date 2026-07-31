// ======================================
// CONDITIONS.JS
// ======================================

// ======================================
// BANCO
// ======================================

const conditions=[

{
    nome:"Sangramento",
    descricao:"Perde PV no início da rodada."
},

{
    nome:"Queimando",
    descricao:"Recebe dano de Energia."
},

{
    nome:"Envenenado",
    descricao:"Recebe dano contínuo."
},

{
    nome:"Atordoado",
    descricao:"Perde 1 PA."
},

{
    nome:"Paralisado",
    descricao:"Não pode agir."
},

{
    nome:"Cego",
    descricao:"-5 em testes de ataque."
},

{
    nome:"Surdo",
    descricao:"Não pode ouvir."
},

{
    nome:"Assustado",
    descricao:"-2 em testes."
},

{
    nome:"Insano",
    descricao:"Age aleatoriamente."
}

];


// ======================================
// CONDIÇÕES ATIVAS
// ======================================

let activeConditions=[];

// ======================================
// MENU
// ======================================

function openConditionMenu(){

    document

    .getElementById(

        "conditionModal"

    )

    .style.display="flex";

    renderConditionMenu();

}

function closeConditionMenu(){

    document

    .getElementById(

        "conditionModal"

    )

    .style.display="none";

}

// ======================================
// MENU
// ======================================

function renderConditionMenu(){

    const list=

    document.getElementById(

        "conditionOptions"

    );

    list.innerHTML="";

    conditions.forEach(data=>{

        const div=

        document.createElement("div");

        div.className=

        "condition-option";

        div.innerHTML=

        `

        <h3>

            ${data.nome}

        </h3>

        <p>

            ${data.descricao}

        </p>

        `;

        div.onclick=function(){

            addCondition(data);

        };

        list.appendChild(div);

    });

}

// ======================================
// ADICIONAR
// ======================================

function addCondition(data){

    activeConditions.push({

        ...data,

        dano:0

    });

    renderConditions();

    closeConditionMenu();

}

// ======================================
// RENDER
// ======================================

function renderConditions(){

    const list=

    document.getElementById(

        "conditionsList"

    );

    list.innerHTML="";

    activeConditions.forEach(condition=>{

        const card=

        document.createElement("div");

        card.className=

        "condition-card";

        card.innerHTML=

        `

        <span>

            ${condition.nome}

        </span>

        <button>

            ✕

        </button>

        `;

        card

        .querySelector("button")

        .onclick=function(){

            removeCondition(condition.nome);

        };

        list.appendChild(card);

    });

}

// ======================================
// REMOVER
// ======================================

function removeCondition(nome){

    activeConditions=

    activeConditions.filter(

        c=>c.nome!==nome

    );

    renderConditions();

}

// ======================================
// PESQUISA
// ======================================

const conditionSearch=

document.getElementById(

    "conditionSearch"

);

if(conditionSearch){

    conditionSearch.oninput=function(){

        const texto=

        this.value.toLowerCase();

        document

        .querySelectorAll(

            ".condition-option"

        )

        .forEach(card=>{

            card.style.display=

            card.innerText

            .toLowerCase()

            .includes(texto)

            ?

            "block"

            :

            "none";

        });

    };

}

// ======================================
// PASSAR RODADA
// ======================================

function processConditions(){

    activeConditions.forEach(condition=>{

        switch(condition.nome){

            case "Sangramento":

                pvAtual.value=

                Math.max(

                    0,

                    Number(pvAtual.value)-2

                );

            break;

        }

    });

}