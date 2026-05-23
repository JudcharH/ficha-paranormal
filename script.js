// ======================================
// FOTO PERSONAGEM
// ======================================

const photoInput =
    document.getElementById("photoInput");

const photoPreview =
    document.getElementById("photoPreview");

if(photoInput){

    photoInput.addEventListener("change", function(){

        const file = this.files[0];

        if(!file) return;

        const reader = new FileReader();

        reader.onload = function(e){

            photoPreview.innerHTML = `

                <img
                    src="${e.target.result}"
                    style="
                        width:100%;
                        height:100%;
                        object-fit:cover;
                    "
                >

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

    `;

}

// ======================================
// PENALIDADES
// ======================================

const atributosPenalidades = {

    forca:0,
    agilidade:0,
    vigor:0,
    intelecto:0,
    presenca:0

};

const periciasPenalidades = {

    fortitude:0,
    reflexos:0,
    vontade:0,
    percepcao:0,
    pontaria:0

};

// ======================================
// STATUS
// ======================================

function atualizarStatus(){

    const nivel =
        Number(document.getElementById("nivel").value) || 1;

    const vigor =
        (
            Number(document.getElementById("vigor").value) || 1
        ) + atributosPenalidades.vigor;

    const presenca =
        (
            Number(document.getElementById("presenca").value) || 1
        ) + atributosPenalidades.presenca;

    let pvMax =
        (7 + vigor) * nivel;

    let pdMax =
        (5 + presenca) * nivel;

    // =====================
    // CONDIÇÕES
    // =====================

    if(
        document.querySelector(
            '.condition-card span[data-name="Enfraquecido"]'
        )
    ){

        pvMax -= 10;

    }

    if(
        document.querySelector(
            '.condition-card span[data-name="Traumatizado"]'
        )
    ){

        pdMax -= 8;

    }

    document.getElementById("pvMax").value =
        pvMax;

    document.getElementById("pdMax").value =
        pdMax;

}

function atualizarPA(){

    const nivel =
        Number(
            document.getElementById("nivel").value
        ) || 1;

    const paMax =
        4 + Math.floor(nivel / 10);

    const paAtual =
        document.getElementById("paAtual");

    document.getElementById("paMaxText")
    .innerText =
        `PA Máximo: ${paMax}`;

    if(
        Number(paAtual.value) > paMax
    ){

        paAtual.value = paMax;

    }

}

["nivel","vigor","presenca"]
.forEach(id => {

    const el =
        document.getElementById(id);

    if(el){

        el.addEventListener(
            "input",
            () => {

                atualizarStatus();
                atualizarPA();

            }
        );

    }

});

// ======================================
// ATRIBUTOS
// ======================================

function getAttributeValue(attr){

    // =====================
    // FORÇA
    // =====================

    if(attr.includes("FOR")){

        return (
            Number(
                document.getElementById("forca").value
            ) || 1
        ) + atributosPenalidades.forca;

    }

    // =====================
    // AGILIDADE
    // =====================

    if(attr.includes("AGI")){

        return (
            Number(
                document.getElementById("agilidade").value
            ) || 1
        ) + atributosPenalidades.agilidade;

    }

    // =====================
    // INTELECTO
    // =====================

    if(attr.includes("INT")){

        return (
            Number(
                document.getElementById("intelecto").value
            ) || 1
        ) + atributosPenalidades.intelecto;

    }

    // =====================
    // VIGOR
    // =====================

    if(attr.includes("VIG")){

        return (
            Number(
                document.getElementById("vigor").value
            ) || 1
        ) + atributosPenalidades.vigor;

    }

    // =====================
    // PRESENÇA
    // =====================

    if(attr.includes("PRE")){

        return (
            Number(
                document.getElementById("presenca").value
            ) || 1
        ) + atributosPenalidades.presenca;

    }

    return 1;

}

// ======================================
// PERÍCIAS
// ======================================

function updateSkills(){

    const rows =
        document.querySelectorAll(".skill-row");

    rows.forEach(row => {

        const treino =
            Number(
                row.querySelector(".skill-train").value
            ) || 0;

        const bonus =
            Number(
                row.querySelector(".skill-bonus").value
            ) || 0;

        row.querySelector(".skill-total")
        .innerText =
            `+${treino + bonus}`;

    });

}

function getSkillPenalty(nome){

    nome =
        nome.toLowerCase();

    if(nome.includes("fortitude")){

        return periciasPenalidades.fortitude;

    }

    if(nome.includes("reflex")){

        return periciasPenalidades.reflexos;

    }

    if(nome.includes("vontade")){

        return periciasPenalidades.vontade;

    }

    if(nome.includes("percep")){

        return periciasPenalidades.percepcao;

    }

    if(nome.includes("pontaria")){

        return periciasPenalidades.pontaria;

    }

    return 0;

}

function rollSkill(row){

    const attr =
        row.querySelector(".skill-attr").innerText;

    let atributo =
        getAttributeValue(attr);

    if(atributo < 1){

        atributo = 1;

    }

    const treino =
        Number(
            row.querySelector(".skill-train").value
        ) || 0;

    const bonus =
        Number(
            row.querySelector(".skill-bonus").value
        ) || 0;

    const nome =
        row.querySelector(".skill-name").innerText;

    const penalidade =
        getSkillPenalty(nome);

    let resultados = [];

    for(let i = 0; i < atributo; i++){

        resultados.push(randomDice(20));

    }

    const maior =
        Math.max(...resultados);

    const total =
        maior +
        treino +
        bonus +
        penalidade;

    document.getElementById("diceResult")
    .innerHTML = `

        <div class="dice-skill-name">
            ${nome}
        </div>

        <div class="dice-rolls">
            ${resultados.join(" • ")}
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
// CONDIÇÕES
// ======================================

const condicoes = [

    {
        nome:"Sangramento",
        dano:"1d6"
    },

    {
        nome:"Chamas",
        dano:"2d6"
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
    },

    {
        nome:"Caído",
        dano:null
    }

];

// ======================================
// EFEITOS CONDIÇÕES
// ======================================

function aplicarEfeitosCondicoes(){

    // RESET

    atributosPenalidades.forca = 0;
    atributosPenalidades.agilidade = 0;
    atributosPenalidades.vigor = 0;
    atributosPenalidades.intelecto = 0;
    atributosPenalidades.presenca = 0;

    periciasPenalidades.fortitude = 0;
    periciasPenalidades.reflexos = 0;
    periciasPenalidades.vontade = 0;
    periciasPenalidades.percepcao = 0;
    periciasPenalidades.pontaria = 0;

    // LER CONDIÇÕES

    document.querySelectorAll(".condition-card span")
    .forEach(condicaoEl => {

        const nome =
            condicaoEl.dataset.name;

        // =====================
        // ENVENENAMENTO
        // =====================

        if(nome === "Envenenamento"){

            atributosPenalidades.vigor -= 5;

        }

        // =====================
        // ENJOADO
        // =====================

        if(nome === "Enjoado"){

            atributosPenalidades.forca -= 3;
            atributosPenalidades.agilidade -= 3;
            atributosPenalidades.vigor -= 3;

        }

        // =====================
        // ENFRAQUECIDO
        // =====================

        if(nome === "Enfraquecido"){

            atributosPenalidades.forca -= 5;

        }

        // =====================
        // LENTIDÃO
        // =====================

        if(nome === "Lentidão"){

            atributosPenalidades.agilidade -= 5;

        }

        // =====================
        // TRAUMATIZADO
        // =====================

        if(nome === "Traumatizado"){

            periciasPenalidades.vontade -= 5;

        }

        // =====================
        // CEGO
        // =====================

        if(nome === "Cego"){

            periciasPenalidades.percepcao -= 10;
            periciasPenalidades.pontaria -= 10;

        }

        // =====================
        // SURDO
        // =====================

        if(nome === "Surdo"){

            periciasPenalidades.percepcao -= 10;

        }

        // =====================
        // PENUMBRA
        // =====================

        if(nome === "Penumbra"){

            periciasPenalidades.percepcao -= 5;
            periciasPenalidades.reflexos -= 3;

        }

    });

    atualizarStatus();

}

// ======================================
// MENU CONDIÇÕES
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

    const menu =
        document.createElement("div");

    menu.classList.add("assimilation-menu");

    menu.innerHTML = `

        <div class="assimilation-menu-content">

            <div class="menu-header">

                <h2>CONDIÇÕES</h2>

                <button onclick="closeMenu()">
                    X
                </button>

            </div>

            <div
                class="assimilation-options"
            >

                ${html}

            </div>

        </div>

    `;

    document.body.appendChild(menu);

}

function selectCondition(nome){

    const condicao =
        condicoes.find(c =>
            c.nome === nome
        );

    // =====================
    // STACK SANGRAMENTO
    // =====================

    if(nome === "Sangramento"){

        const existente =
            [...document.querySelectorAll(".condition-card")]
            .find(card =>
                card.querySelector("span").dataset.name === "Sangramento"
            );

        if(existente){

            const damageEl =
                existente.querySelector(".condition-damage");

            let texto =
                damageEl.innerText;

            let partes =
                texto.split("d");

            let quantidade =
                Number(partes[0]);

            quantidade++;

            damageEl.innerText =
                `${quantidade}d6`;

            closeMenu();

            return;

        }

    }

    // =====================
    // STACK ENVENENAMENTO
    // =====================

    if(nome === "Envenenamento"){

        const existente =
            [...document.querySelectorAll(".condition-card")]
            .find(card =>
                card.querySelector("span").dataset.name === "Envenenamento"
            );

        if(existente){

            const damageEl =
                existente.querySelector(".condition-damage");

            let texto =
                damageEl.innerText;

            let partes =
                texto.split("d");

            let quantidade =
                Number(partes[0]);

            quantidade += 2;

            damageEl.innerText =
                `${quantidade}d4`;

            closeMenu();

            return;

        }

    }

    // =====================
    // EVITA DUPLICADA
    // =====================

    const jaExiste =
        [...document.querySelectorAll(".condition-card span")]
        .some(span =>
            span.dataset.name === nome
        );

    if(
        jaExiste &&
        nome !== "Sangramento" &&
        nome !== "Envenenamento"
    ){

        return;

    }

    const card =
        document.createElement("div");

    card.classList.add("condition-card");

    card.innerHTML = `

        <span data-name="${nome}">
            ${nome}
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

    aplicarEfeitosCondicoes();

    closeMenu();

}

function removeCondition(button){

    button.parentElement.remove();

    aplicarEfeitosCondicoes();

}

// ======================================
// PASSAR RODADA
// ======================================

function nextTurn(){

    const paTexto =
        document.getElementById("paMaxText")
        .innerText;

    const paMax =
        Number(
            paTexto.replace(/\D/g, "")
        );

    document.getElementById("paAtual").value =
        paMax;

    let danoTotal = 0;

    document.querySelectorAll(".condition-card")
    .forEach(card => {

        const danoTexto =
            card.querySelector(".condition-damage")
            .innerText;

        if(
            danoTexto &&
            danoTexto.includes("d")
        ){

            const partes =
                danoTexto.split("d");

            const quantidade =
                Number(partes[0]);

            const tipo =
                Number(partes[1]);

            for(let i = 0; i < quantidade; i++){

                danoTotal +=
                    randomDice(tipo);

            }

        }

    });

    const pvAtual =
        document.getElementById("pvAtual");

    let pv =
        Number(pvAtual.value) || 0;

    pv -= danoTotal;

    if(pv < 0){

        pv = 0;

    }

    pvAtual.value = pv;

    document.getElementById("diceResult")
    .innerHTML = `

        <div class="dice-big">
            ${danoTotal}
        </div>

        <div class="dice-total">
            Dano das condições
        </div>

    `;

}

// ======================================
// INICIALIZAÇÃO
// ======================================

atualizarStatus();
atualizarPA();
updateSkills();
aplicarEfeitosCondicoes();

// ======================================
// CONDIÇÕES + EFEITOS AUTOMÁTICOS
// ======================================

// ======================================
// PENALIDADES GLOBAIS
// ======================================

let atributosPenalidades = {

    forca:0,
    agilidade:0,
    vigor:0,
    intelecto:0,
    presenca:0,

    defesa:0,
    deslocamento:0,

    pv:0,
    pd:0,

    vontade:0,
    percepcao:0,
    reflexos:0,
    pontaria:0

};

// ======================================
// APLICAR EFEITOS DAS CONDIÇÕES
// ======================================

function aplicarEfeitosCondicoes(){

    // RESET

    atributosPenalidades = {

        forca:0,
        agilidade:0,
        vigor:0,
        intelecto:0,
        presenca:0,

        defesa:0,
        deslocamento:0,

        pv:0,
        pd:0,

        vontade:0,
        percepcao:0,
        reflexos:0,
        pontaria:0

    };

    // =====================
    // LER CONDIÇÕES
    // =====================

    document.querySelectorAll(".condition-card span")
    .forEach(condicaoEl => {

        const nome =
            condicaoEl.innerText;

        // =====================
        // ENVENENAMENTO
        // =====================

        if(nome === "Envenenamento"){

            atributosPenalidades.vigor -= 5;

        }

        // =====================
        // ENJOADO
        // =====================

        if(nome === "Enjoado"){

            atributosPenalidades.forca -= 3;
            atributosPenalidades.agilidade -= 3;
            atributosPenalidades.vigor -= 3;

        }

        // =====================
        // CAÍDO
        // =====================

        if(nome === "Caído"){

            atributosPenalidades.defesa -= 5;

        }

        // =====================
        // DESPREVENIDO
        // =====================

        if(nome === "Desprevenido"){

            atributosPenalidades.defesa -= 3;

        }

        // =====================
        // ENFRAQUECIDO
        // =====================

        if(nome === "Enfraquecido"){

            atributosPenalidades.forca -= 5;
            atributosPenalidades.pv -= 10;

        }

        // =====================
        // CEGO
        // =====================

        if(nome === "Cego"){

            atributosPenalidades.pontaria -= 10;
            atributosPenalidades.percepcao -= 10;

        }

        // =====================
        // SURDO
        // =====================

        if(nome === "Surdo"){

            atributosPenalidades.percepcao -= 10;

        }

        // =====================
        // PENUMBRA
        // =====================

        if(nome === "Penumbra"){

            atributosPenalidades.percepcao -= 5;
            atributosPenalidades.reflexos -= 3;

        }

        // =====================
        // LENTIDÃO
        // =====================

        if(nome === "Lentidão"){

            atributosPenalidades.agilidade -= 5;
            atributosPenalidades.deslocamento -= 3;

        }

        // =====================
        // TRAUMATIZADO
        // =====================

        if(nome === "Traumatizado"){

            atributosPenalidades.vontade -= 5;
            atributosPenalidades.pd -= 8;

        }

    });

    // ======================================
    // APLICAR PV / PD / DEFESA
    // ======================================

    atualizarStatus();

    const defesa =
        document.getElementById("defesa");

    if(defesa){

        const base =
            Number(defesa.dataset.base)
            || Number(defesa.value)
            || 0;

        defesa.dataset.base = base;

        defesa.value =
            base + atributosPenalidades.defesa;

    }

    const pvMax =
        document.getElementById("pvMax");

    if(pvMax){

        pvMax.value =
            Number(pvMax.value)
            + atributosPenalidades.pv;

    }

    const pdMax =
        document.getElementById("pdMax");

    if(pdMax){

        pdMax.value =
            Number(pdMax.value)
            + atributosPenalidades.pd;

    }

    // ======================================
    // RECALCULA PERÍCIAS
    // ======================================

    updateSkills();

}

// ======================================
// CONDIÇÕES
// ======================================

const condicoes = [

    {
        nome:"Sangramento",
        dano:"1d6"
    },

    {
        nome:"Chamas",
        dano:"2d6"
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
    },

    {
        nome:"Caído",
        dano:null
    }

];

// ======================================
// MENU CONDIÇÕES
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

    const menu =
        document.createElement("div");

    menu.classList.add("assimilation-menu");

    menu.innerHTML = `

        <div class="assimilation-menu-content">

            <div class="menu-header">

                <h2>CONDIÇÕES</h2>

                <button onclick="closeMenu()">
                    X
                </button>

            </div>

            <input
                type="text"
                id="conditionSearch"
                placeholder="Pesquisar condição..."
            >

            <div
                class="assimilation-options"
                id="conditionOptions"
            >

                ${html}

            </div>

        </div>

    `;

    document.body.appendChild(menu);

    document.getElementById("conditionSearch")
    .addEventListener("input", function(){

        const value =
            this.value.toLowerCase();

        document.querySelectorAll(
            "#conditionOptions .assimilation-option"
        )
        .forEach(option => {

            option.style.display =
                option.innerText
                .toLowerCase()
                .includes(value)
                ? "flex"
                : "none";

        });

    });

}

// ======================================
// ADICIONAR CONDIÇÃO
// ======================================

function selectCondition(nome){

    const condicao =
        condicoes.find(c =>
            c.nome === nome
        );

    // =====================
    // STACK SANGRAMENTO
    // =====================

    if(nome === "Sangramento"){

        const existente =
            [...document.querySelectorAll(".condition-card")]
            .find(card =>
                card.querySelector("span").innerText === "Sangramento"
            );

        if(existente){

            const damageEl =
                existente.querySelector(".condition-damage");

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

    // =====================
    // STACK ENVENENAMENTO
    // =====================

    if(nome === "Envenenamento"){

        const existente =
            [...document.querySelectorAll(".condition-card")]
            .find(card =>
                card.querySelector("span").innerText === "Envenenamento"
            );

        if(existente){

            const damageEl =
                existente.querySelector(".condition-damage");

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

    // =====================
    // BLOQUEAR DUPLICADAS
    // =====================

    const podeStackar =
        nome === "Sangramento"
        || nome === "Envenenamento";

    if(!podeStackar){

        const jaExiste =
            [...document.querySelectorAll(".condition-card span")]
            .some(span =>
                span.innerText === nome
            );

        if(jaExiste){

            alert("Essa condição já está ativa.");

            return;

        }

    }

    // =====================
    // CRIAR CARD
    // =====================

    const card =
        document.createElement("div");

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

    saveFicha();

    aplicarEfeitosCondicoes();

}

// ======================================
// REMOVER CONDIÇÃO
// ======================================

function removeCondition(button){

    button.parentElement.remove();

    saveFicha();

    aplicarEfeitosCondicoes();

}

// ======================================
// BOTÃO
// ======================================

document.getElementById("conditionBtn")
.onclick = openConditionMenu;

function recalculateConditions(){

    aplicarEfeitosCondicoes();

    saveFicha();

}