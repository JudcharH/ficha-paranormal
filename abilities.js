// ======================================
// HABILIDADES
// ======================================

const habilidades = [

        {
        nome: "Ataque Especial",
        custo: 3,
        tipo: "PD",
        descricao:
        "Recebe bônus de ataque ou dano. Pode gastar 2 PD para receber +5 em ataque ou dano. A cada +2 PD extras recebe +5 adicional distribuível."
    },

    {
        nome: "Ataque de Oportunidade",
        custo: 3,
        tipo: "PD",
        descricao:
        "Quando um inimigo sai do alcance corpo a corpo pode gastar 2 PD + 1 PA para realizar um ataque. Não funciona contra teleporte ou movimento forçado."
    },

    {
        nome: "Postura Defensiva",
        custo: 3,
        tipo: "PD",
        descricao:
        "Ao usar ação agredir recebe -1d nos ataques, +2 Defesa e bloqueio adicional igual VIG x2 até o próximo turno."
    },

    {
        nome: "Golpe Arriscado",
        custo: 4,
        tipo: "PD",
        descricao:
        "Pode gastar 2 PD para receber -5 Defesa e +10 ataque ou 4 PD para receber -10 Defesa e +20 ataque."
    },

    {
        nome: "Golpe Pesado",
        custo: 3,
        tipo: "PD",
        descricao:
        "Seu dano corpo a corpo sobe um passo."
    },

    {
        nome: "Golpe Demolidor",
        custo: 3,
        tipo: "PD",
        descricao:
        "Ao atacar objetos pode gastar 2 PD para receber +2 dados de dano."
    },

    {
        nome: "Revidar",
        custo: 3,
        tipo: "PD",
        descricao:
        "Ao realizar um contra-ataque bem-sucedido gastando 2 PD + 1 PA recebe apenas metade do dano."
    },

    {
        nome: "Devolver Ataque",
        custo: 5,
        tipo: "PD",
        descricao:
        "Ao contra-atacar compete contra o teste de ataque do alvo. Se superar, acerta o inimigo e não sofre dano."
    },

    {
        nome: "Golpes Potentes",
        custo: 4,
        tipo: "PD",
        descricao:
        "Ataques empurram o alvo 3m. Em crítico empurra 6m. Não funciona em criaturas com dobro da sua estatura."
    },

    {
        nome: "Técnica Secreta",
        custo: 3,
        tipo: "PD",
        descricao:
        "Pode gastar 2 PD para adicionar efeitos especiais ao ataque. Ataques amplos atingem um alvo adicional adjacente."
    },

    {
        nome: "Técnica Sublime",
        custo: 3,
        tipo: "PD",
        descricao:
        "Pode gastar 2 PD para receber +2 margem de ameaça até limite +4."
    },

    {
        nome: "Máquina de Matar",
        custo: 6,
        tipo: "PD",
        descricao:
        "Sua arma recebe +1 margem de ameaça e o dano sobe um passo."
    },

    {
        nome: "Potência Máxima",
        custo: 6,
        tipo: "PD",
        descricao:
        "1 vez por cena pode gastar 1 PA para dobrar todos os bônus de ataque e dano durante 1 turno."
    },

    {
        nome: "Lobo Solitário",
        custo: 5,
        tipo: "PD",
        descricao:
        "Enquanto estiver sozinho recebe +15 PV temporários, +1 dado de dano, +1 PA máximo, +3 Defesa e RD 5."
    },

    {
        nome: "Lutador Incansável",
        custo: 5,
        tipo: "PD",
        descricao:
        "Ao acertar ataque desarmado pode gastar 2 PD para realizar outro ataque sem PA até errar. Cada ataque recebe -3 cumulativo."
    },

    {
        nome: "Tiro Certeiro",
        custo: 3,
        tipo: "PD",
        descricao:
        "Soma AGI no dano de armas de disparo e ignora penalidades por atacar alvos em combate."
    },

    {
        nome: "Ricochete",
        custo: 5,
        tipo: "PD",
        descricao:
        "Pode gastar 2 PD + 1 PA para ricochetear disparos. O alvo fica Desprevenido mas o dano é reduzido pela metade."
    },

    {
        nome: "Segurar o Gatilho",
        custo: 3,
        tipo: "PD",
        descricao:
        "Pode realizar ataques adicionais sem PA. 1º ataque custa 4 PD, 2º custa 8 PD e 3º custa 12 PD."
    },

    {
        nome: "Disparo Letal",
        custo: 3,
        tipo: "PD",
        descricao:
        "Recebe +2 margem de ameaça com armas de disparo."
    },

    {
        nome: "Atirar para Matar",
        custo: 5,
        tipo: "PD",
        descricao:
        "Ao gastar 2 PA, se o disparo critar o dano é maximizado e soma AGI x3 ao dano."
    },

    {
        nome: "Casca Grossa",
        custo: 4,
        tipo: "PD",
        descricao:
        "Recebe +1 PV por nível e soma VIG ao bloqueio."
    },

    {
        nome: "Duro de Matar",
        custo: 4,
        tipo: "PD",
        descricao:
        "Pode gastar 3 PD + 1 PA para reduzir pela metade dano não paranormal."
    },

    {
        nome: "Inquebrável",
        custo: 4,
        tipo: "PD",
        descricao:
        "Abaixo de 50% PV recebe +5 Defesa e RD 5."
    },

    {
        nome: "Cai Dentro",
        custo: 4,
        tipo: "PD",
        descricao:
        "1 vez a cada 2 rodadas pode gastar 3 PD + 1 PA para forçar um inimigo a atacar você."
    },

    {
        nome: "Sempre Alerta",
        custo: 4,
        tipo: "PD",
        descricao:
        "Ao esquivar reduz o dano recebido em AGI x2."
    },

    {
        nome: "Esquiva Aprimorada",
        custo: 4,
        tipo: "PD",
        descricao:
        "Recebe +5 em testes de esquiva."
    },

    {
        nome: "Inabalável",
        custo: 4,
        tipo: "PD",
        descricao:
        "Não sofre penalidades por estar caído ou ser empurrado."
    },

    {
        nome: "Defesa Perfeita",
        custo: 4,
        tipo: "PD",
        descricao:
        "Ignora penalidades associadas ao ataque recebido."
    },

    {
        nome: "Guarda Alta",
        custo: 4,
        tipo: "PD",
        descricao:
        "Enquanto não atacar recebe +5 Defesa e soma VIG na RD."
    },

    {
        nome: "Desvio Absoluto",
        custo: 5,
        tipo: "PD",
        descricao:
        "Pode gastar 2 PA para esquivar completamente de um ataque. Contra críticos o custo sobe para 3 PA."
    },

        {
        nome: "Adaptação Rápida",
        custo: 4,
        tipo: "PD",
        descricao:
        "Ao sofrer dano de um tipo específico recebe RD 5 contra esse dano por 2 rodadas"
    },

    {
        nome: "Surto de Adrenalina",
        custo: 4,
        tipo: "PD",
        descricao:
        "Recebe +1 PA temporário até o final da rodada"
    },

    {
        nome: "Iniciativa Aprimorada",
        custo: 3,
        tipo: "PD",
        descricao:
        "Recebe +5 nos testes de iniciativa"
    },

    {
        nome: "Surto de Ação",
        custo: 5,
        tipo: "PD",
        descricao:
        "1 vez por cena recebe +2 PA temporários"
    },

    {
        nome: "Investida",
        custo: 4,
        tipo: "PD",
        descricao:
        "Ao gastar 2 PA para movimento consome apenas 1 PA"
    },

    {
        nome: "Reposicionamento",
        custo: 3,
        tipo: "PD",
        descricao:
        "Para cada 1 PA gasto move um aliado em até 3m"
    },

    {
        nome: "Passos Leves",
        custo: 4,
        tipo: "PD",
        descricao:
        "Ignora terreno difícil e recebe +3 em Acrobacia"
    },

    {
        nome: "Resgate",
        custo: 3,
        tipo: "PD",
        descricao:
        "Pode se deslocar até 6m sem gastar PA e recebe INT x2 em cura"
    },

    {
        nome: "Inspirar Confiança",
        custo: 4,
        tipo: "PD",
        descricao:
        "Aliado pode rerrolar um teste"
    },

    {
        nome: "Prontidão",
        custo: 6,
        tipo: "PD",
        descricao:
        "No início da cena aliados recebem +1 PA temporário"
    },

    {
        nome: "Brecha na Guarda",
        custo: 4,
        tipo: "PD",
        descricao:
        "Quando aliado adjacente acerta ataque você pode atacar sem gastar PA"
    },

    {
        nome: "Comandar",
        custo: 4,
        tipo: "PD",
        descricao:
        "Concede 1 PA seu a um aliado a até 6m"
    },

    {
        nome: "Oficial Comandante",
        custo: 6,
        tipo: "PD",
        descricao:
        "Aliados recebem +1 PA temporário e PD temporários"
    },

    {
        nome: "Valentão",
        custo: 3,
        tipo: "PD",
        descricao:
        "Pode usar FOR no lugar de PRE em Intimidação"
    },

    {
        nome: "Carteirada",
        custo: 3,
        tipo: "PD",
        descricao:
        "Recebe treinamento em Diplomacia ou Enganação"
    },

    {
        nome: "Contatos Oportunos",
        custo: 5,
        tipo: "PD",
        descricao:
        "Convoca um aliado temporário"
    },

    {
        nome: "Perito",
        custo: 4,
        tipo: "PD",
        descricao:
        "Escolhe perícias igual INT e pode gastar PD para +1d6"
    },

    {
        nome: "Determinação Física",
        custo: 3,
        tipo: "PD",
        descricao:
        "Pode usar FOR ou AGI no lugar de INT em Investigação"
    },

    {
        nome: "Presteza Atlética",
        custo: 3,
        tipo: "PD",
        descricao:
        "Pode usar FOR ou AGI para facilitar testes físicos"
    },

    {
        nome: "Camuflar",
        custo: 3,
        tipo: "PD",
        descricao:
        "Recebe +5 em testes de Furtividade"
    },

    {
        nome: "Soluções Improvisadas",
        custo: 3,
        tipo: "PD",
        descricao:
        "Pode rerrolar 1 dado em um teste"
    },

    {
        nome: "Só Mais um Passo...",
        custo: 3,
        tipo: "PD",
        descricao:
        "Ao atingir 0 PV permanece com 1 PV"
    },

    {
        nome: "Determinação",
        custo: 8,
        tipo: "PD",
        descricao:
        "Sobrevive a um dano que causaria Morte Letal"
    },

    {
        nome: "Chagas da Resistência",
        custo: 3,
        tipo: "PD",
        descricao:
        "Ao atingir 0 PD sofre 5 PV e permanece com 1 PD"
    },

    {
        nome: "Segunda Chance",
        custo: 4,
        tipo: "PD",
        descricao:
        "Ao cair a 0 PV ainda pode realizar 1 ação"
    },

    {
        nome: "Fôlego de Vida",
        custo: 4,
        tipo: "PD",
        descricao:
        "Recupera 1d8 + VIG PV"
    },

    {
        nome: "Paramédico",
        custo: 3,
        tipo: "PD",
        descricao:
        "Cura 2d10 PV"
    },

    {
        nome: "Equipe de Trauma",
        custo: 3,
        tipo: "PD",
        descricao:
        "Remove uma condição negativa do alvo"
    },

    {
        nome: "Reanimação",
        custo: 5,
        tipo: "PD",
        descricao:
        "Revive um personagem na mesma cena"
    },

    {
        nome: "Dorminhoco",
        custo: 3,
        tipo: "PD",
        descricao:
        "Recupera o dobro em cenas de descanso"
    },

    {
        nome: "Recuperando Fôlego",
        custo: 4,
        tipo: "PD",
        descricao:
        "A cada 10 de dano causado ganha 1 PD temporário"
    },

    {
        nome: "Reciclar Energia",
        custo: 5,
        tipo: "PD",
        descricao:
        "Ao falhar ritual recupera metade do PD gasto"
    },

    {
        nome: "Reserva Oculta",
        custo: 4,
        tipo: "PD",
        descricao:
        "No início do combate recebe PD temporários iguais ao PRE"
    },

    {
        nome: "Escolhido Pelo Outro Lado",
        custo: 4,
        tipo: "PD",
        descricao:
        "Recebe acesso aos elementos e começa com 3 pontos elementais"
    },

    {
        nome: "Abrir Fenda",
        custo: 5,
        tipo: "PV",
        descricao:
        "Sacrifica pontos elementais para desbloquear Medo"
    },

    {
        nome: "Elemento Favorito",
        custo: 4,
        tipo: "PD",
        descricao:
        "Recebe +1 ponto elemental agora e outro no nível 10"
    },

    {
        nome: "Nos Olhos do Monstro",
        custo: 3,
        tipo: "PD",
        descricao:
        "Recebe +5 em resistência mental"
    },

    {
        nome: "Camuflar Ocultismo",
        custo: 4,
        tipo: "PD",
        descricao:
        "Oculta símbolos e manifestações ao conjurar"
    },

    {
        nome: "Criar Selo",
        custo: 3,
        tipo: "PD",
        descricao:
        "Armazena um ritual em um item"
    },

    {
        nome: "Especialista em Elemento",
        custo: 3,
        tipo: "PD",
        descricao:
        "Rituais recebem +2 na DT"
    },

    {
        nome: "Conjurador Talentoso",
        custo: 5,
        tipo: "PD",
        descricao:
        "Recebe +5 em testes de conjuração"
    },

    {
        nome: "Guiado pelo Paranormal",
        custo: 3,
        tipo: "PD",
        descricao:
        "Recebe ação extra de investigação"
    },

    {
        nome: "Identificação Paranormal",
        custo: 4,
        tipo: "PD",
        descricao:
        "Recebe +10 em testes de Ocultismo sem conjuração"
    },

    {
        nome: "Improvisar Componentes",
        custo: 3,
        tipo: "PD",
        descricao:
        "Cria componentes improvisados"
    },

    {
        nome: "Conjuração Rápida",
        custo: 5,
        tipo: "PD",
        descricao:
        "Reduz rituais de 3 PA para 2 PA"
    },

    {
        nome: "Ritual Gravado",
        custo: 5,
        tipo: "PD",
        descricao:
        "Pode reutilizar um ritual sem custo adicional"
    },

    {
        nome: "Treinamento Rigoroso",
        custo: 4,
        tipo: "PD",
        descricao:
        "Melhora armas ou escudos"
    },

    {
        nome: "Elemento Resistente",
        custo: 4,
        tipo: "PD",
        descricao:
        "Recebe RD baseada em pontos elementais"
    },

    {
        nome: "Contrato Paranormal",
        custo: 5,
        tipo: "PD",
        descricao:
        "Realiza vínculo com entidade paranormal"
    },

    {
        nome: "Possuído",
        custo: 5,
        tipo: "PD",
        descricao:
        "Permite manifestação parcial de entidade"
    },

    {
        nome: "Amaldiçoador",
        custo: 4,
        tipo: "PD",
        descricao:
        "Imbui equipamentos com dano elemental"
    },

    {
        nome: "Adepto Paranormal",
        custo: 5,
        tipo: "PD",
        descricao:
        "Transfere pontos entre elementos"
    },

    {
        nome: "Dor é uma Benção",
        custo: 5,
        tipo: "PD",
        descricao:
        "Ao sofrer muito dano ganha ponto elemental temporário"
    },

]

