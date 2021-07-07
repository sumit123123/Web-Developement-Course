let element = document.getElementById("FUNBTN");

let blank_div = document.getElementById("card")

element.addEventListener("click",Card_away)

let code = `<div class="container" style=margin:15px; border: 2px solid black; padding-left: 22px;padding-right: 5px;width: 223px;padding-bottom: 7px;margin-left: 534px;>
<h1>Box 1</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptatem sint quasi voluptatum aspernatur! Officia consequuntur eos tempora, neque perspiciatis nobis beatae reprehenderit?</p>
</div>`

function Card_away() {
//    blank_div.innerHTML = code;

    for (let i = 0; i<3; i++){
        blank_div.innerHTML = code;
    }
}