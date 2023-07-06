// console.log(computerMove);

let score = JSON.parse(localStorage.getItem('score')) ||  {
    wins: 0,
    losses: 0,
    ties: 0
    }; 

// if (score===null){
//     score = {
//         wins: 0,
//         losses: 0,
//         ties: 0
//     };    
// } //or
 
// if (!score){

// }

updateScoreElement();




function playGame(playerMove){
    const computerMove = pickComputerMove();
   
    let result = '';

    if (playerMove === 'Rock'){
        if (computerMove === 'Rock'){
            result = 'Tie';
        }
        else if(computerMove === 'Paper'){
            result = 'You Lose';
        }
        else if(computerMove === 'Scissors'){
            result = 'You Win';
        }
    }

    else if (playerMove === 'Paper'){

        if (computerMove === 'Rock'){
            result = 'You Win';
        }
        else if(computerMove === 'Paper'){
            result = 'Tie';
        }
        else if(computerMove === 'Scissors'){
            result = 'You Lose';
        }
    
    }


    else{
        if (computerMove === 'Rock'){
            result = 'You Lose';
        }
        else if(computerMove === 'Paper'){
            result = 'You Win';
        }
        else if(computerMove === 'Scissors'){
            result = 'Tie';
        }

    }


    // code to updating the score.
    if(result === 'You Win'){
        score.wins += 1;
    }
    else if(result === 'You Lose'){
        score.losses +=1;
    }
    else if(result === 'Tie'){
        score.ties +=1;
    }



    // localstorage
    localStorage.setItem('score',JSON.stringify(score));

    //Dom manipulation 
    updateScoreElement();

    document.querySelector('.js-result')
        .innerHTML = result;

    document.querySelector('.js-moves')
        .innerHTML = `You <img src="img/${playerMove}-emoji.png" class="img-btn" alt="">
        <img src="img/${computerMove}-emoji.png" class="img-btn" alt="">Computer` ;




}


function updateScoreElement(){
    
    document.querySelector('.js-score')
        .innerHTML=`Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

}


function pickComputerMove(){
    const randomNumber = Math.random();
    
    let computerMove = '';

    if (randomNumber >=0 && randomNumber<1/3){
         computerMove = 'Rock';
    }
    else if(randomNumber>=1/3 && randomNumber<2/3) {
         computerMove ='Paper';

    }
    else if(randomNumber>=2/3 && randomNumber<1){
         computerMove ='Scissors';
    }
    return computerMove;

}


// Reseting the score

function resetScore() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    updateScoreElement();
}