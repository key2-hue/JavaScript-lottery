{
  const lottery = document.getElementById('lottery');
  let flag = 0;
  lottery.addEventListener('click', ()=> {
    if(flag === 1) {
      return;
    }
    flag = 1;
    const result = Math.random();
    const resultLottery = document.getElementById('result');
    if(result < 0.20) {
      resultLottery.innerHTML = '<p>Lucky!</p>';
    } else if(result < 0.70) {
      resultLottery.innerHTML = '<p>Soso</p>';
    } else {
      resultLottery.innerHTML = '<p>Bad...</p>';
    }
    
    resultLottery.classList.remove('inactive');
    resultLottery.classList.add('active');

  });

  document.getElementById('retry').addEventListener('click', ()=> {
    flag = 0;
    const resultLottery = document.getElementById('result');
    resultLottery.classList.remove('active');
    resultLottery.classList.add('inactive');
    resultLottery.innerHTML = "";
  });
}