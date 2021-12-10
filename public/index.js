
const cashForm = document.getElementById("totalCashCalculate");
const cashTipTotal = document.getElementById("tipStorage");
const tipCollection = JSON.parse(localStorage.getItem("students")) || [];

function cashTip(){
    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',  
        });

    const regex = new RegExp(/[^0-9]/, 'g');
    
    let totalTipValue = document.querySelector("#TotalTipValue")
    let cashInput = document.querySelector("#cashInput")
    let cashTip = document.querySelector("#cashTip")
    if(cashInput.value.match(regex)){
        alert("Must be a valid Number");
    }else{
        if(cashTip.value.match(regex)){
            alert("Must be a valid Number");
        }else{
            let totalCashButton = formatter.format(Number(cashInput.value) + Number(cashTip.value))
  
            document.querySelector('.output1').value = formatter.format(Number(cashInput.value) + Number(cashTip.value))
        
     
            const addTips = (bill, tip, totalBill) => {
                tipCollection.push({
                  bill,
                  tip,
                  totalBill,
                });
              
                localStorage.setItem("Tips", JSON.stringify(tipCollection));
              
                return { bill, tip, totalBill };
              };
             
            addTips(
                    cashInput.value,
                    cashTip.value,
                    totalCashButton
                );
            const createCashTipTotal = ({ bill, tip, totalBill }) => {
                // Create elements
                const cashDiv = document.createElement("div");
                const cashBill = document.createElement("p");
                const cashTips = document.createElement("p");
                const cashTipTotalBill = document.createElement("h2");
                
                // Fill the content
                cashTipTotalBill.innerText = " Bill: " + totalBill;
                cashTips.innerText = "Tip: " + tip;
                cashBill.innerText = "Total Bill: " + bill;
                
                // Add to the DOM
                cashDiv.append(cashTipTotalBill, cashBill, cashTips);
                cashTipTotal.appendChild(cashDiv);
                
                // cashTipTotal.style.display = tipCollection.length === 0 ? "none" : "flex";
                };
            createCashTipTotal(addTips)
            }     
    }
       
}


function percetTip(){
    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',  
                });
        
        const regex = new RegExp(/[^0-9]/, 'g');
        let percentBillInput = document.querySelector("#percentBillInput")
        let percentNumberInput = document.querySelector("#percentNumberInput")
        let totalPercentTip = document.querySelector("#totalPercentTip")
        let percentButton = document.querySelector("#percentButton")
        if(percentBillInput.value.match(regex)){
            alert("Must be a valid Number");
        }else{
            if(percentNumberInput.value.match(regex)){
                alert("Must be a valid Number");
            }else{
                document.querySelector('.output2').value = formatter.format(Number(percentBillInput.value) + (Number(percentBillInput.value) * Number(percentNumberInput.value)/100))

                // document.getElementById("TotalTipValue").innerHTML = formatter.format(Number(percentBillInput.value) + (Number(percentBillInput.value) * Number(percentNumberInput.value)/100))
                const addTips = (bill, tip, totalBill) => {
                    tipCollection.push({
                      bill,
                      tip,
                      totalBill,
                    });
                  
                    localStorage.setItem("Tips", JSON.stringify(tipCollection));
                  
                    return { bill, tip, totalBill };
                  };
                 
                addTips(
                    percentBillInput.value,
                    (Number(percentBillInput.value) * Number(percentNumberInput.value)/100),
                    formatter.format(Number(percentBillInput.value) + (Number(percentBillInput.value) * Number(percentNumberInput.value)/100))
                    );
    
            }
        }


}



