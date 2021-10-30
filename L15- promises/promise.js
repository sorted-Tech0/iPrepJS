function placeOrder(drink){
    return new Promise((resolve, reject) => {
        if(drink === 'coffee'){
            resolve('Order Placed!')
        } else {
            reject("Sorry for your loss. We won't served order for tea")
        }
    })
}

function processOrder(order) {
    return new Promise((resolve) => {
        console.log("Order is being processed.");
        resolve(`coffee served for the ${order}`)
    })
}

// Senerio solved with Promises
// placeOrder('tea').then( (orderFromCustomer) => {
//     console.log('Request recevied');
//     let orderIsProcessed = processOrder(orderFromCustomer);
//     return orderIsProcessed;
// }).then( (orderIsProcessed) => {
//     console.log(orderIsProcessed);
// }).catch( (err) => {
//     console.log(err);
// })



// It will be hactic for us, if we have tons of data, so to avoid such issues we have async-await concept

// Async-await: lets do the same we have done with promise
// for error-handling in async-await we put our code in try-catch block
async function serveOrder() {
    try {
        let orderPlaced = await placeOrder('tea');
        console.log(orderPlaced);
        let orderProcessed = await processOrder(orderPlaced);
        console.log(orderProcessed);
        
    } catch (error) {
        console.log(error);
    }
}

serveOrder()


 
