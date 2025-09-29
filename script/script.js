/*let initialState = 1

while(initialState < 9){
document.writeln(initialState, ") Play again<br>")
initialState ++
}          */

/*function computeThis() {
    let playRound = document.getElementById('playRound')
    let displayArea = document.getElementById('displayArea')
    let playRoundInt = parseInt(playRound.value) + 1

    let inState = 1

    

    while(inState < playRoundInt){
        displayArea.innerHTML += inState + ') Play Again <br>' 
         inState++
    }
}
*/


function checkAns1A(){
    document.getElementById('q1A').style.color = "red"
    document.getElementById('evaluate').innerHTML = "<b style='color:red;'> You are Wrong! </b>"
    document.getElementById('q1C').style.color = "black"
    document.getElementById('q1D').style.color = "black"
    document.getElementById('q1B').style.color = "black"
}

function checkAns1B(){
    document.getElementById('q1B').style.color = "green"
    document.getElementById('evaluate').innerHTML = "<b style='color:green;'> You are Correct! </b>"
    document.getElementById('q1C').style.color = "black"
    document.getElementById('q1D').style.color = "black"
    document.getElementById('q1A').style.color = "black"
}

function checkAns1C(){
    document.getElementById('q1C').style.color = "red"
    document.getElementById('evaluate').innerHTML = "<b style='color:red;'> You are Wrong! </b>"
    document.getElementById('q1A').style.color = "black"
    document.getElementById('q1D').style.color = "black"
    document.getElementById('q1B').style.color = "black"
}

function checkAns1D(){
    document.getElementById('q1D').style.color = "red"
    document.getElementById('evaluate').innerHTML = "<b style='color:red;'> You are Wrong! </b>"
    document.getElementById('q1C').style.color = "black"
    document.getElementById('q1A').style.color = "black"
    document.getElementById('q1B').style.color = "black"
}




function checkAns2A(){
    document.getElementById('q2A').style.color = "red"
    document.getElementById('evaluate1').innerHTML = "<b style='color:red;'> You are Wrong! </b>"
    document.getElementById('q2B').style.color = "black"
    document.getElementById('q2C').style.color = "black"
    document.getElementById('q2D').style.color = "black"
}

function checkAns2B(){
    document.getElementById('q2B').style.color = "red"
    document.getElementById('evaluate1').innerHTML = "<b style='color:red;'> You are Wrong! </b>"
    document.getElementById('q2A').style.color = "black"
    document.getElementById('q2C').style.color = "black"
    document.getElementById('q2D').style.color = "black"
}

function checkAns2C(){
    document.getElementById('q2C').style.color = "red"
    document.getElementById('evaluate1').innerHTML = "<b style='color:red;'> You are Wrong! </b>"
    document.getElementById('q2A').style.color = "black"
    document.getElementById('q2B').style.color = "black"
    document.getElementById('q2D').style.color = "black"
}

function checkAns2D(){
    document.getElementById('q2D').style.color = "green"
    document.getElementById('evaluate1').innerHTML = "<b style='color:green;'> You are Correct! </b>"
    document.getElementById('q2A').style.color = "black"
    document.getElementById('q2B').style.color = "black"
    document.getElementById('q2C').style.color = "black"
}



function checkAns3A(){
    document.getElementById('q3A').style.color = "green"
    document.getElementById('evaluate2').innerHTML = "<b style='color:green;'> You are Correct! </b>"
    document.getElementById('q3B').style.color = "black"

}

function checkAns3B(){
    document.getElementById('q3B').style.color = "red"
    document.getElementById('evaluate2').innerHTML = "<b style='color:red;'> You are Wrong! </b>"
    document.getElementById('q3A').style.color = "black"

}



function checkAns4A(){
    document.getElementById('q4A').style.color = "red"
    document.getElementById('evaluate3').innerHTML = "<b style='color:red;'> You are Wrong! </b>"
    document.getElementById('q4B').style.color = "black"
    document.getElementById('q4C').style.color = "black"
    document.getElementById('q4D').style.color = "black"
}

