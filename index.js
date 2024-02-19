const yes = window.document.getElementById("btnYes")
const no = window.document.getElementById("btnNo")
const area = window.document.getElementById("area")
const resp = window.document.getElementById("resp")

no.addEventListener("mouseenter", mouseEnter)
let state = -1

function mouseEnter(){
    state++
    if (state == 0){
        yes.style.transform="translate(+95px)"
        no.style.transform="translate(130px, -150px)"
    }
    if (state == 1){
        no.style.transform="translate(130px, +150px)"
    }
    if (state == 2){
        no.style.transform="translate(-325px, +150px)"
    }
    if (state == 3){
        no.style.transform="translate(-325px, -150px)"
    }
    if (state == 4){
        no.style.transform="translate(+135px, +150px)"
    }
    if (state == 5){
        no.style.transform="translate(+135px, -150px)"
    }
    if (state == 6){
        no.style.transform="translate(-325px, +150px)"
    }
    if (state == 7){
        no.style.transform="translate(-325px, -150px)"
        state = -1
    }
}

yes.addEventListener("click", YesClick)

function YesClick(){
    resp.innerHTML ="Answer"
    yes.style.transform="translate(0px)"
    no.style.transform="translate(0px, 0px)"

    resp.style.opacity= 1;

    setTimeout(function(){
        resp.style.opacity = 0;
      }, 5000 )
    
}