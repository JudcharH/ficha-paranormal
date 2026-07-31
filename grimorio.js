// ======================================
// GRIMORIO.JS
// ======================================

// ======================================
// PALAVRAS SELECIONADAS
// ======================================

let ritualWords=[];

// ======================================
// ABRIR
// ======================================

function openGrimorio(){

    document
    .getElementById("grimorioModal")
    .style.display="flex";

}

// ======================================
// FECHAR
// ======================================

function closeGrimorio(){

    document
    .getElementById("grimorioModal")
    .style.display="none";

}

// ======================================
// LIMPAR
// ======================================

function clearRitual(){

    ritualWords=[];

    document
    .querySelectorAll(".grim-word")
    .forEach(word=>{

        word.classList.remove(
            "selected-word"
        );

    });

    updateGrimorio();

}

// ======================================
// SELECIONAR
// ======================================

function selectWord(button){

    const palavra=
    button.dataset.word;

    if(

        ritualWords.includes(
            palavra
        )

    ){

        return;

    }

    ritualWords.push(
        palavra
    );

    button.classList.add(
        "selected-word"
    );

    updateGrimorio();

}

// ======================================
// TEXTO
// ======================================

function updateGrimorio(){

    const texto=

    ritualWords.join(" → ");

    document
    .getElementById("grimorioSequence")
    .innerText=
    texto;

}

// ======================================
// EVENTOS
// ======================================

document
.querySelectorAll(".grim-word")
.forEach(word=>{

    word.onclick=function(){

        selectWord(this);

    };

});

// ======================================
// BOTÕES
// ======================================

const clearButton=
document.getElementById("clearGrimorio");

if(clearButton){

    clearButton.onclick=
    clearRitual;

}

const openButton=
document.getElementById("openGrimorio");

if(openButton){

    openButton.onclick=
    openGrimorio;

}

// ======================================
// RITUAL.JS
// ======================================

// ======================================
// RITUAL ATUAL
// ======================================

let ritual={

    elemento:null,

    acao:null,

    aprimoramentos:[]

};

// ======================================
// RESET
// ======================================

function resetRitual(){

    ritual={

        elemento:null,

        acao:null,

        aprimoramentos:[]

    };

}

// ======================================
// MONTAR
// ======================================

function buildRitual(){

    resetRitual();

    ritualWords.forEach(word=>{

        const tipo=

        getWordType(word);

        switch(tipo){

            case "elemento":

                ritual.elemento=word;

            break;

            case "acao":

                ritual.acao=word;

            break;

            case "aprimoramento":

                ritual.aprimoramentos.push(word);

            break;

        }

    });

}

// ======================================
// TIPO DA PALAVRA
// ======================================

function getWordType(word){

    if(

        [

            "Sangue",

            "Morte",

            "Energia",

            "Conhecimento",

            "Medo"

        ].includes(word)

    ){

        return "elemento";

    }

    if(

        [

            "Atormentar",

            "Alívio",

            "Resguardar",

            "Preservar",

            "Devastar",

            "Arruinar",

            "Transmutar",

            "Potencializar"

        ].includes(word)

    ){

        return "acao";

    }

    return "aprimoramento";

}

// ======================================
// TEXTO
// ======================================

function ritualDescription(){

    buildRitual();

    let texto="";

    texto+=

    ritual.elemento+"<br>";

    texto+=

    ritual.acao+"<br>";

    if(

        ritual.aprimoramentos.length>0

    ){

        texto+=

        ritual.aprimoramentos.join("<br>");

    }

    return texto;

}

// ======================================
// LANÇAR
// ======================================

function castRitual(){

    buildRitual();

    showDiceResult(

    `

    <div class="dice-skill-name">

        Ritual

    </div>

    <div class="dice-rolls">

        ${ritualDescription()}

    </div>

    `

    );

}

// ======================================
// CALCULAR RITUAL
// ======================================

function calculateRitual(){

    buildRitual();

    let ritualData={

        dano:0,

        cura:0,

        dt:10,

        alcance:"Toque",

        alvos:1,

        custoPV:0,

        custoPD:0,

        dados:1,

        dado:6,

        efeito:""

    };

    // -----------------------------
    // AÇÃO
    // -----------------------------

    switch(ritual.acao){

        case "Atormentar":

            ritualData.dano=1;

            ritualData.dado=6;

        break;

        case "Alívio":

            ritualData.cura=1;

            ritualData.dado=6;

        break;

        case "Resguardar":

            ritualData.efeito="+5 RD";

        break;

        case "Preservar":

            ritualData.efeito="+5 PV Temporários";

        break;

        case "Arruinar":

            ritualData.efeito="-5 Defesa";

        break;

        case "Devastar":

            ritualData.dano=2;

            ritualData.dado=6;

        break;

    }

    // -----------------------------
    // APRIMORAMENTOS
    // -----------------------------

    ritual.aprimoramentos.forEach(mod=>{

        switch(mod){

            case "Canalizar":

                ritualData.dados++;

            break;

            case "Propagar":

                ritualData.alvos++;

            break;

            case "Assegurar":

                ritualData.dt+=5;

            break;

            case "Elevar":

                ritualData.custoPV+=2;

            break;

            case "Focar":

                ritualData.dado+=2;

            break;

            case "Maximizar":

                ritualData.dados*=2;

            break;

        }

    });

    return ritualData;

}

// ======================================
// LANÇAR
// ======================================

function castRitual(){

    const ritualInfo=
    calculateRitual();

    let resultado="";

    if(ritualInfo.dano>0){

        const roll=

        rollDice(

            ritualInfo.dados,

            ritualInfo.dado

        );

        resultado=

        roll.total;

    }

    if(ritualInfo.cura>0){

        const roll=

        rollDice(

            ritualInfo.dados,

            ritualInfo.dado

        );

        resultado=

        roll.total;

    }

    showDiceResult(

    `

    <div class="dice-skill-name">

        ${ritual.elemento}

    </div>

    <div class="dice-rolls">

        ${ritual.acao}

    </div>

    <div class="dice-rolls">

        Dados:

        ${ritualInfo.dados}d${ritualInfo.dado}

    </div>

    <div class="dice-rolls">

        Resultado:

        ${resultado}

    </div>

    <div class="dice-rolls">

        DT:

        ${ritualInfo.dt}

    </div>

    <div class="dice-rolls">

        Alvos:

        ${ritualInfo.alvos}

    </div>

    <div class="dice-rolls">

        ${ritualInfo.efeito}

    </div>

    `

    );

}