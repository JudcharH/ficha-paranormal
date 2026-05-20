// =========================
//        FICHA RPG
// =========================

const atributos = {
    forca: 1,
    agi: 1,
    int: 1,
    vig: 1,
    pre: 1
};

const estado = {
    nivel: 1,
    pvAtual: 0,
    pvMax: 0,
    pdAtual: 0,
    pdMax: 0,
    paAtual: 1,
    paMax: 1,
    condicoes: [],
    inventario: [],
    assimilacoes: [],
    pericias: []
};

// =========================
//      CÁLCULOS BASE
// =========================

function calcularPV() {
    let base = (7 + atributos.vig) * estado.nivel;

    if (estado.condicoes.includes("Enfraquecido")) {
        base -= 10;
    }

    return Math.max(base, 1);
}

function calcularPD() {
    let base = (5 + atributos.pre) * estado.nivel;

    if (estado.condicoes.includes("Traumatizado")) {
        base -= 8;
    }

    return Math.max(base, 0);
}

function atualizarStatus() {
    estado.pvMax = calcularPV();
    estado.pdMax = calcularPD();

    document.getElementById("pvAtual").value = estado.pvAtual;
    document.getElementById("pvMax").value = estado.pvMax;

    document.getElementById("pdAtual").value = estado.pdAtual;
    document.getElementById("pdMax").value = estado.pdMax;

    document.getElementById("paAtual").value = estado.paAtual;
    document.getElementById("paMax").value = estado.paMax;

    document.getElementById("nivel").value = estado.nivel;

    atualizarAtributos();
}

function atualizarAtributos() {
    document.getElementById("forca").value = atributos.forca;
    document.getElementById("agi").value = atributos.agi;
    document.getElementById("int").value = atributos.int;
    document.getElementById("vig").value = atributos.vig;
    document.getElementById("pre").value = atributos.pre;
}

// =========================
//      ALTERAR CAMPOS
// =========================

function mudarNivel(valor) {
    estado.nivel = Number(valor);
    atualizarStatus();
}

function mudarAtributo(nome, valor) {
    atributos[nome] = Number(valor);
    atualizarStatus();
}

function mudarPVAtual(valor) {
    estado.pvAtual = Number(valor);
}

function mudarPDAtual(valor) {
    estado.pdAtual = Number(valor);
}

function mudarPAAtual(valor) {
    estado.paAtual = Number(valor);
}

function mudarPAMax(valor) {
    estado.paMax = Number(valor);
}

// =========================
//        CONDIÇÕES
// =========================

const listaCondicoes = [
    "Sangramento",
    "Envenenamento",
    "Paralisia",
    "Paralisia Total",
    "Caído",
    "Enjoado",
    "Morrendo",
    "Enfraquecido",
    "Lentidão",
    "Cansado",
    "Controlado",
    "Cego",
    "Surdo",
    "Traumatizado",
    "Penumbra",
    "Vulnerável",
    "Desprevenido",
    "Confuso",
    "Chamas",
    "Anti-Vida"
];

function renderCondicoes() {
    const area = document.getElementById("condicoesAtivas");
    area.innerHTML = "";

    estado.condicoes.forEach((condicao, index) => {
        const div = document.createElement("div");
        div.className = "condicao-item";

        div.innerHTML = `
            <span>${condicao}</span>
            <button onclick="removerCondicao(${index})">X</button>
        `;

        area.appendChild(div);
    });
}

function adicionarCondicao() {
    const select = document.getElementById("selectCondicao");
    const condicao = select.value;

    if (!estado.condicoes.includes(condicao)) {
        estado.condicoes.push(condicao);
    }

    atualizarStatus();
    renderCondicoes();
}

function removerCondicao(index) {
    estado.condicoes.splice(index, 1);

    atualizarStatus();
    renderCondicoes();
}

// =========================
//        INVENTÁRIO
// =========================

const itensBase = [
    {
        nome: "Espada",
        dano: "1d10 + 2 + FOR",
        distancia: "Corpo a Corpo",
        peso: 3,
        modificacoes: []
    },
    {
        nome: "Pistola",
        dano: "1d8 + AGI",
        distancia: "1-5",
        peso: 2,
        modificacoes: []
    },
    {
        nome: "Katana",
        dano: "1d10 + 2 + FOR",
        distancia: "Corpo a Corpo",
        peso: 3,
        modificacoes: []
    },
    {
        nome: "Fuzil de Assalto",
        dano: "2d8 + AGI",
        distancia: "1-5",
        peso: 4,
        modificacoes: []
    }
];

const modificacoesDisponiveis = [
    "Certeira",
    "Cruel",
    "Perigosa",
    "Eletrificada",
    "Espinhosa",
    "Perfurante",
    "Alongada",
    "Calibre Grosso",
    "Mira Laser",
    "Silenciador",
    "Explosiva",
    "Letal"
];

