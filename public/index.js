
let tipValues = [];



function cashTip(){
    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',  
        });

    
    
    let totalTipValue = document.querySelector("#TotalTipValue")
    let cashInput = document.querySelector("#cashInput")
    let cashTip = document.querySelector("#cashTip")
    let totalCashButton = formatter.format(Number(cashInput.value) + Number(cashTip.value))
    for(let i = 0; i <= cashTip.length; i++){
        document.querySelector('.output').value = formatter.format(Number(cashInput.value) + Number(cashTip.value))
    }


    const addTipValue = (ev) =>{
        let tipValue = {
            id: Date.now(),
            name: cashInput.value,
            tipCash: cashTip.value,
            totalTip: totalCashButton
        }
        tipValues.push(tipValue);
        document.form[0].reset();

        console.warn('added', {tipValues});
        localStorage.setItem("My personal pip", JSON.stringify(movies))
    }

    document.querySelector('.output').value = formatter.format(Number(cashInput.value) + Number(cashTip.value))

    document.getElementById
    // document.getElementById("TotalCashTipValue").innerHTML = formatter.format(Number(cashInput.value) + Number(cashTip.value))

    
}


function percetTip(){
    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',  
        });
    let percentBillInput = document.querySelector("#percentBillInput")
let percentNumberInput = document.querySelector("#percentNumberInput")
let totalPercentTip = document.querySelector("#totalPercentTip")
let percentButton = document.querySelector("#percentButton")
document.getElementById("TotalTipValue").innerHTML = formatter.format(Number(percentBillInput.value) + (Number(percentBillInput.value) * Number(percentNumberInput.value)/100))

}






