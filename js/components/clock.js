
function clock(selector, deadline) {
//input validation
if (typeof selector !== 'string' || selector === ''){
    console.error("error: netinkamo formato selektorius");
    return false
}
if (typeof deadline !== 'string' || 
deadline === ''){
    console.error("error: netinkamo formato selektorius deadline ");
    return false
}







    //logic
    const clockDOM = document.querySelector(selector);
    if(!clockDOM){
        console.error('error: pagal selektoriu nerastas elementas');
        return false;
    }
    let allValuesDOM = null;
    
    let numbers = calcTime(deadline);
    const labels = ['days', 'hours', 'minutes', 'seconds']
    let HTML = '';


    for (let i = 0; i < 4; i++){
        HTML += 
        `<div class='time'>
                    <div class='value'> ${numberFormat(numbers[i])}</div>

                    <div class='label'>${labels[i]}</div>

                </div>`
    }

    clockDOM.innerHTML = HTML;
    allValuesDOM = document.querySelectorAll(`${selector} .value`)
    console.log(allValuesDOM)

    setInterval(function(){
       numbers = calcTime(deadline);
       for(let i = 0; i<4; i++)
       allValuesDOM[i].innerText = numberFormat(numbers[i]);
    //    console.log(numbers[i]);

    }, 1000)
}

function numberFormat(number){
    if (number > 0 && number < 10){
    return "0" + number;}

    return number
}

function calcTime(deadline){
    const date = new Date();
    const now = Date.now();
    let year = date.getFullYear();
    let fullDeadline = `${year}-${deadline}`
    let fullDeadlineInMiliseconds = (new Date(fullDeadline)).getTime()

   if (fullDeadlineInMiliseconds < now){
   year++;
   fullDeadline = `${year}-${deadline}`;
   fullDeadlineInMiliseconds = (new Date(fullDeadline)).getTime()
   }

    const diff = fullDeadlineInMiliseconds - now;
    const seconds = Math.round(diff / 1000);
  
    
    const days = Math.floor(seconds / 60 / 60 / 24);
    let unusedSeconds = seconds - days * 60 * 60 * 24;
    // const hours = seconds - days 
    const hours = Math.floor(unusedSeconds / 60 /60);
    unusedSeconds -= hours * 60 * 60;
    const minutes = Math.floor(unusedSeconds / 60);
    unusedSeconds -= minutes * 60;



    // console.log(hours)


    return [days, hours, minutes, unusedSeconds]

}
export {clock}