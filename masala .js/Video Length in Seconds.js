function minutesToSeconds(time) {
  let [minutes, seconds] = time.split(':');
  return +seconds < 60 && minutes * 60 + +seconds;
}
