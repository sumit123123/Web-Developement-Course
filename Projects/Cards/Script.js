let element = document.getElementsByClassName("feedback")

function Change_Img() {
    let Code = `
    <img src="Img/Like.png" class="feedback" alt="">
                `
    element.innerHTML = "";

    element.innerHTML = Code;
}

element.addEventListener("click",Change_Img);