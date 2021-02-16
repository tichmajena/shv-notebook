let counter = 1;
let cloneBtn = document.querySelector(`#add-step-${counter}`);
let parentlist = document.querySelector('#steps');
let listEl = document.querySelector('#step-wrapper-1');
let saveBtn = document.querySelector('#app-save');


cloneBtn.addEventListener('click', function(event){
   
 let newList = listEl.cloneNode(true);
 counter++;
 let stepCount = newList.querySelector(`.count`);
 let inputEl = newList.querySelector('input');
 let labelEl = newList.querySelector('label');
 
 inputEl.id = "app-step-"+counter;
 labelEl.id = inputEl.id;
 labelEl.for = inputEl.id;
 labelEl.innerText = "Step "+counter;
 inputEl.value = "";
 
 let compoEl = newList.querySelector('.mdl-textfield');

compoEl.setAttribute('data-upgraded', '');
compoEl.classList.remove('is-upgraded');

componentHandler.upgradeElement(compoEl);
 
stepCount.innerHTML = counter;

 parentlist.appendChild(newList);

});

saveBtn.addEventListener('click', saveAppNotes);


function saveAppNotes(){
 console.log('i have been clicked');
 let noteTitleText = document.querySelector('#app-title').value;
 let stepsArray = document.querySelectorAll('.step-field-wrapper');
 let displayEl = document.querySelector('.b-display-notes');
 let titleEl = document.createElement('h3');
 let ulEl = document.createElement('ul');
 
 
 
 
 stepsArray.forEach((step, index) => {
  console.log(index);
  let idNumber = index + 1;
  let stepValue = step.querySelector(`#add-step-${idNumber}`).value;
 
  let liEl = document.createElement('li');
  let itemtext = stepValue;
  liEl.appendChild(itemtext);
  ulEl.appendChild(liEl);
  
 });
 
 titleEl.appendChild(noteTitleText);
 displayEl.appendChild(titleEl);
 displayEl.appendChild(ulEl);
 
}