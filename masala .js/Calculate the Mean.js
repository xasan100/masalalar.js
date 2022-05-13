function mean(arr) {
  return +(arr.reduce((a, b) => a + b) / arr.length).toFixed(2);
}
