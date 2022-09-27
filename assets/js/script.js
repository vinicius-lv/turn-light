const buttonOn = document.querySelector('.card__item__on')
const buttonOff = document.querySelector('.card__item__off')
const lightOn = document.querySelector('.card__img__light-on')
const lightOff = document.querySelector('.card__img__light-off')

buttonOn.addEventListener('click', turnOnTheLight = () => {
    lightOff.style.display = 'none'
    lightOn.style.display = 'block'
})

buttonOff.addEventListener('click', turnOffTheLight = () => {
    lightOn.style.display = 'none'
    lightOff.style.display = 'block'
})
