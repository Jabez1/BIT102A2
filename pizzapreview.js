img = document.getElementById("pizzaPreview");
// Function to set image dimensions

const sizeRadio = document.querySelectorAll('input[name="size"]');
for(const radioButton of sizeRadio){
    radioButton.addEventListener('change', showSelected);
}    

function showSelected(e) {
    console.log(e);
    if(this.checked){
        if (this.value == '6"') {
            img.style.width = "150px";
            img.style.height = "auto";
            img.style.transition = "width 1s ease";
            img.style.transform = "rotate(-30deg)"
        }
        else if (this.value == '9"') {
            img.style.width = "200px";
            img.style.height = "auto";
            img.style.transition = "width 1s ease";
            img.style.transform = "rotate(30deg)"
        }
        else if (this.value == '12"') {
            img.style.width = "300px";
            img.style.height = "auto";
            img.style.transition = "width 1s ease";
            img.style.transform = "rotate(60deg)"
        }
    }
}