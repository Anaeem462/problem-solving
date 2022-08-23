//------------- utilities Function ----------

function getValueFromInputFeild(inputId) {
    const input = document.getElementById(inputId);
    let inputString = input.value;
    if (typeof (inputString) == "undefined") {
        inputString = input.innerText;
    }
    else {
        input.value = "";
    }
    
       const inputValue = parseInt(inputString);
    return inputValue;
}

// player selected
 const selectButtons = document.getElementsByClassName('selected-button')
let i = 0;

    for (const selectButton of selectButtons) {
      selectButton.addEventListener("click", function () {
        const parents = selectButton.parentNode
        const child = parents.childNodes[1];          
       const listItems = document.getElementById("player-list");
        
          const listText = listItems.children[i];
          i = i + 1;
          if (i <=5) {
              listText.innerText = child.innerText;
              selectButton.setAttribute('disabled', '');
              selectButton.style.backgroundColor = "gray";
          }
          else {
              alert("you can't available to Select player");
          }
    })    
}

// calculate

//par player calculate

document.getElementById("calculate-btn").addEventListener("click", function () {
    if (i == 0) {
     alert("You have to select at least One player")
    }
    else if (i < 5) {
        alert("you can select upto five player");
        const playerAmount = getValueFromInputFeild("player-amount");
        const playerExpenses = document.getElementById("player-expenses");        
        playerExpenses.innerText = playerAmount * i;  
    }
    else {
        const playerAmount = getValueFromInputFeild("player-amount");
        const playerExpenses = document.getElementById("player-expenses");        
        playerExpenses.innerText = playerAmount * i;  
    }
    
})
  
//total calculate
document.getElementById("total-button").addEventListener("click", function () {    

    const managerAmount = getValueFromInputFeild("manager-amount");
    const coachAmount = getValueFromInputFeild("coach-amount");

    const managerAndCoachExpense = managerAmount + coachAmount;

    const playerCost = getValueFromInputFeild("player-expenses");
   
    const totalExpensesText = document.getElementById("total-expense");    
    totalExpensesText.innerText = playerCost + managerAndCoachExpense;

})





    

