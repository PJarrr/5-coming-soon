class ProgressBar {
    constructor(selector, data){
        this.selector = selector;
        this.data = data;
        this.DOM = null;
        this.init();
    }

    init(){
        if (!this.isValidSelector()){
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

    render(){
        let HTML = 'demo progress bar content'

        this.DOM.innerHTML += HTML;

    }
}

export {ProgressBar}