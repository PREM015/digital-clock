setInterval(() => {
  // get time indicator elements
  let hours = document.getElementById('hours');
  let minutes = document.getElementById('minutes');
  let seconds = document.getElementById('seconds');

  // dot time indicator
  let dotH = document.querySelector('.h_dot');
  let dotM = document.querySelector('.m_dot');
  let dotS = document.querySelector('.s_dot');

  // get current time
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ap = h >= 12 ? 'PM' : 'AM';

  // convert to 12 hour format
  if (h > 12) {
    h = h - 12;
  }

  // add 0 before single digit
  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;

  // set time and label
  hours.innerHTML = h + ' hrs';
  minutes.innerHTML = m + ' min';
  seconds.innerHTML = s + ' sec';

  // set dot time position indicator
  dotH.style.transform = `rotate(${h * 30}deg)`;  // Hours in 12-hour format (30 degrees per hour)
  dotM.style.transform = `rotate(${m * 6}deg)`;   // Minutes in 60-minute format (6 degrees per minute)
  dotS.style.transform = `rotate(${s * 6}deg)`;   // Seconds in 60-second format (6 degrees per second)
}, 1000);
