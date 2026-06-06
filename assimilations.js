// ======================================
// ASSIMILAÇÕES
// ======================================

const assimilations = [

{
    nome: "Predador Nato",

    base: {
        custo: 3,
        efeito: [
            "+1 ponto em um Caminho",
            "+5 para acertar alvos feridos"
        ]
    },

    evolucao1: {
        nome: "Instinto Selvagem",
        custo: 6,
        efeito: [
            "Ataques contra alvos feridos aplicam Sangramento",
            "Ao atingir um alvo ferido pode mover 3m sem gastar PA"
        ]
    },

    evolucao2: {
        nome: "Carnificina Viva",
        custo: 9,
        efeito: [
            "Ao derrotar um alvo realiza um ataque extra",
            "Limite de vezes por cena igual ao Caminho escolhido"
        ]
    },
},

{
    nome: "Sangue Fresco",

    base: {
        custo: 3,
        efeito: [
            "+1 ponto em um Caminho",
            "+2 nos efeitos numéricos do Caminho escolhido"
        ]
    },

    evolucao1: {
        nome: "Troca Sanguínea",
        custo: 6,
        efeito: [
            "Pode reduzir temporariamente 1 ponto de Caminho",
            "Recupera 10 PV por ponto reduzido"
        ]
    },

    evolucao2: {
        nome: "Regeneração Abissal",
        custo: 9,
        efeito: [
            "No início do combate recupera PV igual ao Caminho escolhido",
            "Durante um número de rodadas igual ao Caminho"
        ]
    },
},

{
    nome: "Gigante Imparável",

    base: {
        custo: 3,
        efeito: [
            "+1 ponto em um Caminho",
            "Ao sofrer dano recebe RD igual ao Caminho por 2 rodadas"
        ]
    },

    evolucao1: {
        nome: "Devolução",
        custo: 6,
        efeito: [
            "Ao sofrer dano corpo a corpo causa dano igual ao Caminho ao atacante"
        ]
    },

    evolucao2: {
        nome: "Guerreiro de Sangue",
        custo: 9,
        efeito: [
            "Pode consumir 2 pontos temporários de Caminho para receber +1 FOR, AGI ou VIG",
            "Pode consumir 1 ponto para receber +5 Defesa por 1 rodada"
        ]
    },
},

{
    nome: "Mártir Escarlate",

    base: {
        custo: 3,
        efeito: [
            "+1 ponto em um Caminho",
            "Aliados afetados por seus rituais recebem +2 Defesa"
        ]
    },

    evolucao1: {
        nome: "Sofrimento Dividido",
        custo: 6,
        efeito: [
            "1 vez por rodada pode receber metade do dano de um aliado"
        ]
    },

    evolucao2: {
        nome: "Mártir Vivo",
        custo: 9,
        efeito: [
            "Ao cair para 0 PV um aliado adjacente recupera 50% do PV máximo"
        ]
    }
},

{
    nome: "Tempestade Carmesim",

    base: {
        custo: 3,
        efeito: [
            "+1 ponto em um Caminho",
            "Seus rituais podem atingir +1 alvo"
        ]
    },

    evolucao1: {
        nome: "Sangue Pulverizado",
        custo: 6,
        efeito: [
            "Ao causar dano pode atingir outro alvo adjacente por metade do dano"
        ]
    },

    evolucao2: {
        nome: "Dilúvio Carmesim",
        custo: 9,
        efeito: [
            "1 vez por cena um ritual afeta todos os inimigos da área"
        ]
    }
},

{
    nome: "Elo de Sangue",

    base: {
        custo: 3,
        efeito: [
            "+1 ponto em um Caminho",
            "Marca um alvo por cena"
        ]
    },

    evolucao1: {
        nome: "Dor Compartilhada",
        custo: 6,
        efeito: [
            "Quando sofrer dano o alvo marcado sofre dano igual ao Caminho"
        ]
    },

    evolucao2: {
        nome: "Corrente Carmesim",
        custo: 9,
        efeito: [
            "Metade da cura recebida por você também afeta o alvo marcado"
        ]
    }
},

{
    nome: "Fanático Escarlate",

    base: {
        custo: 3,
        efeito: [
            "+1 ponto em um Caminho",
            "Recebe 1 PE ao aplicar Sangramento"
        ]
    },

    evolucao1: {
        nome: "Culto da Carne",
        custo: 6,
        efeito: [
            "Recupera PV igual ao dano causado por Sangramento"
        ]
    },

    evolucao2: {
        nome: "Êxtase Rubro",
        custo: 9,
        efeito: [
            "Ao derrotar um alvo sangrando recebe +1 PA temporário"
        ]
    }
},

{
    nome: "Devorador de Carne",

    base: {
        custo: 3,
        efeito: [
            "+1 ponto em um Caminho",
            "Recupera PV igual ao valor do Caminho ao causar dano"
        ]
    },

    evolucao1: {
        nome: "Digestão Profana",
        custo: 6,
        efeito: [
            "Ao derrotar um alvo recebe cargas iguais à metade do PV máximo dele"
        ]
    },

    evolucao2: {
        nome: "Predação Suprema",
        custo: 9,
        efeito: [
            "Ao consumir um alvo recebe +5 em um teste relacionado a ele"
        ]
    }
},

{
    nome: "Mutação Latente",

    base: {
        custo: 3,
        efeito: [
            "+1 ponto em um Caminho",
            "Recebe uma mutação adicional"
        ]
    },

    evolucao1: {
        nome: "Evolução Acelerada",
        custo: 6,
        efeito: [
            "Pode trocar uma mutação por cena"
        ]
    },

    evolucao2: {
        nome: "Aberração",
        custo: 9,
        efeito: [
            "Recebe duas mutações adicionais"
        ]
    }
},

{
    nome: "Colosso Rubro",

    base: {
        custo: 3,
        efeito: [
            "+1 ponto em um Caminho",
            "+10 PV máximos"
        ]
    },

    evolucao1: {
        nome: "Massa Aberrante",
        custo: 6,
        efeito: [
            "Recebe RD igual ao valor do Caminho"
        ]
    },

    evolucao2: {
        nome: "Muralha Viva",
        custo: 9,
        efeito: [
            "Ao sofrer dano recebe PV temporários iguais ao Caminho"
        ]
    }
},

{
    nome: "Açougueiro",

    base: {
        custo: 3,
        efeito: [
            "+1 ponto em um Caminho",
            "Ataques desarmados sobem um passo de dano"
        ]
    },

    evolucao1: {
        nome: "Lâminas de Carne",
        custo: 6,
        efeito: [
            "Armas sobem mais um passo de dano"
        ]
    },

    evolucao2: {
        nome: "Carniceiro",
        custo: 9,
        efeito: [
            "Críticos aplicam Sangramento automaticamente"
        ]
    }
},

{
    nome: "Anjo Caído",

    base: {
        custo: 3,
        efeito: [
            "+1 ponto em um Caminho",
            "+3m de deslocamento"
        ]
    },

    evolucao1: {
        nome: "Asas de Carne",
        custo: 6,
        efeito: [
            "Pode voar por rodadas iguais ao Caminho"
        ]
    },

    evolucao2: {
        nome: "Arcanjo Profano",
        custo: 9,
        efeito: [
            "Voo durante toda a cena",
            "+5 Intimidação"
        ]
    }
},

{
    nome: "Camuflado",

    base: {
        custo: 3,
        efeito: [
            "+1 ponto em um Caminho",
            "+5 Enganação"
        ]
    },

    evolucao1: {
        nome: "Roubo de Aparência",
        custo: 6,
        efeito: [
            "Pode copiar aparência de outra pessoa"
        ]
    },

    evolucao2: {
        nome: "Presença Vazia",
        custo: 9,
        efeito: [
            "-5 para ser detectado por efeitos paranormais"
        ]
    }
},

{
    nome: "Criador de Carne",

    base: {
        custo: 3,
        efeito: [
            "+1 ponto em um Caminho",
            "Cria um servo com PV = Caminho x5"
        ]
    },

    evolucao1: {
        nome: "Criatura Escarlate",
        custo: 6,
        efeito: [
            "Servos recebem +5 Defesa"
        ]
    },

    evolucao2: {
        nome: "Monstruosidade",
        custo: 9,
        efeito: [
            "Servos recebem PV = Caminho x10"
        ]
    }
},

{
    nome: "Avatar Carmesim",

    evolucao1: {
        nome: "Coração do Sangue",
        custo: 12,
        efeito: [
            "+1 em todos os Caminhos",
            "Pode manter dois efeitos de Caminho simultaneamente",
            "1 vez por cena move 1 ponto entre Caminhos"
        ]
    },

    evolucao2: {
        nome: "Deus da Carne",
        custo: 20,
        efeito: [
            "+1 em todos os Caminhos",
            "Imune a Sangramento",
            "Imune a Envenenado",
            "Imune a Enjoado",
            "Regenera PV igual ao maior Caminho",
            "1 vez por cena dobra um Caminho por 3 rodadas"
        ]
    },
}

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