class Forms {
    constructor(){
        this.forms = [];

        this.init();

    }
    
    init(){
        this.findAllForms();
        this.addEvents();

    }

    findAllForms() {
        const forms = document.querySelectorAll('.form');

        this.forms = [...forms]
        // console.log(forms)
    

    }

    addEvents(){
        for (const form of this.forms){
            const submit = form.querySelector('.btn');

            const inputs = form.querySelectorAll('input')
            const textareas = form.querySelectorAll('textarea')
            // console.log(submit)

            const allInputs =[...inputs, ...textareas]

            submit.addEventListener('click', function(event){
                
                event.preventDefault();

                for (const input of allInputs) {
                    console.log(input.value)

                }



                // console.log(inputs)
                // console.log(textareas)
                // console.log(allInputs)
                // console.log(event)
            })

    }
    }
}


export {Forms}