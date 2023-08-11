const player1 ={
    score : 0,
    button : document.querySelector('#btn1'),
    display :document.querySelector('#p1')
}
const player2 ={
    score : 0,
    button : document.querySelector('#btn2'),
    display :document.querySelector('#p2')
}

const reset = document.querySelector('#btn3')
const nums = document.querySelector('#nums')

let winningScore = 5
let isGameOver = false

function updateScore(player,opponent){
    if(!isGameOver){
        player.score++;
        
     if(player.score === winningScore){
        isGameOver = true
        player.display.classList.add('has-text-success')
        opponent.display.classList.add('has-text-danger')
        opponent.button.disabled = true;
        player.button.disabled = true;
    }
    player.display.textContent =player.score
}
}

btn1.addEventListener('click', function (evt){
    evt.preventDefault()
    updateScore(player1,player2)
})

btn2.addEventListener('click', function (evt){
    evt.preventDefault()
    updateScore(player2,player1)
})

nums.addEventListener('change', function (){
  winningScore = parseInt(this.value)
    resetter();
})
 
reset.addEventListener('click', resetter)

function resetter(){
    isGameOver= false
    for(let p of [player1,player2]){
        p.score = 0,
        p.display.textContent = 0,
        p.display.classList.remove('has-text-success','has-text-danger'),
        p.button.disabled = false;
    }
}














































// const btn1 = document.querySelector('#btn1')
// const h1 = document.querySelector('h1')
// let p1Score = 0;
// let p2Score = 0;
// const num = document.querySelector('#nums')
// num.addEventListener('change',function(e){
//     e.preventDefault()
//     let select = num.value 
    
   
// })

// btn1.addEventListener('click',function(evt){
//     evt.preventDefault()
//     p1Score ++
//     const p1 = document.querySelector('#p1')
//     // console.log(p1.value);
//     p1.textContent = p1Score
   
    
// })

// const btn2 = document.querySelector('#btn2')
// btn2.addEventListener('click',function(e){
//     e.preventDefault()
//     p2Score ++
//     const p2 = document.querySelector('#p2')
//     p2.textContent = p2Score
// })


