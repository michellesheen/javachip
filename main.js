const header = document.querySelector("#header")
const image = document.querySelector("#image")
const credit = document.querySelector("#credit")

document.querySelector("#Flora").addEventListener("click", function() {
    header.innerHTML = "Flora Rabbit Fam"
    image.src = "florarabb.avif"
    credit.innerHTML = "© calicocritters.com"
})

document.querySelector("#Latte").addEventListener("click", function() {
    header.innerHTML = "Latte Cat Fam"
    image.src = "lattecat.avif"
    credit.innerHTML = "© calicocritters.com"
})

document.querySelector("#Milk").addEventListener("click", function() {
    header.innerHTML = "Milk Rabbit Fam"
    image.src = "milkrabb.avif"
    credit.innerHTML = "© calicocritters.com"
})
