const container = document.querySelector('.container')
const btnPlay = document.getElementById('play-btn')

const boxNumbers = [100];
let bombs = [];
const qtyBombs = 16;

btnPlay.addEventListener('click', init);


// functions////

function init(){
  reset();
  for(let i = 1; i <= 100; i++){
    const box = getBox(i);
    container.append(box);
  }
  bombs = generateBombs();
  console.log(bombs);
}



function generateBombs(){

const generatedBombs = [];
while(generatedBombs.length < qtyBombs){
  const bombId = Math.ceil(Math.random() * boxNumbers);
  if (!generatedBombs.includes(bombId)){
    generatedBombs.push(bombId)
  }
}
return generatedBombs;
}


function getBox(i){
  const box = document.createElement('div');
  box.className = 'box';
  box._boxId = i;

  box.addEventListener('click', function(){
  console.log(this._boxId);
  this.classList.add('clicked')  

  })

  return box;
}

function reset(){
  container.innerHTML = '';
}