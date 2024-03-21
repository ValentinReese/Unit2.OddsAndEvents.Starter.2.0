/*
// TODO: this file! :)

// State
const numbersObject = {
  numberBank: [],
  odds: [],
  evens: [],
};

// References
const form = document.querySelector('form');
const numberBankOutput = document.getElementById('numberBankOutput');
const oddsOutput = document.getElementById('oddsOutput');
const evensOutput = document.getElementById('evensOutput');

// Function to push user input to 'numberBank' Array
form.addEventListener('submit', addToNumberBank);
render();


function render() {
  

}

// guided pratcice ref
   /* // Render sheep on the starting bank
    const numberBankRender = numbersObject.numberBank.map((number) => {
      const li = document.createElement("li");
  
      const button = document.createElement("button");
      button.textContent = number;
      li.append(button);
  
      // TODO: Add event listener so the sheep moves when clicked
  
      return li;
    });
    // numberBankOutput.replaceChildren(...numberBankRender);
  
    // TODO: Render sheep on the target bank
  }*/



/*
function addToNumberBank(event) {
    //This line of code is to prevent default submission, I remember Paul talking about this.
    event.preventDefault();

    const userNumbers = form.elements.number.value;
    numbersObject.numberBank.push(userNumbers);

    render();
}

console.log(numbersObject.numberBank);
*/


// BELOW IS THE CODE FROM LAB. I LEFT EXTENSIVE NOTES AS DEMONSTRATION OF MY UNDERSTANDING OF THE MATERIAL

// STATE "BUSINESS LOGIC"
// We created an Object that will represent our "State".
// It holds three different arrays 
// These Arrays will be used to receive User Input and organize that data. It will also help with rendering.
const state = {
  bankArray: [],
  odds: [],
  evens: [],
};

// Below is just a starter to get the process rolling
//state.bankArray.push();

// REFERENCES. We target each element id attribute and store that data within a variable.
// These variables will be used to interact with DOM
const formRef = document.querySelector("#form");
const sort1BtnRef = document.querySelector("#sortOne");
const sortAllBtnRef = document.querySelector("#sortAll");


//set event to btn1
// Below is the Event Listener attached to 'Sort 1' button.
// The event being listened to is 'click'
// When the event is triggered, we mutate the original array and determine if index[0] of the array is even or odd
// This number ('num') is then pushed to either evens[] or odds[]
sort1BtnRef.addEventListener("click", (e) => {
  const num = state.bankArray.shift();
  if (num % 2 === 0) {
    state.evens.push(num);
  } else {
    state.odds.push(num);
  }
  render();
});

// Below is theEvent Listener attached to 'Sort All' button.
// The event being listened to is 'click'
// When the event is triggered, we utilize the forEach() method to filter through all elements of array.
// We will determine wether or not the element of the array is even or odd.
// Based on the result, the element will be pushed to evens[] or odds[]
sortAllBtnRef.addEventListener("click", () => {
  state.bankArray.forEach((number) => {
    if (number % 2 === 0) {
      state.evens.push(number);
    } else {
      state.odds.push(number);
    }
  });
  state.bankArray.splice(0, state.bankArray.length);
  render();
});

// Event Listener used to receive user input and push it to our intial number bank array
formRef.addEventListener("submit", (event) => {
  event.preventDefault();
  //input ref
  const inputRef = document.querySelector("#number");
  if (isNaN(inputRef.value) || !inputRef.value) {
    // I added an alert to instruct user to enter a number
    alert("Please enter a Number");
    inputRef.value = "";
    return;
  }
  let userInput = parseInt(inputRef.value);
  //push user input to bankArray in state
  state.bankArray.push(userInput);
  //reset user input
  inputRef.value = "";
  //call render
  render();
});

// Render function used to render array elements to browser
function render() {
  const outputRef = document.getElementById("numberBank");
  const oddsRef = document.querySelector("#odds");
  const evensRef = document.querySelector("#evens");
  const oddElemArray = Array.from(oddsRef.children);
  const evenElemArray = Array.from(evensRef.children);
  const outputBankArray = joinArray(state.bankArray);
  outputRef.innerText = outputBankArray;
  const outputOddsArray = joinArray(state.odds);
  oddElemArray[1].innerText = outputOddsArray;
  const outputEvenArray = joinArray(state.evens);
  evenElemArray[1].innerText = outputEvenArray;
}


function joinArray(array) {
  return array.join(", ");
}