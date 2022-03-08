export function getRandomIntInclusive(min = 0, max = 9) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //최댓값도 포함, 최솟값도 포함
}

export function getTestRandomArray(min = 0, max = 9, length = 10) {
  const randomSet = new Set();
  while (randomSet.size < length) {
    randomSet.add(getRandomIntInclusive(min, max));
  }
  return Array.from(randomSet);
}
