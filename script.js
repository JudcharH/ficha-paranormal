// ===============================
// FOTO DO PERSONAGEM
// ===============================

const photoInput = document.getElementById("photoInput");
const photoPreview = document.getElementById("photoPreview");

photoInput.addEventListener("change", function () {

    const file = this.files[0];

    if(file){

        const reader = new FileReader();

        reader.onload = function(e){

            photoPreview.innerHTML = `
                <img src="${e.target.result}">
            `;

        };

        reader.readAsDataURL(file);

    }

});


// ===============================
// ROLAGEM DE DADOS
// ===============================

function rollDice() {

    const quantidade = Number(
        document.getElementById("diceCount").value
    );

    const tipo = Number(
        document.getElementById("diceType").value
    );

    const bonus = Number(
        document.getElementById("diceBonus").value
    );

    let resultados = [];

    for(let i = 0; i < quantidade; i++){

        resultados.push(
            Math.floor(Math.random() * tipo) + 1
        );

    }

    const maior = Math.max(...resultados);

    const total = maior + bonus;

    let critico = "";

    if(tipo === 20 && maior >= 20){

        critico = `
            <div class="critical-text">
                CRÍTICO!
            </div>
        `;

    }

    document.getElementById("diceResult").innerHTML = `

        <div class="dice-rolls">
            ${resultados.join(" • ")}
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


// ===============================
// ROLAGEM POR ATRIBUTO
// ===============================

function rollAttribute(attributeId){

    const atributo = Number(
        document.getElementById(attributeId).value
    );

    document.getElementById("diceCount").value = atributo;

    document.getElementById("diceType").value = 20;

    rollDice();

}
// ===============================
// ATUALIZAÇÃO EM TEMPO REAL
// ===============================

document.querySelectorAll("input").forEach(input => {

    input.addEventListener("input", updateSkills);

});

updateSkills();


// ===============================
// SISTEMA DE HABILIDADES
// ===============================

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
        descricao: "Seu dano corpo a corpo sobe um passo."
    },

    {
        nome: "Casca Grossa",
        custo: 4,
        tipo: "PD",
        descricao: "Recebe +1 PV por nível."
    },

    {
        nome: "Surto de Adrenalina",
        custo: 4,
        tipo: "PD",
        descricao: "Recebe +1 PA temporário."
    }

];


// ===============================
// ADICIONAR HABILIDADE
// ===============================

function addAbility(){

    const nome = prompt("Digite o nome da habilidade:");

    if(!nome) return;

    const habilidade = habilidades.find(h =>
        h.nome.toLowerCase() === nome.toLowerCase()
    );

    if(!habilidade){

        alert("Habilidade não encontrada.");
        return;

    }

    const card = document.createElement("div");

    card.classList.add("ability-card");

    card.innerHTML = `

        <div class="ability-header">

            <h3>${habilidade.nome}</h3>

            <button onclick="removeCard(this)">
                X
            </button>

        </div>

        <p>${habilidade.descricao}</p>

        <span>
            Custo: ${habilidade.custo} ${habilidade.tipo}
        </span>

    `;

    document.getElementById("abilitiesList")
        .appendChild(card);

    descontarCusto(habilidade);

}


// ===============================
// SISTEMA DE ASSIMILAÇÕES
// ===============================

const assimilacoes = [

    {
        nome: "Teleporte Cinético",
        custo: 4,
        tipo: "PV",
        descricao: "Você se teleporta até 6m."
    },

    {
        nome: "Tempestade Viva",
        custo: 4,
        tipo: "PV",
        descricao: "Cria uma tempestade elemental."
    }

];


// ===============================
// ADICIONAR ASSIMILAÇÃO
// ===============================

function addAssimilation(){

    const nome = prompt("Digite o nome da assimilação:");

    if(!nome) return;

    const assimilacao = assimilacoes.find(a =>
        a.nome.toLowerCase() === nome.toLowerCase()
    );

    if(!assimilacao){

        alert("Assimilação não encontrada.");
        return;

    }

    const card = document.createElement("div");

    card.classList.add("ability-card");

    card.innerHTML = `

        <div class="ability-header">

            <h3>${assimilacao.nome}</h3>

            <button onclick="removeCard(this)">
                X
            </button>

        </div>

        <p>${assimilacao.descricao}</p>

        <span>
            Custo: ${assimilacao.custo} ${assimilacao.tipo}
        </span>

    `;

    document.getElementById("assimilationList")
        .appendChild(card);

    descontarCusto(assimilacao);

}


// ===============================
// DESCONTAR CUSTO
// ===============================

function descontarCusto(item){

    if(item.tipo === "PD"){

        const pdMax = document.getElementById("pdMax");

        pdMax.value =
            (Number(pdMax.value) || 0) - item.custo;

    }

    else if(item.tipo === "PV"){

        const pvMax = document.getElementById("pvMax");

        pvMax.value =
            (Number(pvMax.value) || 0) - item.custo;

    }

}


// ===============================
// REMOVER CARD
// ===============================

function removeCard(button){

    button.parentElement.parentElement.remove();

}


// ===============================
// BOTÕES +
// ===============================

document.querySelectorAll(".add-btn")[0]
    .addEventListener("click", addAssimilation);

document.querySelectorAll(".add-btn")[1]
    .addEventListener("click", addAbility);


// ===============================
// INVENTÁRIO
// ===============================

const itens = [

    {
        nome: "Katana",
        descricao: "1d10 + 2 + FOR",
        ep: 3
    },

    {
        nome: "Pistola",
        descricao: "1d8 + AGI",
        ep: 2
    },

    {
        nome: "Proteção Pesada",
        descricao: "+10 Defesa",
        ep: 4
    }

];


// ===============================
// ADICIONAR ITEM
// ===============================

function addItem(){

    const nome = prompt("Digite o nome do item:");

    if(!nome) return;

    const item = itens.find(i =>
        i.nome.toLowerCase() === nome.toLowerCase()
    );

    if(!item){

        alert("Item não encontrado.");
        return;

    }

    const card = document.createElement("div");

    card.classList.add("inventory-card");

    card.innerHTML = `

        <div class="ability-header">

            <h3>${item.nome}</h3>

            <button onclick="removeCard(this)">
                X
            </button>

        </div>

        <p>${item.descricao}</p>

        <span>
            EP: ${item.ep}
        </span>

    `;

    document.getElementById("inventoryList")
        .appendChild(card);

}


// botão inventário

document.querySelectorAll(".add-btn")[2]
    .addEventListener("click", addItem);