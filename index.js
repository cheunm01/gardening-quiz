// each question is checkable | JS - id for each flower/ plant - document.getElementById('id')--->>> unquie id/name for each flower/plant
// when the user clicks the button then it is submitted to the server
// happy path: user selects 4 flower and clicks submit
// sad path 1: user does not select a flower and clicks submit - error message
// sad path 2: user onlys selects one or less than for flower and clicks submit

const daisy = document.getElementById('daisy');

const formElements = document.querySelectorAll('input[type="checkbox"]');

export let flowerList = formElements.forEach((flower) => {
    console.log(flower);
    console.log(flower.checked);
})

console.log(flowerList);