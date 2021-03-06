class ProgressBar {
    constructor(selector, data){
        this.selector = selector;
        this.data = data;
        this.DOM = null;
        this.init();
    }

    init(){
        if (!this.isValidSelector() ||
        !this.isValidData()) {
            return false;
        }
        this.render()

    }

    isValidSelector(){
        if (typeof this.selector !== 'string' || this.selector === ''){
            console.error('error: netinkamo formato selektorius')
            return false;
        }

        const DOM = document.querySelector(this.selector);
        if (!DOM) {
            console.error('nurodyto elemento pagal selektoriu nera');
            return false;
        }
        this.DOM = DOM;

        return true;
    }

    isValidData(){
        if(!Array.isArray(this.data) || this.data.length === 0){
        console.error('error: netinkamo formato this.data')
            return false;

        }
        return true;
    }

    isValidProgressBar(progressBar){
        if (typeof progressBar !== 'object' ||
         Array.isArray(progressBar) ||
         progressBar === null ||
         !progressBar.label) {
        
            console.worn("netinkamo formato objektas",progressBar)
        }
        return true;

    }

    generateProgressBar(progressBar){
        return ` <div class="progress-bar">
                <div class="texts">
                    <div class="bar-label">${progressBar.label}</div>
                    <div class="bar-value">${progressBar.value}%</div>
                </div>
                <div class="bar">
                    <div class="progress" style="width:  
                    ${progressBar.value}%;">

                    <div class="loading"></div>
                    
                    </div>
                </div>
            </div>`

    }

    render(){
        let HTML = '';

        for (const progress of this.data) {
            if (!this.isValidProgressBar(progress)) {
                continue;
            }
            HTML += this.generateProgressBar(progress);
        }

        this.DOM.innerHTML += HTML;

    }
}

export {ProgressBar}