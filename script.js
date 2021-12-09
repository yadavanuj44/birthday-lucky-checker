const dob = document.querySelector("#dob");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-btn");
const output = document.querySelector("#output");


function checkNumber(){
    const birthday = dob.value;
    const sum = dobSum(birthday);
    if(sum&&birthday){
        compareValues(sum,luckyNumber.value);
    }else{
        output.innerText = "Please enter in both fields";
    }
    
}


function compareValues(sum,number){
    if(sum%number===0){
        output.innerText = "Your birthday is Lucky";
    }
    else{
        output.innerText = "Your birthday is not Lucky";
    }
}
function dobSum(bdob){
    bdob = bdob.replaceAll("-","");
    let sum = 0;
    for(let i = 0; i < bdob.length; i++){
        sum = sum + parseInt(bdob.charAt(i));
    }
    return sum;
}

checkButton.addEventListener("click", checkNumber)