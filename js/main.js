{
  const lottery = document.getElementById('lottery');

  lottery.addEventListener('click', ()=> {
    const result = Math.random();
    if(result < 0.20) {
      lottery.textContent = "Lucky!";
    } else if(result < 0.70) {
      lottery.textContent = "SoSo";
    } else {
      lottery.textContent = "Bad...";
    }
    const resultLottery = document.getElementById('result');
    resultLottery.classList.remove('inactive');
    resultLottery.classList.add('active');

  });
}