
//------------- utilities Function ----------

function getValueFromInputFeild(inputId) {
    const input = document.getElementById(inputId);
    const inputString = input.value;
     parAmount.value = "";
       const inputValue = parseInt(inputString);
    return inputValue;
}


// calculate

//par player calculate
document.getElementById("calculate-btn").addEventListener("click", function () {
    const playerAmount = getValueFromInputFeild("player-amount");
    const playerExpenses = document.getElementById("player-expense");
    playerExpenses.innerText = playerAmount * 5;    
})
//total calculate
document.getElementById("total-button").addEventListener("click", function () {    
    const managerAmount = getValueFromInputFeild("manager-amount");
    const coachAmount = getValueFromInputFeild("coach-amount");
const managerAndCoachExpense = managerAmount + coachAmount;
    const playerExpenses = document.getElementById("player-expense");    
    const playerExpensesValue = parseInt(playerExpenses.innerText);
const totalExpensesText = document.getElementById("total-expense");    
totalExpensesText.innerText = playerExpensesValue + managerAndCoachExpense;
})


    

