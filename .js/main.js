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