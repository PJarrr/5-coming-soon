import {clock} from './components/clock.js';

import {ProgressBar} from './components/ProgressBar.js';
import {progressBarData} from './data/progressBarData.js';

import {socialsData} from './data/socialsData.js' ;

import {renderSocials} from './components/renderSocials.js'
// --------------------

clock('.clock','01-04 14:00:00');
renderSocials('footer > .socials', socialsData);




const values1 = document.querySelectorAll('.value1')
const values2 = document.querySelectorAll('.value2')
const progressBarStrip = document.querySelectorAll(".progress-bar-strip")
const progressBarPlace = document.querySelectorAll(".progress-bar-place")


// function stripLength(){
    for (let i = 0; i < progressBarStrip.length; i++){
        progressBarStrip[i].style.width = progressBarData[i].value + "%";

        
        progressBarPlace[i].style.width = (100 - progressBarData[i].value) + "%";
    }
// }


function notShow(){
    for (let i = 0; i < values1.length; i++){
        if (progressBarData[i].value < 90){
            values1[i].classList.add('not-show');
        } else if (progressBarData[i].value > 90){
            values2[i].classList.add('not-show');
            

        }
            
        
        values1[i].innerText = progressBarData[i].value + "%";
        values2[i].innerText = progressBarData[i].value + "%";
        
        // console.log(text)

    }
}

notShow();


