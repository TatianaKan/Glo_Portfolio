const timerBlock = document.querySelector('.timer__time');

const updateClock = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const fhours = hours < 10 ? '0' + hours : hours;
  const fminutes = minutes < 10 ? '0' + minutes : minutes;
  const fseconds = seconds < 10 ? '0' + seconds : seconds;

  timerBlock.textContent = `${fhours}:${fminutes}:${fseconds}`;
};

updateClock();

setInterval(updateClock, 500);

