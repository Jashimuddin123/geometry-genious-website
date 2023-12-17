// 1: triangle onclick function
function calculateTriangleValueById(){
    const baseInputValue = getElementValue('triangle-base-input');
    const heightInputValue = getElementValue('triangle-height-input');

    // calculation base and height  
    const result =  0.5 * baseInputValue * heightInputValue;
    // set eleement result in area show 
     const setElementValue = setElement('show-area', result);

    
     // add to calculaton entry 
     addToCalculationEntry('Triangle', result);

    //  validation'
    if(isNaN(baseInputValue)|| (heightInputValue)){
        // alert('Congratulation ,,You press the right number');
       return
      
    }
    else{
        alert('please press the right number');
    }

    
}
// 2: Recteangle onclick calculation
function calculateRecteangleValueById(){
const widthInputValue = getElementValue('rectangle-width-input');
const lengthInputValue = getElementValue('rectangle-length-input');
// calculation width and length

const recteangleResult = widthInputValue * lengthInputValue ;
// set elemeent result in show area
const setElementValue =  setElement('recteangle-show-area', recteangleResult);

// add to calculaton entry 
addToCalculationEntry('Recteangle', recteangleResult);

// validation
if(isNaN(lengthInputValue)|| (widthInputValue)){
    // alert('Congratulation ,,You press the right number');
   return
  
}
else{
    alert('please press the right number');
}
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
// add to calculaton entry 
addToCalculationEntry('Parallelogram', parallelogramResult);

// validation
if(isNaN( heightInputValue)|| (baseInputValue)){
    // alert('Congratulation ,,You press the right number');
   return
  
}
else{
    alert('please press the right number');
}
}

// 4: Rhombus onclick function
function calculateRhombusValueById(){
    const digonalOneField = getElementValue('diogonal-one-input');
    const digonalTwoField = getElementValue('diogonal-two-input');
    // calculate digonal in rombush
    const rombushResult = 0.5 * digonalOneField * digonalTwoField;

    // set elemenet result in show area
    const setElementValue = setElement('Rhombus-show-Area', rombushResult)

    // add to calculaton entry 
    addToCalculationEntry('Rhombush', rombushResult);
    // validation
if(isNaN( digonalTwoField)|| (digonalOneField)){
    // alert('Congratulation ,,You press the right number');
   return
  
}
else{
    alert('please press the right number');
}
}
// 5 pentagoan onclick function 
function calculatePentagoanValueById(){
    const peramitterInputValue = getElementValue('pentagon-peramitter-input');
    const baseInputValue = getElementValue('pentagon-base-input');

    // calculate pentagoan 
    const pentagoanResult = 0.5 * peramitterInputValue * baseInputValue;

    // set elemenet 
    const setElementValue = setElement('Pentagoan-show-Area', pentagoanResult)

    // add to calculaton entry 
     addToCalculationEntry('Pentagoan', pentagoanResult);
    // validation
    if(isNaN( baseInputValue)|| (peramitterInputValue)){
        // alert('Congratulation ,,You press the right number');
       return
      
    }
    else{
        alert('please press the right number');
    }
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
 // add to calculaton entry 
 addToCalculationEntry('Ellipsces', twoFixed);

 // validation
 if(isNaN(  minorInputValue)|| ( majorInputValue)){
    // alert('Congratulation ,,You press the right number');
   return
  
}
else{
    alert('please press the right number');
}
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

// Reuseable add to calculation entry
function addToCalculationEntry(areaType, area){
    const calculationEntry = document.getElementById('calculation-entry');
    const newParagraph =  document.createElement('p');
    const count = calculationEntry.childElementCount;
    newParagraph.classList.add('my-4');
    newParagraph.innerHTML =  `${count+1}. ${areaType} ${area} cm<sup>2</sup> <button
      class="btn btn-sm btn-success ">Clicked</button> `;
    calculationEntry.appendChild(newParagraph);
}