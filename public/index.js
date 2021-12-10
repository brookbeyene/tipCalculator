let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',  
    });
let newTip = (tip) => {
    let name = document.createElement("h3")
    let u = document.createElement("u")
    u.textContent = tip.name
    name.appendChild(u)
    let inputItems = document.createElement("div")
    inputItems.setAttribute("id","nav-item")
    let bill = document.createElement("input")
    bill.value = tip.cashInput
    bill.style.color = "black"
    let sign = document.createElement("p")
    sign.textContent = tip.type === "cash" ? "$" : "%"
    sign.style.color = "white"
    sign.style.display = "inline"
    let tipCash = document.createElement("input")
    tipCash.value = tip.cashTip
    tipCash.style.color = "black"

    let saveEdit = document.createElement("button")
    saveEdit.textContent = "Save Tip"
    saveEdit.setAttribute("onclick",`saveEdit(${JSON.stringify(tip)})`);
    let deleteEdit = document.createElement("button")
    deleteEdit.textContent = "Delete Tip"
    deleteEdit.setAttribute("onclick",`deleteTip(${JSON.stringify(tip)})`);
    let total = document.createElement("h3")
    total.textContent = tip.total
    total.setAttribute("class",`total`);
    let itemDiv = document.createElement("div")
    itemDiv.setAttribute("data-id",tip.id)
    document.querySelector("#nav-items").appendChild(itemDiv)
    itemDiv.appendChild(name)
    itemDiv.appendChild(bill)
    itemDiv.appendChild(sign)
    itemDiv.appendChild(tipCash)
    itemDiv.appendChild(saveEdit)
    itemDiv.appendChild(deleteEdit)

    
    
    // document.querySelector("#nav-items").appendChild(inputItems)

    itemDiv.appendChild(total)
    itemDiv.appendChild(document.createElement("hr"))
}
if (localStorage.getItem("SavedTips") && JSON.parse(localStorage.getItem("SavedTips")).length > 0){
    JSON.parse(localStorage.getItem("SavedTips")).forEach(tip => {
       newTip(tip)
    })
}
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
document.querySelector("#percentTipOutput").value = formatter.format(Number(percentBillInput.value) + (Number(percentBillInput.value) * Number(percentNumberInput.value)/100))
}

function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
  }
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  let openSideNavButton = document.querySelector("#openSideNavButton")
  openSideNavButton.addEventListener("click",(e) =>{
    document.getElementById("mySidenav").style.width = "650px";
  })
let saveCashTip = (e) => {
    let cashNameInput = document.querySelector("#cashNameInput")
    let cashInput = document.querySelector("#cashInput")
    let cashTip = document.querySelector("#cashTip")
    let objTip = {"id":JSON.parse(localStorage.getItem("SavedTips")).length + 1,"name":cashNameInput.value,"cashInput":cashInput.value,"cashTip":cashTip.value,"type":"cash","total":formatter.format(Number(cashTip.value) + Number(cashInput.value))}
    if (!localStorage.getItem("SavedTips") || JSON.parse(localStorage.getItem("SavedTips")).length === 0 ){
        localStorage.setItem("SavedTips",JSON.stringify([]))
    }
    localStorage.setItem("SavedTips",JSON.stringify([...JSON.parse(localStorage.getItem("SavedTips")),objTip]))
    newTip(objTip)
    console.log(cashNameInput.value,cashInput.value,cashTip.value)
}
let savePercentTip = (e) => {
    let percentNameInput = document.querySelector("#percentNameInput")
    let percentBillInput = document.querySelector("#percentBillInput")
    let percentNumberInput = document.querySelector("#percentNumberInput")
    let objTip = {"id":JSON.parse(localStorage.getItem("SavedTips")).length + 1,"name":percentNameInput.value,"cashInput":percentBillInput.value,"cashTip":percentNumberInput.value,"type":"percent","total":formatter.format(Number(percentBillInput.value) + (Number(percentBillInput.value) * Number(percentNumberInput.value)/100))}
    if (!localStorage.getItem("SavedTips") || JSON.parse(localStorage.getItem("SavedTips")).length === 0 ){ 
        localStorage.setItem("SavedTips",JSON.stringify([]))
    }
    localStorage.setItem("SavedTips",JSON.stringify([...JSON.parse(localStorage.getItem("SavedTips")),objTip]))
    newTip(objTip)
}

let saveEdit = tip => {
    console.log(tip)
    let element = document.querySelector(`[data-id="${tip.id}"]`)
    console.log(element.childNodes)

    element.childNodes[6].textContent = tip.type === "cash" ? formatter.format(Number(element.childNodes[1].value) + Number(element.childNodes[3].value)) : formatter.format(Number(element.childNodes[1].value) + (Number(element.childNodes[1].value) * Number(element.childNodes[3].value)/100))
    let data = JSON.parse(localStorage.getItem("SavedTips")).map(item => {
        if (Number(item.id) === Number(tip.id)){
            return {
                ...item,
            cashInput:element.childNodes[1].value,
            cashTip:element.childNodes[3].value,
            total: tip.type === "cash" ? formatter.format(Number(element.childNodes[1].value) + Number(element.childNodes[3].value)) : formatter.format(Number(element.childNodes[1].value) + (Number(element.childNodes[1].value) * Number(element.childNodes[3].value)/100))
            }
        }
        return item
    })
    
    localStorage.setItem("SavedTips",JSON.stringify(data))
}
let deleteTip = tip => {
    console.log(tip)
    let element = document.querySelector(`[data-id="${tip.id}"]`)
    element.remove()
    let data = JSON.parse(localStorage.getItem("SavedTips")).filter(item => Number(item.id) !== Number(tip.id))
    localStorage.setItem("SavedTips",JSON.stringify(data))
}






