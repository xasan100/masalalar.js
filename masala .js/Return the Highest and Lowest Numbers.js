function highLow(str) {
  str = str.split(' ');
  return Math.max(...str) + ' ' + Math.min(...str);
}
