let details = document.querySelectorAll(".question__sumary")
for(let i of details){
    i.addEventListener("click", function(){
        i.classList.toggle("js-details")
        console.log() 
    })
}



let link = document.querySelectorAll(".feature-list__link")
let item = document.querySelectorAll(".feature__end")

link.forEach(function(elm){

    elm.addEventListener("click", function(evt){
        evt.preventDefault()

        link.forEach(function(choosen){ 
            choosen.parentElement.classList.remove("feature-list__item--active")
        })
        
        elm.parentElement.classList.add("feature-list__item--active")

        item.forEach(function(textchoosen){
            textchoosen.classList.remove("feature-bottom--wiew")
        })
        document.querySelector(elm.getAttribute("href")).classList.add("feature-bottom--wiew")
    })
})