function checkAns4B(){
    document.getElementById('q4B').style.color = "red"
    document.getElementById('evaluate3').innerHTML = "<b style='color:red;'> You are Wrong! </b>"
    document.getElementById('q4A').style.color = "black"
    document.getElementById('q4C').style.color = "black"
    document.getElementById('q4D').style.color = "black"
}

function checkAns4C(){
    document.getElementById('q4C').style.color = "green"
    document.getElementById('evaluate3').innerHTML = "<b style='color:green;'> You are Correct! </b>"
    document.getElementById('q4A').style.color = "black"
    document.getElementById('q4B').style.color = "black"
    document.getElementById('q4D').style.color = "black"
}

function checkAns4D(){
    document.getElementById('q4D').style.color = "red"
    document.getElementById('evaluate3').innerHTML = "<b style='color:red;'> You are Wrong! </b>"
    document.getElementById('q4A').style.color = "black"
    document.getElementById('q4B').style.color = "black"
    document.getElementById('q4C').style.color = "black"
}





function checkAns5A(){
    document.getElementById('q5A').style.color = "green"
    document.getElementById('evaluate4').innerHTML = "<b style='color:green;'> You are Correct! </b>"
    document.getElementById('q5B').style.color = "black"
 
}

function checkAns5B(){
    document.getElementById('q5B').style.color = "red"
    document.getElementById('evaluate4').innerHTML = "<b style='color:red;'> You are Wrong! </b>"
    document.getElementById('q5A').style.color = "black"
  
}




function checkAns6A(){
    document.getElementById('q6A').style.color = "red"
    document.getElementById('evaluate5').innerHTML = "<b style='color:red;'> You are Wrong! </b>"
    document.getElementById('q6B').style.color = "black"
    document.getElementById('q6C').style.color = "black"
    document.getElementById('q6D').style.color = "black"
}
function checkAns6B(){
    document.getElementById('q6B').style.color = "green"
    document.getElementById('evaluate5').innerHTML = "<b style='color:green;'> You are Correct! </b>"
    document.getElementById('q6A').style.color = "black"
    document.getElementById('q6C').style.color = "black"
    document.getElementById('q6D').style.color = "black"
}
function checkAns6C(){
    document.getElementById('q6C').style.color = "red"
    document.getElementById('evaluate5').innerHTML = "<b style='color:red;'> You are Wrong! </b>"
    document.getElementById('q6A').style.color = "black"
    document.getElementById('q6B').style.color = "black"
    document.getElementById('q6D').style.color = "black"
}
function checkAns6D(){
    document.getElementById('q6D').style.color = "red"
    document.getElementById('evaluate5').innerHTML = "<b style='color:red;'> You are Wrong! </b>"
    document.getElementById('q6A').style.color = "black"
    document.getElementById('q6B').style.color = "black"
    document.getElementById('q6C').style.color = "black"
}



function checkAns7A(){
    document.getElementById('q7A').style.color = "red"
    document.getElementById('evaluate6').innerHTML = "<b style='color:red;'> You are Wrong! </b>"
    document.getElementById('q7B').style.color = "black"
    document.getElementById('q7C').style.color = "black"
    document.getElementById('q7D').style.color = "black"
}
function checkAns7B(){
    document.getElementById('q7B').style.color = "red"
    document.getElementById('evaluate6').innerHTML = "<b style='color:red;'> You are Wrong! </b>"
    document.getElementById('q7A').style.color = "black"
    document.getElementById('q7B').style.color = "black"
    document.getElementById('q7D').style.color = "black"
}
function checkAns7C(){
    document.getElementById('q7C').style.color = "green"
    document.getElementById('evaluate6').innerHTML = "<b style='color:green;'> You are Correct! </b>"
    document.getElementById('q7A').style.color = "black"
    document.getElementById('q7B').style.color = "black"
    document.getElementById('q7D').style.color = "black"
}
function checkAns7D(){
    document.getElementById('q7D').style.color = "red"
    document.getElementById('evaluate6').innerHTML = "<b style='color:red;'> You are Wrong! </b>"
    document.getElementById('q7A').style.color = "black"
    document.getElementById('q7B').style.color = "black"
    document.getElementById('q7C').style.color = "black"
}



