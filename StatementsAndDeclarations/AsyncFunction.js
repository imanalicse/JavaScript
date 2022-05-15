/**
An async function is a function declared with the async keyword, and the await keyword is permitted within it.
The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style,
avoiding the need to explicitly configure promise chains.

Syntax:
async function name([param[, param[, ...param]]]) {
   statements
}
Return value:
A Promise which will be resolved with the value returned by the async function,
or rejected with an exception thrown from, or uncaught within, the async function.
*/

function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`Making request to ${location}`);
        if (location === 'Google') {
            resolve('Google says hi')
        }
        else {
            reject('We can only talk to Google')
        }
    })
}

function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log("Processing response");
        resolve(`Extra information: ${response}`)
    })
}

// makeRequest("Google").then(response => {
//     console.log('Response has been received')
//     return processRequest(response)
// }).then(processResponse => {
//     console.log(processResponse)
// }).catch(err => {
//     console.log(err)
// });

async function doRequest() {
    try {
        const response = await makeRequest('Google')
        console.log('Response has been received')
        const processResponse = await processRequest(response);
        console.log(processResponse)
    } catch (err) {
        console.log(err)
    }
}

doRequest();