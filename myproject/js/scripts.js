const share = document.getElementById("share")
const tooltip = document.getElementById("tooltip")
const shareIcon = document.getElementById("shareIcon")

share.addEventListener('click', () => {
    tooltip.classList.toggle('tooltip--active')
    share.classList.toggle('share')
    shareIcon.classList.toggle('share__icon')
})