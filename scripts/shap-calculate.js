// triangle 
function calculateTriangleValueById(){
    const baseInputValue = getElementValue('triangle-base-input');
    const heightInputValue = getElementValue('triangle-height-input');

    // calculation 

    const result =  0.5 * baseInputValue * heightInputValue;
    // set eleement
     const setElementValue = setElement('show-area', result);
}





function getElementValue(inputFieldId){
  const inputFIeld = document.getElementById(inputFieldId);
  const inputValueString = inputFIeld.value;
  const inputValue = parseInt(inputValueString);
  inputFIeld.value = '';
  return inputValue;
}

// set elemeent value and new text

function setElement(elementId , newTextElement){
    const elemeentField = document.getElementById(elementId);
    elemeentField.innerText = newTextElement ;
}