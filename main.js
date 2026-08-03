const lifeSystem=document.getElementById("lifeSystem");

const pvSystem=document.getElementById("pvSystem");

const bodySystem=document.getElementById("bodySystem");

lifeSystem.addEventListener(

"change",

toggleLifeSystem

);

function toggleLifeSystem(){

const modo=lifeSystem.value;

pvSystem.style.display=

modo==="pv"

?

"block"

:

"none";

bodySystem.style.display=

modo==="body"

?

"block"

:

"none";

}