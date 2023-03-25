const pipe = document.querySelector('.pipe');
const mario = document.querySelector('.mario');

const jump = ()=>{
  mario.classList.add('jump');
  setTimeout(()=>{
    mario.classList.remove('jump');
  },500);
}
const loop = setInterval(()=>{
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px' , '');
  
  if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 110){
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;
    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`
    mario.src = './imagens/game-over.png';
    mario.style.height = '80px'
    mario.style.marginLeft = '50px'

    setTimeout(() => {
      window.location.reload(true);
    }, 1000)

  
    clearInterval(loop);
  }else{
   
  }
},10)



    window.document.addEventListener('click' , jump);
    window.document.addEventListener('keydown' , jump);
