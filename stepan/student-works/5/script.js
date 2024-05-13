function souceSelect(souce){
    [...document.querySelectorAll('.left img.souce')].forEach(element => element.style.opacity = 0)
    document.getElementById(souce).style.opacity = 1
    calculatePrice()
}
function cheeseSelect(cheese){
    [...document.querySelectorAll('.left img.cheese')].forEach(element => element.style.opacity = 0)
    document.getElementById(cheese).style.opacity = 1
    calculatePrice()
}
function onToppingSelect(){
    [...document.querySelectorAll('.left img.topping')].forEach(element => element.style.opacity = 0);
    [...document.querySelectorAll('input[name=topping]:checked')].forEach(element => document.getElementById(element.value).style.opacity = 1)
    calculatePrice()
}

const prices = {
    'pepperoni':800,
    'peppers':300,
    'spinach':200,
    'ham':400,
    'onions':100,
    'bacon':400,
    'olives':200,
    'chicken':600,
    'pineapple':600,
    'tomatoes':200,
    'italian-sausage':600,
    'mushrooms':400
}


function calculatePrice(){
    let total = 0
    if (document.querySelector('input[name=sauce]:checked')){
        const souce = +document.querySelector('input[name=sauce]:checked').value
        total += souce
    }
    if(document.querySelector('input[name=cheese]:checked')){
        const cheese = +document.querySelector('input[name=cheese]:checked').value
        total += cheese
    }
    [...document.querySelectorAll('input[name=topping]:checked')].forEach(element => total += prices[element.value])
    document.getElementById('total-price').innerHTML = total
}
