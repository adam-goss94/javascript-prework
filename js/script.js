


const game = () => {
    let gamePlaying, playerScore, computerScore, roundsLeft;
    const resultMsg = document.getElementById('result-message');    
    const roundsMsg = document.getElementById('rounds-left');  
    const images = document.querySelectorAll('img');    
    const resultsHolder = document.querySelector('.results-holder');

    const choices = () =>{
        const playerChoice = document.querySelectorAll('.btn-choice');

        playerChoice.forEach(function(choice) {
            choice.addEventListener('click', function(){
                const rNumber = Math.floor(Math.random()*3);
                const computerChoices = ['Rock', 'Paper', 'Scissors'];
                const computerMove = computerChoices[rNumber];
                const playerMove = this.textContent;                

                if(gamePlaying){
                    if(roundsLeft > 0){

                        roundsLeft--;
                        roundsMsg.textContent = roundsLeft;
                        images[0].src = 'images/' + this.textContent + '.png';
                        images[1].src = 'images/' + computerMove + '.png';

                        compare(computerMove, playerMove);
                        resultsHolder.insertAdjacentHTML('beforeend', '<tr><td>'+playerMove+'</td><td>'+computerMove+'</td><td>'+resultMsg.textContent+'</td></tr>');
                    }
                    
                    if(roundsLeft === 0){
                        gamePlaying = false;
                        if(playerScore > computerScore){
                            resultMsg.textContent = 'you won the game!';
                            return;
                        }else if(computerScore > playerScore){
                            resultMsg.textContent = 'you lost the game!';
                            return;
                        }else{
                            resultMsg.textContent = 'the game ended in a draw!'
                        }
                    }
                }
            });
        });
    }

    const startGame = () =>{
        const startBtn = document.getElementById('new-game');

        startBtn.addEventListener('click', function(){
            const errorMsg = document.getElementById('error-message');
                     

            if(document.getElementById('rounds-number').checkValidity()){
                const rounds = document.querySelector('input');                

                resultsHolder.innerHTML = '';
                errorMsg.style.display = 'none';
                playerScore = 0;
                computerScore = 0;
                upScore();                
                gamePlaying = true;
                roundsLeft = rounds.value;
                roundsMsg.textContent = roundsLeft;
                resultMsg.textContent = "";

                for(let image of images){
                    image.src = 'images/blank.png';
                };

            }else{
                errorMsg.style.display = 'inline-block';
            }
        });

        choices();
    }

    startGame();
   
    const upScore = () =>{
        const pScore = document.getElementById('player-score');
        const cScore = document.getElementById('computer-score');

        pScore.textContent = playerScore;
        cScore.textContent = computerScore;
    }

    const compare = (computerMove, playerMove) =>{
    
        if(computerMove === playerMove){
            resultMsg.textContent = 'Draw';
            return;
        }

        if(playerMove === 'Rock'){
            if(computerMove === 'Paper'){
                resultMsg.textContent = 'you lost this round :(';
                computerScore++;
                upScore();
                return;
            }else{
                resultMsg.textContent = 'you won this round!';
                playerScore++;
                upScore();
                return;
            }
        }

        if(playerMove === 'Paper'){
            if(computerMove === 'Scissors'){
                resultMsg.textContent = 'you lost this round :(';
                computerScore++;
                upScore();
                return;
            }else{
                resultMsg.textContent = 'you won this round!';
                playerScore++;
                upScore();
                return;
            }
        }

        if(playerMove === 'Scissors'){
            if(computerMove === 'Rock'){
                resultMsg.textContent = 'you lost this round :(';
                computerScore++;
                upScore();
                return;
            }else{
                resultMsg.textContent = 'you won this round!';
                playerScore++;
                upScore();
                return;
            }
        }
    }   
}


game();