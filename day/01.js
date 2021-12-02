
function day01(input) {
  let previous = null
  let increased = 0

  for(const element of input) {

    if(previous === null) {
      previous = element
      continue
    }

    if(element > previous) {
      increased = increased+1
    }

    previous = element
  }

  return increased
}

module.exports = day01
