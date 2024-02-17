
let sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-220px";
}

let openResume = document.getElementById("openResume");
openResume.onclick=()=>{
    window.open("./Resources/Saman Nesar Resume.pdf", '_blank');
}
