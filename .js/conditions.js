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

