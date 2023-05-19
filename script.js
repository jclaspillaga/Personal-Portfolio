setTimeout(function() {
    document.querySelector('.two').classList.add('revealed')
}, 2100)

setTimeout(function() {
    document.querySelector('.three').classList.add('revealed')
}, 5100)

setTimeout(function() {
    document.querySelectorAll('.arrow').forEach(button => button.classList.add('revealed'))
}, 8100)


let currentActiveIndex = 1

function showNext() {
    document.querySelector('#presentation').style.opacity = 0
    document.querySelector('#presentation').style.zIndex = 0
   
    let previousSlide = document.querySelector('.active')
    let currentSlide = document.querySelector(`.slide${currentActiveIndex}`)
    if (previousSlide) {
        previousSlide.classList.remove('active')
        }
    currentSlide.classList.add('active')

    if (currentActiveIndex >= 2) {
        currentActiveIndex = 1
    } else {
        currentActiveIndex++
    }
}

function showPrev() {
    document.querySelector('#presentation').style.opacity = 0
    document.querySelector('#presentation').style.zIndex = 0
    
    let previousSlide = document.querySelector('.active')
    let currentSlide = document.querySelector(`.slide${currentActiveIndex}`)
    if (previousSlide) {
        previousSlide.classList.remove('active')
        }
    currentSlide.classList.add('active')

    if (currentActiveIndex <= 1) {
        currentActiveIndex = 2
    } else {
        currentActiveIndex--
    }
}

document.querySelector('.right-button').addEventListener('click', showNext)
document.querySelector('.left-button').addEventListener('click', showPrev)