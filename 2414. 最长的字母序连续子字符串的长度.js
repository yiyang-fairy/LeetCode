const longestContinuousSubstring = (s) => {
  const origin = "abcdefghijklmnopqrstuvwxyz"

  if (origin.includes(s)) {
    return s.length
  }

  let l = 0
  let r = 1
  let max = 0

  while (r < s.length ) {
    const current = s.substring(l, r + 1)
    if (origin.includes(current)) {
      r++
    }
    else if(l == r){
      r++
    }
    else {
      l++
      max = Math.max(max, current.length)
    }

  }
}