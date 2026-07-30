// ======================================
// BODY.JS
// Sistema do Corpo
// ======================================

// ------------------------------
// ELEMENTOS
// ------------------------------

const bodyParts = {

    cabeca:{
        atual:document.getElementById("cabecaAtual"),
        max:document.getElementById("cabecaMax")
    },

    torso:{
        atual:document.getElementById("torsoAtual"),
        max:document.getElementById("torsoMax")
    },

    bracoEsq:{
        atual:document.getElementById("bracoEsqAtual"),
        max:document.getElementById("bracoEsqMax")
    },

    bracoDir:{
        atual:document.getElementById("bracoDirAtual"),
        max:document.getElementById("bracoDirMax")
    },

    pernaEsq:{
        atual:document.getElementById("pernaEsqAtual"),
        max:document.getElementById("pernaEsqMax")
    },

    pernaDir:{
        atual:document.getElementById("pernaDirAtual"),
        max:document.getElementById("pernaDirMax")
    }

};

// ======================================
// CALCULAR MEMBROS
// ======================================

function updateBody(){

    const pvTotal =
    Number(document.getElementById("pvMax").value)||0;

    const cabeca =
    Math.ceil(pvTotal*0.15);

    const torso =
    Math.ceil(pvTotal*0.35);

    const braco =
    Math.ceil(pvTotal*0.125);

    const perna =
    Math.ceil(pvTotal*0.125);

    setMember(bodyParts.cabeca,cabeca);

    setMember(bodyParts.torso,torso);

    setMember(bodyParts.bracoEsq,braco);

    setMember(bodyParts.bracoDir,braco);

    setMember(bodyParts.pernaEsq,perna);

    setMember(bodyParts.pernaDir,perna);

}

// ======================================
// DEFINIR MEMBRO
// ======================================

function setMember(member,max){

    member.max.innerText=max;

    if(member.atual.value===""){

        member.atual.value=max;

    }

    if(Number(member.atual.value)>max){

        member.atual.value=max;

    }

}

// ======================================
// CURA TOTAL
// ======================================

function healBody(){

    Object.values(bodyParts).forEach(part=>{

        part.atual.value=
        part.max.innerText;

    });

}

// ======================================
// DANO
// ======================================

function damageMember(nome,dano){

    const part=
    bodyParts[nome];

    if(!part)return;

    let atual=
    Number(part.atual.value);

    atual-=dano;

    if(atual<0){

        atual=0;

    }

    part.atual.value=atual;

}

// ======================================
// EVENTOS
// ======================================

document
.getElementById("pvMax")
.addEventListener(

    "input",

    updateBody

);

// ======================================
// START
// ======================================

updateBody();