function renderItensLista() {
    const area = document.getElementById("listaItens");
    area.innerHTML = "";

    itensBase.forEach((item, index) => {
        const div = document.createElement("div");
        div.className = "item-lista";

        div.innerHTML = `
            <strong>${item.nome}</strong>
            <p>Dano: ${item.dano}</p>
            <p>Distância: ${item.distancia}</p>
            <p>Peso: ${item.peso} EP</p>

            <button onclick="adicionarInventario(${index})">
                Adicionar
            </button>
        `;

        area.appendChild(div);
    });
}

function adicionarInventario(index) {
    const item = JSON.parse(JSON.stringify(itensBase[index]));

    estado.inventario.push(item);

    renderInventario();
}

function renderInventario() {
    const area = document.getElementById("inventario");
    area.innerHTML = "";

    estado.inventario.forEach((item, index) => {
        const mods = item.modificacoes
            .map(mod => `<span class="mod-tag">${mod}</span>`)
            .join("");

        const div = document.createElement("div");
        div.className = "inventario-item";

        div.innerHTML = `
            <div class="inventario-topo">
                <strong>${item.nome}</strong>

                <button onclick="removerItem(${index})">
                    Remover
                </button>
            </div>

            <div class="inventario-info">
                <label>Dano</label>
                <input 
                    value="${item.dano}" 
                    onchange="editarDano(${index}, this.value)"
                >

                <label>Distância</label>
                <input 
                    value="${item.distancia}" 
                    onchange="editarDistancia(${index}, this.value)"
                >
            </div>

            <div class="mods-area">
                ${mods}
            </div>

            <button onclick="adicionarModificacao(${index})">
                + Modificação
            </button>
        `;

        area.appendChild(div);
    });
}

function editarDano(index, valor) {
    estado.inventario[index].dano = valor;
}

function editarDistancia(index, valor) {
    estado.inventario[index].distancia = valor;
}

function adicionarModificacao(index) {
    const mod = prompt(
        "Digite a modificação:\n\n" +
        modificacoesDisponiveis.join("\n")
    );

    if (mod) {
        estado.inventario[index].modificacoes.push(mod);
    }

    renderInventario();
}

function removerItem(index) {
    estado.inventario.splice(index, 1);

    renderInventario();
}

// =========================
//        PERÍCIAS
// =========================

const listaPericias = [
    "Atletismo",
    "Acrobacia",
    "Pontaria",
    "Luta",
    "Reflexos",
    "Fortitude",
    "Vontade",
    "Ocultismo",
    "Percepção",
    "Investigação",
    "Medicina",
    "Furtividade",
    "Diplomacia",
    "Tecnologia"
];

function renderPericias() {
    const area = document.getElementById("pericias");
    area.innerHTML = "";

    listaPericias.forEach(pericia => {
        const div = document.createElement("div");
        div.className = "pericia-item";

        div.innerHTML = `
            <span>${pericia}</span>
            <input type="number" value="0">
        `;

        area.appendChild(div);
    });
}

// =========================
//      ASSIMILAÇÕES
// =========================

function adicionarAssimilacao() {
    const input = document.getElementById("novaAssimilacao");

    if (input.value.trim() === "") return;

    estado.assimilacoes.push(input.value);

    input.value = "";

    renderAssimilacoes();
}

function renderAssimilacoes() {
    const area = document.getElementById("assimilacoes");
    area.innerHTML = "";

    estado.assimilacoes.forEach((nome, index) => {
        const div = document.createElement("div");
        div.className = "assimilacao-item";

        div.innerHTML = `
            <span>${nome}</span>

            <button onclick="removerAssimilacao(${index})">
                X
            </button>
        `;

        area.appendChild(div);
    });
}

function removerAssimilacao(index) {
    estado.assimilacoes.splice(index, 1);

    renderAssimilacoes();
}

// =========================
//      SALVAR FICHA
// =========================

function salvarFicha() {
    localStorage.setItem(
        "fichaRPG",
        JSON.stringify({
            estado,
            atributos
        })
    );

    alert("Ficha salva!");
}

function carregarFicha() {
    const save = localStorage.getItem("fichaRPG");

    if (!save) return;

    const dados = JSON.parse(save);

    Object.assign(estado, dados.estado);
    Object.assign(atributos, dados.atributos);

    atualizarStatus();
    renderCondicoes();
    renderInventario();
    renderPericias();
    renderAssimilacoes();
}

// =========================
//      INICIALIZAÇÃO
// =========================

window.onload = () => {
    atualizarStatus();

    renderCondicoes();
    renderItensLista();
    renderInventario();
    renderPericias();
    renderAssimilacoes();

    carregarFicha();
};