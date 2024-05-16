var toggleButton = document.querySelector('.toggle');
var modal = document.querySelector('.modal')
var layer = document.querySelector('.layer')

toggleButton.addEventListener('click', () => {
    modal.classList.add("modal-active")
    layer.classList.add("layer-active")
})

layer.addEventListener('click', () => {
    modal.classList.remove("modal-active")
    layer.classList.remove("layer-active")
})