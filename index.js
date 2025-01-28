// Logic:
// happy path: user selects 4 flower and clicks submit
// sad path 1: user does not select a flower and clicks submit - error message
// sad path 2: user onlys selects one or less than for flower and clicks submit - error message
// sad path 3: user selects more than 4 flowers and clicks submit - error message


const formSubmitButton = document.getElementById('submit');
const formElements = document.querySelectorAll('input[type="checkbox"]');

let data = [];
const PLANT_LIMIT = 4;


function resetData(data) {
  return (data.length = 0);
}


let checkLimit = () => {
    if (data.length === 0) {
      alert('Please make a selection');
      resetData(data);
      return false;
    }

    if (data.length > PLANT_LIMIT) {
      alert('You can only select 4 plants');
      resetData(data);
      return false;
    }

    if (data.length > 0 && data.length < PLANT_LIMIT) {
      alert('Please select your 4 favourite plants');
      return false;
    }
};

function checkedFormElements() {
    formElements.forEach((element) => {
        if (element.checked === true) {
          return data.push(element.value);
        }
    });
}


function getPollResults() {
    checkedFormElements();
    checkLimit();
}

function formSubmit() {
  if (data.length >= 0 && data) {
    resetData(data);
  }
  getPollResults();
  console.log(data);
  return data;
}

(function start() {
  formSubmitButton.addEventListener('click', function (event) {
    event.preventDefault();
    formSubmit();
  });
})();