// ======================================
// REMOVER CARD
// ======================================

function removeCard(button){

    const card = button.closest(
        ".ability-card, .inventory-card, .assimilation-card"
    );

    if(card){

        card.remove();

    }

}

// ======================================
// MENU
// ======================================

function closeMenu(){

    const menu =
        document.querySelector(".assimilation-menu");

    if(menu){

        menu.remove();

    }

}

function addAbility(){

    let html = "";

    habilidades.forEach(habilidade => {

        html += `

            <div
                class="assimilation-option"
                onclick="selectAbility('${habilidade.nome}')"
            >

                <div>

                    <h3>${habilidade.nome}</h3>

                    <span>
                        ${habilidade.custo} ${habilidade.tipo}
                    </span>

                </div>

            </div>

        `;

    });

    const menu = document.createElement("div");

    menu.classList.add("assimilation-menu");

    menu.innerHTML = `

        <div class="assimilation-menu-content">

            <div class="menu-header">

                <h2>HABILIDADES</h2>

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
// SELECIONAR
// ======================================

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

    closeMenu();

}

// ======================================
// BOTÃO
// ======================================

const abilityBtn =
    document.getElementById("abilityBtn");

if(abilityBtn){

    abilityBtn.addEventListener(
        "click",
        addAbility
    );

}