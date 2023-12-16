// 1: triangle onclick function
function calculateTriangleValueById(){
    const baseInputValue = getElementValue('triangle-base-input');
    const heightInputValue = getElementValue('triangle-height-input');

    // calculation base and height  
    const result =  0.5 * baseInputValue * heightInputValue;
    // set eleement result in area show 
     const setElementValue = setElement('show-area', result);
}
// 2: Recteangle onclick calculation
function calculateRecteangleValueById(){
const widthInputValue = getElementValue('rectangle-width-input');
const lengthInputValue = getElementValue('rectangle-length-input');
// calculation width and length

const recteangleResult = widthInputValue * lengthInputValue ;
// set elemeent result in show area
const setElementValue =  setElement('recteangle-show-area', recteangleResult);

}
//  3 : paralallogram onclick function
function calculateParallelogramValueById(){
    // get eleemnt by id
    const baseInputValue =  getElementValue('parallelogram-base-input');
    const heightInputValue = getElementValue('parallelogram-height-input')
// calculation base and length
const parallelogramResult = baseInputValue * heightInputValue;
// set elemenet result inshow area
const setElementValue =  setElement('parallelogram-show-area', parallelogramResult);
}

// 4: Rhombus onclick function
function calculateRhombusValueById(){
    const digonalOneField = getElementValue('diogonal-one-input');
    const digonalTwoField = getElementValue('diogonal-two-input');
    // calculate digonal in rombush
    const rombushResult = 0.5 * digonalOneField * digonalTwoField;

    // set elemenet result in show area
    const setElementValue = setElement('Rhombus-show-Area', rombushResult)
}
// 5 pentagoan onclick function 
function calculatePentagoanValueById(){
    const peramitterInputValue = getElementValue('pentagon-peramitter-input');
    const baseInputValue = getElementValue('pentagon-base-input');

    // calculate pentagoan 
    const pentagoanResult = 0.5 * peramitterInputValue * baseInputValue;

    // set elemenet 
    const setElementValue = setElement('Pentagoan-show-Area', pentagoanResult)
}
// 6: ellips onclick function
function calculateEllipseValueById(){
const majorInputValue = getElementValue('ellips-major-input');
const minorInputValue = getElementValue('ellips-minor-input');
// calculation ellips
const ellipsResult = 3.14 * majorInputValue * minorInputValue;
const twoFixed= ellipsResult.toFixed(2);
// set elemeent result in show area
const setElementValue = setElement('ellips-show-area', twoFixed)
}



// reuseable function
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