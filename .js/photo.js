const photoInput =
    document.getElementById("photoInput");

const photoPreview =
    document.getElementById("photoPreview");

if(photoInput){

    photoInput.addEventListener("change", function(){

        const file = this.files[0];

        if(!file) return;

        const reader = new FileReader();

        reader.onload = function(e){

            photoPreview.innerHTML = `

                <img
                    src="${e.target.result}"
                    style="
                        width:100%;
                        height:100%;
                        object-fit:cover;
                    "
                >

            `;

        };

        reader.readAsDataURL(file);

    });

}