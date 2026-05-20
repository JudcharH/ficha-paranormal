// =========================
// ITENS BASE
// =========================

const itens = [

  {
    nome:"Espada",
    dano:"1d10 + 2 + FOR",
    critico:"x2",
    tipo:"Corte",
    alcance:"Adjacente",
    peso:"3 EP"
  },

  {
    nome:"Katana",
    dano:"1d10 + 2 + FOR",
    critico:"x2",
    tipo:"Corte",
    alcance:"Adjacente",
    peso:"3 EP"
  },

  {
    nome:"Pistola",
    dano:"1d8 + AGI",
    critico:"x3",
    tipo:"Balístico",
    alcance:"1-5",
    peso:"2 EP"
  },

  {
    nome:"Fuzil de assalto",
    dano:"2d8 + AGI",
    critico:"x3",
    tipo:"Balístico",
    alcance:"1-5",
    peso:"4 EP"
  },

  {
    nome:"Motosserra",
    dano:"3d6 + FOR",
    critico:"x3",
    tipo:"Corte",
    alcance:"Adjacente",
    peso:"3 EP"
  },

  {
    nome:"Proteção Pesada",
    dano:"—",
    critico:"—",
    tipo:"Armadura",
    alcance:"—",
    peso:"4 EP"
  }

];

// =========================
// DADOS DO PERSONAGEM
// =========================

let pvAtual = 40;
let pvMaxBase = 40;

let pdAtual = 20;
let pdMaxBase = 20;

let paAtual = 3;

// =========================
// INVENTÁRIO
// =========================

const inventario = [];

// =========================
// CONDIÇÕES
// =========================

const condicoes = [];

// =========================
// STATUS
// =========================

function atualizarStatus(){

  let pvMax = pvMaxBase;
  let pdMax = pdMaxBase;

  // ENFRAQUECIDO
  if(condicoes.includes("Enfraquecido")){
    pvMax -= 10;
  }

  // TRAUMATIZADO
  if(condicoes.includes("Traumatizado")){
    pdMax -= 8;
  }

  // EVITAR NEGATIVOS
  if(pvMax < 1){
    pvMax = 1;
  }

  if(pdMax < 0){
    pdMax = 0;
  }

  // AJUSTAR VIDA/PD
  if(pvAtual > pvMax){
    pvAtual = pvMax;
  }

  if(pdAtual > pdMax){
    pdAtual = pdMax;
  }

  // ATUALIZAR HTML
  document.getElementById("pvAtual").innerText = pvAtual;
  document.getElementById("pvMax").innerText = pvMax;

  document.getElementById("pdAtual").innerText = pdAtual;
  document.getElementById("pdMax").innerText = pdMax;

  document.getElementById("paAtual").innerText = paAtual;

}

// =========================
// CONDIÇÕES
// =========================

function adicionarCondicao(nome){

  if(condicoes.includes(nome)){
    return;
  }

  condicoes.push(nome);

  atualizarCondicoes();
  atualizarStatus();

}

function removerCondicao(nome){

  const index = condicoes.indexOf(nome);

  if(index !== -1){

    condicoes.splice(index,1);

  }

  atualizarCondicoes();
  atualizarStatus();

}

function atualizarCondicoes(){

  const lista = document.getElementById("listaCondicoes");

  lista.innerHTML = "";

  condicoes.forEach(condicao => {

    const div = document.createElement("div");

    div.className = "condicao";

    div.innerHTML = `

      <strong>${condicao}</strong>

      <br><br>

      <button onclick="removerCondicao('${condicao}')">
        Remover
      </button>

    `;

    lista.appendChild(div);

  });

}

// =========================
// MODAL
// =========================

function abrirModal(){

  document.getElementById("modalItens").style.display = "flex";

  renderizarItens(itens);

}

function fecharModal(){

  document.getElementById("modalItens").style.display = "none";

}

// =========================
// RENDERIZAR ITENS
// =========================

