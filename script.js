const inventario = [];
}

pesquisaItem.addEventListener("input", (e) => {
  const valor = e.target.value.toLowerCase();

  const filtrados = itens.filter((item) =>
    item.nome.toLowerCase().includes(valor)
  );

  renderizarItens(filtrados);
});

function carregarCondicoes() {
  condicoes.forEach((condicao) => {
    const option = document.createElement("option");

    option.value = condicao;
    option.textContent = condicao;

    condicaoSelect.appendChild(option);
  });
}

function adicionarCondicao() {
  const nome = condicaoSelect.value;

  condicoesAtivas.push(nome);

  atualizarCondicoes();
  recalcularStatus();
}

function removerCondicao(index) {
  condicoesAtivas.splice(index, 1);

  atualizarCondicoes();
  recalcularStatus();
}

function atualizarCondicoes() {
  listaCondicoes.innerHTML = "";

  condicoesAtivas.forEach((condicao, index) => {
    const div = document.createElement("div");

    div.className = "condicao-item";

    div.innerHTML = `
      <span>${condicao}</span>
      <button onclick="removerCondicao(${index})">
        X
      </button>
    `;

    listaCondicoes.appendChild(div);
  });
}

function recalcularStatus() {
  let novoPV = pvBase;
  let novoPD = pdBase;

  condicoesAtivas.forEach((condicao) => {
    if (condicao === "Enfraquecido") {
      novoPV -= 10;
    }

    if (condicao === "Traumatizado") {
      novoPD -= 8;
    }
  });

  pvMaxInput.value = novoPV;
  pdMaxInput.value = novoPD;
}

carregarCondicoes();
renderizarItens();