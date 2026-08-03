// ======================================
// MAIN.JS
// ======================================

// ======================================
// INICIALIZAÇÃO
// ======================================

function initializeCharacter(){

    updateStatus();

    updateTurnDisplay();

    renderInventory();

    renderAbilities();

    renderAssimilations();

    renderConditions();

}

// ======================================
// EVENTOS
// ======================================

function initializeEvents(){

    document

    .querySelectorAll("input")

    .forEach(input=>{

        input.addEventListener(

            "input",

            saveCharacter

        );

    });

}

const lifeSystem=

document.getElementById("lifeSystem");

const pvSystem=

document.getElementById("pvSystem");

const bodySystem=

document.getElementById("bodySystem");

lifeSystem.addEventListener(

"change",

changeLifeSystem

);

function changeLifeSystem(){

if(lifeSystem.value==="pv"){

pvSystem.style.display="block";

bodySystem.style.display="none";

}

else{

pvSystem.style.display="none";

bodySystem.style.display="block";

}

}

// ======================================
// ATRIBUTOS
// ======================================

function initializeAttributes(){

    [

        forca,

        agilidade,

        intelecto,

        vigor,

        presenca

    ]

    .forEach(attr=>{

        attr.addEventListener(

            "input",

            ()=>{

                updateStatus();

                updateSkills();

                saveCharacter();

            }

        );

    });

}

// ======================================
// NÍVEL
// ======================================

nivel.addEventListener(

    "input",

    ()=>{

        updateStatus();

        updateSkills();

        saveCharacter();

    }

);

// ======================================
// PERÍCIAS
// ======================================

document

.querySelectorAll(

    ".skill-row"

)

.forEach(skill=>{

    skill.onclick=function(){

        openSkillEditor(this);

    };

});

// ======================================
// FOTO
// ======================================

if(photoInput){

    photoInput.addEventListener(

        "change",

        saveCharacter

    );

}

// ======================================
// CARREGAR
// ======================================

window.onload=function(){

    loadCharacter();

    initializeCharacter();

    initializeEvents();

    initializeAttributes();

};

// ======================================
// DEBUG
// ======================================

console.log(

    "Ficha Paranormal carregada."

);