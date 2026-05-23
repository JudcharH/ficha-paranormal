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

    // ======================================
    // STACK SANGRAMENTO
    // ======================================

    if(nome === "Sangramento"){

        const existente =
            [...document.querySelectorAll(".condition-card")]
            .find(card =>
                card.querySelector("span")
                .innerText === "Sangramento"
            );

        if(existente){

            const damageEl =
                existente.querySelector(
                    ".condition-damage"
                );

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

            closeMenu();

            saveFicha();

            return;

        }

    }

    // ======================================
    // STACK ENVENENAMENTO
    // ======================================

    if(nome === "Envenenamento"){

        const existente =
            [...document.querySelectorAll(".condition-card")]
            .find(card =>
                card.querySelector("span")
                .innerText === "Envenenamento"
            );

        if(existente){

            const damageEl =
                existente.querySelector(
                    ".condition-damage"
                );

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

            closeMenu();

            saveFicha();

            return;

        }

    }

    // ======================================
    // BLOQUEAR DUPLICADAS
    // ======================================

    const jaExiste =
        [...document.querySelectorAll(".condition-card span")]
        .some(span =>
            span.innerText === nome
        );

    if(jaExiste){

        alert("Essa condição já está ativa.");

        return;

    }

    // ======================================
    // CRIAR CARD
    // ======================================

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

    aplicarEfeitosCondicoes();

    saveFicha();

}

// ======================================
// REMOVER CONDIÇÃO
// ======================================

function removeCondition(button){

    button.parentElement.remove();

    aplicarEfeitosCondicoes();

    saveFicha();

}

// ======================================
// EFEITOS AUTOMÁTICOS
// ======================================

function aplicarEfeitosCondicoes(){

    // ======================================
    // RESET
    // ======================================

    atributosPenalidades.forca = 0;
    atributosPenalidades.agilidade = 0;
    atributosPenalidades.intelecto = 0;
    atributosPenalidades.vigor = 0;
    atributosPenalidades.presenca = 0;

    atributosPenalidades.pvMax = 0;
    atributosPenalidades.pdMax = 0;

    atributosPenalidades.defesa = 0;
    atributosPenalidades.deslocamento = 0;

    atributosPenalidades.percepcao = 0;
    atributosPenalidades.reflexos = 0;
    atributosPenalidades.pontaria = 0;
    atributosPenalidades.vontade = 0;

    // ======================================
    // LER CONDIÇÕES
    // ======================================

    document.querySelectorAll(".condition-card span")
    .forEach(condicaoEl => {

        const nome =
            condicaoEl.innerText;

        // ======================================
        // ENFRAQUECIDO
        // ======================================

        if(nome === "Enfraquecido"){

            atributosPenalidades.forca -= 5;
            atributosPenalidades.pvMax -= 10;

        }

        // ======================================
        // LENTIDÃO
        // ======================================

        if(nome === "Lentidão"){

            atributosPenalidades.agilidade -= 5;
            atributosPenalidades.deslocamento -= 3;

        }

        // ======================================
        // TRAUMATIZADO
        // ======================================

        if(nome === "Traumatizado"){

            atributosPenalidades.vontade -= 5;
            atributosPenalidades.pdMax -= 8;

        }

        // ======================================
        // CEGO
        // ======================================

        if(nome === "Cego"){

            atributosPenalidades.percepcao -= 10;
            atributosPenalidades.pontaria -= 10;

        }

        // ======================================
        // SURDO
        // ======================================

        if(nome === "Surdo"){

            atributosPenalidades.percepcao -= 10;

        }

        // ======================================
        // PENUMBRA
        // ======================================

        if(nome === "Penumbra"){

            atributosPenalidades.percepcao -= 5;
            atributosPenalidades.reflexos -= 3;

        }

        // ======================================
        // CAÍDO
        // ======================================

        if(nome === "Caído"){

            atributosPenalidades.defesa -= 5;

        }

        // ======================================
        // DESPREVENIDO
        // ======================================

        if(nome === "Desprevenido"){

            atributosPenalidades.defesa -= 3;

        }

    });

    // ======================================
    // APLICAR PV
    // ======================================

    atualizarStatus();

    const pvMax =
        document.getElementById("pvMax");

    pvMax.value =
        Number(pvMax.value) +
        atributosPenalidades.pvMax;

    // ======================================
    // APLICAR PD
    // ======================================

    const pdMax =
        document.getElementById("pdMax");

    pdMax.value =
        Number(pdMax.value) +
        atributosPenalidades.pdMax;

}

// ======================================
// PASSAR RODADA
// ======================================

function nextTurn(){

    // ======================================
    // PA
    // ======================================

    const paTexto =
        document.getElementById("paMaxText")
        .innerText;

    const paMax =
        Number(
            paTexto.replace(/\D/g, "")
        );

    document.getElementById("paAtual").value =
        paMax;

    // ======================================
    // DANO CONDIÇÕES
    // ======================================

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

    // ======================================
    // APLICAR DANO
    // ======================================

    const pvAtual =
        document.getElementById("pvAtual");

    let pv =
        Number(pvAtual.value) || 0;

    pv -= danoTotal;

    if(pv < 0){

        pv = 0;

    }

    pvAtual.value = pv;

    // ======================================
    // RESULTADO
    // ======================================

    document.getElementById("diceResult")
    .innerHTML = `

        <div class="dice-big">
            ${danoTotal}
        </div>

        <div class="dice-total">
            Dano das condições
        </div>

    `;

    saveFicha();

}

// ======================================
// BOTÃO
// ======================================

const conditionBtn =
    document.getElementById("conditionBtn");

if(conditionBtn){

    conditionBtn.onclick =
        openConditionMenu;

}