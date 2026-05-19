// ==========================
// FOTO PERSONAGEM
// ==========================

const photoInput = document.getElementById("photoInput");
const photoPreview = document.getElementById("photoPreview");

photoInput?.addEventListener("change", function () {

    const file = this.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = function (e) {

        photoPreview.innerHTML = `
            <img src="${e.target.result}" alt="Foto">
        `;

    };

    reader.readAsDataURL(file);

});

// ==========================
// ATRIBUTOS
// ==========================

const forInput = document.getElementById("forca");
const agiInput = document.getElementById("agilidade");
const intInput = document.getElementById("intelecto");
const vigInput = document.getElementById("vigor");
const preInput = document.getElementById("presenca");

const nivelInput = document.getElementById("nivel");

// STATUS
const pvAtual = document.getElementById("pvAtual");
const pvMax = document.getElementById("pvMax");

const pdAtual = document.getElementById("pdAtual");
const pdMax = document.getElementById("pdMax");

const paAtual = document.getElementById("paAtual");
const paMax = document.getElementById("paMax");

const epAtual = document.getElementById("epAtual");
const epMax = document.getElementById("epMax");

// ==========================
// CALCULAR STATUS
// ==========================

function calcularStatus() {

    const nivel = parseInt(nivelInput.value) || 1;

    const FOR = parseInt(forInput.value) || 0;
    const VIG = parseInt(vigInput.value) || 0;
    const PRE = parseInt(preInput.value) || 0;

    // PV
    const pv = (7 + VIG) * nivel;

    // PD
    const pd = (5 + PRE) * nivel;

    // PA
    const pa = 3;

    // EP
    const ep = 5 + FOR;

    // MAX
    pvMax.value = pv;
    pdMax.value = pd;
    paMax.value = pa;
    epMax.value = ep;

    // ATUAL
    if (
        parseInt(pvAtual.value) > pv ||
        pvAtual.value === ""
    ) {
        pvAtual.value = pv;
    }

    if (
        parseInt(pdAtual.value) > pd ||
        pdAtual.value === ""
    ) {
        pdAtual.value = pd;
    }

    if (
        parseInt(paAtual.value) > pa ||
        paAtual.value === ""
    ) {
        paAtual.value = pa;
    }

}

// ==========================
// AUTO UPDATE
// ==========================

[
    forInput,
    agiInput,
    intInput,
    vigInput,
    preInput,
    nivelInput
].forEach(input => {

    input?.addEventListener(
        "input",
        calcularStatus
    );

});

calcularStatus();

// ==========================
// PERÍCIAS
// ==========================

const atributos = {

    "FOR": forInput,
    "AGI": agiInput,
    "INT": intInput,
    "VIG": vigInput,
    "PRE": preInput

};

function atualizarPericias() {

    const rows =
        document.querySelectorAll(".skill-row");

    rows.forEach(row => {

        const attrText =
            row.querySelector(".skill-attr")
                .textContent
                .replace(/[()]/g, "");

        const attrValue =
            parseInt(
                atributos[attrText]?.value
            ) || 1;

        const treino =
            parseInt(
                row.querySelector(".skill-train").value
            ) || 0;

        const outros =
            parseInt(
                row.querySelector(".skill-other").value
            ) || 0;

        const total = treino + outros;

        row.querySelector(".skill-total")
            .textContent = total;

        row.dataset.dice = attrValue;
        row.dataset.total = total;

    });

}

document
.querySelectorAll(".skill-train, .skill-other")
.forEach(input => {

    input.addEventListener(
        "input",
        atualizarPericias
    );

});

[
    forInput,
    agiInput,
    intInput,
    vigInput,
    preInput
].forEach(input => {

    input.addEventListener(
        "input",
        atualizarPericias
    );

});

atualizarPericias();

// ==========================
// ROLAGEM PERÍCIA
// ==========================

document
.querySelectorAll(".roll-skill")
.forEach(button => {

    button.addEventListener("click", function () {

        const row =
            this.closest(".skill-row");

        const diceCount =
            parseInt(row.dataset.dice) || 1;

        const bonus =
            parseInt(row.dataset.total) || 0;

        let rolls = [];

        for (let i = 0; i < diceCount; i++) {

            rolls.push(
                Math.floor(Math.random() * 20) + 1
            );

        }

        const maior = Math.max(...rolls);

        const resultado = maior + bonus;

        const gastarPA =
            confirm("Consumir 1 PA?");

        if (gastarPA) {

            let atual =
                parseInt(paAtual.value) || 0;

            if (atual > 0) {

                paAtual.value = atual - 1;

            }

        }

        alert(
            `🎲 ${row.querySelector(".skill-name").textContent}\n\n` +
            `Rolagens: ${rolls.join(", ")}\n` +
            `Maior: ${maior}\n` +
            `Bônus: +${bonus}\n\n` +
            `Resultado Final: ${resultado}`
        );

    });

});

// ==========================
// ROLAGEM LIVRE
// ==========================

const rollBtn =
    document.getElementById("rollDiceBtn");

