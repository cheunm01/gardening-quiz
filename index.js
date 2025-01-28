// each question is checkable | JS - id for each flower/ plant - document.getElementById('id')--->>> unquie id/name for each flower/plant
// when the user clicks the button then it is submitted to the server
// happy path: user selects 4 flower and clicks submit
// sad path 1: user does not select a flower and clicks submit - error message
// sad path 2: user onlys selects one or less than for flower and clicks submit - error message
// sad path 3: user selects more than 4 flowers and clicks submit - error message


// Task List
// create list of json data of the plants
// create onsumbit button -> console.log('submit button clicked')

const daisy = document.getElementById('daisy');
const formSubmitButton = document.getElementById('submit');
const formElements = document.querySelectorAll('input[type="checkbox"]');

formSubmitButton.addEventListener('click', function (event) {
    event.preventDefault();
    formSubmit();
});



function formSubmit() {
  let data = [];
  formElements.forEach((flower) => {
      if(flower.checked === true) {
          console.log(flower);
          data.push(flower.value);
      }
  });
  return data;
}