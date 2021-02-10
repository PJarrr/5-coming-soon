
function renderSocials(selector,data) {

    //validation
    if (typeof selector !== 'string' || selector === ''){
        console.error('ERROR: netinkamas selektorius')
        return false;
    }
    if (!Array.isArray(data) || data.length === 0){
        console.error('ERROR:netinkamas data')
        return false;
    }

    //logic
    const DOM = document.querySelector(selector);
    if (!DOM) {
        console.error('ERROR: nepavyko rasti elemento pagal selektoriu');
        return false;
    }

let HTML = '';

for (let i=0; i<data.length; i++){
    const socialObject = data[i];
    //validuojama, kad duomenys objekte yra teisingi
    if(typeof socialObject !== 'object' || 
    Array.isArray(socialObject) === true || 
    !socialObject.href ||
    typeof socialObject.href !== 'string' ||
    !socialObject.icon ||
    typeof socialObject.icon !== 'string')
    {
        console.warn('WARNING: netinkamo formato objektas', socialObject)
        continue
    }

    HTML += `<a href="${socialObject.href}" target="_blank" class="fa fa-${socialObject.icon}"></a>` ;

}
//postlogic validations
    if(HTML === '' ){
        console.error('ERROR: tarp pateiktu duomenu nera tinkamos informacijos');
        return false
    }

//return result
DOM.innerHTML = HTML;
}

export {renderSocials}