// ======================================
// ASSIMILAÇÕES
// ======================================

const assimilations = [

    {
        nome: "Sede Carmesim",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "Sempre que causar dano recupera igual VIG em PV"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 8,
                descricao:
                "Recupera VIG x2 PV e +3 contra sangramento"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 12,
                descricao:
                "Recupera VIG x4 PV e +5 contra sangramento"
            }

        ]
    },

    {
        nome: "Alteração Sanguínea",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "Assume outra aparência e recebe +5 sociais"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 8,
                descricao:
                "Cria clone de sangue"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 12,
                descricao:
                "Cria receptáculo permanente"
            }

        ]
    },

    {
        nome: "Presas",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "Após 2 ataques causa 2d4+1"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 8,
                descricao:
                "Dano aumenta para 3d4+2"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 12,
                descricao:
                "Dano aumenta para 4d4+3"
            }

        ]
    },

    {
        nome: "Sangue Tóxico",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "Atacantes sofrem 1d6 de dano de Sangue"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 8,
                descricao:
                "Retaliação aumenta para 2d6"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 12,
                descricao:
                "Retaliação aumenta para 3d6 e aplica Sangramento"
            }

        ]
    },

    {
        nome: "Corpo Regenerativo",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "Recupera 1d6+1 PV por turno"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 8,
                descricao:
                "Recupera 2d6+2 PV por turno"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 12,
                descricao:
                "Recupera 3d4+3 PV e retorna com 1 PV"
            }

        ]
    },

    {
        nome: "Frenesi Permanente",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "+2 ataque e +2 dano"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 8,
                descricao:
                "+4 ataque e +4 dano"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 12,
                descricao:
                "+6 ataque e +6 dano"
            }

        ]
    },

    {
        nome: "Mutação Latente",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "Transformação até 3 pontos"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 8,
                descricao:
                "Transformação até 5 pontos"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 12,
                descricao:
                "Transformação até 7 pontos"
            }

        ]
    },

    {
        nome: "Casca de Carne",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "RD 5 contra dano mundano e Sangue"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 6,
                descricao:
                "RD 15"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 9,
                descricao:
                "RD 25 e pode dobrar resistência"
            }

        ]
    },

    {
        nome: "Predador Natural",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "+1 PD e +8 PV ao abater"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 6,
                descricao:
                "+2 PD e +11 PV ao abater"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 9,
                descricao:
                "+4 PD, +1 PD máximo permanente e finaliza adjacentes"
            }

        ]
    },

    {
        nome: "Sacrifício Vivo",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "1 PV = +1 dano até limite 10"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 8,
                descricao:
                "6 PV = 1 ponto de Sangue temporário"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 12,
                descricao:
                "1 PV = +2 dano até limite 20"
            }

        ]
    },

    {
        nome: "Sangue Sem Fim",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "Abaixo de 50% PV pode curar 20 PV"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 8,
                descricao:
                "Cura aumenta para 30 PV"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 12,
                descricao:
                "Cura aumenta para 60 PV sem custo de PA"
            }

        ]
    },

    {
        nome: "Crueldade",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "Dano desarmado sobe um passo"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 8,
                descricao:
                "Ataques desarmados recebem +1d4 Sangue"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 12,
                descricao:
                "Punhos viram lâminas 1d6+2"
            }

        ]
    },

    {
        nome: "Sangramento Devastador",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "Todos ataques podem causar Sangramento"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 8,
                descricao:
                "Sangramento recebe +3 dano"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 12,
                descricao:
                "Inimigos recebem -5 contra Sangramento"
            }

        ]
    },

        {
        nome: "Forma Aberrante",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "+5 Intimidação e +3 dano físico"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 8,
                descricao:
                "Dano físico sobe 1 passo"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 12,
                descricao:
                "+5 Atletismo, escala paredes e ignora terreno difícil"
            }

        ]
    },

    {
        nome: "Diabrete",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "+5 Intimidação e +1 ponto permanente de Sangue"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 8,
                descricao:
                "RD igual VIG contra Sangue e +1 dado Intimidação"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 12,
                descricao:
                "Criaturas de Sangue não atacam automaticamente"
            }

        ]
    },

    {
        nome: "Asas Profanas",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 8,
                descricao:
                "Recebe deslocamento aéreo de 12m e ignora terreno difícil"
            }

        ]
    },

    {
        nome: "Alimento",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "Consumir corpos cura 2d4+4 PV"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 8,
                descricao:
                "Cura aumenta para 2d6+6"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 12,
                descricao:
                "Cura aumenta para 2d12+8"
            }

        ]
    },

    {
        nome: "Predador Mental",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "Marca alvo e causa 5 dano sempre que gastar 1 PA"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 8,
                descricao:
                "Dano aumenta para 8"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 12,
                descricao:
                "Dano aumenta para 10"
            }

        ]
    },

    {
        nome: "Sangue Fresco",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "Pode doar até 10 PV para aliados adjacentes"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 8,
                descricao:
                "Limite aumenta para 20 PV"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 12,
                descricao:
                "A cura doada duplica"
            }

        ]
    }

];



