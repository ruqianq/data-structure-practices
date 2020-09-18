async function greeting(n) {
    return await wait(n)
}

function wait(n) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('hello world!')
        }, n*1000)
        })
    }


greeting(4).then((r) => console.log(r))
