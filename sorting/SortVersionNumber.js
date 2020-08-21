const versionList = ['12.0.1', '12.12.1', '13.0.1', '10.0.1', '9.9.10', '8.12.10'];

const testArr1 = ['9.9.10', '8.12.10']
const testArr2 = ['13.0.1', '10.0.1']

function merge(arr1, arr2) {
    let result =[]
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        let valArr1 = arr1[i].split('.')
        let valArr2 = arr2[j].split('.')
        
        if (parseInt(valArr1[0]) > parseInt(valArr2[0])) {
            result.push(arr1[i])
            i++
        } else if (valArr1[0] === valArr2[0] && parseInt(valArr1[1]) > parseInt(valArr2[1])){
            result.push(arr1[i])
            i++
        } else if (valArr1[0] === valArr2[0] && valArr1[1] === valArr2[1]  && parseInt(valArr1[2]) > parseInt(valArr2[2])){
            result.push(arr1[i])
            i++
        } else if (valArr1[0] === valArr2[0] && valArr2[1] > valArr1[1]){
            result.push(arr2[j])
            j++
        } else if (valArr1[0] === valArr2[0] && valArr1[1] === valArr2[1]  && parseInt(valArr2[2]) > parseInt(valArr1[2])){
            result.push(arr2[j])
            j++
    } else {
        result.push(arr2[j])
            j++
    }
}
while (i < arr1.length) {
    result.push(arr1[i])
    i++
}
while (j < arr2.length) {
    result.push(arr2[j])
    j++
}
return result
}

function mergeSort(arr) {
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
}
