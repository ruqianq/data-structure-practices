const versionList = ['12.0.1', '12.12.1', '13.0.1', '10.0.1', '9.9.10', '8.12.10'];

function normalize(versionNum) {
  let versionNumArr = versionNum.split('.')
  let result = []
  for (let i of versionNumArr) {
    if (i.length < 2) {
      i = '0' + i
    }
    result.push(i)
  }

  return parseInt(result.join("")) + 1000000
}

function denormalize(versionNum) {

}
