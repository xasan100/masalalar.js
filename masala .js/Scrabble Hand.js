function maximumScore(tileHand) {
  return tileHand.reduce((a, b) => a + b.score, 0);
}
