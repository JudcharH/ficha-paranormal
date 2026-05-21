// ======================================
// FOTO
// ======================================

const photoInput = document.getElementById("photoInput");
const photoPreview = document.getElementById("photoPreview");

if(photoInput){

    photoInput.addEventListener("change", function(){

        const file = this.files[0];

        if(!file) return;

        const reader = new FileReader();

        reader.onload = function(e){

            photoPreview.innerHTML = `
                <img src="${e.target.result}">
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

function rollAttribute(attributeId){

    const atributo =
    Number(document.getElementById(attributeId).value) || 1;

    document.getElementById("diceCount").value = atributo;

    document.getElementById("diceType").value = 20;

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

    const pvMax = (7 + vigor) * nivel;

    const pdMax = (5 + presenca) * nivel;

    document.getElementById("pvMax").value = pvMax;

    document.getElementById("pdMax").value = pdMax;

}

["nivel","vigor","presenca"].forEach(id => {

    const el = document.getElementById(id);

    if(el){

        el.addEventListener("input", atualizarStatus);

    }

});

atualizarStatus();

// ======================================
// PERÍCIAS
// ======================================

function updateSkills(){

    const rows =
    document.querySelectorAll(".skill-row");

    rows.forEach(row => {

        const treino =
        Number(row.querySelector(".skill-train").value) || 0;

        const bonus =
        Number(row.querySelector(".skill-bonus").value) || 0;

        const total = treino + bonus;

        row.querySelector(".skill-total").innerText =
        `+${total}`;

    });

}

document.querySelectorAll(".skill-train, .skill-bonus")
.forEach(input => {

    input.addEventListener("input", updateSkills);

});

updateSkills();

// ======================================
// ROLAR PERÍCIA
// ======================================

function getAttributeValue(attr){

    if(attr.includes("FOR")) return Number(document.getElementById("forca").value) || 1;

    if(attr.includes("AGI")) return Number(document.getElementById("agilidade").value) || 1;

    if(attr.includes("INT")) return Number(document.getElementById("intelecto").value) || 1;

    if(attr.includes("VIG")) return Number(document.getElementById("vigor").value) || 1;

    if(attr.includes("PRE")) return Number(document.getElementById("presenca").value) || 1;

    return 1;

}

function rollSkill(row){

    const attr =
    row.querySelector(".skill-attr").innerText;

    const atributo =
    getAttributeValue(attr);

    const treino =
    Number(row.querySelector(".skill-train").value) || 0;

    const bonus =
    Number(row.querySelector(".skill-bonus").value) || 0;

    let rolls = [];

    for(let i = 0; i < atributo; i++){

        rolls.push(randomDice(20));

    }

    const maior = Math.max(...rolls);

    const total = maior + treino + bonus;

    const nome =
    row.querySelector(".skill-name").innerText;

    document.getElementById("diceResult").innerHTML = `

        <div class="dice-skill-name">
            ${nome}
        </div>

        <div class="dice-rolls">
            ${rolls.join(" • ")}
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
// HABILIDADES
// ======================================

const habilidades = [

    {
        nome:"Ataque Especial",
        custo:3,
        tipo:"PD",
        descricao:"Recebe bônus de ataque ou dano."
    },

    {
        nome:"Golpe Pesado",
        custo:3,
        tipo:"PD",
        descricao:"Seu dano sobe um passo."
    },

    {
        nome:"Casca Grossa",
        custo:4,
        tipo:"PD",
        descricao:"Recebe +1 PV por nível."
    }

];

function addAbility(){

    let html = "";

    habilidades.forEach(habilidade => {

        html += `

            <div class="assimilation-option"
            onclick="selectAbility('${habilidade.nome}')">

                <h3>${habilidade.nome}</h3>

                <span>
                    ${habilidade.custo} ${habilidade.tipo}
                </span>

            </div>

        `;

    });

    const menu = document.createElement("div");

    menu.classList.add("assimilation-menu");

    menu.style.display = "flex";

    menu.innerHTML = `

        <div class="assimilation-menu-content">

            <div class="menu-header">

                <h2>HABILIDADES</h2>

                <button onclick="this.closest('.assimilation-menu').remove()">
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

    document.querySelector(".assimilation-menu").remove();

}

// ======================================
// REMOVER
// ======================================

function removeCard(button){

    button.closest(".ability-card, .inventory-card, .assimilation-card")
    .remove();

}

// ======================================
// ASSIMILAÇÕES
// ======================================

const assimilations = [

    {
        nome:"Teleporte Cinético",
        elemento:"Energia",
        descricao:"Teleporta até 3m."
    },

    {
        nome:"Aceleração",
        elemento:"Energia",
        descricao:"Recebe ação adicional."
    }

];

function openAssimilationMenu(){

    let html = "";

    assimilations.forEach(a => {

        html += `

            <div class="assimilation-option"
            onclick="selectAssimilation('${a.nome}')">

                <h3>${a.nome}</h3>

                <span>${a.elemento}</span>

            </div>

        `;

    });

    const menu = document.createElement("div");

    menu.classList.add("assimilation-menu");

    menu.style.display = "flex";

    menu.innerHTML = `

        <div class="assimilation-menu-content">

            <div class="menu-header">

                <h2>ASSIMILAÇÕES</h2>

                <button onclick="this.closest('.assimilation-menu').remove()">
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

    const card = document.createElement("div");

    card.classList.add("assimilation-card");

    card.innerHTML = `

        <div class="ability-header">

            <h3>${assimilation.nome}</h3>

            <button onclick="removeCard(this)">
                X
            </button>

        </div>

        <span>${assimilation.elemento}</span>

        <p>${assimilation.descricao}</p>

    `;

    document.getElementById("assimilationList")
    .appendChild(card);

    document.querySelector(".assimilation-menu").remove();

}