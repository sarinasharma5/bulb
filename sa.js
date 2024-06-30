let choices = document.querySelectorAll('.choice');
console.log(choices);
let playervalue= document.getElementById('player');
let computervalue =document.getElementById('computer');
let Result=document.getElementById('result');

let a=1;
let b=1;

for (let i=0; i < choices.length;i++){
    choices [i] .addEventListener('click',function(){
        let userchoice = choices[i].id;
        let computerselectedvalue = getcomputerchoices();
        console.log(`${userchoice} ${computerselectedvalue}`);
        if (userchoice == computerselectedvalue){
            console.log("Draw");
        }
     else{
        if(userchoice =='rock' && computerselectedvalue =='paper')
        {
          console.log('you lose');
          computervalue.textContent=b++;
          
        }
        else if(userchoice =='rock' && computerselectedvalue =='scissor')
        {
            console.log('you won');
            playervalue.textContent=a++;
        }
         if(userchoice =='paper' && computerselectedvalue =='rock')
            {
                console.log('you won');
                playervalue.textContent=a++;
            }
        else if(userchoice == 'paper' && computerselectedvalue =='scissors')
            {
                console.log('you lose');
                computervalue.textContent=b++;
            }
        if(userchoice == 'scissors' && computerselectedvalue =='rock')
            {
            console.log('you lose');
            computervalue.textContent=b++;
            }
        else if(userchoice == 'scissors' && computerselectedvalue =='paper')
            {
             console.log('you won');
             playervalue.textContent=a++;
            }
     }
    });

}

function getcomputerchoices() {
    let computerchoices = ['rock','paper','scissors'];
    let selectedindex = parseInt(Math.random()*3);
    return computerchoices[selectedindex];
}