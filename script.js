/* =========================================
   STATUS
========================================= */

let pvAtual = 40
let pvMax = 40

let pdAtual = 20
let pdMax = 20

function atualizarStatus(){

    document.getElementById("pvBox").innerHTML =
    `❤️ PV: ${pvAtual}/${pvMax}`

    document.getElementById("pdBox").innerHTML =
    `🧠 PD: ${pdAtual}/${pdMax}`

}

/* =========================================
   BANCO DE ITENS
========================================= */

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
},

{
nome:"Marreta",
dano:"2d8 + 3 + FOR",
critico:"x3",
tipo:"Impacto",
alcance:"Adjacente",
peso:"3 EP"
},

{
nome:"Submetralhadora",
dano:"2d6 + AGI",
critico:"x2",
tipo:"Balístico",
alcance:"1-4",
peso:"3 EP"
},

{
nome:"Bazuca",
dano:"10d8 + AGI",
critico:"x2",
tipo:"Fogo",
alcance:"1-6",
peso:"5 EP"
},

{
nome:"Escudo Grande",
dano:"—",
critico:"—",
tipo:"Defesa",
alcance:"—",
peso:"3 EP"
}

]

/* =========================================
   MODAL
========================================= */

function abrirModal(){

    document.getElementById("modal").style.display = "flex"

}

function fecharModal(){

    document.getElementById("modal").style.display = "none"

}

window.onclick = function(e){

    if(e.target.id === "modal"){
        fecharModal()
    }

}

/* =========================================
   RENDERIZAR ITENS
========================================= */

function renderItens(lista = itens){

    const div = document.getElementById("listaItens")

    div.innerHTML = ""

    lista.forEach(item => {

        div.innerHTML += `

        <div class="card-item">

            <h3>${item.nome}</h3>

            <p>⚔️ Dano: ${item.dano}</p>
            <p>🎯 Crítico: ${item.critico}</p>
            <p>🧩 Tipo: ${item.tipo}</p>
            <p>📏 Alcance: ${item.alcance}</p>
            <p>🎒 Peso: ${item.peso}</p>

            <br>

            <button
            class="botao"
            onclick='adicionarInventario(${JSON.stringify(item)})'>
            Adicionar
            </button>

        </div>

        `

    })

}

renderItens()

/* =========================================
   PESQUISA
========================================= */

function filtrarItens(){

    const texto =
    document.getElementById("pesquisa")
    .value
    .toLowerCase()

    const filtrados = itens.filter(item =>
        item.nome.toLowerCase().includes(texto)
    )

    renderItens(filtrados)

}

/* =========================================
   INVENTÁRIO
========================================= */

function adicionarInventario(item){

    const inventario =
    document.getElementById("inventario")

    inventario.innerHTML += `

    <div class="item">

        <div class="item-info">

            <h3>${item.nome}</h3>

            <p>⚔️ Dano:
            <span class="valor-dano">${item.dano}</span>
            </p>

            <p>🎯 Crítico:
            <span class="valor-critico">${item.critico}</span>
            </p>

            <p>🧩 Tipo:
            ${item.tipo}
            </p>

            <p>📏 Alcance:
            <span class="valor-alcance">${item.alcance}</span>
            </p>

            <p>🎒 Peso:
            ${item.peso}
            </p>

            <div class="customizacao">

                <h4>🔧 Personalização</h4>

                <label>Novo Dano</label>

                <input
                type="text"
                placeholder="Ex: 2d10 + FOR"
                class="input-dano"
                >

                <label>Novo Alcance</label>

                <input
                type="text"
                placeholder="Ex: 1-6"
                class="input-alcance"
                >

                <label>Modificação</label>

                <select class="input-mod">

                    <option>Sem modificação</option>

                    <option>Certeira</option>
                    <option>Cruel</option>
                    <option>Perigosa</option>
                    <option>Eletrificada</option>
                    <option>Espinhosa</option>
                    <option>Pesada</option>
                    <option>Perfurante</option>

                    <option>Alongada</option>
                    <option>Calibre Grosso</option>
                    <option>Pente Rápido</option>
                    <option>Mira Laser</option>
                    <option>Silenciador</option>
                    <option>Explosiva</option>

                </select>

                <button
                class="botao"
                style="margin-top:10px"
                onclick="salvarCustomizacao(this)">
                Salvar Alterações
                </button>

            </div>

        </div>

        <div>

            <button
            class="botao"
            onclick="removerItem(this)">
            Remover
            </button>

        </div>

    </div>

    `

    fecharModal()

}

