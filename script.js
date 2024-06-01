const billInput = document.querySelector('#bill');
const numOfPeople = document.querySelector('#numPeople');
const percNum = document.querySelectorAll('.tips-perc');
const showTips = document.querySelector('#displayResultTips');
const showTotalTips = document.querySelector('#displayResultTotal');
const customBtn = document.querySelector('#customBtn');
const allInput = document.querySelectorAll('.form-input');
const warningMsg = document.querySelectorAll('.warningmsg');
const warningMsgB = document.querySelector('.msg1');
const warningMsgP = document.querySelector('.msg2');


let totalResult = 0;




const validateInputs = () => {
    allInput.forEach( (input) => {
        input.style.border = '1px solid #fc5b5b';
    })
}
const validateMsgB = () => {
    validateInputs();
    warningMsgB.innerHTML = 'Enter your Bill';
    warningMsgP.innerHTML = '';
    return;
}
const validateMsgP = () => {
    validateInputs();
    warningMsgB.innerHTML = '';
    warningMsgP.innerHTML = "Can't be empty";
    return;
}


const tipCalculator = () => {

    percNum.forEach( (num) => {
        num.addEventListener('click', function(e){
            e.preventDefault();
            let c = Number(num.value);
            const a = parseFloat(billInput.value);
            const b = Number(numOfPeople.value);

            if (!a && !b || 
                a < 0 && b < 0 ||
                !a &&  b < 0 ||
                a < 0 && !b ||
                a < 0 && b ||
                a &&  b < 0
            ) {
                if (!allInput.value) {
                    validateInputs();
                    warningMsg.forEach( (msg) => {
                        msg.innerHTML = 'Enter a valid Values';
                    });

                    return;
                }
                return;
              
            }

            else if(!a){

                if (!allInput.value) {
        MsgB();
                    return;
                }
            }
            else if(!b){
                validateMsgP();
                return;
            }

            else {
                allInput.forEach( (input) => {
                    input.style.border = '1px solid rgb(126, 248, 126)';
                }); 

                warningMsg.forEach( (msg) => {
                    msg.innerHTML = '';
                });

                customBtn.style.border = '1px solid rgb(126, 248, 126)';

                let result = Number( ((a * (c/100)) / b).toFixed(2) );
                showTips.innerHTML = `$${result.toFixed(2)}`
                
                
                function addTotal(){
                    totalResult += result;
                    showTotalTips.innerHTML = `$${totalResult.toFixed(2)}`;
                }
               addTotal(result);


            }
        });

    });
} 


const customBtnCal = (e) => {
    window.addEventListener('keypress', function (e){
        


        if (e.key === "Enter") {
            percNum.forEach( (num) => {
                let value = Number(customBtn.value);
                const a = parseFloat(billInput.value);
                const b = Number(numOfPeople.value);
                        
                if (Number(customBtn.value) > 100 ||
                    Number(customBtn.value) < 1 ||
                    !Number(customBtn.value) ||
                    !a && !b || 
                    a < 0 && b < 0 ||
                    !a &&  b < 0 ||
                    a < 0 && !b ||
                    a < 0 && b ||
                    a &&  b < 0
                ) {        
                        validateInputs();
                        warningMsg.forEach( (msg) => {
                            msg.innerHTML = 'Enter a valid Values';
                        });
                        customBtn.style.color = 'red';
                        customBtn.style.border = '1px solid #fc5b5b';

                    return;
                } 

                else if(!a){

                    if (!allInput.value) {
            MsgB();
                        return;
                    }
                }
                else if(!b){
                    validateMsgP();
                    return;
                }
                
                else{
                    allInput.forEach( (input) => {
                        input.style.border = '1px solid rgb(126, 248, 126)';
                    }); 
    
                    warningMsg.forEach( (msg) => {
                        msg.innerHTML = '';
                    });
                    customBtn.style.color = '#000';
                    customBtn.style.border = '1px solid rgb(126, 248, 126)';

                    let result = Number( ((a * (value/100)) / b).toFixed(2) );
                    showTips.innerHTML = `$${result.toFixed(2)}`;
                            
                    function addTotal(){
                        totalResult += result;
                        showTotalTips.innerHTML = `$${totalResult.toFixed(2)}`;
                    }
                            
                    addTotal(result);
                    
                }
            });
        }

        else{
            return;
        }
    
    });
}

let resetBtn = () => {
    document.addEventListener('DOMContentLoaded', function (e) {
        e.stopPropagation();
        
        const inputs = document.querySelector('.content-container').querySelectorAll('input[type="number"]');
        let isInputfilled = true;

        inputs.forEach( (input) => {
            if (input.value.trim() === '') {
                isInputfilled = false;
                document.querySelector('#reset').disabled = true;
                document.querySelector('#reset').classList.add('disabled');
                return;
            }
            else {
                document.querySelector('#reset').disabled = false;
                document.querySelector('#reset').classList.remove('disabled');
            }  
        });

        document.querySelector('.content-container').addEventListener('input', function () {

            inputs.forEach( (input) => {
                if (input.value.trim() !== '') {
                    isInputfilled = true;
                }
            });
            
            if (isInputfilled) {
                document.querySelector('#reset').disabled = false;
                document.querySelector('#reset').classList.remove('disabled');
                return;
            } 
                return;
        });
    });
 
    document.querySelector('#reset').addEventListener('click', function () {
        const inputs = document.querySelector('.content-container').querySelectorAll('input[type="number"]');

        inputs.forEach( (input) => {

            input.value = '';
            showTips.innerHTML = '$0.00';
            showTotalTips.innerHTML = '$0.00';


        });
    });
};



customBtnCal();
tipCalculator()
resetBtn();
