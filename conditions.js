// ======================================
// CONDIÇÕES
// ======================================

const condicoes = [

    { nome:"Sangramento", dano:"1d6" },
    { nome:"Chamas", dano:"2d6" },
    { nome:"Envenenamento", dano:"2d4" },
    { nome:"Paralisia", dano:null },
    { nome:"Lentidão", dano:null },
    { nome:"Cego", dano:null },
    { nome:"Confuso", dano:null },
    { nome:"Caído", dano:null }

];

// ======================================
// MENU
// ======================================

function openConditionMenu(){

    closeMenu();

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

            ${html}

        </div>

    `;

    document.body.appendChild(menu);

}

// ======================================
// SELECIONAR CONDIÇÃO
// ======================================

function selectCondition(nome){

    const condicao =
        condicoes.find(c => c.nome === nome);

    if(!condicao) return;

    // ======================================
    // STACK SANGRAMENTO
    // ======================================

    if(nome === "Sangramento"){

        const existente = [
            ...document.querySelectorAll(".condition-card")
        ].find(card =>
            card.querySelector(".condition-name")
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

            saveFicha();

            closeMenu();

            return;

        }

    }

    // ======================================
    // STACK ENVENENAMENTO
    // ======================================

    if(nome === "Envenenamento"){

        const existente = [
            ...document.querySelectorAll(".condition-card")
        ].find(card =>
            card.querySelector(".condition-name")
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

            saveFicha();

            closeMenu();

            return;

        }

    }

    // ======================================
    // BLOQUEAR DUPLICADAS
    // ======================================

    const jaExiste = [
        ...document.querySelectorAll(
            ".condition-name"
        )
    ].some(span =>
        span.innerText === nome
    );

    if(jaExiste){

        alert("Essa condição já está ativa.");

        return;

    }

    // ======================================
    // CRIAR CARD
    // ======================================

    const card = document.createElement("div");

    card.classList.add("condition-card");

    card.innerHTML = `

        <span class="condition-name">
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

    closeMenu();

    saveFicha();

}

// ======================================
// REMOVER
// ======================================

function removeCondition(button){

    button.parentElement.remove();

    saveFicha();

}

// ======================================
// FECHAR MENU
// ======================================

function closeMenu(){

    const menu =
        document.querySelector(".assimilation-menu");

    if(menu){

        menu.remove();

    }

}

