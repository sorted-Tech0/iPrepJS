function updateAccount(product, cb) {
    setTimeout(() => {
        console.log(product+" purchased.");
        cb()
        // security issues using callback
    }, 2000);
}

function promiseUpdateAccount(product) {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            console.log(product+" purchased!");
            resolve()
        }, 2000);
    })
}

module.exports = {
    updateAccount : updateAccount,
    promiseUpdateAccount: promiseUpdateAccount
}