function renderizarItens(lista){

  const container = document.getElementById("listaItens");

  container.innerHTML = "";

  lista.forEach(item => {

    const div = document.createElement("div");

    div.className = "item-loja";

    div.innerHTML = `

      <strong>${item.nome}</strong>

      <br><br>

      ⚔️ Dano: ${item.dano}<br>
      🎯 Crítico: ${item.critico}<br>
      🧩 Tipo: ${item.tipo}<br>
      📏 Alcance: ${item.alcance}<br>
      🎒 Peso: ${item.peso}<br><br>

      <button onclick='adicionarInventario(${JSON.stringify(item)})'>
        Adicionar
      </button>

    `;

    container.appendChild(div);

  });

}

// =========================
// PESQUISA
// =========================

function filtrarItens(){

  const pesquisa = document
    .getElementById("pesquisa")
    .value
    .toLowerCase();

  const filtrados = itens.filter(item =>
    item.nome.toLowerCase().includes(pesquisa)
  );

  renderizarItens(filtrados);

}

// =========================
// INVENTÁRIO
// =========================

function adicionarInventario(item){

  inventario.push({

    ...item,

    modificacoes:[]

  });

  atualizarInventario();

}

function atualizarInventario(){

  const lista = document.getElementById("inventarioLista");

  lista.innerHTML = "";

  inventario.forEach((item,index)=>{

    const mods = item.modificacoes.join(", ");

    const div = document.createElement("div");

    div.className = "inventario-item";

    div.innerHTML = `

      <strong>${item.nome}</strong>

      <br><br>

      ⚔️ Dano:
      <input
        value="${item.dano}"
        onchange="editarItem(${index},'dano',this.value)"
      >

      📏 Alcance:
      <input
        value="${item.alcance}"
        onchange="editarItem(${index},'alcance',this.value)"
      >

      🧩 Tipo:
      <input
        value="${item.tipo}"
        onchange="editarItem(${index},'tipo',this.value)"
      >

      🎯 Crítico:
      <input
        value="${item.critico}"
        onchange="editarItem(${index},'critico',this.value)"
      >

      🎒 Peso:
      <input
        value="${item.peso}"
        onchange="editarItem(${index},'peso',this.value)"
      >

      <div class="customizar">

        <strong>Modificações:</strong>

        <br><br>

        ${mods || "Nenhuma"}

        <br><br>

        <button onclick="adicionarModificacao(${index})">
          + Modificação
        </button>

      </div>

      <br>

      <button onclick="removerItem(${index})">
        Remover
      </button>

    `;

    lista.appendChild(div);

  });

}

function editarItem(index,campo,valor){

  inventario[index][campo] = valor;

}

function removerItem(index){

  inventario.splice(index,1);

  atualizarInventario();

}

function adicionarModificacao(index){

  const mod = prompt("Digite a modificação:");

  if(!mod){
    return;
  }

  inventario[index].modificacoes.push(mod);

  atualizarInventario();

}

// =========================
// VIDA E PD
// =========================

function curarPV(valor){

  let pvMax = parseInt(
    document.getElementById("pvMax").innerText
  );

  pvAtual += valor;

  if(pvAtual > pvMax){
    pvAtual = pvMax;
  }

  atualizarStatus();

}

function perderPV(valor){

  pvAtual -= valor;

  if(pvAtual < 0){
    pvAtual = 0;
  }

  atualizarStatus();

}

function ganharPD(valor){

  let pdMax = parseInt(
    document.getElementById("pdMax").innerText
  );

  pdAtual += valor;

  if(pdAtual > pdMax){
    pdAtual = pdMax;
  }

  atualizarStatus();

}

function perderPD(valor){

  pdAtual -= valor;

  if(pdAtual < 0){
    pdAtual = 0;
  }

  atualizarStatus();

}

// =========================
// INICIAR
// =========================

atualizarStatus();
atualizarCondicoes();