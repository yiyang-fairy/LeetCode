function findPoisonedDuration(timeSeries, duration) {
  let res = 0;
  let lastTimeSerieEnd = -Infinity;
  for (const timeSerie of timeSeries) {
    const timeSerieEnd = timeSerie + duration;

    if (timeSerie < lastTimeSerieEnd) {
      res += timeSerieEnd - lastTimeSerieEnd;
    } else {
      res += duration;
    }
    lastTimeSerieEnd = timeSerieEnd;
  }
  return res;
}

const a = [0, 1, 2, 3, 4];
const b = 1;

console.log(findPoisonedDuration(a, b));
