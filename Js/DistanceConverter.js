(function(){
    'use strict';

    let convertType = "Miles";
    const heading = document.querySelector('h1');
    const intro = document.querySelector('p');
    const answerDiv = document.getElementById('answer');
    const form = document.getElementById('converter');

    document.addEventListener('keydown', function(event){
    const key = event.code;
    if(key === 'KeyK')
    {
     convertType = 'Kilometer';
     heading.innerHTML = "Kilometer to Mile converter";
     intro.innerHTML = "type in a number of kilometer and click conver it to the miles";
    } 
    else if(key === 'KeyM')
    {
     convertType = 'Miles';
     heading.innerHTML = " Mile to Kilometer converter";
     intro.innerHTML = "type in a number of miles and click conver it to the kilometer"; 
    } 
    });
    form.addEventListener('submit', function(eve){
    eve.preventDefault();
    const distance = parseFloat(document.getElementById('distance').value);
    if (distance){ 
      if (convertType == "Miles"){
        const conversion = (distance * 1.609344).toFixed(3);
        answerDiv.innerHTML = `<h2>${distance} Mile converts to ${conversion} Kilometer</h2>`;
        answerDiv.className = "fontx";
      }
      else {
        const conversion = (distance * 0.621371132).toFixed(3);
        answerDiv.innerHTML = `<h2>${distance} Kilometer converts to ${conversion} Mile</h2>`;
        answerDiv.className = "fontx";
      }
      
    }
    else{
        answerDiv.innerHTML = '<h2>Error, please enter a number!!</h2>';
        answerDiv.className = "fontx";
    } 
  });
})();
