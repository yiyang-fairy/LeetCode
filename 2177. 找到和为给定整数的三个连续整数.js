const sumOfThree = (num) => {
  if (num % 3 !== 0) return []
  const res = num / 3
  return [res - 1, res, res + 1]
}