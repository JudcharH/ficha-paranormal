/*==========================================================
                    STATUS.JS
==========================================================*/

const Status = {

    pvAtual: document.getElementById("pvAtual"),
    pvMax: document.getElementById("pvMax"),
    pvTemp: document.getElementById("pvTemp"),

    pdAtual: document.getElementById("pdAtual"),
    pdMax: document.getElementById("pdMax"),
    pdTemp: document.getElementById("pdTemp"),

    paAtual: document.getElementById("paAtual"),
    paMax: document.getElementById("paMaxText"),

    nivel: document.getElementById("nivel"),

    vigor: document.getElementById("vigor"),
    presenca: document.getElementById("presenca"),

    membros:{

        cabeca:document.getElementById("headHP"),

        peito:document.getElementById("chestHP"),

        abdomen:document.getElementById("abdomenHP"),

        bracoE:document.getElementById("leftArmHP"),

        bracoD:document.getElementById("rightArmHP"),

        pernaE:document.getElementById("leftLegHP"),

        pernaD:document.getElementById("rightLegHP")

    }

};

/*==========================================================
                CÁLCULO DOS STATUS
==========================================================*/

function calcularPVMax(){

    const nivel=Number(Status.nivel.value)||1;

    const vigor=Number(Status.vigor.value)||0;

    return (7+vigor)*nivel;

}

function calcularPDMax(){

    const nivel=Number(Status.nivel.value)||1;

    const presenca=Number(Status.presenca.value)||0;

    return (4+presenca)*nivel;

}

function calcularPAMax(){

    const nivel=Number(Status.nivel.value)||1;

    return nivel>=10 ? 4 : 3;

}

/*==========================================================
                ATUALIZA STATUS
==========================================================*/

function atualizarStatus(){

    const pvMax=calcularPVMax();

    const pdMax=calcularPDMax();

    const paMax=calcularPAMax();

    Status.pvMax.value=pvMax;

    Status.pdMax.value=pdMax;

    Status.paMax.textContent=paMax;

    if(Status.pvAtual.value===""){

        Status.pvAtual.value=pvMax;

    }

    if(Status.pdAtual.value===""){

        Status.pdAtual.value=pdMax;

    }

    if(Status.paAtual.value===""){

        Status.paAtual.value=paMax;

    }

    limitarValores();

    atualizarMembros();

}

/*==========================================================
            LIMITE DOS CAMPOS
==========================================================*/

function limitarValores(){

    if(Number(Status.pvAtual.value)>Number(Status.pvMax.value)){

        Status.pvAtual.value=Status.pvMax.value;

    }

    if(Number(Status.pdAtual.value)>Number(Status.pdMax.value)){

        Status.pdAtual.value=Status.pdMax.value;

    }

    if(Number(Status.paAtual.value)>Number(Status.paMax.textContent)){

        Status.paAtual.value=Status.paMax.textContent;

    }

    if(Number(Status.pvAtual.value)<0){

        Status.pvAtual.value=0;

    }

    if(Number(Status.pdAtual.value)<0){

        Status.pdAtual.value=0;

    }

    if(Number(Status.paAtual.value)<0){

        Status.paAtual.value=0;

    }

}

/*==========================================================
                MEMBROS DO CORPO
==========================================================*/

function atualizarMembros(){

    const pvMax=Number(Status.pvMax.value);

    const membro=Math.ceil(pvMax/7);

    Object.values(Status.membros).forEach(input=>{

        if(input){

            input.max=membro;

            if(input.value===""){

                input.value=membro;

            }

            if(Number(input.value)>membro){

                input.value=membro;

            }

            if(Number(input.value)<0){

                input.value=0;

            }

        }

    });

}

/*==========================================================
                EVENTOS
==========================================================*/

Status.nivel.addEventListener("input",atualizarStatus);

Status.vigor.addEventListener("input",atualizarStatus);