function aplicarEfeitosCondicoes(){

    // ======================================
    // RESET STATUS
    // ======================================

    atualizarStatus();
    updateSkills();

    // ======================================
    // CONDIÇÕES ATIVAS
    // ======================================

    const condicoesAtivas = [
        ...document.querySelectorAll(".condition-name")
    ].map(el => el.innerText);

    // ======================================
    // RESET DESLOCAMENTO
    // ======================================

    const deslocamentoInput =
        document.querySelector(
            '.status-box input[value="6m"]'
        );

    if(deslocamentoInput){

        deslocamentoInput.value = "6m";

    }

    // ======================================
    // TRAUMATIZADO
    // -8 PD MAX
    // ======================================

    if(condicoesAtivas.includes("Traumatizado")){

        const pdMax =
            document.getElementById("pdMax");

        pdMax.value =
            Math.max(
                0,
                Number(pdMax.value) - 8
            );

    }

    // ======================================
    // ENFRAQUECIDO
    // -10 PV MAX
    // ======================================

    if(condicoesAtivas.includes("Enfraquecido")){

        const pvMax =
            document.getElementById("pvMax");

        pvMax.value =
            Math.max(
                0,
                Number(pvMax.value) - 10
            );

    }

    // ======================================
    // MORRENDO
    // PA = 0
    // ======================================

    if(condicoesAtivas.includes("Morrendo")){

        document.getElementById("paAtual")
        .value = 0;

    }

    // ======================================
    // LENTIDÃO
    // -3m deslocamento
    // ======================================

    if(
        condicoesAtivas.includes("Lentidão")
        &&
        deslocamentoInput
    ){

        deslocamentoInput.value = "3m";

    }

    // ======================================
    // CONFUSO
    // consome 1 PA
    // ======================================

    if(condicoesAtivas.includes("Confuso")){

        const pa =
            document.getElementById("paAtual");

        pa.value =
            Math.max(
                0,
                Number(pa.value) - 1
            );

    }

    // ======================================
    // DESPREVENIDO
    // -3 DEFESA
    // ======================================

    if(condicoesAtivas.includes("Desprevenido")){

        const defesa =
            document.querySelectorAll(
                ".status-box input"
            )[4];

        defesa.value =
            Math.max(
                0,
                Number(defesa.value || 0) - 3
            );

    }

    // ======================================
    // CAÍDO
    // -5 DEFESA
    // ======================================

    if(condicoesAtivas.includes("Caído")){

        const defesa =
            document.querySelectorAll(
                ".status-box input"
            )[4];

        defesa.value =
            Math.max(
                0,
                Number(defesa.value || 0) - 5
            );

    }

    // ======================================
    // PENALIDADES PERÍCIAS
    // ======================================

    document.querySelectorAll(".skill-row")
    .forEach(row => {

        const nome =
            row.querySelector(".skill-name")
            .innerText;

        const attr =
            row.querySelector(".skill-attr")
            .innerText;

        const bonusInput =
            row.querySelector(".skill-bonus");

        let penalidade = 0;

        // ==================================
        // ENVENENAMENTO
        // -5 VIG
        // ==================================

        if(
            condicoesAtivas.includes("Envenenamento")
            &&
            attr.includes("VIG")
        ){

            penalidade -= 5;

        }

        // ==================================
        // ENJOADO
        // -3 testes físicos
        // ==================================

        if(
            condicoesAtivas.includes("Enjoado")
            &&
            (
                attr.includes("FOR")
                ||
                attr.includes("AGI")
                ||
                attr.includes("VIG")
            )
        ){

            penalidade -= 3;

        }

        // ==================================
        // ENFRAQUECIDO
        // -5 FOR
        // ==================================

        if(
            condicoesAtivas.includes("Enfraquecido")
            &&
            attr.includes("FOR")
        ){

            penalidade -= 5;

        }

        // ==================================
        // LENTIDÃO
        // -5 AGI
        // ==================================

        if(
            condicoesAtivas.includes("Lentidão")
            &&
            attr.includes("AGI")
        ){

            penalidade -= 5;

        }

        // ==================================
        // CEGO
        // ==================================

        if(
            condicoesAtivas.includes("Cego")
        ){

            if(nome === "Percepção"){

                penalidade -= 10;

            }

            if(nome === "Pontaria"){

                penalidade -= 10;

            }

        }

        // ==================================
        // SURDO
        // ==================================

        if(
            condicoesAtivas.includes("Surdo")
            &&
            nome === "Percepção"
        ){

            penalidade -= 10;

        }

        // ==================================
        // TRAUMATIZADO
        // -5 vontade
        // ==================================

        if(
            condicoesAtivas.includes("Traumatizado")
            &&
            nome === "Vontade"
        ){

            penalidade -= 5;

        }

        // ==================================
        // PENUMBRA
        // ==================================

        if(
            condicoesAtivas.includes("Penumbra")
        ){

            if(nome === "Percepção"){

                penalidade -= 5;

            }

            if(nome === "Reflexos"){

                penalidade -= 3;

            }

        }

        // ==================================
        // CAÍDO
        // -1 dado físicos
        // convertido em -5
        // ==================================

        if(
            condicoesAtivas.includes("Caído")
            &&
            (
                attr.includes("FOR")
                ||
                attr.includes("AGI")
                ||
                attr.includes("VIG")
            )
        ){

            penalidade -= 5;

        }

        // ==================================
        // PARALISIA
        // ==================================

        if(
            condicoesAtivas.includes("Paralisia")
            ||
            condicoesAtivas.includes("Paralisia Total")
        ){

            penalidade -= 999;

        }

        // ==================================
        // APLICA
        // ==================================

        bonusInput.value = penalidade;

    });

    // ======================================
    // UPDATE
    // ======================================

    updateSkills();

}