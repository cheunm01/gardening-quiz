// each question is checkable | JS - id for each flower/ plant - document.getElementById('id')--->>> unquie id/name for each flower/plant
// when the user clicks the button then it is submitted to the server
//

const daisy = document.getElementById('daisy');

const formElements = document.querySelectorAll('input[type="checkbox"]');

let flowerList = formElements.forEach((flower) => {
    console.log(flower);
    console.log(flower.checked);
})

console.log(flowerList);