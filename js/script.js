
game();

function game(){
    let gamePlaying, playerScore, computerScore, roundsLeft;
    const resultMsg = document.getElementById('result-message');    
    const roundsMsg = document.getElementById('rounds-left');  
    const images = document.querySelectorAll('img');

    startGame();

    function startGame(){
        const startBtn = document.getElementById('new-game');

        startBtn.addEventListener('click', function(){
            const errorMsg = document.getElementById('error-message');
                     

            if(document.getElementById('rounds-number').checkValidity()){
                const rounds = document.querySelector('input');      

                errorMsg.style.display = 'none';
                playerScore = 0;
                computerScore = 0;
                upScore();                
                gamePlaying = true;
                roundsLeft = rounds.value;
                roundsMsg.textContent = roundsLeft;
                resultMsg.textContent = "";

                for(let image of images){
                    image.src = '/images/blank.png';
                };

            }else{
                errorMsg.style.display = 'inline-block';
            }
        });

        
    }    
}