/* =========================================
   REMOVER ITEM
========================================= */

function removerItem(botao){

    botao.parentElement.parentElement.remove()

}

/* =========================================
   CUSTOMIZAÇÃO
========================================= */

function salvarCustomizacao(botao){

    const item =
    botao.closest(".item")

    const novoDano =
    item.querySelector(".input-dano").value

    const novoAlcance =
    item.querySelector(".input-alcance").value

    const mod =
    item.querySelector(".input-mod").value

    if(novoDano !== ""){

        item.querySelector(".valor-dano")
        .innerText = novoDano

    }

    if(novoAlcance !== ""){

        item.querySelector(".valor-alcance")
        .innerText = novoAlcance

    }

    if(mod !== "Sem modificação"){

        const modExistente =
        item.querySelector(".mod-aplicada")

        if(modExistente){

            modExistente.innerText =
            `🔧 Modificação: ${mod}`

        }else{

            item.querySelector(".item-info")
            .innerHTML += `
            <p class="mod-aplicada">
            🔧 Modificação: ${mod}
            </p>
            `
        }

    }

}

/* =========================================
   CONDIÇÕES
========================================= */

function adicionarCondicao(nome){

    const lista =
    document.getElementById("listaCondicoes")

    const existe =
    [...document.querySelectorAll(".condicao")]
    .find(c => c.dataset.nome === nome)

    if(existe){
        return
    }

    let descricao = ""

    /* =========================
       FÍSICAS
    ========================= */

    if(nome === "Sangramento"){
        descricao =
        "Sofre 1d6 de dano por rodada."
    }

    if(nome === "Envenenamento"){
        descricao =
        "2d4 dano por rodada e -5 em Vigor."
    }

    if(nome === "Paralisia"){
        descricao =
        "Acertos garantidos e falha automática."
    }

    if(nome === "Paralisia Total"){
        descricao =
        "Pode ser finalizado abaixo de 20% PV."
    }

    if(nome === "Caído"){
        descricao =
        "-1 dado físico e -5 Defesa."
    }

    if(nome === "Enjoado"){
        descricao =
        "-3 em testes físicos."
    }

    if(nome === "Morrendo"){
        descricao =
        "Sem PA e inconsciente."
    }

    if(nome === "Enfraquecido"){

        descricao =
        "-5 FOR e -10 PV máximo."

        pvMax -= 10

        if(pvAtual > pvMax){
            pvAtual = pvMax
        }

    }

    if(nome === "Lentidão"){
        descricao =
        "-5 AGI e -3m deslocamento."
    }

    if(nome === "Cansado"){
        descricao =
        "Habilidades custam o dobro."
    }

    if(nome === "Chamas"){
        descricao =
        "1d8 fogo por rodada até gastar 1 PA."
    }

    if(nome === "Anti Vida"){
        descricao =
        "Cura reduzida pela metade."
    }

    /* =========================
       MENTAIS
    ========================= */

    if(nome === "Controlado"){
        descricao =
        "Entrega PA ao conjurador."
    }

    if(nome === "Cego"){
        descricao =
        "-10 visão e ataques distância."
    }

    if(nome === "Surdo"){
        descricao =
        "-10 percepção auditiva."
    }

    if(nome === "Traumatizado"){

        descricao =
        "-5 Vontade e -8 PD máximo."

        pdMax -= 8

        if(pdAtual > pdMax){
            pdAtual = pdMax
        }

    }

    if(nome === "Penumbra"){
        descricao =
        "-5 percepção e -3 reflexos."
    }

    if(nome === "Vulnerável"){
        descricao =
        "Dano bônus dobrado."
    }

    if(nome === "Desprevenido"){
        descricao =
        "Sem reações e -3 Defesa."
    }

    if(nome === "Confuso"){
        descricao =
        "Move aleatoriamente."
    }

    atualizarStatus()

    lista.innerHTML += `

    <div
    class="condicao"
    data-nome="${nome}"
    >

        <button
        class="remover-condicao"
        onclick="removerCondicao(this,'${nome}')">
        ×
        </button>

        <h3>${nome}</h3>

        <p>${descricao}</p>

    </div>

    `

}

/* =========================================
   REMOVER CONDIÇÃO
========================================= */

function removerCondicao(botao,nome){

    if(nome === "Enfraquecido"){

        pvMax += 10

    }

    if(nome === "Traumatizado"){

        pdMax += 8

    }

    atualizarStatus()

    botao.parentElement.remove()

}

/* =========================================
   INICIALIZAR
========================================= */

atualizarStatus()