module.exports = function reverse (n) = {
  let arr = Math.abs(n).toString().split('')
  return arr.reverse().join('')   
}
