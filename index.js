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




function addToNumberBank(event) {
    //This line of code is to prevent default submission, I remember Paul talking about this.
    event.preventDefault();

    const userNumbers = form.elements.number.value;
    numbersObject.numberBank.push(userNumbers);

    render();
}

console.log(numbersObject.numberBank);