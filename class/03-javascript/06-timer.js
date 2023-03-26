let sending = () => {
  const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
  // const color = Math.floor(Math.random()*16777215).toString(16);

  document.getElementById('number').textContent = token;
  document.getElementById('number').style.color = '#' + token;

  let time = 3 * 60;
  function get_time(time) {
    let minute = Math.floor(time / 60);
    let second = String(time % 60).padStart(2, '0');
    let timer = minute + ':' + second;
    return timer
  }
  
  setInterval(() => {
    if (time > 0) {
      time = time - 1;
      document.getElementById('timer').textContent = get_time(time);
      } else {
      document.getElementById('complete').disabled = true;
    }}
    , 1000)
    
    

}