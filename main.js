let $headSlider = document.querySelectorAll(".header__bottom__slider")
let $headerNext = document.querySelector(".header__bottom__next")
let $headerPrev = document.querySelector(".header__bottom__prev")

let i = 0

$headerNext.addEventListener("click", function (){
    if (i===$headSlider.length-1){
        $headSlider[i].classList.remove("active")
        $headSlider[0].classList.add("active")
        i=0
    }

    else{
        $headSlider[i].classList.remove("active")
        i++
        $headSlider[i].classList.add("active")
    }
    console.log(i)
})


$headerPrev.addEventListener("click", function (){
    if (i===0){
        $headSlider[i].classList.remove("active")
        i=$headSlider.length-1
        $headSlider[i].classList.add("active")
    }

    else{
        $headSlider[i].classList.remove("active")
        i--
        $headSlider[i].classList.add("active")
    }
    console.log(i)
})