// ======================================
// MENU
// ======================================

function openAssimilationMenu(){

    let html = "";

    assimilations.forEach(a => {

        html += `

            <div
                class="assimilation-option"
                onclick="selectAssimilation('${a.nome}')"
            >

                <h3>${a.nome}</h3>

            </div>

        `;

    });

    const menu = document.createElement("div");

    menu.classList.add("assimilation-menu");

    menu.innerHTML = `

        <div class="assimilation-menu-content">

            <div class="menu-header">

                <h2>ASSIMILAÇÕES</h2>

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
// FECHAR MENU
// ======================================

function closeMenu(){

    const menu =
        document.querySelector(".assimilation-menu");

    if(menu){

        menu.remove();

    }

}

// ======================================
// SELECIONAR
// ======================================

function selectAssimilation(nome){

    const assimilation =
        assimilations.find(a => a.nome === nome);

    if(!assimilation) return;

    createAssimilationCard(assimilation);

    closeMenu();

}

// ======================================
// CRIAR CARD
// ======================================

function createAssimilationCard(assimilation){

    const evo =
        assimilation.evolucoes[0];

    const card =
        document.createElement("div");

    card.classList.add("assimilation-card");

    card.dataset.nome =
        assimilation.nome;

    card.dataset.level = 0;

    card.innerHTML = `

        <div class="assimilation-header">

            <div>

                <h3>
                    ${assimilation.nome}
                </h3>

                <small class="assimilation-level">
                    ${evo.nivel}
                </small>

            </div>

            <button onclick="removeAssimilation(this)">
                X
            </button>

        </div>

        <div class="assimilation-description">

            ${evo.descricao}

        </div>

        <div class="assimilation-cost">

            Custo:
            <span class="assimilation-pv">
                ${evo.custo}
            </span>
            PV

        </div>

    `;

    // =========================
    // EVOLUIR AO CLICAR
    // =========================

    card.addEventListener("click", function(e){

        if(e.target.tagName === "BUTTON") return;

        evolveAssimilation(this);

    });

    document.getElementById("assimilationList")
    .appendChild(card);

    

}

// ======================================
// EVOLUIR
// ======================================

function evolveAssimilation(card){

    let level =
        Number(card.dataset.level);

    const nome =
        card.dataset.nome;

    const assimilation =
        assimilations.find(a => a.nome === nome);

    if(!assimilation) return;

    // =========================
    // LIMITE
    // =========================

    if(level >= 2) return;

    level++;

    card.dataset.level = level;

    const evo =
        assimilation.evolucoes[level];

    card.querySelector(".assimilation-level")
    .innerText = evo.nivel;

    card.querySelector(".assimilation-description")
    .innerText = evo.descricao;

    card.querySelector(".assimilation-pv")
    .innerText = evo.custo;

    

}

// ======================================
// REMOVER
// ======================================

function removeAssimilation(button){

    button.closest(".assimilation-card")
    .remove();

    

}

// ======================================
// BOTÃO
// ======================================

const assimilationBtn =
    document.getElementById("assimilationBtn");

if(assimilationBtn){

    assimilationBtn.addEventListener(
        "click",
        openAssimilationMenu
    );

}

const assimilationObserver =
new MutationObserver(() => {

    atualizarStatus();

});

assimilationObserver.observe(

    document.getElementById("assimilationList"),

    {
        childList: true,
        subtree: true,
        characterData: true
    }

);