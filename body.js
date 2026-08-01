/*==========================================================
                    BODY.JS
==========================================================*/

const Body={

    image:document.getElementById("bodyImage"),

    members:{

        head:document.getElementById("headHP"),

        chest:document.getElementById("chestHP"),

        abdomen:document.getElementById("abdomenHP"),

        leftArm:document.getElementById("leftArmHP"),

        rightArm:document.getElementById("rightArmHP"),

        leftLeg:document.getElementById("leftLegHP"),

        rightLeg:document.getElementById("rightLegHP")

    }

};

/*==========================================================
                VIDA DOS MEMBROS
==========================================================*/

function getMemberMaxLife(){

    return Math.ceil(

        Number(Status.pvMax.value)/7

    );

}

function resetBodyLife(){

    const max=getMemberMaxLife();

    Object.values(

        Body.members

    ).forEach(member=>{

        member.max=max;

        member.value=max;

    });

}

/*==========================================================
                DANO LOCALIZADO
==========================================================*/

function damageMember(

    member,

    damage

){

    if(

        !Body.members[member]

    ) return;

    const current=

    Number(

        Body.members[member].value

    );

    Body.members[member].value=

    Math.max(

        0,

        current-damage

    );

    updateBodyVisual();

}

/*==========================================================
                CURAR MEMBRO
==========================================================*/

function healMember(

    member,

    value

){

    if(

        !Body.members[member]

    ) return;

    const max=

    getMemberMaxLife();

    const current=

    Number(

        Body.members[member].value

    );

    Body.members[member].value=

    Math.min(

        max,

        current+value

    );

    updateBodyVisual();

}

/*==========================================================
                VISUAL DO CORPO
==========================================================*/

function updateBodyVisual(){

    Object.entries(

        Body.members

    ).forEach(([name,input])=>{

        const max=

        getMemberMaxLife();

        const value=

        Number(input.value);

        const percent=

        value/max;

        input.classList.remove(

            "body-full",

            "body-medium",

            "body-low",

            "body-broken"

        );

        if(percent>.70){

            input.classList.add(

                "body-full"

            );

        }

        else if(percent>.35){

            input.classList.add(

                "body-medium"

            );

        }

        else if(value>0){

            input.classList.add(

                "body-low"

            );

        }

        else{

            input.classList.add(

                "body-broken"

            );

        }

    });

}

/*==========================================================
                LIMITAR VALORES
==========================================================*/

Object.values(

    Body.members

).forEach(member=>{

    member.addEventListener(

        "input",

        ()=>{

            const max=

            getMemberMaxLife();

            if(

                Number(member.value)<0

            ){

                member.value=0;

            }

            if(

                Number(member.value)>max

            ){

                member.value=max;

            }

            updateBodyVisual();

        }

    );

});

/*==========================================================
                INICIALIZAÇÃO
==========================================================*/

window.addEventListener(

    "DOMContentLoaded",

    ()=>{

        resetBodyLife();

        updateBodyVisual();

    }

);

/*==========================================================
                EFEITOS DOS MEMBROS
==========================================================*/

function memberDestroyed(member){

    return Number(

        Body.members[member].value

    )<=0;

}

function bodyEffects(){

    const effects=[];

    if(memberDestroyed("head")){

        effects.push({

            name:"Cabeça",

            effect:"Morto."

        });

    }

    if(memberDestroyed("chest")){

        effects.push({

            name:"Peito",

            effect:"Incapacitado."

        });

    }

    if(memberDestroyed("abdomen")){

        effects.push({

            name:"Abdômen",

            effect:"-2 PA."

        });

    }

    if(memberDestroyed("leftArm")){

        effects.push({

            name:"Braço Esquerdo",

            effect:"Não pode utilizar itens nessa mão."

        });

    }

    if(memberDestroyed("rightArm")){

        effects.push({

            name:"Braço Direito",

            effect:"Não pode atacar com essa mão."

        });

    }

    if(memberDestroyed("leftLeg")){

        effects.push({

            name:"Perna Esquerda",

            effect:"Movimento reduzido pela metade."

        });

    }

    if(memberDestroyed("rightLeg")){

        effects.push({

            name:"Perna Direita",

            effect:"Movimento reduzido pela metade."

        });

    }

    return effects;

}

/*==========================================================
                EXPORTAR
==========================================================*/

window.BodyAPI={

    resetBodyLife,

    damageMember,

    healMember,

    updateBodyVisual,

    bodyEffects,

    memberDestroyed,

    getMemberMaxLife

};