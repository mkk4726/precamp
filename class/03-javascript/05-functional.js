let sending = () => {
  const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
  // const color = Math.floor(Math.random()*16777215).toString(16);

  document.getElementById('number').textContent = token;
  document.getElementById('number').style.color = '#' + token;

  let time = 3 * 60;
  function get_time(time) {
    let minute = Math.floor(time / 60);
    let second = time % 60;
    return [minute, second]
  }
  

  clearInterval(() => {
    time = time - 1;
    let times = get_time(time);
    let minute = times[0];
    let second = times[1];
    let timer = minute + ':' + second.padStart(2, '0')
    document.getElementById('timer').textContent = timer;
  }, 1000)

}