rollBtn?.addEventListener("click", () => {

    const quantidade =
        parseInt(
            document.getElementById("diceCount").value
        ) || 1;

    const faces =
        parseInt(
            document.getElementById("diceFaces").value
        ) || 20;

    const bonus =
        parseInt(
            document.getElementById("diceBonus").value
        ) || 0;

    let rolls = [];

    for (let i = 0; i < quantidade; i++) {

        rolls.push(
            Math.floor(Math.random() * faces) + 1
        );

    }

    const soma =
        rolls.reduce((a, b) => a + b, 0) + bonus;

    const gastarPA =
        confirm("Consumir 1 PA?");

    if (gastarPA) {

        let atual =
            parseInt(paAtual.value) || 0;

        if (atual > 0) {

            paAtual.value = atual - 1;

        }

    }

    document.getElementById("diceResult")
    .innerHTML = `

        <div>🎲 Dados: ${rolls.join(", ")}</div>

        <div>⭐ Bônus: +${bonus}</div>

        <div>🔥 Total: ${soma}</div>

    `;

});

// ==========================
// MODAL
// ==========================

const modal =
    document.getElementById("systemModal");

const modalList =
    document.getElementById("modalList");

const modalTitle =
    document.getElementById("modalTitle");

const searchInput =
    document.getElementById("searchInput");

let currentType = "";

// ==========================
// LISTAS
// ==========================

const habilidades = [

    {
        nome: "Ataque Especial",
        custo: 3,
        descricao: "+5 ataque ou dano."
    },

    {
        nome: "Golpe Pesado",
        custo: 3,
        descricao: "Dano sobe um passo."
    },

    {
        nome: "Surto de Ação",
        custo: 5,
        descricao: "+2 PA temporários."
    }

];

const assimilacoes = [

    {
        nome: "Armadura de Sangue",
        descricao: "+5 Defesa."
    },

    {
        nome: "Olhos do Outro Lado",
        descricao: "+5 Percepção."
    }

];

const condicoes = [

    "Sangramento",
    "Caído",
    "Vulnerável",
    "Cego",
    "Agarrado"

];

const inventario = [

    {
        nome: "Katana",
        ep: 3
    },

    {
        nome: "Pistola",
        ep: 2
    },

    {
        nome: "Kit Médico",
        ep: 2
    }

];

// ==========================
// ABRIR MODAL
// ==========================

function openSkillModal() {

    currentType = "habilidade";

    modalTitle.textContent = "HABILIDADES";

    renderModal(habilidades);

    modal.classList.remove("hidden");

}

function openAssimilationModal() {

    currentType = "assimilacao";

    modalTitle.textContent = "ASSIMILAÇÕES";

    renderModal(assimilacoes);

    modal.classList.remove("hidden");

}

function openConditionsModal() {

    currentType = "condicao";

    modalTitle.textContent = "CONDIÇÕES";

    renderModal(
        condicoes.map(c => ({ nome: c }))
    );

    modal.classList.remove("hidden");

}

function openInventoryModal() {

    currentType = "inventario";

    modalTitle.textContent = "INVENTÁRIO";

    renderModal(inventario);

    modal.classList.remove("hidden");

}

function closeModal() {

    modal.classList.add("hidden");

}

// ==========================
// RENDER MODAL
// ==========================

function renderModal(lista) {

    modalList.innerHTML = "";

    lista.forEach(item => {

        const div =
            document.createElement("div");

        div.className = "modal-item";

        div.innerHTML = `

            <div>

                <strong>${item.nome}</strong>

                ${item.descricao ? `
                    <p>${item.descricao}</p>
                ` : ""}

                ${item.custo ? `
                    <small>Custo: ${item.custo} PD</small>
                ` : ""}

                ${item.ep ? `
                    <small>EP: ${item.ep}</small>
                ` : ""}

            </div>

            <button>Adicionar</button>

        `;

        div.querySelector("button")
        .addEventListener("click", () => {

            adicionarItem(item);

        });

        modalList.appendChild(div);

    });

}

// ==========================
// ADICIONAR ITEM
// ==========================

function adicionarItem(item) {

    let target;

    if (currentType === "habilidade") {

        target =
            document.getElementById("skillsList");

        let atualPD =
            parseInt(pdMax.value) || 0;

        pdMax.value =
            Math.max(0, atualPD - item.custo);

    }

    if (currentType === "assimilacao") {

        target =
            document.getElementById("assimilationList");

    }

    if (currentType === "condicao") {

        target =
            document.getElementById("conditionsList");

    }

    if (currentType === "inventario") {

        target =
            document.getElementById("inventoryList");

        let atualEP =
            parseInt(epAtual.value) || 0;

        epAtual.value =
            atualEP + item.ep;

    }

    const card =
        document.createElement("div");

    card.className = "dynamic-card";

    card.innerHTML = `

        <div class="dynamic-content">

            <strong>${item.nome}</strong>

            ${item.descricao ? `
                <p>${item.descricao}</p>
            ` : ""}

            ${item.ep ? `
                <span>EP: ${item.ep}</span>
            ` : ""}

        </div>

        <button class="remove-btn">
            ✕
        </button>

    `;

    card.querySelector(".remove-btn")
    .addEventListener("click", () => {

        if (item.ep) {

            let atualEP =
                parseInt(epAtual.value) || 0;

            epAtual.value =
                Math.max(
                    0,
                    atualEP - (item.ep || 0)
                );

        }

        card.remove();

    });

    target.appendChild(card);

    closeModal();

}

// ==========================
// PESQUISA
// ==========================

searchInput?.addEventListener("input", () => {

    const termo =
        searchInput.value.toLowerCase();

    const items =
        document.querySelectorAll(".modal-item");

    items.forEach(item => {

        item.style.display =
            item.textContent
                .toLowerCase()
                .includes(termo)

                ? "flex"
                : "none";

    });

});