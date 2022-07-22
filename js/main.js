let details = document.querySelectorAll(".question__sumary")
for(let i of details){
    i.addEventListener("click", function(){
        i.classList.toggle("js-details")
        console.log() 
    })
}