function checkAns8A(){
    document.getElementById('q8A').style.color = "red"
    document.getElementById('evaluate7').innerHTML = "<b style='color:red;'> You are Wrong! </b>"
    document.getElementById('q8B').style.color = "black"
    document.getElementById('q8C').style.color = "black"
    document.getElementById('q8D').style.color = "black"
}
function checkAns8B(){
    document.getElementById('q8B').style.color = "green"
    document.getElementById('evaluate7').innerHTML = "<b style='color:green;'> You are Correct! </b>"
    document.getElementById('q8A').style.color = "black"
    document.getElementById('q8C').style.color = "black"
    document.getElementById('q8D').style.color = "black"
}
function checkAns8C(){
    document.getElementById('q8C').style.color = "red"
    document.getElementById('evaluate7').innerHTML = "<b style='color:red;'> You are Wrong! </b>"
    document.getElementById('q8A').style.color = "black"
    document.getElementById('q8B').style.color = "black"
    document.getElementById('q8D').style.color = "black"
}
function checkAns8D(){
    document.getElementById('q8D').style.color = "red"
    document.getElementById('evaluate7').innerHTML = "<b style='color:red;'> You are Wrong! </b>"
    document.getElementById('q8A').style.color = "black"
    document.getElementById('q8B').style.color = "black"
    document.getElementById('q8C').style.color = "black"
}



function checkAns9A(){
    document.getElementById('q9A').style.color = "green"
    document.getElementById('evaluate8').innerHTML = "<b style='color:green;'> You are Correct! </b>"
    document.getElementById('q9B').style.color = "black"
    document.getElementById('q9C').style.color = "black"
    document.getElementById('q9D').style.color = "black"
}
function checkAns9B(){
    document.getElementById('q9B').style.color = "red"
    document.getElementById('evaluate8').innerHTML = "<b style='color:red;'> You are Wrong! </b>"
    document.getElementById('q9A').style.color = "black"
    document.getElementById('q9C').style.color = "black"
    document.getElementById('q9D').style.color = "black"
}
function checkAns9C(){
    document.getElementById('q9C').style.color = "red"
    document.getElementById('evaluate8').innerHTML = "<b style='color:red;'> You are Wrong! </b>"
    document.getElementById('q9B').style.color = "black"
    document.getElementById('q9A').style.color = "black"
    document.getElementById('q9D').style.color = "black"
}
function checkAns9D(){
    document.getElementById('q9D').style.color = "red"
    document.getElementById('evaluate8').innerHTML = "<b style='color:red;'> You are Wrong! </b>"
    document.getElementById('q9B').style.color = "black"
    document.getElementById('q9C').style.color = "black"
    document.getElementById('q9A').style.color = "black"
}




function checkAns10A(){
    document.getElementById('q10A').style.color = "red"
    document.getElementById('evaluate9').innerHTML = "<b style='color:red;'> You are Wrong! </b>"
    document.getElementById('q10B').style.color = "black"
    document.getElementById('q10C').style.color = "black"
    document.getElementById('q10D').style.color = "black"
}
function checkAns10B(){
    document.getElementById('q10B').style.color = "red"
    document.getElementById('evaluate9').innerHTML = "<b style='color:red;'> You are Wrong! </b>"
    document.getElementById('q10A').style.color = "black"
    document.getElementById('q10C').style.color = "black"
    document.getElementById('q10D').style.color = "black"
}
function checkAns10C(){
    document.getElementById('q10C').style.color = "red"
    document.getElementById('evaluate9').innerHTML = "<b style='color:red;'> You are Wrong! </b>"
    document.getElementById('q10A').style.color = "black"
    document.getElementById('q10B').style.color = "black"
    document.getElementById('q10D').style.color = "black"
}
function checkAns10D(){
    document.getElementById('q10D').style.color = "green"
    document.getElementById('evaluate9').innerHTML = "<b style='color:green;'> You are Correct! </b>"
    document.getElementById('q10A').style.color = "black"
    document.getElementById('q10B').style.color = "black"
    document.getElementById('q10C').style.color = "black"
}