Status.presenca.addEventListener("input",atualizarStatus);

Status.pvAtual.addEventListener("input",limitarValores);

Status.pdAtual.addEventListener("input",limitarValores);

Status.paAtual.addEventListener("input",limitarValores);

Status.pvTemp.addEventListener("input",()=>{

    if(Number(Status.pvTemp.value)<0){

        Status.pvTemp.value=0;

    }

});

Status.pdTemp.addEventListener("input",()=>{

    if(Number(Status.pdTemp.value)<0){

        Status.pdTemp.value=0;

    }

});

/*==========================================================
                CURA
==========================================================*/

function curarPV(valor){

    Status.pvAtual.value=

        Math.min(

            Number(Status.pvAtual.value)+valor,

            Number(Status.pvMax.value)

        );

}

function recuperarPD(valor){

    Status.pdAtual.value=

        Math.min(

            Number(Status.pdAtual.value)+valor,

            Number(Status.pdMax.value)

        );

}

/*==========================================================
                DANO
==========================================================*/

function causarDanoPV(valor){

    Status.pvAtual.value=

        Math.max(

            Number(Status.pvAtual.value)-valor,

            0

        );

}

function causarDanoPD(valor){

    Status.pdAtual.value=

        Math.max(

            Number(Status.pdAtual.value)-valor,

            0

        );

}

/*==========================================================
                RESET DE PA
==========================================================*/

function restaurarPA(){

    Status.paAtual.value=

        Number(Status.paMax.textContent);

}

/*==========================================================
                INICIALIZAÇÃO
==========================================================*/

window.addEventListener(

    "DOMContentLoaded",

    ()=>{

        atualizarStatus();

    }

);

/*==========================================================
                STATUS GERAL
==========================================================*/

function personagemVivo(){

    return Number(Status.pvAtual.value)>0;

}

function personagemInsano(){

    return Number(Status.pdAtual.value)<=0;

}

function personagemCaido(){

    return Number(Status.pvAtual.value)<=0;

}

/*==========================================================
                TEMPORÁRIOS
==========================================================*/

function adicionarPVTemporario(valor){

    Status.pvTemp.value=

        Number(Status.pvTemp.value)+valor;

}

function adicionarPDTemporario(valor){

    Status.pdTemp.value=

        Number(Status.pdTemp.value)+valor;

}

function removerPVTemporario(valor){

    Status.pvTemp.value=

        Math.max(

            0,

            Number(Status.pvTemp.value)-valor

        );

}

function removerPDTemporario(valor){

    Status.pdTemp.value=

        Math.max(

            0,

            Number(Status.pdTemp.value)-valor

        );

}

/*==========================================================
                GASTO DE PA
==========================================================*/

function gastarPA(valor=1){

    if(Number(Status.paAtual.value)<valor){

        return false;

    }

    Status.paAtual.value=

        Number(Status.paAtual.value)-valor;

    return true;

}

/*==========================================================
                GASTO DE PD
==========================================================*/

function gastarPD(valor){

    if(Number(Status.pdAtual.value)<valor){

        return false;

    }

    Status.pdAtual.value=

        Number(Status.pdAtual.value)-valor;

    return true;

}

/*==========================================================
                GASTO DE PV
==========================================================*/

function gastarPV(valor){

    if(Number(Status.pvAtual.value)<=valor){

        return false;

    }

    Status.pvAtual.value=

        Number(Status.pvAtual.value)-valor;

    return true;

}

/*==========================================================
                EXPORTAR
==========================================================*/

window.StatusAPI={

    atualizarStatus,

    curarPV,

    recuperarPD,

    causarDanoPV,

    causarDanoPD,

    gastarPV,

    gastarPD,

    gastarPA,

    restaurarPA,

    adicionarPVTemporario,

    adicionarPDTemporario,

    removerPVTemporario,

    removerPDTemporario,

    personagemVivo,

    personagemInsano,

    personagemCaido

};