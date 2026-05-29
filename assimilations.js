// ======================================
// ASSIMILAÇÕES
// ======================================

const assimilations = [

    // ======================================
// 🩸 DOR
// ======================================

{
    nome: "Carnificina Rubra",

    evolucoes: [

        {
            nivel: "BASE",
            custo: 3,
            descricao:
            "+1 ponto em DOR. Seus ataques causam Sangramento."
        },

        {
            nivel: "EVOLUÇÃO I",
            custo: 6,
            descricao:
            "Contra alvos Sangrando causa +5 dano. Ataques de corte viram dano de Sangue."
        },

        {
            nivel: "EVOLUÇÃO II",
            custo: 9,
            descricao:
            "Inimigos abaixo de 33% PV sofrem +2 dados de dano. Ao derrotar um alvo recebe 10 PV temporários."
        }

    ]
},

{
    nome: "Reflexo de Agonia",

    evolucoes: [

        {
            nivel: "BASE",
            custo: 3,
            descricao:
            "+1 ponto em DOR. Quando sofre dano corpo a corpo o atacante sofre dano igual sua DOR."
        },

        {
            nivel: "EVOLUÇÃO I",
            custo: 6,
            descricao:
            "Pode usar a retaliação vezes iguais sua DOR por rodada."
        },

        {
            nivel: "EVOLUÇÃO II",
            custo: 9,
            descricao:
            "Sempre que sofrer dano causa +1 dado de dano ao agressor."
        }

    ]
},

{
    nome: "Lamento Rubro",

    evolucoes: [

        {
            nivel: "BASE",
            custo: 3,
            descricao:
            "+1 ponto em DOR. +5 Intimidação contra alvos feridos."
        },

        {
            nivel: "EVOLUÇÃO I",
            custo: 6,
            descricao:
            "Alvos intimidados recebem -5 em testes físicos."
        },

        {
            nivel: "EVOLUÇÃO II",
            custo: 9,
            descricao:
            "Aliados próximos causam dano extra igual 2x sua DOR."
        }

    ]
},

{
    nome: "Agonia Viva",

    evolucoes: [

        {
            nivel: "BASE",
            custo: 12,
            descricao:
            "Danos mundanos causam metade do dano. Imunidade a Envenenado, Enjoado e Enfraquecido."
        },

        {
            nivel: "EVOLUÇÃO I",
            custo: 16,
            descricao:
            "Sempre que sofrer dano ganha 1 carga de Dor. Pode gastar 1 carga para causar 2d8 dano direto."
        },

        {
            nivel: "EVOLUÇÃO II",
            custo: 20,
            descricao:
            "Ao chegar em 0 PV entra em estado final por 1 rodada. Recupera todos os PA, causa +10 dano e aplica Sangramento."
        }

    ]
},

// ======================================
// 🍖 FOME
// ======================================

{
    nome: "Fome Primordial",

    evolucoes: [

        {
            nivel: "BASE",
            custo: 3,
            descricao:
            "+1 ponto em FOME. Ao causar dano recebe 1 carga de Fome."
        },

        {
            nivel: "EVOLUÇÃO I",
            custo: 6,
            descricao:
            "Pode gastar 1 carga para curar 1d4 PV."
        },

        {
            nivel: "EVOLUÇÃO II",
            custo: 9,
            descricao:
            "Cada 5 cargas concedem +1 dado de dano físico."
        }

    ]
},

{
    nome: "Predador Carmesim",

    evolucoes: [

        {
            nivel: "BASE",
            custo: 3,
            descricao:
            "+1 ponto em FOME. Recebe +5 Rastreamento e Percepção."
        },

        {
            nivel: "EVOLUÇÃO I",
            custo: 6,
            descricao:
            "Ao consumir um inimigo recebe +5 em um teste relacionado ao alvo."
        },

        {
            nivel: "EVOLUÇÃO II",
            custo: 9,
            descricao:
            "Ao derrotar um alvo ganha cargas iguais metade da FOME."
        }

    ]
},

{
    nome: "Banquete Profano",

    evolucoes: [

        {
            nivel: "BASE",
            custo: 3,
            descricao:
            "+1 ponto em FOME. Recupera PV ao consumir criaturas."
        },

        {
            nivel: "EVOLUÇÃO I",
            custo: 6,
            descricao:
            "Recebe PV temporários ao consumir inimigos."
        },

        {
            nivel: "EVOLUÇÃO II",
            custo: 9,
            descricao:
            "Ao consumir um alvo remove condições negativas leves."
        }

    ]
},

{
    nome: "Devorador Escarlate",

    evolucoes: [

        {
            nivel: "BASE",
            custo: 12,
            descricao:
            "Ao derrotar um inimigo pode consumir sua essência e recuperar metade do PV máximo dele."
        },

        {
            nivel: "EVOLUÇÃO I",
            custo: 16,
            descricao:
            "Ao atingir 20 cargas entra em Frenesi."
        },

        {
            nivel: "EVOLUÇÃO II",
            custo: 20,
            descricao:
            "Durante Frenesi consumir um alvo recupera 100% do PV máximo dele."
        }

    ]
},

// ======================================
// 🧬 ASPECTO
// ======================================

{
    nome: "Carne Profana",

    evolucoes: [

        {
            nivel: "BASE",
            custo: 3,
            descricao:
            "+1 ponto em ASPECTO. Escolha 2 mutações menores."
        },

        {
            nivel: "EVOLUÇÃO I",
            custo: 6,
            descricao:
            "Desbloqueia mutações avançadas. Mantém apenas 2 mutações ativas."
        },

        {
            nivel: "EVOLUÇÃO II",
            custo: 9,
            descricao:
            "+5 Defesa, +5 Intimidação e +1 PA temporário."
        }

    ]
},

{
    nome: "Armadura Viva",

    evolucoes: [

        {
            nivel: "BASE",
            custo: 3,
            descricao:
            "+1 ponto em ASPECTO. Reduz 2 dano físico."
        },

        {
            nivel: "EVOLUÇÃO I",
            custo: 6,
            descricao:
            "Escolha 2 tipos de dano mundano para receber metade do dano."
        },

        {
            nivel: "EVOLUÇÃO II",
            custo: 9,
            descricao:
            "Recebe resistência a 4 tipos de dano e +1 VIG."
        }

    ]
},

{
    nome: "Forma Predatória",

    evolucoes: [

        {
            nivel: "BASE",
            custo: 3,
            descricao:
            "+1 ponto em ASPECTO. Seus ataques físicos sobem 1 passo."
        },

        {
            nivel: "EVOLUÇÃO I",
            custo: 6,
            descricao:
            "Transformação parcial. Recebe 5x ASPECTO PV temporários e +1 dado de dano físico."
        },

        {
            nivel: "EVOLUÇÃO II",
            custo: 9,
            descricao:
            "Escolha uma forma monstruosa: Colossal, Ágil ou Blindada."
        }

    ]
},

{
    nome: "Titã Carmesim",

    evolucoes: [

        {
            nivel: "BASE",
            custo: 12,
            descricao:
            "Tamanho Grande, +30 PV, imunidade a Sangramento e regeneração de membros."
        },

        {
            nivel: "EVOLUÇÃO I",
            custo: 16,
            descricao:
            "Tamanho Enorme. Ataques físicos sobem 2 passos e recebe metade do dano físico."
        },

        {
            nivel: "EVOLUÇÃO II",
            custo: 20,
            descricao:
            "Forma colossal final. Recebe 100 PV temporários e ataques acertam todos adjacentes."
        }

    ]
},

// ======================================
// 🛡️ AUXÍLIO
// ======================================

{
    nome: "Carne Protetora",

    evolucoes: [

        {
            nivel: "BASE",
            custo: 3,
            descricao:
            "+1 ponto em AUXÍLIO. Reduz dano em AUXÍLIO x2 de um aliado adjacente."
        },

        {
            nivel: "EVOLUÇÃO I",
            custo: 6,
            descricao:
            "Aliados protegidos recebem +5 Defesa."
        },

        {
            nivel: "EVOLUÇÃO II",
            custo: 9,
            descricao:
            "1 vez por cena pode reduzir pela metade um dano sofrido por um aliado."
        }

    ]
},

{
    nome: "Vínculo Hemorrágico",

    evolucoes: [

        {
            nivel: "BASE",
            custo: 3,
            descricao:
            "+1 ponto em AUXÍLIO. Pode transferir PV seus para aliados."
        },

        {
            nivel: "EVOLUÇÃO I",
            custo: 6,
            descricao:
            "Aliados conectados recebem metade do dano sofrido."
        },

        {
            nivel: "EVOLUÇÃO II",
            custo: 9,
            descricao:
            "Aliados conectados não caem inconscientes enquanto você estiver vivo."
        }

    ]
},

{
    nome: "Anjo Carmesim",

    evolucoes: [

        {
            nivel: "BASE",
            custo: 3,
            descricao:
            "+1 ponto em AUXÍLIO. Aliados próximos recebem +2 em resistências."
        },

        {
            nivel: "EVOLUÇÃO I",
            custo: 6,
            descricao:
            "Aliados protegidos recebem bônus em dano e resistência a Sangramento."
        },

        {
            nivel: "EVOLUÇÃO II",
            custo: 9,
            descricao:
            "1 vez por cena um aliado protegido permanece com 1 PV."
        }

    ]
},

{
    nome: "Trono da Redenção",

    evolucoes: [

        {
            nivel: "BASE",
            custo: 12,
            descricao:
            "Aliados próximos recebem resistência igual AUXÍLIO x2."
        },

        {
            nivel: "EVOLUÇÃO I",
            custo: 16,
            descricao:
            "Todos aliados em alcance curto recebem +5 Defesa e divisão de dano."
        },

        {
            nivel: "EVOLUÇÃO II",
            custo: 20,
            descricao:
            "Todos os efeitos de AUXÍLIO afetam automaticamente todos aliados próximos."
        }

    ]
},

// ======================================
// ❤️ ALÍVIO
// ======================================

{
    nome: "Sangue Restaurador",

    evolucoes: [

        {
            nivel: "BASE",
            custo: 3,
            descricao:
            "+1 ponto em ALÍVIO. Cura recebe bônus igual ALÍVIO."
        },

        {
            nivel: "EVOLUÇÃO I",
            custo: 6,
            descricao:
            "Aliados curados recebem resistência a Sangramento e +1d6 cura."
        },

        {
            nivel: "EVOLUÇÃO II",
            custo: 9,
            descricao:
            "Aliados curados regeneram ALÍVIO PV e remove Sangramento."
        }

    ]
},

{
    nome: "Milagre Carmesim",

    evolucoes: [

        {
            nivel: "BASE",
            custo: 3,
            descricao:
            "+1 ponto em ALÍVIO. Aliados recebem +5 contra Morte."
        },

        {
            nivel: "EVOLUÇÃO I",
            custo: 6,
            descricao:
            "1 vez por cena um aliado permanece com 1 PV."
        },

        {
            nivel: "EVOLUÇÃO II",
            custo: 9,
            descricao:
            "Ao salvar um aliado ele recupera ALÍVIO x3 PV."
        }

    ]
},

{
    nome: "Corpo Imortal",

    evolucoes: [

        {
            nivel: "BASE",
            custo: 3,
            descricao:
            "+1 ponto em ALÍVIO. Recupera 1 PV por rodada."
        },

        {
            nivel: "EVOLUÇÃO I",
            custo: 6,
            descricao:
            "Regeneração aumenta para ALÍVIO PV por rodada e imunidade a Sangramento."
        },

        {
            nivel: "EVOLUÇÃO II",
            custo: 9,
            descricao:
            "Membros começam a se regenerar e limite mortal aumenta para 200%."
        }

    ]
},

{
    nome: "Santo Vermelho",

    evolucoes: [

        {
            nivel: "BASE",
            custo: 12,
            descricao:
            "Curas concedem ALÍVIO x2 PV temporários e remove Sangramento."
        },

        {
            nivel: "EVOLUÇÃO I",
            custo: 16,
            descricao:
            "Rituais de cura afetam múltiplos aliados e removem condições."
        },

        {
            nivel: "EVOLUÇÃO II",
            custo: 20,
            descricao:
            "1 vez por cena um aliado volta com 50% PV ao cair."
        }

    ]
},

]
    





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

    updateStatus();

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

    // ======================================
    // EVOLUIR
    // ======================================

    card.addEventListener("click", function(e){

        if(e.target.tagName === "BUTTON") return;

        evolveAssimilation(this);

    });

    document
    .getElementById("assimilationList")
    .appendChild(card);

    updateStatus();

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

    // ======================================
    // LIMITE
    // ======================================

    if(level >= 2) return;

    level++;

    card.dataset.level = level;

    const evo =
        assimilation.evolucoes[level];

    card.querySelector(
        ".assimilation-level"
    ).innerText = evo.nivel;

    card.querySelector(
        ".assimilation-description"
    ).innerText = evo.descricao;

    card.querySelector(
        ".assimilation-pv"
    ).innerText = evo.custo;

    updateStatus();

}

// ======================================
// REMOVER
// ======================================

function removeAssimilation(button){

    const card =
        button.closest(".assimilation-card");

    if(card){

        card.remove();

        updateStatus();

    }

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